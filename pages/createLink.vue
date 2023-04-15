<script setup lang="ts">
import useToast from "~~/composables/useToast";

useHead({
  title: "Shorten a link",
  link: [
    {
      rel: "icon",
      href: "https://nuxt.com/icon.png",
    },
  ],
});

const { ToastQueue, addToast, deleteToast } = useToast();

const IsGenerated = ref<boolean>(false);

const LongLink = ref<string>("");

const slug = ref<string>("");

const inputChanged = (link: string) => (LongLink.value = link);

const generateLink = async () => {
  if (LongLink.value) {
    addToast("Your link is being generated");
    const { data } = await useFetch("/api/short", {
      body: {
        url: LongLink.value,
      },
      method: "POST",
    });
    deleteToast(0);
    slug.value = data.value.slug;
    IsGenerated.value = true;
    setTimeout(() => {
      IsGenerated.value = false;
    }, 1000);
  }
};
</script>

<template>
  <div>
    <main
      class="w-screen h-screen grid grid-cols-1 grid-rows-[64px_1fr] items-center justify-center"
    >
      <Navigation />
      <div class="w-full h-full flex items-center justify-center">
        <div
          class="w-5/6 sm:w-2/3 grid grid-rows-[200px_1fr] md:grid-rows-[400px_1fr] h-full items-start gap-4 md:w-1/2"
        >
          <div class="w-full h-full flex items-center justify-center">
            <transition>
              <UiToast
                v-if="ToastQueue[0]"
                :text="ToastQueue[0].text"
                :id="ToastQueue[0].id"
              />
            </transition>
          </div>
          <div class="flex flex-col gap-2">
            <div class="w-full h-fit grid grid-cols-[1fr_60px] gap-2">
              <UiInput
                @onChange="inputChanged"
                Type="text"
                Placeholder="Your long a** link"
              />
              <span
                @pointerdown="generateLink"
                :class="[
                  'w-full bg-gray-100 disabled:cursor-none border-2 cursor-pointer transition-all duration-200 border-gray-300 h-full flex justify-center items-center',
                  IsGenerated
                    ? 'fill-green-400 border-green-400'
                    : 'fill-gray-400',
                ]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                  <path
                    d="M9.55 17.575q-.2 0-.375-.063Q9 17.45 8.85 17.3L4.55 13q-.275-.275-.263-.713.013-.437.288-.712.275-.275.7-.275.425 0 .7.275L9.55 15.15l8.475-8.475q.275-.275.713-.275.437 0 .712.275.275.275.275.712 0 .438-.275.713l-9.2 9.2q-.15.15-.325.212-.175.063-.375.063Z"
                  />
                </svg>
              </span>
            </div>
            <CopyValue :ShortedLink="slug" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
