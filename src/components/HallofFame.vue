<template>
  <div
    class="w-screen h-screen bg-[url('/pix/bkg.jpg')] bg-cover bg-center flex justify-center items-start"
  >
    <h1 class="text-3xl text-orange-600 text-center pt-10">Hall of Fame</h1>
    <button
      class="bg-[url(/pix/back.png)] bg-cover bg-center rounded-full w-16 h-16 fixed top-1 left-2 group"
      @click="router.push('/')"
    >
      <p
        class="absolute top-20 opacity-0 group-hover:top-16 group-hover:opacity-100 transition-all duration-300 text-center left-3"
      >
        Back
      </p>
    </button>
    <div class="container grid grid-rows-11 w-1/2 fixed top-32">
      <div class="flex text-orange-600">
        <div class="heading">S#</div>
        <div class="heading">Name</div>
        <div class="heading">Score</div>
        <div class="heading">Date</div>
      </div>
      <div
        class="text-orange-600 flex"
        v-for="(score, index) in setting.scores"
        :key="index"
      >
        <div class="heading">{{ index + 1 }}</div>
        <div class="heading">{{ score.user }}</div>
        <div class="heading">{{ score.score }}</div>
        <div class="heading">{{ score.date }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useSettingStore } from "@/stores/SettingStore";
import { onBeforeMount,  ref } from "vue";
import { useRouter } from "vue-router";
let setting = useSettingStore();
let router = useRouter();
onBeforeMount(() => {
  let score = localStorage.getItem("scores");
  score = JSON.parse(score);
  if (score) {
    try {
      setting.scores = score;
      }catch(e) {}
  }
    console.log(2+'2'-1)
});
</script>
