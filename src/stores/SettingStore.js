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
    scores: [],
    user: "",
    showscore:'flex'
  }),
  actions: {
    addscore() {
      let game = useGameStore();
      let newscore = {
        id: Math.floor(Math.random() * 10),
        user: this.user,
        score: game.score,
        date: dayjs().format("DD-MM-YYYY"),
      }
      if(this.scores.length<11)
      {
        this.scores.push(newscore);
        localStorage.setItem("scores", JSON.stringify(this.scores));
      }
      else {
        
      }
      this.user = "";
      this.showscore='none'
    },
  },
});
