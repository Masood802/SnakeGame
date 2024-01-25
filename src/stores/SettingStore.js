import { defineStore } from "pinia";

export const useSettingStore = defineStore("setting", {
  state: () => ({
    togglesetting: true,
    gameSound: localStorage.getItem("bgvol")||0.2,
    gameEffects: localStorage.getItem("gamesoundvol")||0.8,
    zenmode: false,
    gameDifficulty:localStorage.getItem("diff")
  }),
});
