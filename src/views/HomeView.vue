<script setup>
import { useSettingStore } from "@/stores/SettingStore";

let setting = useSettingStore();
</script>

<template>
  <main
    class="bg-[url(/pix/peakpx.jpg)] flex-col bg-cover all-center flex h-screen w-screen relative"
  >
    <img src="/pix/title.png" alt="" class="absolute top-8" />
    <RouterLink
      to="/game-view"
      class=" shadow rounded-md text-2xl text-green-400 w-52 h-12 font-bold bg-orange-600 text-center py-2"
    >Play Game</RouterLink>
    <RouterLink
      to="/game-view"
      @click="setting.zenmode=true"
      class=" shadow rounded-md text-2xl text-green-400 w-52 h-12 font-bold bg-orange-600 text-center py-2 my-2"
    >Zen Mode</RouterLink>
    <RouterLink
      to="/game-settings"
      class=" shadow rounded-md text-2xl text-green-400 w-52 h-12 font-bold bg-orange-600 text-center py-2"
    >Game Settings</RouterLink>
      
  </main>
</template>
