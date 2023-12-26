<template>
  <button
    class="w-12 h-12 "
  >
    {{ arrows[direction] }}
  </button>
</template>

<script setup>
const p = defineProps({
  direction: String, //U/D/R/L
});
const arrows = {
  D: "▼",
  U: "▲",
  R: "▶︎",
  L: "◀︎",
};
</script>
