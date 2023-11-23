<template>
  <div class="flex flex-col lg:flex-row bg-black h-full w-full pt-5 pb-5">
    <div class="basis-full lg:basis-1/2 flex flex-col justify-center ml-2">
      <div class="title text-white lg:ml-10 mb-5">
        <h1 class="text-2xl font-semibold mt-10 ml-1">Programming Skills</h1>
      </div>
      <div
        class="flex flex-col items-center m-2"
        v-for="item in skillsList"
        :key="item"
      >
        <span
          class="flex flex-row text-white font justify-between italic w-full lg:w-10/12"
          ><p class="text-lg tracking-wide">{{ item.name }}</p>
          <p class="text-lg">{{ item.percent }}</p></span
        >
        <div id="progress-bar-container" class="w-full lg:w-10/12 bg-gray-700">
          <div
            id="progress-bar"
            class="bg-gray-400"
            :style="{ width: item.percent }"
          ></div>
        </div>
      </div>
    </div>
    <div class="basis-full lg:basis-1/2 ml-2">
      <div class="title text-white mb-5">
        <h1 class="text-2xl font-semibold ml-1 lg:mt-10">Other</h1>
      </div>
      <ul class="list-image-checkmark m-2 ml-6 gap-4 flex flex-col">
        <li v-for="item in skillsList" :key="item" class="">
          <p class="text-xl text-white tracking-wider">{{ item.name }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
  data() {
    return {
      skillsList: [
        { name: "Skills", percent: "30%" },
        { name: "Skills", percent: "30%" },
        { name: "Skills", percent: "30%" },
        { name: "Skills", percent: "30%" },
        { name: "Skills", percent: "30%" },
        { name: "Skills", percent: "30%" },
        { name: "Skills", percent: "30%" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#progress-bar-container {
  height: 3px;
  border-radius: 50px;
}

#progress-bar {
  height: 100%;
  transition: width 0.3s;
  border-radius: 50px;
}
</style>
