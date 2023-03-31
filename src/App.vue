<script >
import HomeVue from "./components/Home.vue";
import ExperienciaVue from "./components/Experiencia.vue";
import ProjetosVue from "./components/Projetos.vue";
import ContatoVue from "./components/Contato.vue";
export default {
  components: {
    HomeVue,
    ExperienciaVue,
    ProjetosVue,
    ContatoVue,
  },
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
};
</script>
<template>
  <div class="sticky top-0">
    <header class="header shadow shadow-black z-50">
      <div>
        <nav
          class="md:inline sm:transition-opacity sm:ease-in-out sm:delay-150"
          :class="{ hidden: !showMobileMenu }"
        >
          <ul
            class="flex sm:text-center sm:flex-col md:flex-row md:justify-end md:mr-10"
          >
            <a class="sm:p-3 md:p-5 visited::bg-white" href="#home"
              ><li>Home</li></a
            >
            <a class="sm:p-3 md:p-5" href="#experiencia"
              ><li>Experiencia</li></a
            >
            <a class="sm:p-3 md:p-5" href="#projetos"><li>Portfólio</li></a>
            <a class="sm:p-3 md:p-5" href="#contato"><li>Contato</li></a>
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
  <HomeVue id="home" />
  <div class="md:m-10 sm:pt-20 flex flex-col items-center">
    <div id="experiencia" class="m-5"></div>
    <ExperienciaVue />
    <div id="projetos" class="m-5"></div>

    <ProjetosVue />
    <div id="contato" class="m-5"></div>

    <ContatoVue />
  </div>
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
/* .header a:hover {
  color: #ffffff;
  background-color: #0b0b0b;
} */
/* .header a:visited {
  border-bottom: #66eb00 1px solid;
} */
</style>
