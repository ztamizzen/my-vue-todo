<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>It will also show the todo, just to prove that it works as a component.</p>
    <todo />
  </div>
</template>

<script>
import Todo from "@/components/Todo";
export default {
  name: "About",
  components: {
    Todo
  }
};
</script>
