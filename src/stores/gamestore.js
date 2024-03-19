import { defineStore } from "pinia";
import { FoodItem } from "@/Classes/FoodItem";
import { SoundHelper } from "@/Helpers/SoundHelper";
import { SpecialItem } from "@/Classes/SpecialItem";
import { useRouter } from "vue-router";
import { useSettingStore } from "./SettingStore";



export const useGameStore = defineStore("game", {
  state: () => ({
    gridSize: 750,
    totalBoxes: 25,
    baseSpeed:120,
    snake: null,
    gameover: false,
    paused: false,
    Fooditem: null,
    snakeTimer: null,
    foodTimer: null,
    confettiCanvas: null,
    score: 0,
    highScore: 0,
    startGame: false,
    specialItem: null,
    sepcialItemTimer: null,
    angle: 0,
    arrow:null,
    ishighscore:false,
    cong:'Congrations...',
    text2:'NEW HIGH SCORE'

  }),
  getters: {
    BoxSize() {
      return this.gridSize / this.totalBoxes;
    },
    speed() {
      return Math.min(this.baseSpeed + this.snake.boxes.length * 10, 300);
    },
    mushscore() {
      let setting=useSettingStore()
      if (setting.gameDifficulty === 'easy') return 50
      if (setting.gameDifficulty === 'medium') return 60
      if (setting.gameDifficulty === 'hard') return 80
    }
  },
  actions: {
    PlayGame() {
      this.gameover=false
      this.startGame = true;
      this.StartSnakeTimer();
      this.StartFoodTimer();
      this.StartSpecialItemTimer();
      SoundHelper.PlaybgMusic("startgame");
      console.log('speed playgame', this.speed)
      console.log('snake length',this.snake.boxes.length)
    },
    CheckHighScore() {
      if (this.score > this.highScore) 
      {this.highScore = this.score;
      this.confetti()}
      localStorage.setItem("HighScore", this.highScore);
    },
    Restart() {
      this.startGame = true;
      window.location.reload()
    },
    changeSpeed() {
      let setting = useSettingStore();
      if (setting.gameDifficulty === 'easy') this.baseSpeed= 120
      if (setting.gameDifficulty === 'medium') this.baseSpeed=  100
      if (setting.gameDifficulty === 'hard') this.baseSpeed = 80
      localStorage.setItem("speed", this.baseSpeed);
      localStorage.setItem("diff", setting.gameDifficulty);
     
    },
    StartSnakeTimer() {
      if (this.snakeTimer) clearInterval(this.snakeTimer);
      this.snakeTimer = setInterval(() => {
        if (this.paused || this.gameover) return;
        this.snake.move();
      }, this.baseSpeed);
    },
    StartFoodTimer() {
      if (this.foodTimer) clearInterval(this.foodTimer);
      this.foodTimer = setInterval(() => {
        if (this.paused || this.gameover) return;
        this.CreateFoodItem();
      }, 3500);
    },
    StartSpecialItemTimer() {
      if (this.sepcialItemTimer) clearInterval(this.sepcialItemTimer);
      this.sepcialItemTimer = setInterval(() => {
        if (this.paused || this.gameover) return;
        this.CreateSpecialItem();
      }, 8000);
    },
    CreateSpecialItem() {
      if (Math.random() < 0.7) {
        this.specialItem = null;
        return;
      }

      let row = Math.floor(Math.random() * this.totalBoxes);
      let col = Math.floor(Math.random() * this.totalBoxes);
      this.specialItem = new SpecialItem(row, col);
    },
    CreateFoodItem() {
      let row = Math.floor(Math.random() * this.totalBoxes);
      let col = Math.floor(Math.random() * this.totalBoxes);
      this.Fooditem = new FoodItem(row, col);
    },
    
    updateDirection(direction) {
      if (this.snake.direction === "U" && direction === "D") return;
      if (this.snake.direction === "D" && direction === "U") return;
      if (this.snake.direction === "R" && direction === "L") return;
      if (this.snake.direction === "L" && direction === "R") return;
      this.snake.direction = direction;
    },
    gameBoardResize() {
      this.gridSize = Math.min(window.innerWidth, window.innerHeight);
    },
    increase(val) {
      if (this.angle < 180) {
      this.angle += val;
      this.arrow = document.querySelector("#arrow");
      this.arrow.style.transform = `rotate(${this.angle + "deg"})`;
     
  }
  
},
decrease(val){
if (this.angle > 0) {
      this.angle -= val;
      this.arrow = document.querySelector("#arrow");
      this.arrow.style.transform = `rotate(${this.angle + "deg"})`;
     
  }
},
confetti(){
        this.ishighscore=true
        setTimeout(()=>{
        this.cong=''
        this.text2=''
        },2000)
},
    HandleKeyboadEvents(e) {
      const newKey = e.key;
      if (newKey === "Enter") this.Restart();
      if (this.gameover) return;
      if (newKey === " ") this.paused = true;
      if (newKey === "Escape") this.paused = false;

      const keyPressed = e.key;
      const directions = {
        ArrowUp: "U",
        ArrowDown: "D",
        ArrowRight: "R",
        ArrowLeft: "L",
      };
      let direction = directions[keyPressed];
      if (!direction) return;
      this.updateDirection(direction);
    },
    async showConfetti(box) {
      if (!this.confettiCanvas) {
        let gb = document.querySelector("#game-board");
        if (!gb) return;
        this.confettiCanvas = document.createElement("canvas");
        this.confettiCanvas.style.position = "absolute";
        this.confettiCanvas.style.left = 0;
        this.confettiCanvas.style.top = 0;
        gb.appendChild(this.confettiCanvas);
      }

      this.confettiCanvas.confetti = await confetti.create(
        this.confettiCanvas,
        { resize: true }
      );

      const colors = {
        blue: "#1c91c4",
        yellow: "#e2db1c",
        green: "#1cac42",
        red: "#fb0001",
      };

      this.confettiCanvas.confetti({
        particleCount: 100,
        spread: 70,
        colors: [
          colors[box.color],
          colors[box.color],
          colors[box.color],
          "#ffffff",
        ],
        origin: {
          x: box.col / this.totalBoxes,
          y: box.row / this.totalBoxes,
        },
      });
    },
  },
});
