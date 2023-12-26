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
  move() {
    const game = useGameStore();
    let lastBox = this.boxes.at(-1);
    if (lastBox.col === game.totalBoxes - 1) return;

    for (let box of this.boxes) {
      box.col++;
    }
  }
}
