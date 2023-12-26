<template>
  <button class="w-12 h-12" @click="start(arrows[direction])">
    {{ arrows[direction] }}
  </button>
</template>

<script setup>
import { useGameStore } from "@/stores/gamestore";
let game = useGameStore();

const p = defineProps({
  direction: String, //U/D/R/L
});
const arrows = {
  D: "▼",
  U: "▲",
  R: "▶︎",
  L: "◀︎",
};
function start(direction) {
  game.direction = direction;
  setInterval(() => {
    game.snake.move(game.direction);
  }, game.speed);
}
</script>
