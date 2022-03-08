import { mount } from "@vue/test-utils";
import BarcodeInput from "../../src/BarcodeInput";

describe("BarcodeInput", () => {
  it("sets default qty", () => {
    const wrapper = mount(BarcodeInput);
    const defaultQty = wrapper.find("#qty").element.value;
    expect(defaultQty).toBe("1");
  });

  it("adds skus to products array", () => {
    const wrapper = mount(BarcodeInput);
    const defaultQty = wrapper.find("#sku");
    wrapper.vm.getDetails("26918921");
    wrapper.vm.getDetails("77256270");
    expect(wrapper.vm.products.length).toBe(2);
  });

  it("allows only unique skus", () => {
    const wrapper = mount(BarcodeInput);
    wrapper.vm.getDetails("1234");
    wrapper.vm.getDetails("1234");
    expect(wrapper.vm.products.length).toBe(1);
  });
});
