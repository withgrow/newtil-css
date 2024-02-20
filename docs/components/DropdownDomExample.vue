<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const dropdownButton = document.getElementById("dropdown-btn");
  const dropdownList = document.getElementById("dropdown-list");

  dropdownButton.addEventListener("click", function () {
    dropdownList.classList.toggle("active");
  });
});
</script>

<template>
  <div class="n-dropdown">
    <button id="dropdown-btn" type="button" class="n-btn">버튼</button>
    <ul id="dropdown-list" class="z-index:1">
      <li>item-1</li>
      <li>item-2</li>
      <li>item-3</li>
    </ul>
  </div>
</template>

<style scoped></style>
