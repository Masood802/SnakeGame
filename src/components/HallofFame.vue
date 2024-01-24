<template>
    <div class="w-screen h-screen bg-[url('/pix/bkg.jpg')] bg-cover bg-center flex justify-center items-start">
        <h1 class="text-3xl text-white text-center pt-10">Hall of Fame</h1>
        <button class="bg-[url(/pix/back.png)] bg-cover bg-center rounded-full w-16 h-16 fixed top-1 left-2 group"
        @click="router.push('/')"
        >
     <p class="absolute top-20 opacity-0 group-hover:top-16 group-hover:opacity-100 transition-all duration-300 text-center left-3">
    Back</p></button>
    <div class="container grid grid-rows-10 w-1/2 fixed top-32  ">
        <div class="bg-red-200 flex" v-for="score in scores" :key="score.index">
        <div class="px-2 w-full">{{score.id}}</div>
        <div class="px-2 w-full">{{ score.name }}</div>
        <div class="px-2 w-full">{{ score.score }}</div>
        <div class="px-2 w-full">{{ score.date }}</div>
        </div>
    </div>
    </div>
    
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

let router = useRouter();
let scores = ref(
    [
        { id: 1, name: 'Masood', score: 3800, date: "12-12-2023" },
        { id: 2, name: 'Masood', score: 1800, date: "12-12-2023" },
        { id: 3, name: 'Masood', score: 200, date: "12-12-2023" },
        { id: 4, name: 'Masood', score: 1200, date: "12-12-2023" },
        { id: 5, name: 'Masood', score: 3600, date: "12-12-2023" },
        { id: 6, name: 'Masood', score: 3100, date: "12-12-2023" },
        { id: 7, name: 'Masood', score: 3300, date: "12-12-2023" },
        { id: 8, name: 'Masood', score: 3400, date: "12-12-2023" },
        { id: 9, name: 'Masood', score: 1800, date: "12-12-2023" },
        { id:10,  name:'Masood' , score:1500,  date: "12-12-2023" },
    ]
)
</script>