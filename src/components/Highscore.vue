<template>
    <div class="all-center" v-if="game.ishighscore">
        <h1 class="text-4xl text-center" >{{game.cong}}</h1>
        <h1 class="text-center text-4xl font-serif text-red-800" >{{game.text2}}</h1>
        <ConfettiExplosion />
    </div>
</template>

<script setup>
import { useGameStore } from '@/stores/gamestore';
import ConfettiExplosion from "vue-confetti-explosion";

let game=useGameStore();

</script>

<style  scoped>

</style>