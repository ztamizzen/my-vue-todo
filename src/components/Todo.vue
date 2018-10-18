<template>
    <div id="todos">
        <h2>Todos to do: {{ todos.length }}</h2>
        <ul class="todo-list">
            <li v-for="(todo, index) in todos" :key="index" class="todo-list__list-item">
              <a href="#" @click.prevent="toggleTodo(todo)"
                 class="todo-list__list-item-link"
                 :class="{'todo-list__list-item-link-done': todo.done }">{{ todo.text }}</a>
              <a href="#" @click.prevent="removeTodo(todo)"
                 class="todo-list__list-item_remove-link">&times;</a>
            </li>
        </ul>
        <add-todo />
    </div>
</template>

<script>
import AddTodo from "@/components/AddTodo";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "Todo",
  components: {
    AddTodo
  },
  computed: {
    ...mapState(["todos"]),
    ...mapGetters([
      "doneTodos",
      "doneTodosCount",
      "activeTodos",
      "getTodoById",
      "getNextId"
    ])
  },
  methods: {
    ...mapActions(["toggleTodo", "removeTodo"])
  }
};
</script>

<style lang="scss">
#todos {
  background-image: linear-gradient(to top, #35495e, #41b883);
  border: 2px solid #35495e;

  h2 {
    color: #eee;
  }

  .todo-list {
    background-color: rgba(255, 255, 255, 0.75);
    border: 3px solid rgba(65, 184, 131, 0.75);
    border-radius: 1rem;
    box-shadow: 0 1rem 1rem rgba(65, 184, 131, 0.5);
    list-style: none;
    margin: 0 auto 1rem;
    padding: 1rem;
    text-align: left;
    width: fit-content;

    &__list-item {
      display: flex;
      justify-content: space-between;
      padding: 0.5rem 1rem;

      &-link {
        color: #35495e;
        margin-right: 1rem;
        text-decoration: none;

        &-done {
          color: lighten(#35495e, 20%);
          text-decoration: line-through;
        }
      }
      &_remove-link {
        border-radius: 50%;
        text-decoration: none;
      }
    }
  }
}
</style>
