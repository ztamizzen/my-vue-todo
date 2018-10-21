<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>It will also show the <mark>Todo</mark>, just to prove that it works as a component.</p>
    <counter />
    <b-link to="/">Back to Home</b-link>
  </div>
</template>

<script>
import Counter from "@/components/Counter";
export default {
  name: "About",
  components: {
    Counter
  }
};
</script>
