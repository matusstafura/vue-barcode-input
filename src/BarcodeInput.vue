<template>
  <div class="max-w-screen-md m-auto">
    <input type="text" v-model="qty" class="w-16 border border-black" />
    <input
      type="text"
      v-model="sku"
      class="border border-black"
      @change="addItem"
      ref="sku"
    />

    <table class="w-full my-8">
      <thead>
        <tr class="bg-gray-200">
          <td class="w-2/12">#</td>
          <td class="w-2/12">qty</td>
          <td class="w-2/12">sku</td>
          <td class="w-2/12">remove</td>
        </tr>
      </thead>
      <tr v-for="product in products" :key="product.index" class="bg-gray-100">
        <td>{{ product.index }}</td>
        <td>
          <button @click="decreaseQty(product.index)">-</button>
          {{ product.qty }}
          <button @click="increaseQty(product.index)">+</button>
        </td>
        <td>{{ product.sku }}</td>
        <td>
          <button @click="removeItem(product.index)">remove</button>
        </td>
      </tr>
    </table>

    {{ increment() }}

    <p v-for="product in products" :key="product.sku">
      {{ product.index }}
    </p>

    {{ products }}

    <button @click="temp" class="block px-4 py-2 m-auto text-white bg-blue-400">
      Upload data to server
    </button>
  </div>
</template>

<script>

export default {
  name: 'BarcodeInput',
  data() {
    return {
      index: 0,
      qty: 1,
      sku: "",
      products: [
        // { index: 1, qty: 1, sku: "217888566461", skladom: "-1", incoming: "2" },
        // { index: 2, qty: 1, sku: "217334098018", skladom: "0", incoming: 0 },
      ],
      skladom: 0,
      incoming: 0,
    };
  },
  methods: {
    getDetails(sku) {
          this.products.push({
            index: this.increment(),
            qty: this.qty,
            sku: this.sku,
            skladom: this.skladom,
            incoming: this.incoming,
          });
          this.sku = "";
    },
    temp() {
      alert(this.products[0]["sku"]);
    },
    addItem() {
      this.getDetails(this.sku);
    },
    increaseQty(index) {
      const x = this.products.findIndex((e) => e["index"] == index);
      this.products[x]["qty"] += 1;
    },
    decreaseQty(index) {
      const x = this.products.findIndex((e) => e["index"] == index);
      this.products[x]["qty"] -= 1;
    },
    increment() {
      if (this.products.length != 0) {
        return this.products.slice(-1)[0].index + 1;
      }
      return 1;
    },
    removeItem(index) {
      const x = this.products.findIndex((e) => e["index"] == index);
      this.products.splice(x, 1);
    },
    focusInput() {
      this.$refs.sku.focus();
    },
  },
  mounted() {
    this.focusInput();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
