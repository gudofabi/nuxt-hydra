<template>
  <div class="relative mb-7">
    <label
      v-if="$attrs.label"
      class="block text-sm font-medium text-gray-700 mb-1"
      >{{ $attrs?.label }}</label
    >
    <select
      v-model="data_internalValue"
      v-bind="$attrs"
      class="kp-input"
      :class="{ '!border-red-500': comp_validationErrors }"
    >
      <option value="" disabled>{{ $attrs.placeholder }}</option>
      <option v-for="option in options" :key="option._id" :value="option.name">
        {{ option.name }}
      </option>
    </select>
    <p
      v-show="comp_validationErrors"
      class="absolute -bottom-6 text-sm text-red-500 transition-all ease-in-out px-2 pt-2"
    >
      {{ comp_validationErrors }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue?: string | number | null;
  validation?: Object | Array<Object> | any;
  options: Object | Array<Object> | any;
}>();

const data_internalValue = ref(props.modelValue);

watch(
  () => props.modelValue,
  (value) => {
    data_internalValue.value = value;
  }
);

const comp_validationErrors = computed(() => {
  return props.validation && props.validation.$error
    ? props.validation?.$errors[0].$message
    : "";
});
</script>
