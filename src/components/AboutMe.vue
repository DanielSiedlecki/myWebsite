<template>
  <div class="lg:container animate__animated animate__fadeInLeft">
    <div class="pt-10 min-h-screen mx-auto h-100 lg:w-10/12 lg:pl-0">
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
          Hello, I'm Daniel, a full-stack web developer with a focus on React,
          Node.js, and Vue. I thrive on creating seamless digital experiences
          and tackling challenges in the dynamic world of web development.
        </p>
        <p class="text-xs tracking-wider leading-relaxed">
          I am passionate hardworking and knowledge driven person. Even though I
          don't have extensive commercial experience, I always strive to find a
          solution to every problem. My interests are powerlifting, strength
          training and Computer Graphics.
        </p>
      </div>
      <div class="informations flex flex-col lg:flex-row mt-5">
        <div class="basis-full lg:basis-1/2">
          <span
            class="flex flex-row gap-6 leading-loose"
            v-for="item in LeftSection"
            :key="item"
            ><h1 class="font-semibold text-gray-300">
              {{ item.name }}
            </h1>
            <p class="text-white">{{ item.value }}</p></span
          >
        </div>
        <div class="basis-full lg:basis-1/2">
          <span
            class="flex flex-row gap-6 leading-loose"
            v-for="item in RightSection"
            :key="item"
            ><h1 class="font-semibold text-gray-300">
              {{ item.name }}
            </h1>
            <p class="text-white">{{ item.value }}</p></span
          >
        </div>
      </div>
      <div class="mt-5 pb-5">
        <button-element class="mt-5" :attachment="'./myCV.pdf'"
          >Download CV</button-element
        >
      </div>
      <div class="mt-5 pb-5 w-full lg:w-11/12 mx-auto">
        <my-skills></my-skills>
      </div>
      <div class="mt-5 pb-5 w-full mx-auto">
        <knowledge-interests />
      </div>
      <div class="mt-5 pb-5 w-full lg:w-11/12 mx-auto">
        <education-section></education-section>
      </div>
      <div class="mt-5 pb-5 w-full mx-auto">
        <certifications-course></certifications-course>
      </div>
    </div>
  </div>
</template>

<script>
import sectionTitle from "@/elements/sectionTitle.vue";
import buttonElement from "@/elements/buttonElement.vue";
import MySkills from "./MySkills.vue";
import KnowledgeInterests from "./KnowledgeInterests.vue";
import EducationSection from "./EducationSection.vue";
import CertificationsCourse from "./CertificationsCourse.vue";

export default {
  setup() {},
  components: {
    sectionTitle,
    buttonElement,
    MySkills,
    KnowledgeInterests,
    EducationSection,
    CertificationsCourse,
  },
  data() {
    return {
      LeftSection: [
        { name: "Age:", value: "22" },
        { name: "Email:", value: "mrSiedlecki@outlook.com" },
        { name: "Nationality:", value: "Polish" },
      ],
      RightSection: [
        { name: "Student status:", value: "Current" },
        { name: "Remote work:", value: "Available" },
      ],
    };
  },
};
</script>
