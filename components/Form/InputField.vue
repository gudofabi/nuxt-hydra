<template>
  <div class="relative mb-7 text-left">
    <label
      v-if="$attrs.label"
      class="block text-sm font-medium text-gray-700 mb-1"
      >{{ $attrs?.label }}</label
    >
    <div class="relative">
      <input
        v-if="$attrs.type === 'password'"
        v-model="data_internalValue"
        v-bind="$attrs"
        class="kp-input"
        :type="data_showPassword ? 'text' : 'password'"
        :class="{ '!border-red-500': comp_validationErrors }"
      />
      <input
        v-else
        v-model="data_internalValue"
        v-bind="$attrs"
        class="kp-input"
        :class="{ '!border-red-500': comp_validationErrors }"
      />
      <span
        v-if="$attrs.type == 'password'"
        class="absolute inset-y-0 right-3 flex items-center leading-5"
        @click="data_showPassword = !data_showPassword"
      >
        <i
          :class="
            data_showPassword
              ? 'ph ph-eye-slash text-gray-400'
              : 'ph ph-eye text-gray-700'
          "
          class="cursor-pointer text-2xl"
        ></i>
      </span>
      <span
        v-if="$attrs.suffix"
        class="ml-2 text-gray-400 font-sf-compact font-semibold absolute right-0 py-2 pr-10 text-lg"
      >
        {{ $attrs.suffix }}
      </span>
    </div>
    <p
      v-if="comp_validationErrors"
      class="absolute -bottom-6 text-sm text-red-500 transition-all ease-in-out px-2"
    >
      {{ comp_validationErrors }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue?: string | number | null;
  validation?: Object | Array<Object> | any;
}>();

const data_internalValue = ref(props.modelValue);
const data_showPassword = ref(false);

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
