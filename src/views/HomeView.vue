<script setup></script>

<template>
  <main
    class="bg-[url(./pix/peakpx.jpg)] flex-col bg-cover all-center flex h-screen w-screen relative"
  >
    <img src="/pix/title.png" alt="" class="absolute top-8" />
    <RouterLink
      to="/game-view"
      class="bg-[url(/pix/play.png)] bg-cover bg-center shadow rounded-full text-3xl text-green-600 w-24 h-24 font-bold"
    ></RouterLink>
  </main>
</template>
