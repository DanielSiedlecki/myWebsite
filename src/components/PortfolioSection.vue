<template>
  <div
    class="container bg-custom-color pt-20 p-1 lg:p-10 animate__animated animate__fadeInLeft"
  >
    <section-title>Portfolio</section-title>
    <div
      class="navbar flex flex-col lg:flex-row justify-between items-center mt-10"
    >
      <div class="title">
        <h1 class="text-white text-3xl font-semibold">My Portfolio</h1>
      </div>

      <ul class="text-gray-300 flex flex-col lg:flex-row lg:gap-5 mt-5 lg:mt-0">
        <li class="hover:cursor-pointer text-white"><a>All</a></li>
        <li><a>Programming</a></li>
        <li><a>Computer Graphics</a></li>
      </ul>
    </div>

    <section>
      <div
        class="container flex flex-wrap gap-10 justify-center items-center mt-5"
      >
        <div
          class="project basis-full lg:basis-1/2 flex flex-col max-w-sm gap-2 borde"
          v-for="project in projectsList"
          :key="project"
        >
          <img
            class="rounded-xl"
            :src="
              project.image
                ? project.image
                : require('../assets/portfolioPicture/default.jpg')
            "
            alt="Image"
          />
          <h1 class="text-white text-lg lg:text-2xl font-semibold mt-2">
            {{ project.title }}
          </h1>
          <p
            class="text-white text-sm md:text-md w-full lg:w-96 h-full lg:h-24"
          >
            {{ project.description }}
          </p>
          <span class="icons flex gap-5">
            <span
              class="flex flex-row gap-2"
              v-if="project.code"
              :href="project.code"
              ><i class="bi bi-github text-gray-300 text-md md:text-xl"></i
              ><a
                class="text-md md:text-xl text-gray-300 hover:text-white"
                href="project.code"
                >code
              </a></span
            >
            <span class="flex flex-row gap-2" v-if="project.demo"
              ><i class="bi bi-globe2 text-gray-300 text-md md:text-xl"></i
              ><a
                class="text-md md:text-xl text-gray-300 hover:text-white"
                :href="project.demo"
                >demo
              </a></span
            >
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import sectionTitle from "@/elements/sectionTitle.vue";
export default {
  components: { sectionTitle },

  data() {
    return {
      projectsList: [
        {
          title: "Invoice Program",
          description:
            "Program for creating invoices based on WinForms (currently in development)",
          code: "https://github.com/DanielSiedlecki/InvoiceProgram",
        },
        {
          title: "Traditional Clock",
          description:
            "Clock for check time all of the world I used only HTML, JavaScript and CSS.",
          code: "https://github.com/DanielSiedlecki/TraditionalClock",
          image: require("../assets/portfolioPicture/clockProject.jpg"),
        },
        {
          title: "CatsGram",
          description:
            " It's a fake Instagram, but it only displays cats. It's just a frontend version with a few features for mobile devices, built using the Vue.js framework with a fixed width.",
          code: "https://github.com/DanielSiedlecki/Catsgram",
          demo: "https://catsgram-mobile.netlify.app/",
          image: require("../assets/portfolioPicture/catsGramProject.jpg"),
        },
        {
          title: "AuthSystem",
          description: "It is a completed authentication system.",
          code: "https://github.com/DanielSiedlecki/AuthSystem",
        },
        {
          title: "EmployeesOffice",
          description:
            "Web application created to check how many people are left in the office.",
          code: "https://github.com/DanielSiedlecki/EmployeesOffice",
          demo: "www.google.com",
        },
        {
          title: "Courier-DataBase",
          description:
            "It is my first old project it is a simple program for managing shipments based on a basic GUI using tkinter.",
          code: "https://github.com/DanielSiedlecki/Courier-DataBase",
        },
      ],
    };
  },
};
</script>

<style></style>
