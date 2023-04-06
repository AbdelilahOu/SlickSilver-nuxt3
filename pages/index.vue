<script setup lang="ts">
useHead({
  title: "SlickSilver",
  link: [
    {
      rel: "icon",
      href: "https://nuxt.com/icon.png",
    },
  ],
});

const Completed = () => {
  useRouter().push("/createLink");
};
const speed = 0.5;
</script>

<template>
  <main class="w-full h-full flex flex-col items-center justify-center">
    <div class="grid grid-cols-1 w-full">
      <div
        class="h-full w-full text-center py-3 text-lg font-semibold text-white px-4"
      >
        <client-only>
          <Vue3Lottie
            animationLink="https://assets8.lottiefiles.com/packages/lf20_bsbw5cpq.json"
            :height="500"
            :width="500"
            :speed="speed"
            @onLoopComplete="Completed"
          />
        </client-only>
      </div>
    </div>
  </main>
</template>
