<template>
  <ThePopup v-if="game.paused">
    <h1 class="text-4xl mb-5">Game Paused</h1>
    <button
      class="text-lg font-bold bg-green-800 rounded-lg px-8 py-2 text-slate-50"
      @click.stop="game.paused=false"
    >
      Resume
    </button>
  </ThePopup>
</template>

<script setup>
import { useGameStore } from "@/stores/gamestore";
import ThePopup from "./ThePopup.vue";
let game = useGameStore();
</script>
