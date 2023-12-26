<template>
  <button
    class="w-12 h-12 flex justify-center items-center rounded-full border-2"
    @click="updateDirection(direction)"
  >
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
function updateDirection() {
  if (game.snake.direction === "U" && p.direction === "D") return;
  if (game.snake.direction === "D" && p.direction === "U") return;
  if (game.snake.direction === "R" && p.direction === "L") return;
  if (game.snake.direction === "L" && p.direction === "R") return;
  game.snake.direction = p.direction;
}
</script>
