<template>
  <div class="">
    <div class="left-navbar">
      <left-navbar />
    </div>

    <div class="content">
      <about-me></about-me>
    </div>
  </div>
</template>

<script>
import AboutMe from "./components/AboutMe.vue";
import LeftNavbar from "./components/LeftNavbar.vue";
export default {
  components: {
    LeftNavbar,
    AboutMe,
  },
};
</script>

<style lang="scss" scoped>
.left-navbar {
  max-width: 250px;
  width: 100%;
}

.content {
  z-index: 2000;
  height: 100%;
  width: auto;
  margin-left: 250px;
  background-color: #111111;
}

@media screen and (max-width: 1024px) {
  .content {
    margin-left: 50px;
  }
}
</style>
