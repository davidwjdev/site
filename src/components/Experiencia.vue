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
        { title: "Vue", image: "/src/assets/img/experiencia/vuejs.svg" },

        {
          title: "Tailwindcss",
          image: "/src/assets/img/experiencia/tailwindcss.svg",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="md:m-10 sm:pt-20 flex flex-col items-center">
    <div class="md:w-8/12">
      <h2 class="md:text-3xl sm:text-2xl font-bold m-10">EXPERIÊNCIA</h2>
      <div class="text-base m-10">
        <ul class="flex flex-wrap">
          <li
            v-for="(item, index) in experiencias"
            :key="index"
            class="m-3 mr-2 p-5 rounded-3xl flex items-center shadow-md shadow-black"
          >
            <img
              :src="item.image"
              :alt="item.title"
              class="lg:w-14 lg:h-14 sm:w-5 sm:h-5 md:mr-5 sm:mr-1"
            />
            <span class="font-black">{{ item.title }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="md:w-8/12">
      <h2 class="md:text-3xl sm:text-2xl font-bold m-10">CONHECIMENTOS</h2>
      <div class="text-base m-10">
        <ul class="flex flex-wrap">
          <li
            v-for="(item, index) in experiencias"
            :key="index"
            class="m-3 mr-2 p-5 rounded-3xl flex items-center border border-1 shadow-lg shadow-black bg-black"
          >
            <img
              :src="item.image"
              :alt="item.title"
              class="lg:w-14 lg:h-14 sm:w-5 sm:h-5 md:mr-5 sm:mr-1"
            />
            <span class="font-black">{{ item.title }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style  scoped>
ul li {
  background-color: #0b0b0b;
}
ul li:hover {
  opacity: 1;
}
</style>
