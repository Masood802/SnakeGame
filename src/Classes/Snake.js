import { useGameStore } from "@/stores/gamestore.js";
import { Box } from "./Box.js";
export class Snake {
  boxes = [];
  constructor() {
    const game = useGameStore();
    const center = Math.floor(game.totalBoxes / 2);
    this.boxes.push(new Box(center, center - 2));
    this.boxes.push(new Box(center, center - 1));
    this.boxes.push(new Box(center, center));
  }
  move(direction) {
    const game = useGameStore();
    let lastBox = this.boxes.at(-1);
    let firstBox = this.boxes.at(0);
    if (lastBox.col === game.totalBoxes - 1) return;
    if (firstBox.col === 0) return;
    if (lastBox.row === game.totalBoxes - 1) return;
    if (firstBox.row === 0) return;

    for (let box of this.boxes) {
      box.move(direction, this.head);
    }
    console.log("first", this.firstBox);
  }
}
