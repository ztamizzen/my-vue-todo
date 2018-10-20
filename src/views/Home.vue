<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="box text-left">
      <img alt="Vue logo" src="../assets/logo.png" class="float-left">
      <p>One November night in the year 1782, so the story runs, two brothers sat over their winter fire in the little French town of Annonay, watching the grey smoke-wreaths from the hearth curl up the wide chimney.</p>
      <p class="relative">Their names were Stephen and Joseph Montgolfier, they were papermakers by trade, and were noted as possessing thoughtful minds and a deep interest in all scientific knowledge and new discovery.</p>
      <p>Before that night—a memorable night, as it was to prove—hundreds of millions of people had watched the rising smoke-wreaths of their fires without drawing any special inspiration from the fact.”</p>
    </div>
    <todo />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Todo from "@/components/Todo.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    Todo
  }
};
</script>
<style lang="scss">
.box {
  img {
    margin-right: 1rem;
    margin-top: -0.7rem;
    shape-outside: polygon(100% 0%, -5% 0%, 48% 99%);
  }
}
</style>
