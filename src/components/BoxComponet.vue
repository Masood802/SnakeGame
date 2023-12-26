<template>
  <img
    src="/pix/greenLink.png"
    alt=""
    class="absolute transition-all ease-linear"
    :style="styles"
  />
</template>

<script setup>
import { useGameStore } from "@/stores/gamestore";
import { computed } from "vue";

let game = useGameStore();
const p = defineProps({
  box: Object,
});
const styles = computed(() => {
  return {
    left: p.box.col * game.BoxSize + "px",
    top: p.box.row * game.BoxSize + "px",
    width: game.BoxSize + "px",
    height: game.BoxSize + "px",
    transitionDuration: game.speed + "ms",
  };
});
</script>
