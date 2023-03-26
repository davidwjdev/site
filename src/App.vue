<script >
import { defineComponent } from "vue";
import Home from "./components/Home.vue";

export default defineComponent({
  data() {
    return {
      showMobileMenu: false,
    };
  },

  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
  },
});
</script>

<template>
  <div class="font-mono">
    <header class="header shadow-lg shadow-black sticky top-0 z-50">
      <div>
        <nav
          class="md:inline sm:transition-opacity sm:ease-in-out sm:delay-150"
          :class="{ hidden: !showMobileMenu }"
        >
          <ul
            class="sm:text-center sm:flex sm:flex-col md:flex md:justify-end md:mr-10"
          >
            <a class="sm:p-3 md:p-5" href=""><li>Home</li></a>
            <a class="sm:p-3 md:p-5" href=""><li>Experiencia</li></a>
            <a class="sm:p-3 md:p-5" href=""><li>Portfólio</li></a>
            <a class="sm:p-3 md:p-5" href=""><li>Contato</li></a>
          </ul>
        </nav>
        <button
          v-if="showMobileMenu"
          class="bg-zinc-900 w-8 h-8 rounded-full absolute right-3 top-3 md:hidden"
          @click="showMenu()"
        >
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </button>
        <button
          v-else
          class="bg-zinc-900 w-8 h-8 rounded-full absolute right-3 top-3 md:hidden"
          @click="showMenu()"
        >
          <font-awesome-icon :icon="['fas', 'bars']" />
        </button>
      </div>
    </header>
  </div>
  <Home />
</template>

<style scoped>
.header {
  background-color: #000000;
}
.header a {
  font-weight: bold;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: inherit;
}
.header a:hover {
  color: #ffffff;
  background-color: #0b0b0b;
}
.header a:active {
  border-bottom: #66eb00 1px solid;
}
</style>
