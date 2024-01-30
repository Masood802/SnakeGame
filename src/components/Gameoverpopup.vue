<template>
  <ThePopup>
    <h1 class="text-4xl mb-5">Game Over</h1>
    <h2>Your Score: {{ game.score }}</h2>
    <input type="text" name="user" class="w-4/5 border-green-700 my-2" v-model="setting.user" placeholder="Enter Your Name"/>
    <button
      class="bg-green-600 text-center py-2 px-8"
      @click="setting.addscore"
    >
      Add Score
    </button>
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
import { useSettingStore } from "@/stores/SettingStore";
let game = useGameStore();
let router = useRouter();
let setting = useSettingStore();
function GameEnd() {
  SoundHelper.stopMusic("startgame");
  game.gameover = false;
  router.push("/");
}
</script>
