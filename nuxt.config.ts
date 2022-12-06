// import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  css: ["~/assets/tailwind.css"],
  buildModules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  components: true,
  // serverMiddleware: [
  //   {
  //     path: "api/:TheSlug",
  //     handler: "./server/middleware/redirect.ts",
  //   },
  // ],
});
