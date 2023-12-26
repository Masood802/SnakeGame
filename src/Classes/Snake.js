import { useGameStore } from "@/stores/gamestore.js";
import { Box } from "./Box.js";
export class Snake {
  boxes = [];
  direction = "R";
  constructor() {
    const game = useGameStore();
    const center = Math.floor(game.totalBoxes / 2);
    this.boxes.push(new Box(center, center));
    this.boxes.push(new Box(center, center - 1));
    this.boxes.push(new Box(center, center - 2));
  }
  move() {
    const game = useGameStore();

    let firstBox = this.boxes[0];
    if (
      firstBox.col === game.totalBoxes - 1 ||
      firstBox.col === 0 ||
      firstBox.row === game.totalBoxes - 1 ||
      firstBox.row === 0
    )
      return;
    firstBox.move(this.direction);
    for (let i = 1; i < this.boxes.length; i++) {
      let box = this.boxes[i];
      let previous = this.boxes[i - 1];
      box.follow(previous);
    }
  }
}
