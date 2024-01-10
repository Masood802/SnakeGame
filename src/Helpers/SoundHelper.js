import { useSettingStore } from "@/stores/SettingStore";

export const SoundHelper = {
  click: null,
  hit: null,
  Crunch: null,
  pop: null,
  gameover: null,
  startgame: null,
  setting:useSettingStore(),
  loadSounds() {
    this.click = new Audio(`/sounds/spsound.mp3`);
    this.Crunch = new Audio(`/sounds/Crunch.mp3`);
    this.pop = new Audio(`/sounds/pop.mp3`);
    this.hit = new Audio(`/sounds/hit.wav`);
    this.gameover = new Audio(`/sounds/gameover.mp3`);
    this.startgame = new Audio(`/sounds/startgame.mp3`);
  },
  play(sound) {
    this[sound].currentTime = 0;
    this[sound].volume =this.setting.gameEffects
    this[sound].play();
  },
  PlaybgMusic(sound) {
    this[sound].play();
    this[sound].volume = this.setting.gameSound;
    this[sound].loop = true;
  },
};
