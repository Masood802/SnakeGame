import { useGameStore } from "@/stores/gamestore.js";
export class Box {
  row = 0;
  col = 0;
  lastCol = 0;
  lastrow = 0;
  color = "green";

  constructor(row, col, color) {
    this.row = row;
    this.col = col;
    this.color = color;
  }
  get isHead() {
    const game = useGameStore();
    return this === game.snake.head;
  }
  updatelastPosition() {
    this.lastCol = this.col;
    this.lastrow = this.row;
  }
  follow(box) {
    this.updatelastPosition();
    this.col = box.lastCol;
    this.row = box.lastrow;
  }
  Gotolastpositon() {
    this.updatelastPosition();
    this.col = this.lastCol;
    this.row = this.lastrow;
  }
  move(direction) {
    this.updatelastPosition();
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
