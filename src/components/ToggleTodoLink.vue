<template>
    <a href="#"
       @click.prevent="toggleTodo(todo)"
       class="todo-list__list-item-link"
       :class="{'todo-list__list-item-link-done': todo.done }">{{ todo.text }}</a>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ToggleTodoLink",
  props: {
    todo: Object
  },
  methods: {
    ...mapActions(["toggleTodo"])
  }
};
</script>
