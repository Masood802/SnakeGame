<template>
  <div
    class="relative my-10 mx-4 w-[160px] h-[160px] border-2 border-black bg-[#364532] rounded-full"
  >
    <div
      class="w-6 h-6 bg-black absolute top-[66px] left-[66px] rounded-full z-40"
    ></div>
    <div class="absolute top-[44px] left-[58px] text-red-700 z-50 text-xl">{{ game.speed }}</div>
    <div
      class="w-[80px] h-[80px] bg-transparent absolute top-[38px] left-[38px] z-30"
    >
      <div
        id="arrow"
        class="w-[80px] h-[80px] bg-transparent relative transition-all duration-300"
      >
        <div
          class="w-[70px] h-1 absolute bg-orange-700 top-10 left-[-24px]"
        ></div>
      </div>
    </div>

    <div
      class="h-[150px] bg-black w-1 absolute top-1 left-[76px] rotate-[-90deg]"
    ></div>
    <div
      class="h-[150px] bg-black w-1 absolute top-1 left-[76px] rotate-[-80deg]"
    ></div>
    <div
      class="h-[150px] bg-black w-1 absolute top-1 left-[76px] rotate-[-70deg]"
    ></div>
    <div
      class="h-[150px] bg-black w-1 absolute top-1 left-[76px] rotate-[-60deg]"
    ></div>
    <div
      class="h-[150px] bg-black w-1 absolute top-1 left-[76px] rotate-[-50deg]"
    ></div>
    <div
      class="h-[150px] bg-black w-1 absolute top-1 left-[76px] rotate-[-40deg]"
    ></div>
    <div
      class="h-[150px] bg-black w-1 absolute top-1 left-[76px] rotate-[-30deg]"
    ></div>
    <div
      class="h-[150px] bg-black w-1 absolute top-1 left-[76px] rotate-[-20deg]"
    ></div>
    <div
      class="h-[150px] bg-black w-1 absolute top-1 left-[76px] rotate-[-10deg]"
    ></div>
    <div
      class="h-[150px] bg-black w-1 absolute top-1 left-[76px] rotate-[0deg]"
    ></div>
    <div
      class="h-[150px] bg-black w-1 absolute top-1 left-[76px] rotate-[10deg]"
    ></div>
    <div
      class="h-[150px] bg-black w-1 absolute top-1 left-[76px] rotate-[20deg]"
    ></div>
    <div
      class="h-[150px] bg-black w-1 absolute top-1 left-[76px] rotate-[30deg]"
    ></div>
    <div
      class="h-[150px] bg-black w-1 absolute top-1 left-[76px] rotate-[40deg]"
    ></div>
    <div
      class="h-[150px] bg-black w-1 absolute top-1 left-[76px] rotate-[50deg]"
    ></div>
    <div
      class="h-[150px] bg-black w-1 absolute top-1 left-[76px] rotate-[60deg]"
    ></div>
    <div
      class="h-[150px] bg-black w-1 absolute top-1 left-[76px] rotate-[70deg]"
    ></div>
    <div
      class="h-[150px] bg-black w-1 absolute top-1 left-[76px] rotate-[80deg]"
    ></div>
    <div
      class="w-[130px] h-[130px] bg-[#364532] absolute rounded-full top-[13px] left-[13px]"
    ></div>
    <div
      class="w-[158px] h-[100px] absolute top-[84px] left-[-1px] bg-[#364532] z-40"
    ></div>
  </div>
  <div class="flex justify-center">
    <button
      @click="increase"
      class="bg-green-700 px-7 py-3 text-white flex items-center justify-center mx-4"
    >
      Increase
    </button>
    <button
      @click="decrease"
      class="bg-red-700 px-7 py-3 text-white flex items-center justify-center"
    >
      decrease
    </button>
  </div>
</template>

<script setup>
import { useGameStore } from "@/stores/gamestore";
import { ref } from "vue";
let game = useGameStore();
let scale = ref("");
let angle = ref(0);
let x = ref(0);
function increase() {
  if (angle.value < 180) {
    scale.value = document.querySelector("#arrow");
    angle.value = angle.value + 10;
    scale.value.style.transform = `rotate(${game.speed + "deg"})`;
  }
}
function decrease() {
  console.log(angle.value);
  if (angle.value > 0) {
    console.log("inside", angle.value);
    scale.value = document.querySelector("#arrow");
    angle.value = angle.value - 10;
    scale.value.style.transform = `rotate(${angle.value + "deg"})`;
  }
}
</script>

<style lang="scss" scoped></style>
