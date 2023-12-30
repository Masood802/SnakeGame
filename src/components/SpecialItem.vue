<template>
  <div
    :style="Newstyle"
    class="absolute animate-ping bg-yellow-100 rounded-full"
  ></div>
  <transition name="zoom">
    <img
      :src="`/pix/${game.specialItem.item}.png`"
      alt=""
      class="absolute"
      :style="Newstyle"
    />
  </transition>
</template>

<script setup>
import { useGameStore } from "@/stores/gamestore";
import { computed } from "vue";

let game = useGameStore();
const Newstyle = computed(() => {
  return {
    left: game.specialItem.col * game.BoxSize + "px",
    top: game.specialItem.row * game.BoxSize + "px",
    width: game.BoxSize + "px",
    height: game.BoxSize + "px",
  };
});
</script>
