<template>
    <div id="todos" class="d-flex flex-column align-items-center mb-5">
        <h2>Todos to do: {{ activeTodosCount }}</h2>
        <ul class="todo-list">
            <li v-for="(todo, index) in todos" :key="index" class="todo-list__list-item d-flex justify-content-between align-items-center">
              <toggle-todo-link :todo="todo" />
              <remove-todo-link :todo="todo" />
            </li>
        </ul>
        <add-todo />
        <transition name="bounce" mode="out-in">
          <b-button v-if="showClear" variant="danger" @click="clearCompleted()" class="mb-3">Clear finished</b-button>
        </transition>
    </div>
</template>

<script>
import AddTodo from "@/components/AddTodo";
import ToggleTodoLink from "@/components/ToggleTodoLink";
import RemoveTodoLink from "@/components/RemoveTodoLink";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "Todo",
  components: {
    AddTodo,
    ToggleTodoLink,
    RemoveTodoLink
  },
  computed: {
    ...mapState(["todos"]),
    ...mapGetters([
      "doneTodos",
      "doneTodosCount",
      "activeTodos",
      "activeTodosCount",
      "getTodoById",
      "getNextId"
    ]),
    showClear() {
      return this.doneTodosCount > 0;
    }
  },
  methods: {
    ...mapActions(["toggleTodo", "removeTodo", "clearCompleted"])
  }
};
</script>

<style lang="scss">
#todos {
  background-image: linear-gradient(to top, #35495e, #41b883);
  border: 2px solid #35495e;
  box-shadow: 0 1rem 1rem -0.5rem #00000070;

  h2 {
    color: #eee;
  }

  .todo-list {
    background-color: rgba(255, 255, 255, 0.75);
    border: 3px solid rgba(65, 184, 131, 0.75);
    border-radius: 1rem;
    box-shadow: 0 1rem 1rem rgba(65, 184, 131, 0.5);
    list-style: none;
    margin: 1rem;
    padding: 1rem;
    text-align: left;

    &__list-item {
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
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
