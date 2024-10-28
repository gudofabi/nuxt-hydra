<template>
  <template>
    <nav class="bg-gray-800 text-white shadow-lg">
      <div
        class="container mx-auto px-4 py-3 flex justify-between items-center"
      >
        <!-- Logo Section -->
        <NuxtLink
          to="/"
          class="text-2xl font-bold text-white flex items-center"
        >
          Fortify
        </NuxtLink>

        <!-- Desktop Links Section -->
        <div class="hidden md:flex space-x-6 items-center">
          <NuxtLink to="/" class="text-gray-300 hover:text-white"
            >Home</NuxtLink
          >

          <!-- Authentication Links -->
          <NuxtLink to="/login" class="text-gray-300 hover:text-white"
            >Login</NuxtLink
          >
          <NuxtLink to="/register" class="text-gray-300 hover:text-white"
            >Register</NuxtLink
          >
          <NuxtLink to="/dashboard" class="text-gray-300 hover:text-white">
            Dashboard
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden text-gray-300 focus:outline-none"
          @click="toggleMenu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="md:hidden bg-gray-700 text-gray-300 p-4">
        <NuxtLink to="/" class="block py-2 hover:text-white">Home</NuxtLink>
        <NuxtLink to="/about" class="block py-2 hover:text-white"
          >About</NuxtLink
        >
        <NuxtLink to="/contact" class="block py-2 hover:text-white"
          >Contact</NuxtLink
        >
        <NuxtLink to="/login" class="block py-2 hover:text-white"
          >Login</NuxtLink
        >
        <NuxtLink to="/register" class="block py-2 hover:text-white"
          >Register</NuxtLink
        >
        <NuxtLink
          to="/dashboard"
          class="block py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
        >
          Dashboard
        </NuxtLink>
      </div>
    </nav>
  </template>
</template>
<script setup lang="ts">
import { ref } from "vue";

// Reactive state for mobile menu
const isMenuOpen = ref(false);

// Toggle menu function
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
