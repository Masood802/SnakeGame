import { defineStore } from "pinia";

export const useSettingStore = defineStore("setting", {
    state: ()=>({
        togglesetting: true,
        gameSound: .3,
        gameEffects: .5,
        zenmode:false
    })
})