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
    scores: []
    ,
    user: "",
    showscore: 'flex'
  }),
  // Mounted() {
  //   let score = localStorage.getItem("scores")
  //   if (score) {
  //     try {
  //       score = JSON.parse(score)
  //       this.scores=score
  //     }
  //     catch (e) {
        
  //     }
  //   }
  // },
  actions: {
    addscore() {
      let game = useGameStore();
      this.scores.push({
        id: Math.floor(Math.random() * 10),
        user: this.user,
        score: game.score,
        date: dayjs().format("DD-MM-YYYY"),
      });
      this.scores.sort((a, b) => {
      return b.score-a.score
      })
      this.scores = this.scores.slice(0, 10);
      localStorage.setItem("scores", JSON.stringify(this.scores));
      this.user = "";
      this.showscore='none'
    },
  },
});
