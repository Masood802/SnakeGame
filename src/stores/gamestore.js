import { defineStore } from "pinia";
import { FoodItem } from "@/Classes/FoodItem";
import router from "@/router";

export const useGameStore = defineStore("game", {
  state: () => ({
    BoxSize: 30,
    totalBoxes: 25,
    speed: 300, // in ms
    snake: null,
    direction: "",
    gameover:false,
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
  },
});
