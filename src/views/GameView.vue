<template>
  <main
    class="flex items-center justify-center h-screen w-screen bg-[#364532] overflow-hidden"
    @click.stop="() => {}"
  >
    <div
      id="game-board"
      class="bg-gray-300 relative rounded-md bg-[url('/pix/bkg.jpg')] bg-cover bg-center"
      :style="{ width: game.gridSize + 'px', height: game.gridSize + 'px' }"
      @click.stop="pauseGame"
    >
    <div v-if="game.startGame === false"
      class="bg-[url(/pix/play.png)] bg-cover bg-center rounded-full w-24 h-24 absolute top-[45%] left-[40%] z-50"  
      @click.stop="game.PlayGame"></div>
    
      <transition-group name="zoom">
        <BoxComponet
          v-for="box in game.snake.boxes"
          :box="box"
          :key="box"
        ></BoxComponet>
      </transition-group>
      <FoodItemComponent></FoodItemComponent>
      <SpecialItem v-if="game.specialItem"></SpecialItem>
     <div class="fixed top-48 right-1 group"> 
        <img src="../../public/pix/Snake.png" alt="" class="relative ">
        <img src="../../public/pix/SnakeEyesClosed.png" 
        id="close" alt="" 
        class="absolute  top-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in">
        <img src="../../public/pix/SnakeEyeBalls.png"  id="open" alt="" class="absolute top-0 z-10 group-hover:opacity-0">
     </div>
      <Buttons></Buttons>
      <div class="fixed top-4 right-2 flex flex-col">
        <h1 class="text-white text-2xl text-left">
          HighScore:{{ game.highScore }}
        </h1>
        <h1 class="text-white text-2xl text-left">Score:{{ game.score }}</h1>
      </div>
      <div class="fixed top-0 left-0 text-white">
        <speedmeter></speedmeter>
      </div>
      <Gameoverpopup v-if="game.gameover"></Gameoverpopup>
      <Gamepausepopup></Gamepausepopup>
    </div>
 
  </main>
</template>
<script setup>
import BoxComponet from "@/components/BoxComponet.vue";
import FoodItemComponent from "@/components/FoodItemComponent.vue";
import SpecialItem from "@/components/SpecialItem.vue";
import { useGameStore } from "@/stores/gamestore";
import { onBeforeMount, onMounted, ref } from "vue";
import { Snake } from "../Classes/Snake.js";
import Buttons from "@/components/Buttons.vue";
import Gameoverpopup from "@/components/Gameoverpopup.vue";
import Gamepausepopup from "@/components/Gamepausepopup.vue";
import speedmeter from "@/components/speedmeter.vue";
import { SoundHelper } from "@/Helpers/SoundHelper";
import { useSettingStore } from "@/stores/SettingStore.js";
import { useRouter } from "vue-router";
let game = useGameStore();
let setting = useSettingStore();
let router=useRouter()
let random=ref(0)
onBeforeMount(() => {
  game.snake = new Snake();
  game.CreateFoodItem();
  game.CreateSpecialItem();
});
onMounted(() => {
  SoundHelper.loadSounds();
  random.value=Math.floor(Math.random()*4000)
  document.addEventListener("keydown", game.HandleKeyboadEvents);
  window.addEventListener("resize", game.gameBoardResize());
  let data = localStorage.getItem("HighScore");
  data=JSON.parse(data)
  if (data) {
    try {
      game.highScore = data;
    } catch (e) {}
  }
  let speed = localStorage.getItem("speed");
  speed=JSON.parse(speed)
  if (speed) {
    try {
      game.baseSpeed = speed;
    }catch(e){}
  }
  setInterval(() => {
    snakeanimate();
  },random.value)
});
function pauseGame() {
  if (game.startGame === true)
  game.paused=true
}
function snakeanimate() {
  let open = document.querySelector('#open')
  let close=document.querySelector('#close')
  if (open.style.opacity <=0)
  {
    open.style.opacity = 100
    close.style.opacity=0
  }
  else {
    open.style.opacity = 0
      close.style.opacity=100
    }
       
}
</script>
