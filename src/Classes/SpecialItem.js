export class SpecialItem {
  row = 0;
  col = 0;
  items = ["increase", "cheeta", "decrease", "+200"];
  item = this.getRandomitem(this.items);
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  getRandomitem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
}
