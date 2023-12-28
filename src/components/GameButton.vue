<template>
  <button
    class="w-12 h-12 flex justify-center items-center rounded-full border-2"
    @click="game.updateDirection(direction)"
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

</script>
