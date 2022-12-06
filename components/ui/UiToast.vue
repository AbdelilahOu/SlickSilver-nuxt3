<script setup lang="ts">
import { useToastStore } from "~~/stores/toastStore";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
});

const Progress = ref<number>(-10);
const StopProgress = ref<ReturnType<typeof setInterval>>();
const toastStore = useToastStore();

onMounted(() => {
  StopProgress.value = setInterval(() => {
    Progress.value += 1;
    if (Progress.value == 100) abortProgress();
  }, 30);
});

onUnmounted(() => clearInterval(StopProgress.value));

const abortProgress = () => {
  toastStore.deleteToast(props.id);
  clearInterval(StopProgress.value);
};
</script>

<template>
  <div class="w-fit h-10 relative bg-gray-300 rounded-sm">
    <div
      class="bg-gray-200"
      :style="`position:absolute;width:${Progress}%;height:100%;`"
    ></div>
    <div class="grid grid-cols-[1fr_40px] gap-2 items-center pl-4 py-2">
      <span class="z-10">{{ props.text }}</span>
      <span
        @click="abortProgress"
        class="w-full h-full flex cursor-pointer fill-primary transition-all duration-200 transform hover:fill-gray-800 items-center justify-end pr-[12px]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
          <path
            d="m12 13.4-4.9 4.9q-.275.275-.7.275-.425 0-.7-.275-.275-.275-.275-.7 0-.425.275-.7l4.9-4.9-4.9-4.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l4.9 4.9 4.9-4.9q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7L13.4 12l4.9 4.9q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275Z"
          />
        </svg>
      </span>
    </div>
  </div>
</template>
