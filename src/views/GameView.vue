<template>
  <main class="flex items-center justify-center h-[100vh]">
    <div
      class="bg-gray-300 relative"
      :style="{ width: game.gridSize + 'px', height: game.gridSize + 'px' }"
    >
      <BoxComponet v-for="box in game.snake.boxes" :box="box"></BoxComponet>
      <Buttons></Buttons>
    </div>
  </main>
</template>
<script setup>
import BoxComponet from "@/components/BoxComponet.vue";
import { useGameStore } from "@/stores/gamestore";
import { onBeforeMount, onMounted } from "vue";
import { Snake } from "../Classes/Snake.js";
import Buttons from "@/components/Buttons.vue";

let game = useGameStore();
onBeforeMount(() => {
  game.snake = new Snake();
});
onMounted(() => {
  setInterval(() => {
    game.snake.move();
  }, game.speed);
});
</script>
