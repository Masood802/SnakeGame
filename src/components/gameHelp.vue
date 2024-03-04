<template>
    <button
      class="bg-[url(/pix/back.png)] bg-cover bg-center rounded-full w-16 h-16 fixed top-1 left-2 group"
      @click="router.push('/')"
    >
      <p
        class="absolute top-20 opacity-0 group-hover:top-16 group-hover:opacity-100 transition-all duration-300 text-center left-3"
      >
        Back
      </p>
    </button>
    <div class="w-screen h-screen bg-[url('/pix/bkg.jpg')] bg-cover bg-center">
        <div class="text-center text-3xl pt-20 text-orange-600"> Help</div>
        <p class="w-1/2 mx-auto py-4 text-center"><span class="text-center w-full px-24">Welcome to the snake mania game help page.</span><br>here you can find game help regarding playing and special items found in this game.hope you will engoy playing this game.
            <br><br>best of luck from team snake mania
        </p>
        <div class="w-full px-auto py-5 text-orange-500">
            <p class="text-center text-2xl py-4">special items</p>
            <div class="w-1/2 flex justify-between flex-col mx-auto">
                <img src="../../public/pix/+200.png" alt="" class="w-10 my-4">
                <img src="../../public/pix/cheeta.png" alt="" class="w-10 my-4">
                <img src="../../public/pix/+200.png" alt="" class="w-10 my-4">
                <img src="../../public/pix/+200.png" alt="" class="w-10 my-4">
            </div>
        </div>
    </div>

</template>

<script setup>

</script>

<style scoped>

</style>