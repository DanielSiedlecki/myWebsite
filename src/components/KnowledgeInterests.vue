<template>
  <div
    class="container flex flex-col lg:flex-row h-full lg:h-56 items-start lg:items-center gap-4 lg:gap-0 pl-2 tracking-wider pt-5 pb-5"
  >
    <div class="basis-full lg:basis-1/2">
      <ul class="list-disc flex flex-col">
        <div class="title mb-3 lg:mb-5">
          <h1 class="text-white text-2xl font-semibold">Interests</h1>
        </div>
        <li
          v-for="inter in interests"
          :key="inter"
          class="mt-1 text-white ml-5 lg:ml-4"
        >
          <p class="text-md lg:text-sm text-white">{{ inter }}</p>
        </li>
      </ul>
    </div>
    <div class="basis-full lg:basis-1/2">
      <ul class="list-disc flex flex-col">
        <div class="title mb-3 lg:mb-5">
          <h1 class="text-white text-2xl font-semibold">Soft Skills</h1>
        </div>
        <li
          v-for="skill in softSkills"
          :key="skill"
          class="mt-1 text-white ml-5 lg:ml-4"
        >
          <p class="text-md lg:text-sm text-white">{{ skill }}</p>
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
      softSkills: [
        "Adaptability",
        "Teamwork",
        "Quick learning abillity",
        "Organizational skills",
      ],
      interests: ["Powerlifting", "Computer Graphic", "Strength Training"],
    };
  },
};
</script>
