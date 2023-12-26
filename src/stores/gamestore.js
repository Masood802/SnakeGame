import { defineStore } from "pinia";

export const useGameStore = defineStore("game", {
  state: () => ({
    BoxSize: 30,
    totalBoxes: 20,
    speed: 500, // in ms
    snake: null,
    direction:''
  }),
  getters: {
    gridSize() {
      return this.BoxSize * this.totalBoxes;
    },
  },
});
