export class Box {
  row = 0;
  col = 0;
  color = "green";
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  move(direction) {
    switch (direction) {
      case "U":
        this.row--;
        this.col;
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
