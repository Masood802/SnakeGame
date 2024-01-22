<template>
  <div
    @click.stop="() => {}"
    class="fixed left-0 top-0 w-[100vw] h-[100vh] all-center bg-[rgba(0,0,0,0.5)]"
  >
    <div class=" p-8 rounded-xl all-center flex-col shadow bg-white">
      <slot></slot>
    </div>
  </div>
</template>

<script setup></script>
