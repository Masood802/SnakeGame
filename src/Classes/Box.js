import { useGameStore } from "@/stores/gamestore.js";
export class Box {
  row = 0;
  col = 0;
  lastCol = 0;
  lastrow = 0;
  color = "green";

  constructor(row, col) {
    const game = useGameStore();
    this.row = row;
    this.col = col;
  }
  updatePosition() {
    this.lastCol = this.col;
    this.lastrow = this.row;
  }
  follow(box) {
    this.updatePosition();
    this.col = box.lastCol;
    this.row = box.lastrow;
  }
  move(direction) {
    this.updatePosition();
    switch (direction) {
      case "U":
        this.row--;
        break;
      case "D":
        this.row++;
        break;
      case "L":
        this.col--;
        break;
      case "R":
        this.col++;
        break;
    }
  }
}
