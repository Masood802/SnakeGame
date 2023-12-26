<template>
  <button
    class="w-12 h-12 flex justify-center items-center rounded-full  text-gray-700 border-2 border-gray-500 bg-sky-200"
  >
    {{ arrows[direction] }}
  </button>
</template>

<script setup>
const p = defineProps(() => {
  direction: string; //U/D/R/L
});
const arrows = {
  D: "▼",
  U: "▲",
  R: "▶︎",
  L: "◀︎",
};
</script>
