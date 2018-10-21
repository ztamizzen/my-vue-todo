export const STORAGE_KEY = "my-vue-todo";

// All mutations should be immutable.
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
    state.todos = immutablePush(state.todos, todo);
  },
  toggleTodo(state, todo) {
    let index = state.todos.indexOf(todo);
    if (index !== -1) {
      // Replaces the existing Todo with a new Todo with the same "id" and "text" but with "done" toggled.
      // Returns a new array.
      state.todos = immutableSplice(state.todos, index, 1, {
        id: todo.id,
        text: todo.text,
        done: !todo.done
      });
    }
  },
  removeTodo(state, todo) {
    let index = state.todos.indexOf(todo);
    if (index !== -1) {
      state.todos = immutableDelete(state.todos, index);
    }
  },
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  }
};

// https://vincent.billey.me/pure-javascript-immutable-array/
// ES2015
function immutablePush(arr, newEntry) {
  return [...arr, newEntry];
}

function immutableSplice(arr, start, deleteCount, ...items) {
  return [...arr.slice(0, start), ...items, ...arr.slice(start + deleteCount)];
}

function immutableDelete(arr, index) {
  return arr.slice(0, index).concat(arr.slice(index + 1));
}
