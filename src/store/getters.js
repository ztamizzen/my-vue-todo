export const getters = {
  doneTodos: state => {
    return state.todos.filter(todo => todo.done);
  },
  doneTodosCount: (state, getters) => {
    return getters.doneTodos.length;
  },
  activeTodos: state => {
    return state.todos.filter(todo => !todo.done);
  },
  activeTodosCount: (state, getters) => {
    return getters.activeTodos.length;
  },
  getTodoById: state => id => {
    return state.todos.find(todo => todo.id === id);
  },
  getNextId: state => {
    return state.todos[state.todos.length - 1].id + 1;
  }
};
