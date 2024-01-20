<template>
    <the-popup>
    <div class="w- auto bg-[url('/pix/bkg.jpg')] bg-cover bg-center text-center ">
        <h1 class="text-center text-3xl py-8 text-white ">Game Settings</h1>
        <div class="w-1/2 mx-auto flex justify-center items-center">
            <label for="GameVol" class="mx-2 w-1/4 text-white text-left">Game Sound</label>
            <input type="range" name="GameVol" id="Gamevol" min="0" max="1" class="w-3/4 text-orange-700 bg-red-700 " step=".1"  v-model="setting.gameSound">
            <p class="text-white mx-2">{{setting.gameSound }}</p>
        </div>
        <div class="w-1/2 mx-auto flex justify-center items-center my-4">
            <label for="effectVol" class="mx-2 w-1/4 text-white text-left">Game Effects</label>
            <input type="range" name="effectVol" id="effectVol" min="0" max="1" class="w-3/4 text-orange-700 bg-red-700 " step=".1"  v-model="setting.gameEffects">
            <p class="text-white mx-2">{{ setting.gameEffects }}</p>  
        </div>
        <div class="w-1/2 mx-auto flex justify-center items-center my-4 text-white">
            <label for="gamediff" class="text-left w-2/3 ml-2">Game Difficulty</label>
            <div class="w-2/3 flex justify-start items-center"><input type="radio" name="gamedifficulty" value="easy" id="easy" checked v-model="setting.gameDifficulty" @change="game.changeSpeed">
            <label for="easy" class="ml-2">easy</label></div>
            <div class="w-2/3 flex justify-start items-center"><input type="radio" name="gamedifficulty" value="medium" id="Medium" v-model="setting.gameDifficulty" @change="game.changeSpeed">
            <label for="Medium" class="ml-2">Medium</label></div>
            <div class="w-1/3 flex justify-start items-center"><input type="radio" name="gamedifficulty" value="hard" id="Hard" v-model="setting.gameDifficulty" @change="game.changeSpeed">
            <label for="Hard" class="ml-2">Hard</label></div>
        </div>
        
    </div>
    </the-popup>
</template>
<script setup>
import { useSettingStore } from '@/stores/SettingStore'
import ThePopup from './ThePopup.vue';
let setting = useSettingStore();


</script>