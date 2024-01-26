<template>

<div class="relative my-10 mx-auto w-[160px] h-[160px] border-2 border-black  bg-white rounded-full">
    
        <div class="w-6 h-6 bg-black absolute top-[66px] left-[66px] rounded-full z-40"></div>
        <div class="w-[80px] h-[80px] bg-transparent absolute top-[38px] left-[38px] z-30">
         <div class="w-[80px] h-[80px] bg-transparent relative rotate-[0deg] hover:rotate-[60deg] transition-all duration-300" >
            <div class="w-[70px] h-1 absolute bg-orange-700 top-10 left-[-24px]"></div>
        </div>
        </div>
       
        <div class="h-[150px] bg-black w-1 absolute top-1 left-[76px] rotate-[-90deg]"></div>
        <div class="h-[150px] bg-black w-1 absolute top-1 left-[76px] rotate-[-80deg]"></div>
        <div class="h-[150px] bg-black w-1 absolute top-1 left-[76px] rotate-[-70deg]"></div>
        <div class="h-[150px] bg-black w-1 absolute top-1 left-[76px] rotate-[-60deg]"></div>
        <div class="h-[150px] bg-black w-1 absolute top-1 left-[76px] rotate-[-50deg]"></div>
        <div class="h-[150px] bg-black w-1 absolute top-1 left-[76px] rotate-[-40deg]"></div>
        <div class="h-[150px] bg-black w-1 absolute top-1 left-[76px] rotate-[-30deg]"></div>
        <div class="h-[150px] bg-black w-1 absolute top-1 left-[76px] rotate-[-20deg]"></div>
        <div class="h-[150px] bg-black w-1 absolute top-1 left-[76px] rotate-[-10deg]"></div>
        <div class="h-[150px] bg-black w-1 absolute top-1 left-[76px] rotate-[0deg]"></div>
        <div class="h-[150px] bg-black w-1 absolute top-1 left-[76px] rotate-[10deg]"></div>
        <div class="h-[150px] bg-black w-1 absolute top-1 left-[76px] rotate-[20deg]"></div>
        <div class="h-[150px] bg-black w-1 absolute top-1 left-[76px] rotate-[30deg]"></div>
        <div class="h-[150px] bg-black w-1 absolute top-1 left-[76px] rotate-[40deg]"></div>
        <div class="h-[150px] bg-black w-1 absolute top-1 left-[76px] rotate-[50deg]"></div>
        <div class="h-[150px] bg-black w-1 absolute top-1 left-[76px] rotate-[60deg]"></div>
        <div class="h-[150px] bg-black w-1 absolute top-1 left-[76px] rotate-[70deg]"></div>
        <div class="h-[150px] bg-black w-1 absolute top-1 left-[76px] rotate-[80deg]"></div>
    <div class="w-[130px] h-[130px] bg-white absolute rounded-full top-[13px] left-[13px]"></div>
    <div class="w-[158px] h-[100px] absolute top-[84px] left-[-1px] bg-white z-40"></div>    
    </div>
 <div class="flex justify-center"> 
    <button @click="increase" class="bg-green-700 px-7 py-3 text-white flex items-center justify-center mx-4">Increase</button>
    <button @click="decrease" class="bg-red-700 px-7 py-3 text-white flex items-center justify-center">decrease</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let x = ref(0)
function increase() {
    x.value=x.value+10
} 
function decrease() {
    x.value=x.value-10
}
</script>

<style lang="scss" scoped>

</style>