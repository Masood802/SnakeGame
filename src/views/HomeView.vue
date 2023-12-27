<script setup></script>

<template>
  <main
    class="bg-[url(./pix/peakpx.jpg)] flex-col bg-cover all-center flex h-[100vh] w-[100vw]"
  >
    <img
      src="../../public/pix/title.png"
      alt=""
      class="absolute top-24 w-[40vw]"
    />
    <RouterLink
      to="/game-view"
      class="bg-[url(./pix/play.png)] bg-cover bg-center shadow rounded-full text-3xl text-green-600 w-24 h-24 font-bold"
    ></RouterLink>
  </main>
</template>
