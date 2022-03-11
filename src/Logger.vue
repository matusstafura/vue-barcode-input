<template>
  <div class="bg-gray-100 p-4 mt-8">
    <span class="font-bold">Log:</span>
    <p>Next index: {{ increment }}</p>
    <p>Products: {{ products }}</p>
  </div>
</template>

<script>
export default {
  props: ["increment", "products"],
};
</script>

<style></style>
