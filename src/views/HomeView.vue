<script setup>
import { useGameStore } from "@/stores/gamestore";
import { useSettingStore } from "@/stores/SettingStore";
import { useRouter } from "vue-router";

let setting = useSettingStore();
let game = useGameStore()
let router = useRouter();

function showsettings() {
  setting.togglesetting = true
  router.push('game-settings')
}
</script>

<template>
  <main
    class="all-center flex h-screen w-full relative"
  >
  <img src="/pix/back2.jpeg" alt="" class="fixed top-0 left-0 w-screen h-screen" />
    <div
      @click="router.push('game-view')"
      class="bg-[url(/pix/play.png)] bg-cover bg-center rounded-full w-24 h-24  font-bold my-2 relative group top-40"
    ><p class="absolute top-32 opacity-0 group-hover:top-24 group-hover:opacity-100 transition-all duration-300 left-1">Play Game</p></div>
    <div
      class="bg-[url(/pix/settings.png)] bg-cover bg-center shadow rounded-full w-24 h-24 relative group top-40"
      @click="showsettings"
    >
  <p class="absolute top-32 opacity-0 group-hover:top-24 group-hover:opacity-100 transition-all duration-300 text-center left-3">Settings</p>
  </div>
     <div
      class="bg-[url(/pix/hallOfFame.png)] bg-cover bg-center shadow rounded-full w-24 h-24 relative group top-40"
      @click="router.push('/hall-of-fame')"
    >
   <p class="absolute top-32 opacity-0 group-hover:top-24 group-hover:opacity-100 transition-all duration-300 text-center left-3">
    Hall of Fame</p>
  </div>
  <div
      class="bg-[url(/pix/help.png)] bg-cover bg-center shadow rounded-full w-24 h-24 relative group top-40"
      @click="router.push('/game-help')"
    >
   <p class="absolute top-32 opacity-0 group-hover:top-24 group-hover:opacity-100 transition-all duration-300 text-center left-7">
    Help</p>
  </div>
  </main>
</template>
