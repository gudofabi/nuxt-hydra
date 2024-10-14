<template>
  <h2>Read the Number Component</h2>
  <input v-model="inputNumber" placeholder="Enter a number between 1 - 500" />
  <button @click="func_clickButton">Submit</button>
  <ul v-if="results.length">
    <li v-for="(result, index) in results" :key="index">{{ result }}</li>
  </ul>
</template>
<script setup lang="ts">
const inputNumber = ref(null);
const results = ref([]);

const func_clickButton = () => {
  const num = parseInt(inputNumber.value);

  if (num >= 1 && num <= 500) {
    results.value = [];

    for (let i = 1; i <= num; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        results.value.push("Benchmarking");
      } else if (i % 3 === 0) {
        results.value.push("Bench");
      } else if (i % 5 === 0) {
        results.value.push("Marking");
      } else {
        results.value.push(i);
      }
    }
  } else {
    alert("Please enter a number between 1 to 500");
  }
};
</script>
