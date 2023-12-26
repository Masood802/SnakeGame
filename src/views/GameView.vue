<template>
  <main class="flex items-center justify-center h-[100vh]">
    <div
      class="bg-gray-300 relative rounded-md bg-[url('./pix/bkg.jpg')] bg-cover bg-center"
      :style="{ width: game.gridSize + 'px', height: game.gridSize + 'px' }"
      @click.stop="game.paused = true"
    >
      <BoxComponet v-for="box in game.snake.boxes" :box="box"></BoxComponet>
      <FoodItemComponent></FoodItemComponent>
      <Buttons></Buttons>
      <Gameoverpopup v-if="game.gameover"></Gameoverpopup>
      <Gamepausepopup></Gamepausepopup>
    </div>
  </main>
</template>
<script setup>
import BoxComponet from "@/components/BoxComponet.vue";
import FoodItemComponent from "@/components/FoodItemComponent.vue";
import { useGameStore } from "@/stores/gamestore";
import { onBeforeMount, onMounted } from "vue";
import { Snake } from "../Classes/Snake.js";
import { FoodItem } from "../Classes/FoodItem.js";
import Buttons from "@/components/Buttons.vue";
import Gameoverpopup from "@/components/Gameoverpopup.vue";
import Gamepausepopup from "@/components/Gamepausepopup.vue";

let game = useGameStore();
onBeforeMount(() => {
  game.snake = new Snake();
  game.CreateFoodItem();
});
onMounted(() => {
  setInterval(() => {
    if (game.paused) return;
    game.snake.move();
  }, game.speed);
  setInterval(() => {
    if (game.paused) return;
    if(game.gameover)return
    game.CreateFoodItem();
  }, 5000);
});
</script>
