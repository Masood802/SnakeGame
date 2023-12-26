<template>
  <div class="absolute bottom-2 right-2 grid grid-cols-3 grid-rows-3" @click.stop="() => {}">
    <GameButton direction="U" class="col-start-2" />
    <GameButton direction="D" class="col-start-2 row-start-3" />
    <GameButton direction="L" class="row-start-2"></GameButton>
    <GameButton direction="R" class="col-start-3 row-start-2"></GameButton>
  </div>
</template>

<script setup>
import GameButton from "./GameButton.vue";
</script>
