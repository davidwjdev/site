<script></script>
<template>
  <div
    class="static md:w-8/12 md:rounded-lg bg-black md:shadow-lg md:shadow-black mb-24"
  >
    <h2 class="md:text-3xl sm:text-2xl font-bold m-10">PROJETOS</h2>
    <div class="text-base m-10">
      <!-- <div class="flex flex-col text-center mb-10">
        <span class="font-black"> EM BREVE </span>
      </div> -->
      <ul class="flex flex-wrap justify-center">
        <li class="flex flex-col">
          <div
            class="h-36 w-36 m-3 mr-2 p-5 rounded-3xl flex items-center bg-gray-900"
          ></div>
          <span class="text-center">EM BREVE</span>
        </li>
        <li class="flex flex-col">
          <div
            class="h-36 w-36 m-3 mr-2 p-5 rounded-3xl flex items-center bg-gray-900"
          ></div>
          <span class="text-center">EM BREVE</span>
        </li>
        <li class="flex flex-col">
          <div
            class="h-36 w-36 m-3 mr-2 p-5 rounded-3xl flex items-center bg-gray-900"
          ></div>
          <span class="text-center">EM BREVE</span>
        </li>

        <!-- <li
          v-for="(item, index) in conhecimentos"
          :key="index"
          class="m-3 mr-2 p-5 rounded-3xl flex items-center bg-gray-900"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="lg:w-10 lg:h-10 sm:w-5 sm:h-5 md:mr-5 sm:mr-1"
          />
          <span class="font-black">{{ item.title }}</span>
        </li> -->
      </ul>
    </div>
  </div>
</template>
<style  scoped>
</style>
