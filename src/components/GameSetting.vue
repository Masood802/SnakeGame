<template>
    <div class=" w-screen h-screen bg-[url('/pix/bkg.jpg')] bg-cover bg-center text-center">
        <h1 class="text-center text-3xl py-8 text-white ">Game Settings</h1>
        <div class="w-1/2 mx-auto flex justify-center items-center">
            <label for="GameVol" class="mx-2 w-1/4 text-white">Game Sound</label>
            <input type="range" name="GameVol" id="Gamevol" min="0" max="1" class="w-3/4 text-orange-700 bg-red-700 " step=".1"  v-model="setting.gameSound">
            <p class="text-white mx-2">{{setting.gameSound }}</p>
        </div>
        <div class="w-1/2 mx-auto flex justify-center items-center my-4">
            <label for="effectVol" class="mx-2 w-1/4 text-white">Game Effects</label>
            <span class="text-3xl text-center py-2 mr-1">-</span>
            <input type="range" name="effectVol" id="effectVol" min="0" max="1" class="w-3/4 text-orange-700 bg-red-700 " step=".1"  v-model="setting.gameEffects">
           <span>+</span>
            <p class="text-white mx-2">{{ setting.gameEffects }}</p>
            
        </div>
    </div>
    
</template>
<script setup>
import {useSettingStore} from '@/stores/SettingStore'
import { ref } from 'vue';
let setting = useSettingStore();


</script>