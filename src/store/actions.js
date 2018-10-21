export const actions = {
  addTodo({ commit }, text) {
    commit("addTodo", text);
  },
  removeTodo({ commit }, todo) {
    commit("removeTodo", todo);
  },
  toggleTodo({ commit }, todo) {
    commit("toggleTodo", todo);
  },
  editTodo({ commit }, { todo, value }) {
    commit("toggleTodo", {
      todo,
      text: value
    });
  },
  toggleAll({ state, commit }) {
    state.todos.forEach(todo => {
      commit("toggleTodo", todo);
    });
  },
  clearCompleted({ state, commit }) {
    state.todos.filter(todo => todo.done).forEach(todo => {
      commit("removeTodo", todo);
    });
  },
  increment: ({ commit }) => commit("increment"),
  decrement: ({ commit }) => commit("decrement")
};
