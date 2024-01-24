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
    class="bg-[url(/pix/peakpx.jpg)]  bg-cover all-center flex h-screen w-screen relative"
  >
    <img src="/pix/title.png" alt="" class="absolute top-8" />
    <div
      @click="router.push('game-view')"
      class="bg-[url(/pix/play.png)] bg-cover bg-center rounded-full w-24 h-24  font-bold my-2 relative group"
    ><p class="absolute top-36 opacity-0 group-hover:top-24 group-hover:opacity-100 transition-all duration-300 left-1">Play Game</p></div>
    <div
      class="bg-[url(/pix/settings.png)] bg-cover bg-center shadow rounded-full w-24 h-24 relative group"
      @click="showsettings"
    >
  <p class="absolute top-36 opacity-0 group-hover:top-24 group-hover:opacity-100 transition-all duration-300 text-center left-3">Settings</p>
  </div>
     <div
      class="bg-[url(/pix/hallOfFame.png)] bg-cover bg-center shadow rounded-full w-24 h-24 relative group"
      @click="router.push('/hall-of-fame')"
    >
   <p class="absolute top-36 opacity-0 group-hover:top-24 group-hover:opacity-100 transition-all duration-300 text-center left-3">
    Hall of Fame</p>
  </div>
     
  </main>
</template>
