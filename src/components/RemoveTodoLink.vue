<template>
    <a href="#"
       @click.prevent="removeTodo(todo)"
       class="todo-list__list-item_remove-link">&times;</a>    
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "RemoveTodoLink",
  props: {
    todo: Object
  },
  methods: {
    ...mapActions(["removeTodo"])
  }
};
</script>
