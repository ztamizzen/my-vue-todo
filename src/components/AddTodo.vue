<template>
  <b-form @submit.prevent="onSubmit" @reset="onReset" class="text-left mb-3" :show="show">
    <b-input-group>
      <b-form-input id="todo-input" type="text" v-model.trim="form.newTodo" placeholder="Enter a todo item..." required/>
      <b-button type="submit" variant="primary" slot="append">New todo</b-button>
    </b-input-group>
    <p v-if="form.newTodo.length" class="alert alert-success">{{ form.newTodo }}</p>
  </b-form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddTodo",
  data() {
    return {
      form: {
        newTodo: ""
      },
      show: true
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit() {
      this.addTodo(this.form.newTodo);
      this.form.newTodo = "";
    },
    onReset(evt) {
      evt.preventDefault();
      this.form.newTodo = "";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
