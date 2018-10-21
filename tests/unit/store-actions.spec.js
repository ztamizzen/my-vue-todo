import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import BootstrapVue from "bootstrap-vue";
import Counter from "@/components/Counter";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(BootstrapVue);

describe("actions", () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      increment: jest.fn(),
      decrement: jest.fn()
    };
    store = new Vuex.Store({
      state: {
        count: 0
      },
      actions
    });
  });

  it("should increment count on click", () => {
    const wrapper = shallowMount(Counter, { store, localVue });
    const button = wrapper.find("#increment");
    button.trigger("click");
    expect(actions.increment).toHaveBeenCalled();
  });

  it("should decrement count on click", () => {
    const wrapper = shallowMount(Counter, { store, localVue });
    const button = wrapper.find("#decrement");
    button.trigger("click");
    expect(actions.decrement).toHaveBeenCalled();
  });
});
