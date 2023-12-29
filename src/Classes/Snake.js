import { useGameStore } from "@/stores/gamestore.js";
import { Box } from "./Box.js";
import { SoundHelper } from "@/Helpers/SoundHelper.js";
export class Snake {
  boxes = [];
  direction = "R";
  constructor() {
    const game = useGameStore();
    const center = Math.floor(game.totalBoxes / 2);
    this.boxes.push(new Box(center, center));
    this.boxes.push(new Box(center, center - 1, "red"));
    this.boxes.push(new Box(center, center - 2, "blue"));
    this.boxes.push(new Box(center, center - 3, "yellow"));
  }
  get head() {
    return this.boxes[0];
  }
  get Checkboundaryclash() {
    const game = useGameStore();
    let firstBox = this.boxes[0];
    return (
      (firstBox.col === game.totalBoxes - 1 && game.snake.direction === "R") ||
      (firstBox.col === 0 && game.snake.direction === "L") ||
      (firstBox.row === game.totalBoxes - 1 && game.snake.direction === "D") ||
      (firstBox.row === 0 && game.snake.direction === "U")
    );
  }
  move() {
    const game = useGameStore();

    let head = this.head;
    if (this.Checkboundaryclash) {
      game.gameover = true;
      SoundHelper.play("gameover");
      return;
    }
    head.move(this.direction);

    if (head.row === game.Fooditem.row && head.col === game.Fooditem.col) {
      this.eatFood();
      return;
    }

    this.checksnakeClash();
    this.updatePosition();
    this.isSpecialItemeaton();
  }
  isSpecialItemeaton() {
    let game = useGameStore();
    if (
      this.head.row === game.specialItem.row &&
      this.head.col === game.specialItem.col
    ) {
      switch (game.specialItem.item) {
        case "cheeta":
          game.speed -= 25;
          console.log("speedIncreased", game.speed);
          break;
        case "increase":
          this.boxes.push(new Box());
          console.log("box added");
          break;
        case "decrease":
          this.boxes.pop();
          console.log("box poped");
          break;
        case "+200":
          console.log("score boosted");
          game.score += 200;
          game.CheckHighScore();
          break;
      }
      window.clearInterval(game.sepcialItemTimer);
      game.CreateSpecialItem();
      game.StartSpecialItemTimer();
      return;
    }
  }
  eatFood() {
    const game = useGameStore();
    let newBox = new Box();
    newBox.color = game.Fooditem.color;
    this.boxes.splice(1, 0, newBox);
    game.ChangeGameSpeed(this.boxes.length);
    this.CheckConsectiveBoxes();
    newBox.follow(this.head);
    for (let i = 2; i < this.boxes.length; i++) {
      let box = this.boxes[i];
      box.Gotolastpositon();
    }
    game.score += 50;
    game.CheckHighScore();
    game.CreateFoodItem();
    game.StartFoodTimer();
    SoundHelper.play("Crunch");
  }
  checksnakeClash() {
    let game = useGameStore();
    for (let i = 1; i < this.boxes.length; i++) {
      if (
        this.head.row === this.boxes[i].row &&
        this.head.col === this.boxes[i].col
      ) {
        game.gameover = true;
        SoundHelper.play("gameover");
      }
    }
  }
  updatePosition() {
    for (let i = 1; i < this.boxes.length; i++) {
      let box = this.boxes[i];
      let previous = this.boxes[i - 1];
      box.follow(previous);
    }
  }
  CheckConsectiveBoxes() {
    if (
      this.boxes[1].color === this.boxes[2].color &&
      this.boxes[2].color === this.boxes[3].color
    ) {
      const game = useGameStore();
      game.showConfetti(this.boxes[2]);
      this.boxes.splice(1, 3);
      game.ChangeGameSpeed(this.boxes.length);
      game.score += 100;
      game.CheckHighScore();
      SoundHelper.play("pop");
    }
  }
}
