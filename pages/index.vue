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

useMeta({
  meta: [{ name: "description", content: "link shortner website" }],
});

useServerSeoMeta({
  title: "linkshortner",
  ogTitle: "linkshortner",
  description: "This is linkshortner, let me tell you all about it.",
  ogDescription: "This is linkshortner, let me tell you all about it.",
});
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
            :height="350"
            :width="350"
            :speed="0.5"
            @onLoopComplete="$router.push('/createLink')"
          />
        </client-only>
      </div>
    </div>
  </main>
</template>
