<script>
export default {
  data() {
    return {
      experiencias: [
        { title: "Angular", image: "/src/assets/img/experiencia/angular.svg" },
        { title: "Node.JS", image: "/src/assets/img/experiencia/nodejs.svg" },
        {
          title: "Express.JS",
          image: "/src/assets/img/experiencia/express.svg",
        },
        {
          title: "JavaScript",
          image: "/src/assets/img/experiencia/javascript.svg",
        },
        { title: "HTML", image: "/src/assets/img/experiencia/html5.svg" },
        { title: "CSS", image: "/src/assets/img/experiencia/css3.svg" },
        { title: "SCSS/SASS", image: "/src/assets/img/experiencia/sass.svg" },
        {
          title: "Bootstrap",
          image: "/src/assets/img/experiencia/bootstrap.svg",
        },

        { title: "Figma", image: "/src/assets/img/experiencia/figma.svg" },
      ],
      conhecimentos: [
        { title: "Vue", image: "/src/assets/img/conhecimento/vuejs.svg" },
        {
          title: "React",
          image: "/src/assets/img/conhecimento/react_reactNative.svg",
        },
        {
          title: "React Native",
          image: "/src/assets/img/conhecimento/react_reactNative.svg",
        },

        {
          title: "Tailwindcss",
          image: "/src/assets/img/conhecimento/tailwindcss.svg",
        },
        { title: "PHP", image: "/src/assets/img/conhecimento/php.svg" },
        { title: "Laravel", image: "/src/assets/img/conhecimento/laravel.svg" },
      ],
    };
  },
};
</script>

<template>
  <div
    class="md:w-8/12 md:rounded-lg mb-24 bg-black md:shadow-lg md:shadow-black"
  >
    <div>
      <h2 class="md:text-3xl sm:text-2xl font-bold m-10">EXPERIÊNCIA</h2>
      <div class="text-base m-10">
        <ul class="flex flex-wrap">
          <li
            v-for="(item, index) in experiencias"
            :key="index"
            class="m-3 mr-2 p-5 rounded-3xl flex items-center bg-gray-900 md:hover:bg-gray-700"
          >
            <img
              :src="item.image"
              :alt="item.title"
              class="lg:w-10 lg:h-10 sm:w-5 sm:h-5 md:mr-5 sm:mr-1"
            />
            <span class="font-black">{{ item.title }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="px-10">
      <hr class="border border-slate-800 shadow-sm shadow-white" />
    </div>
    <div>
      <h2 class="md:text-3xl sm:text-2xl font-bold m-10">CONHECIMENTOS</h2>
      <div class="text-base m-10">
        <ul class="flex flex-wrap">
          <li
            v-for="(item, index) in conhecimentos"
            :key="index"
            class="m-3 mr-2 p-5 rounded-3xl flex items-center bg-gray-900 md:hover:bg-gray-700"
          >
            <img
              :src="item.image"
              :alt="item.title"
              class="lg:w-10 lg:h-10 sm:w-5 sm:h-5 md:mr-5 sm:mr-1"
            />
            <span class="font-black">{{ item.title }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style  scoped>
</style>
