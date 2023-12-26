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
      case "▲":
        this.row--;
        this.col
        break;
      case "▼":
        this.row++;
        break;
      case "◀︎":
        this.col--;
        break;
      case "▶︎":
        this.col++;
        break;
    }
  }
}
