import { useGameStore } from "@/stores/gamestore.js";
import { Box } from "./Box.js";
import { FoodItem } from "./FoodItem.js";
import { SoundHelper } from "@/Helpers/SoundHelper.js";
export class Snake {
  boxes = [];
  direction = "R";
  constructor() {
    const game = useGameStore();
    const center = Math.floor(game.totalBoxes / 2);
    this.boxes.push(new Box(center, center, "red"));
    this.boxes.push(new Box(center, center - 1, "green"));
    this.boxes.push(new Box(center, center - 2, "green"));
    this.boxes.push(new Box(center, center - 3, "red"));
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
      return;
    }
    head.move(this.direction);
    if (head.row === game.Fooditem.row && head.col === game.Fooditem.col) {
      this.eatFood();
      return;
    }
    this.updatePosition();
  }
  eatFood() {
    const game = useGameStore();
    let newBox = new Box();
    newBox.color = game.Fooditem.color;
    this.boxes.splice(1, 0, newBox);
    SoundHelper.play("Crunch");
    if (
      this.boxes[1].color === this.boxes[2].color &&
      this.boxes[2].color === this.boxes[3].color
    )
      this.CheckConsectiveBoxes();
    newBox.follow(this.head);
    for (let i = 2; i < this.boxes.length; i++) {
      let box = this.boxes[i];
      box.Gotolastpositon();
    }
    game.CreateFoodItem();
  }
  updatePosition() {
    for (let i = 1; i < this.boxes.length; i++) {
      let box = this.boxes[i];
      let previous = this.boxes[i - 1];
      box.follow(previous);
    }
  }
  CheckConsectiveBoxes() {
    this.boxes.splice(1, 3);
  }
}
