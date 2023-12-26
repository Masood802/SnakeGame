<template>
  <div
    class="absolute  bottom-2 right-2 grid grid-cols-3 grid-rows-3"
  >
  <Button :direction="U" class=" col-start-2 row-start-1"></Button>
  <Button :direction="D" class="col-start-2 row-start-3"></Button>
  <Button :direction="R" class="col-start-1 row-start-2"></Button>
  <Button :direction="L" class="col-start-3 row-start-2"></Button>
  </div>
</template>

<script setup>
import Button from './button.vue';
</script>
