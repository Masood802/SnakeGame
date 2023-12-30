<template>
  <img
    :src="src"
    alt=""
    class="absolute transition-all ease-linear"
    :style="styles"
  />
</template>

<script setup>
import { useGameStore } from "@/stores/gamestore";
import { computed} from "vue";
let game = useGameStore();

const src = computed(() => {
  return p.box.isHead ? "/pix/SnakeHead.png" : `/pix/${p.box.color}Link.png`;
});

const p = defineProps({
  box: Object,
});
const styles = computed(() => {
  const rotations = { U: 0, L: -90, D: 180, R: 90 };
  const rotation = rotations[game.snake.direction];
  return {
    left: p.box.col * game.BoxSize + "px",
    top: p.box.row * game.BoxSize + "px",
    width: game.BoxSize + "px",
    height: game.BoxSize + "px",
    transitionDuration: game.baseSpeed + "ms",
    transform: `rotate(${rotation}deg)`,
  };
});
</script>
