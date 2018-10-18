import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import { mutations } from "@/store/mutations";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: {
        msg
      }
    });
    expect(wrapper.text()).toMatch(msg);
  });

  it("should have mutations to add todos", () => {
    const state = {
      todos: [
        {
          id: 1,
          text: "Finish web app",
          done: false
        }
      ]
    };
    const text = "Tickle a Koala";
    const text2 = "Run away from angry Koala";

    mutations.addTodo(state, text);
    expect(state.todos.length).toBe(2);
    expect(state.todos[1].id).toBe(2);
    expect(state.todos[1].text).toBe(text);

    mutations.addTodo(state, text2);
    expect(state.todos.length).toBe(3);
    expect(state.todos[2].id).toBe(3);
    expect(state.todos[2].text).toBe(text2);
  });

  it("should have mutations that toggle the done state of a todo", () => {
    const state = {
      todos: [
        {
          id: 1,
          text: "Finish web app",
          done: false
        }
      ]
    };
    expect(state.todos[0].done).toBe(false);

    mutations.toggleTodo(state, state.todos[0]);
    expect(state.todos[0].done).toBe(true);

    mutations.toggleTodo(state, state.todos[0]);
    expect(state.todos[0].done).toBe(false);
  });

  it("should have mutations that remove a todo from state", () => {
    const state = {
      todos: [
        {
          id: 1,
          text: "Finish web app",
          done: false
        },
        {
          id: 2,
          text: "Write more tests",
          done: false
        },
        {
          id: 3,
          text: "Remove this todo",
          done: true
        }
      ]
    };

    mutations.removeTodo(state, state.todos[2]);
    expect(state.todos.length).toBe(2);
  });
});
