<template>
    <form @submit.prevent="addTodo($refs.text.value); $refs.text.value = ''">
        <input type="text" ref="text">
        <button>Ny todo</button>
    </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "AddTodo",
    methods: {
        ...mapActions([
            "addTodo"
        ])
    }
}
</script>

