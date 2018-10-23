import { STORAGE_KEY } from "./mutations";

const localStoragePlugin = store => {
  store.subscribe((mutation, { todos }) => {
    console.log(mutation.type, mutation.payload, todos);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  });
};

export default [localStoragePlugin];
