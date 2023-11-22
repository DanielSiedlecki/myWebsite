<template>
  <div class="container">
    <div class="cont pt-5 min-h-screen mx-auto h-100 lg:w-10/12 pl-2 lg:pl-0">
      <section-title>About Me</section-title>
      <h1 class="text-white font-semibold text-2xl mt-3 tracking-wide">
        About Me
      </h1>
      <a>
        <img
          class="h-72 lg:h-96 w-full mt-6"
          src="../assets/aboutMePicture.jpg"
      /></a>

      <div class="myname mt-2">
        <h1 class="text-white font-semibold text-xl tracking-wide">
          Daniel Siedlecki
        </h1>
        <h2 class="text-white font-light mb-5">Web Developer</h2>
      </div>

      <div
        class="text-section text-white border-y pb-8 pt-6 flex flex-col gap-5"
      >
        <p class="text-xs tracking-wider leading-relaxed">
          Hi, my name is Adriano Smith and I began using WordPress when it first
          began. I’ve spent most of my waking hours for the last ten years
          designing, programming and operating WordPress sites.
        </p>
        <p class="text-xs tracking-wider leading-relaxed">
          One of my specialties is taking an idea from scratch and creating a
          full-fledged platform. I go beyond to produce sites with a unique,
          outstanding, contemporary look-and-feel. With extensive knowledge of
          web mechanics, I’m able to optimize complex integrations to require
          little-to-no maintenance while running on their own for years.
        </p>
      </div>
      <div class="informations flex flex-col lg:flex-row mt-5">
        <div class="basis-full lg:basis-1/2">
          <span
            class="flex flex-row gap-6 leading-loose"
            v-for="item in RightSection"
            :key="item"
            ><h1 class="text-white font-semibold">{{ item.name }}</h1>
            <p>{{ item.value }}</p></span
          >
        </div>
        <div class="basis-full lg:basis-1/2">
          <span
            class="flex flex-row gap-6 leading-loose"
            v-for="item in LeftSection"
            :key="item"
            ><h1 class="text-white font-semibold">{{ item.name }}</h1>
            <p>{{ item.value }}</p></span
          >
        </div>
      </div>
      <div class="mt-5">
        <button-element class="mt-5">Download CV</button-element>
      </div>
    </div>
    <div class="mt-5 w-full lg:w-11/12 mx-auto">
      <my-skills></my-skills>
    </div>
    <div class="mt-5 w-full lg:w-11/12 mx-auto">
      <knowledge-interests />
    </div>
  </div>
</template>

<script>
import sectionTitle from "@/elements/sectionTitle.vue";
import buttonElement from "@/elements/buttonElement.vue";
import MySkills from "./MySkills.vue";
import KnowledgeInterests from "./KnowledgeInterests.vue";

export default {
  setup() {},
  components: { sectionTitle, buttonElement, MySkills, KnowledgeInterests },
  data() {
    return {
      LeftSection: [
        { name: "Birthday", value: "test" },
        { name: "Birthday", value: "test" },
        { name: "Birthday", value: "test" },
        { name: "Birthday", value: "test" },
      ],
      RightSection: [
        { name: "Birthday", value: "test" },
        { name: "Birthday", value: "test" },
        { name: "Birthday", value: "test" },
        { name: "Birthday", value: "test" },
      ],
    };
  },
};
</script>
