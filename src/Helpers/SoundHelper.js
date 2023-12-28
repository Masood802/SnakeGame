export const SoundHelper = {
  click: null,
  hit: null,
  Crunch: null,
  pop: null,
  loadSounds() {
    this.click = new Audio(`/sounds/click.wav`);
    this.Crunch = new Audio(`/sounds/Crunch.mp3`);
    this.pop = new Audio(`/sounds/pop.mp3`);
    this.hit = new Audio(`/sounds/hit.wav`);
  },
  play(sound) {
    this[sound].play();
  },
};
