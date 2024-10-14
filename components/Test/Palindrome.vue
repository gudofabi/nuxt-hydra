<template>
  <h2>Palindrome</h2>
  <input v-model="inputText" placeholder="Enter word" />
  <button @click="func_clickButton">Submit</button>
  <p v-if="result != ''">{{ result }}</p>
</template>
<script setup lang="ts">
const inputText = ref("");
const result = ref("");

const func_clickButton = () => {
  const cleanedText = inputText.value
    .replace(/[^A-Za-z0-9]/g, "")
    .toLowerCase();
  const reversedText = cleanedText.split("").reverse().join("");

  console.log(cleanedText);
  console.log(reversedText);
  if (cleanedText === reversedText) {
    result.value = "This is a palidrome";
  } else {
    result.value = "Are you kidding me?";
  }
};
</script>
