import { defineStore } from "pinia";

export const useSettingStore = defineStore("setting", {
  state: () => ({
    togglesetting: true,
    gameSound: localStorage.getItem("bgvol"),
    gameEffects: localStorage.getItem("gamesoundvol"),
    zenmode: false,
    gameDifficulty:localStorage.getItem("diff")
  }),
});
