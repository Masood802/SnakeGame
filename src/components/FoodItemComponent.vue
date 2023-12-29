<template>
  <transition name="zoom">
    <img
      :src="`/pix/${game.Fooditem.color}Mush.png`"
      alt=""
      class="absolute"
      :style="Newstyles"
    />
  </transition>
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
