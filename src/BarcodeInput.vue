<template>
  <div class="w-1/2 m-auto">

    <ElementInput @add-item="getDetails"></ElementInput>

    <table class="w-full my-8">
      <thead>
        <tr class="bg-gray-200">
          <td class="w-1/12 p-2">#</td>
          <td class="w-2/12 p-2">qty</td>
          <td class="w-7/12 p-2">sku</td>
          <td class="w-2/12 p-2">action</td>
        </tr>
      </thead>
      <tr v-for="product in products" :key="product.index" class="bg-gray-100">
        <td class="p-2">{{ product.index }}</td>
        <td class="p-2">
          <div class="flex">
            <button
              data-action="decrement"
              @click="decreaseQty(product.index)"
              class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-8 rounded-l cursor-pointer outline-none"
            >
              <span class="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              v-model="product.qty"
              class="outline-none focus:outline-none text-center w-8 bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none"
            />
            <button
              data-action="increment"
              @click="increaseQty(product.index)"
              class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-8 rounded-r cursor-pointer"
            >
              <span class="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </td>
        <td class="p-2">{{ product.sku }}</td>
        <td class="p-2">
          <button @click="removeItem(product.index)">remove</button>
        </td>
      </tr>
    </table>

    <Logger :products="products" :increment="incrementIndex" v-show="dump" ></Logger>
  </div>
</template>

<script>
import ElementInput from "./ElementInput.vue";
import Logger from "./Logger.vue";

export default {
  name: "BarcodeInput",
  props: {
    dump: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      index: 0,
      products: [],
    };
  },
  computed: {
    incrementIndex() {
      return this.increment();
    },
  },
  methods: {
    getDetails(qty, sku) {
      const match = this.products.filter((e) => e["sku"] == sku);
      if (match.length != 0) {
        // Add Notification
        console.log("exists");
      } else {
        this.qty = qty
        this.products.push({
          index: this.increment(),
          qty: parseInt(qty),
          sku: sku,
        });
      }
      this.sku = "";
      this.$emit("products", this.products);
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
  },
  components: { ElementInput, Logger },
};
</script>
