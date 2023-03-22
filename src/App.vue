<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div class="font-mono">
    <header class="header">
      <ul class="sm:text-center md:grid gap-4 grid-cols-4">
        <a class="sm:p-1" href=""><li>Home</li></a>
        <a class="sm:p-1" href=""><li>Experiencia</li></a>
        <a class="sm:p-1" href=""><li>Portfólio</li></a>
        <a class="sm:p-1" href=""><li>Contato</li></a>
      </ul>
      <button class="sm:bg-zinc-900 w-32 h-32 rounded-full md:hidden">x</button>
    </header>
  </div>
  <HelloWorld msg="Vite + testeVue" />
</template>

<style scoped>
.header {
  background-color: #000000;
}
a {
  font-weight: bold;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: inherit;
}
a:hover {
  color: #ffffff;
}
a:active {
  border-bottom: #66eb00 1px solid;
}
</style>
