import { getters } from "@/store/getters";

describe("store.js", () => {
  it("should return only done items", () => {
    const state = {
      todos: [
        {
          id: 1,
          text: "Finish web app",
          done: false
        },
        {
          id: 2,
          text: "Not important",
          done: true
        }
      ]
    };
    let oneTodo = getters.doneTodos(state);
    let oneTodoCount = getters.doneTodosCount(state, getters);
    let oneTodo2 = getters.activeTodos(state);

    expect(oneTodo.length).toBe(1);
    expect(oneTodoCount).toBe(1);
    expect(oneTodo2.length).toBe(1);
  });

  it("should return a todo by id", () => {
    const state = {
      todos: [
        {
          id: 1,
          text: "Finish web app",
          done: false
        },
        {
          id: 2,
          text: "Not important",
          done: true
        }
      ]
    };

    let oneTodo = getters.getTodoById(state)(1);
    expect(oneTodo).toEqual(state.todos[0]);
  });

  it("should return the next available id", () => {
    const state = {
      todos: [
        {
          id: 1,
          text: "Finish web app",
          done: false
        },
        {
          id: 2,
          text: "Not important",
          done: true
        }
      ]
    };

    let nextId = getters.getNextId(state);
    expect(nextId).toBe(3);
  });
});
