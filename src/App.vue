<script setup>
import {  RouterView } from "vue-router";

</script>

<template>
  <main>
    <router-view v-slot="{Component}">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
    </router-view>
  </main>
</template>


