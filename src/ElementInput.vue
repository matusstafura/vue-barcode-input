<template>
  <div class="py-4 mx-auto">
    <div class="items-center -mx-2 flex">
      <div class="w- mx-2">
        <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200 text-center"
          >Qty</label
        >
        <input
          id="qty"
          name="qty"
          v-model="qty"
          class="block w-full px-4 py-2 text-gray-700 bg-white border text-left rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          type="text"
        />
      </div>

      <div class="w-full mx-2 md:mt-0">
        <label
          class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
          >SKU</label
        >
        <input
          id="sku"
          type="text"
          @change="emitSku"
          v-model="sku"
          ref="skuInput"
          class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementInput',
  data() {
    return {
      sku: "",
      qty: 1
    }
  },
  methods: {
    emitSku(event) {
      this.$emit("addItem", this.qty, event.target.value);
      this.qty = 1;
      event.target.value = "";
    },
    focusInput() {
      this.$refs.skuInput.focus();
    },
  },
  mounted() {
    this.focusInput();
  },
};
</script>
