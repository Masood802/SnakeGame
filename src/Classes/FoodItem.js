export class FoodItem {
  row = 0;
  col = 0;
  colorlist = ["blue", "green", "yellow", "red"];
  color=this.getRandomColor(this.colorlist)
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  getRandomColor(array) {
    return array[Math.floor(Math.random() * array.length)];
  }


}
