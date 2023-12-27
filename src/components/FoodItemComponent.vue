<template>
  <img :src="`/pix/${game.Fooditem.color}Link.png`" 
  alt="" class="absolute" 
  :style="Newstyles" />
</template>

<script setup>
import { useGameStore } from "@/stores/gamestore";
import { computed } from "vue";

let game = useGameStore();
const Newstyles = computed(() => {
  return {
    left: game.Fooditem.col * game.BoxSize + "px",
    top: game.Fooditem.row * game.BoxSize + "px",
    width: game.BoxSize + "px",
    height: game.BoxSize + "px",
  };
});
</script>
