import { defineStore } from "pinia";
import { FoodItem } from "@/Classes/FoodItem";

export const useGameStore = defineStore("game", {
  state: () => ({
    BoxSize: 30,
    totalBoxes: 25,
    speed: 300, // in ms
    snake: null,
    gameover: false,
    paused: false,
    Fooditem: null,
  }),
  getters: {
    gridSize() {
      return this.BoxSize * this.totalBoxes;
    },
  },
  actions: {
    Restart() {
      window.location.reload();
    },
    CreateFoodItem() {
      let row = Math.floor(Math.random() * this.totalBoxes);
      let col = Math.floor(Math.random() * this.totalBoxes);
      this.Fooditem = new FoodItem(row, col);
    },
    GameEnd() {
      this.gameover = true;
      window.location.reload();
    },
    updateDirection(direction) {
      if (this.snake.direction === "U" && direction === "D") return;
      if (this.snake.direction === "D" && direction === "U") return;
      if (this.snake.direction === "R" && direction === "L") return;
      if (this.snake.direction === "L" && direction === "R") return;
      this.snake.direction = direction;
    },
    HandleKeyboadEvents(e) {
      const newKey = e.key;
      if (newKey === " ") this.paused = true;
      if (newKey === "Escape") this.paused = false;
      const keyPressed = e.key;
      const directions = {
        ArrowUp: "U",
        ArrowDown: "D",
        ArrowRight: "R",
        ArrowLeft: "L",
      };
      let direction = directions[keyPressed];
      if (!direction) return;
      this.updateDirection(direction);
    },
  },
});
