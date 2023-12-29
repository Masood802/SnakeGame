<template>
  <main
    class="flex items-center justify-center h-screen w-screen bg-[#364532] overflow-hidden"
    @click.stop="() => {}"
  >
    <div
      id="game-board"
      class="bg-gray-300 relative rounded-md bg-[url('./pix/bkg.jpg')] bg-cover bg-center"
      :style="{ width: game.gridSize + 'px', height: game.gridSize + 'px' }"
      @click.stop="game.paused = true"
    >
      <TransitionGroup name="zoom">
        <BoxComponet v-for="box in game.snake.boxes" :box="box"></BoxComponet>
      </TransitionGroup>
      <FoodItemComponent></FoodItemComponent>
      <Buttons></Buttons>
      <div class="fixed top-10 right-20 flex flex-col">
        <h1 class="text-white text-3xl text-left">
          HighScore:{{ game.highScore }}
        </h1>
        <h1 class="text-white text-3xl text-left">Score:{{ game.score }}</h1>
      </div>
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
import Buttons from "@/components/Buttons.vue";
import Gameoverpopup from "@/components/Gameoverpopup.vue";
import Gamepausepopup from "@/components/Gamepausepopup.vue";
import { SoundHelper } from "@/Helpers/SoundHelper";

let game = useGameStore();
onBeforeMount(() => {
  game.snake = new Snake();
  game.CreateFoodItem();
});
onMounted(() => {
  SoundHelper.loadSounds();
  // SoundHelper.play("startgame");
  game.StartSnakeTimer();
  game.StartFoodTimer();
  document.addEventListener("keydown", game.HandleKeyboadEvents);
  window.addEventListener("resize", game.gameBoardResize());
  let data = localStorage.getItem("HighScore");
  if (data) {
    try {
      game.highScore = data;
    } catch (e) {}
  }
});
</script>
