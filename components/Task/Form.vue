<template>
  <div class="max-w-lg mx-auto my-10 p-5 bg-white rounded-lg shadow">
    <div class="mb-6">
      <FormInputField
        v-model="data_form.title"
        v-bind="{
          placeholder: 'Title',
          type: 'text',
          label: 'Title',
        }"
        :validation="$v.title"
      />
    </div>

    <div class="mb-6">
      <FormSelectField
        :options="[
          { name: 'pending' },
          { name: 'in_progress' },
          { name: 'completed' },
        ]"
        v-model="data_form.status"
        v-bind="{
          placeholder: 'Status',
          label: 'Status',
        }"
        :validation="$v.status"
      />
    </div>

    <div class="mb-6">
      <FormSelectField
        :options="[{ name: 'low' }, { name: 'medium' }, { name: 'high' }]"
        v-model="data_form.priority"
        v-bind="{
          placeholder: 'Priority',
          label: 'Priority',
        }"
        :validation="$v.priority"
      />
    </div>

    <button
      @click="func_createTask"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
    >
      Submit
    </button>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Create - Task Management",
  meta: [
    {
      name: "description",
      content: "Hail Hydra Project Management",
    },
  ],
});

import { useVuelidate } from "@vuelidate/core";
import { requiredMessage } from "~/utils/validators";

/** Task Store */
const taskStore = useTaskStore();

const data_form = reactive({
  title: null,
  status: null,
  priority: null,
});

const rules = computed(() => ({
  title: {
    required: requiredMessage(),
  },
  status: {
    required: requiredMessage(),
  },
  priority: {
    required: requiredMessage(),
  },
}));

const $v = useVuelidate(rules, data_form);

/** Functions */
const func_createTask = () => {
  $v.value.$validate();
  if (!$v.value.$error) {
    taskStore.create(data_form);
  }
};
</script>
