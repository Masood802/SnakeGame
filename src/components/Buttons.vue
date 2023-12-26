<template>
  <div
    class="absolute bottom-2 right-2 grid grid-cols-3 grid-rows-3 bg-transparent"
  >
    <GameButton
      direction="U"
      class="col-start-2 row-start-1 flex justify-center items-center rounded-full border-2"
    ></GameButton>
    <GameButton
      direction="D"
      class="col-start-2 row-start-3 flex justify-center items-center rounded-full border-2"
    ></GameButton>
    <GameButton
      direction="R"
      class="col-start-1 row-start-2 flex justify-center items-center rounded-full border-2"
    ></GameButton>
    <GameButton
      direction="L"
      class="col-start-3 row-start-2 flex justify-center items-center rounded-full border-2"
    ></GameButton>
  </div>
</template>

<script setup>
import GameButton from "./GameButton.vue";
</script>
