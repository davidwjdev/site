<script>
export default {
  data() {
    return {
      experiencias: [
        {
          title: "Angular",
          src: new URL(
            `/src/assets/img/experiencia/angular.svg`,
            import.meta.url
          ).href,
        },
        {
          title: "Node.JS",
          src: new URL(
            `/src/assets/img/experiencia/nodejs.svg`,
            import.meta.url
          ).href,
        },
        {
          title: "Express.JS",
          src: new URL(
            `/src/assets/img/experiencia/express.svg`,
            import.meta.url
          ).href,
        },
        {
          title: "JavaScript",
          src: new URL(
            `/src/assets/img/experiencia/javascript.svg`,
            import.meta.url
          ).href,
        },
        {
          title: "HTML",
          src: new URL(`/src/assets/img/experiencia/html5.svg`, import.meta.url)
            .href,
        },
        {
          title: "CSS",
          src: new URL(`/src/assets/img/experiencia/css3.svg`, import.meta.url)
            .href,
        },
        {
          title: "SCSS/SASS",
          src: new URL(`/src/assets/img/experiencia/sass.svg`, import.meta.url)
            .href,
        },
        {
          title: "Bootstrap",
          src: new URL(
            `/src/assets/img/experiencia/bootstrap.svg`,
            import.meta.url
          ).href,
        },
        {
          title: "Figma",
          src: new URL(`/src/assets/img/experiencia/figma.svg`, import.meta.url)
            .href,
        },
      ],
      conhecimentos: [
        {
          title: "Vue",
          src: new URL(
            `/src/assets/img/conhecimento/vuejs.svg`,
            import.meta.url
          ).href,
        },
        {
          title: "React",
          src: new URL(
            `/src/assets/img/conhecimento/react_reactNative.svg`,
            import.meta.url
          ).href,
        },
        {
          title: "React Native",
          src: new URL(
            `/src/assets/img/conhecimento/react_reactNative.svg`,
            import.meta.url
          ).href,
        },

        {
          title: "Tailwindcss",
          src: new URL(
            `/src/assets/img/conhecimento/tailwindcss.svg`,
            import.meta.url
          ).href,
        },
        {
          title: "PHP",
          src: new URL(`/src/assets/img/conhecimento/php.svg`, import.meta.url)
            .href,
        },
        {
          title: "Laravel",
          src: new URL(
            `/src/assets/img/conhecimento/laravel.svg`,
            import.meta.url
          ).href,
        },
      ],
    };
  },
};
</script>

<template>
  <div class="md:w-8/12 md:rounded-lg mb-24 bg-black md:shadow-lg md:shadow-black">
    <div>
      <h2 class="md:text-3xl sm:text-2xl font-bold m-10">EXPERIÊNCIA</h2>
      <div class="text-base m-10">
        <ul class="flex flex-wrap">
          <li v-for="(item, index) in experiencias" :key="index"
            class="m-3 mr-2 p-5 rounded-3xl flex items-center bg-gray-900 md:hover:bg-gray-700">
            <img :src="item.src" :alt="item.title" class="lg:w-10 lg:h-10 sm:w-5 sm:h-5 md:mr-5 sm:mr-1" />
            <span class="font-black">{{ item.title }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="md:w-8/12 md:rounded-lg mb-24 bg-black md:shadow-lg md:shadow-black">

    <div>
      <h2 class="md:text-3xl sm:text-2xl font-bold m-10">CONHECIMENTOS</h2>
      <div class="text-base m-10">
        <ul class="flex flex-wrap">
          <li v-for="(item, index) in conhecimentos" :key="index"
            class="m-3 mr-2 p-5 rounded-3xl flex items-center bg-gray-900 md:hover:bg-gray-700">
            <img :src="item.src" :alt="item.title" class="lg:w-10 lg:h-10 sm:w-5 sm:h-5 md:mr-5 sm:mr-1" />
            <span class="font-black">{{ item.title }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style  scoped></style>
