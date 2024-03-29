import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GameSettingpopup from '../components/GameSettingpopup.vue'
import HallofFame from '../components/HallofFame.vue'
import speedmeter from '../components/speedmeter.vue' 
import gameHelp from '../components/gameHelp.vue'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/game-view",
      name: "GameView",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/GameView.vue"),
    },
    {
      path: "/game-settings",
      name: "GameSetting",
      component:GameSettingpopup
    },
    {
      path: '/hall-of-fame',
      name: "HallofFame",
      component:HallofFame
      
    },
    {
      path: '/speed-meter',
      name: "speedmeter",
      component:speedmeter
      
    },
    {
      path: '/game-help',
      name: "gameHelp",
      component:gameHelp
      
    },
  ],
});

export default router;
