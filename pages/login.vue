<template>
  <div
    class="xl:fixed w-full flex items-center justify-center xl:h-screen py-24 xl:pt-0"
  >
    <div
      class="rounded-xl bg-white px-6 sm:px-8 py-8 sm:py-10 shadow-4xl w-[90%] sm:w-96 text-center xl:-mt-[300px]"
    >
      <h2 class="text-2xl lg:text-3xl mb-4">Login</h2>
      <p class="text-base mb-8 text-gray-500 leading-5">
        This is a sample login, we will update it later.
      </p>
      <FormInputField
        v-model="data_form.username"
        v-bind="{
          placeholder: 'Username',
          type: 'text',
        }"
        :validation="$v.username"
      />
      <FormInputField
        v-model="data_form.password"
        v-bind="{
          placeholder: 'Password',
          type: 'password',
        }"
        :validation="$v.password"
      />
      <div class="text-right">
        <p
          class="mb-3 text-base font-semibold hover:text-secondary text-primary"
        >
          <NuxtLink href="/forgot-password" class="">Forgot Password?</NuxtLink>
        </p>
        <button class="kp-btn kp-btn-primary text-primary" @click="func_login">
          Login
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
useHead({
  title: "Login - Hydra",
  meta: [
    {
      name: "description",
      content: "Hail Hydra Project Management",
    },
  ],
});

import { useVuelidate } from "@vuelidate/core";
import { requiredMessage } from "~/utils/validators";

/**** Auth Store */
// const authStore = useAuthStore();

const data_form = reactive({
  username: "",
  password: "",
});

const rules = computed(() => ({
  username: {
    required: requiredMessage(),
  },
  password: {
    required: requiredMessage(),
  },
}));

const $v = useVuelidate(rules, data_form);

/*** Functions */
const func_login = () => {
  $v.value.$validate();
  if (!$v.value.$error) {
    //   authStore.login(data_form);
    console.log(data_form);
  }
};
</script>
