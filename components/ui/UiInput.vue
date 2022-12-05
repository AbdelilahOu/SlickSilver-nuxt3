<script setup lang="ts">
const props = defineProps({
  Placeholder: {
    type: String,
    required: false,
  },
  Type: {
    type: String,
    required: true,
    default: "text",
  },
  Value: {
    type: String,
    required: false,
  },
  Disabled: {
    type: Boolean,
    required: false,
  },
});

const inputValue = ref<string>(!props.Value ? "" : props.Value);

watch(
  () => props.Value,
  (newShorteLink) => {
    if (newShorteLink) {
      inputValue.value = newShorteLink;
    }
  }
);
</script>

<template>
  <div class="w-full h-full">
    <input
      class="w-full h-fill focus:outline-0 disabled:text-gray-400 text-black/90 px-3 py-2 rounded-sm border-2 border-gray-300 focus:border-2 focus:border-blue-200 transition-all duration-200"
      @input="$emit('onChange', inputValue)"
      v-model="inputValue"
      :disabled="Disabled"
      :type="Type"
      :placeholder="Placeholder"
    />
  </div>
</template>
