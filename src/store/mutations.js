export const STORAGE_KEY = "my-vue-todo";

export const mutations = {
  addTodo(state, text) {
    let nextId = 1;
    if (state.todos.length) {
      nextId = state.todos[state.todos.length - 1].id + 1;
    }
    let todo = {
      id: nextId,
      text,
      done: false
    };
    state.todos = [...state.todos, todo];
  },
  toggleTodo(state, todo) {
    let index = state.todos.indexOf(todo);
    if (index !== -1) {
      todo.done = !todo.done;
    }
  },
  removeTodo(state, todo) {
    let index = state.todos.indexOf(todo);
    if (index !== -1) {
      state.todos = state.todos
        .slice(0, index)
        .concat(state.todos.slice(index + 1));
    }
  }
};