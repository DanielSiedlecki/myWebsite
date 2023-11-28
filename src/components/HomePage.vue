<template>
  <div
    class="flex justify-center items-center h-screen animate__animated animate__fadeIn"
  >
    <div
      class="welcome-section flex flex-col lg:flex-row gap-20 items-center ml-2"
    >
      <div
        class="picture lg:basis-1/3 w-56 h-56 lg:w-72 lg:h-72 rounded-full"
      ></div>

      <div
        class="text lg:basis-2/3 flex items-center flex-col lg:items-start"
        style="color: white"
      >
        <p class="name text-2xl md:text-3xl lg:text-5xl">Daniel Siedlecki</p>
        <p class="job_title">
          <VueWriter
            :array="['Web Developer', 'Graphic Designer', 'IT Student']"
            :typeSpeed="100"
            :delay="1000"
            :start="400"
          />
        </p>
        <p class="description text-center text-xs md:text-sm lg:text-left mt-4">
          Creative Photographer based in New York and happy to travel all over
          Europe to capture photos.
        </p>
        <div class="social-media-icons flex gap-4 mt-3">
          <i
            class="bi bi-github text-xl lg:text-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer"
          ></i>
          <i
            class="bi bi-linkedin text-xl lg:text-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer"
          ></i>
          <i
            class="bi bi-telephone-fill text-xl lg:text-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueWriter from "vue-writer";
export default {
  setup() {},
  components: { VueWriter },
};
</script>

<style lang="scss" scoped>
// animation
@keyframes morph {
  0% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }

  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }

  100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
}

//animation end
.custom-container {
  height: 100%;
}

.picture {
  animation: morph 8s ease-in-out infinite;
  background-image: url("../assets/picture.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: all 1s ease-in-out;
  border: 15px solid #a0a0a0;
}

.name {
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;
}

.job_title {
  font-weight: 500;
  letter-spacing: 1px;
  color: white;
  border-right: 0.1em solid white;
  white-space: nowrap;
  overflow: hidden;
}
.name {
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;
}

.description {
  max-width: 70%;
  filter: brightness(70%);
}
</style>
