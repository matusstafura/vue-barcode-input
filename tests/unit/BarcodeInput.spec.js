import { mount } from "@vue/test-utils";
import BarcodeInput from "../../src/BarcodeInput";

describe("BarcodeInput", () => {
  it("checks input", () => {
    const wrapper = mount(BarcodeInput);
    const defaultQty = wrapper.find("#qty").element.value;
    expect(defaultQty).toBe("1");
  });
});
