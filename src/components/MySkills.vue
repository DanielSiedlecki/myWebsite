<template>
  <div class="mt-10 mb-5">
    <div class="flex flex-col lg:flex-row bg-black h-full pt-5 pb-5 b">
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
            ><p class="text-md lg:text-xl tracking-wide">{{ item.name }}</p>
            <p class="text-md lg:text-xl">{{ item.percent }}</p></span
          >
          <div
            id="progress-bar-container"
            class="w-full lg:w-10/12 bg-gray-700"
          >
            <div
              id="progress-bar"
              class="bg-gray-400"
              :style="{ '--progress-width': `${item.percent}` }"
            ></div>
          </div>
        </div>
      </div>
      <div class="basis-full lg:basis-1/2 ml-2">
        <div class="title text-white mb-5">
          <h1 class="text-2xl font-semibold ml-1 lg:mt-10">Other</h1>
        </div>
        <ul class="list-image-checkmark m-2 ml-6 gap-4 flex flex-col">
          <li v-for="item in otherSkillsList" :key="item" class="">
            <p class="text-md lg:text-xl text-white tracking-wider">
              {{ item.name }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
  data() {
    return {
      skillsList: [
        { name: "HTML, SCSS", percent: "70%" },
        { name: "Javascript / Typescript", percent: "62%" },
        { name: "Node.js", percent: "51%" },
        { name: "Vue.js", percent: "54%" },
        { name: "React.js", percent: "35%" },
        { name: "C#", percent: "40%" },
        { name: "Python", percent: "40%" },
        { name: "APEX, LWC", percent: "50%" },
      ],
      otherSkillsList: [
        { name: "REST API, JSON" },
        { name: "SQL, SOQL, MongoDB, DynamoDB" },
        { name: "Azure, Git" },
        { name: "Rest, Postman" },
        { name: "Figma, Adobe Photoshop" },
        { name: "MS EXCEL, MS SERVER, Salesforce Administration" },
        { name: "English: Inter-mediate" },
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
  width: var(--progress-width);
  animation: progressAnimationStrike 2s;
}

@keyframes progressAnimationStrike {
  from {
    width: 0;
  }
  to {
    width: var(--progress-width);
  }
}
</style>
