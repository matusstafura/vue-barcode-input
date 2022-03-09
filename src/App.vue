<template>
    <div>
        <BarcodeInput :dump="true" @products="showData"></BarcodeInput>
    </div>
</template>

<script>
import BarcodeInput from "./BarcodeInput.vue";
export default {
    data() {
        return {
            products: ''
        }
    },
    methods: {
        showData(products) {
            console.log(products)
        },
        temp() {
            console.log(this.products)
        }
    },
    components: { BarcodeInput }
}
</script>

<style>

</style>