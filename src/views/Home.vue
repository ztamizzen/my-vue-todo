<template>
  <div class="home">
    <div class="box">
      <img alt="Vue logo" src="../assets/logo.png">
      <p>One November night in the year 1782, so the story runs, two brothers sat over their winter fire in the little French town of Annonay, watching the grey smoke-wreaths from the hearth curl up the wide chimney.</p>
      <p class="relative">Their names were Stephen and Joseph Montgolfier, they were papermakers by trade, and were noted as possessing thoughtful minds and a deep interest in all scientific knowledge and new discovery.</p>
      <p>Before that night—a memorable night, as it was to prove—hundreds of millions of people had watched the rising smoke-wreaths of their fires without drawing any special inspiration from the fact.”</p>
    </div>
    <todo />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Todo from '@/components/Todo.vue';

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
  text-align: left;
  img {
    float: left;
    margin-top: -2.9rem;
    shape-outside: polygon(110% 0%, -10% 0%, 50% 110%);
  }
}
</style>

