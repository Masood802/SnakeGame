<template>
  <ThePopup>
    <h1 class="text-4xl mb-5">Game Over</h1>
    <h2>Your Score: {{ game.score }}</h2>
    <button
      class="text-lg font-bold bg-green-800 rounded-lg px-8 py-2 my-4 text-slate-50"
      @click.stop="game.Restart"
    >
      Restart
    </button>
    <router-link to="/"
      ><button
        @click.stop="GameEnd"
        class="text-lg font-bold rounded-full w-24 h-24 text-slate-50 bg-[url('/pix/quit.png')] bg-cover bg-center"
      ></button
    ></router-link>
  </ThePopup>
</template>

<script setup>
import { useGameStore } from "@/stores/gamestore";
import { useRouter } from "vue-router";
import ThePopup from "./ThePopup.vue";
import { SoundHelper } from "@/Helpers/SoundHelper";
let game = useGameStore();
let router =useRouter()
function GameEnd() {
      game.gameover = false
      SoundHelper.stopMusic("startgame");
  console.log(game.gameover);
  router.push('/');
    }
</script>
