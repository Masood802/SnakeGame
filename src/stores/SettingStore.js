import { defineStore } from "pinia";
import { useGameStore } from "./gamestore";
import dayjs from "dayjs";

export const useSettingStore = defineStore("setting", {
  state: () => ({
    togglesetting: true,
    gameSound: localStorage.getItem("bgvol") || 0.2,
    gameEffects: localStorage.getItem("gamesoundvol") || 0.8,
    zenmode: false,
    gameDifficulty: localStorage.getItem("diff"),
    scores: [
      {
        id: 1,
        user: "Masood",
        score: 3800,
        date: "22-12-2023",
      },
    ],
    user: "",
  }),
  actions: {
    addscore() {
      let game = useGameStore();
      this.scores.push({
        id: Math.floor(Math.random() * 10),
        user: this.user,
        score: game.score,
        date: dayjs().format("DD-MM-YYYY"),
      });
      localStorage.setItem("scores", JSON.stringify(this.scores));
      this.user = "";
    },
  },
});
