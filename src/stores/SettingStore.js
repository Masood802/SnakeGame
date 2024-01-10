import { defineStore } from "pinia";

export const useSettingStore = defineStore("setting", {
  state: () => ({
    togglesetting: true,
    gameSound: 0.1,
    gameEffects: 0.8,
    zenmode: false,
    gameDifficulty:'easy'
  }),
});
