<template>
  <div class="">
    <div class="left-navbar">
      <left-navbar />
    </div>

    <div class="content bg-custom-color">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LeftNavbar from "./components/LeftNavbar.vue";
export default {
  components: {
    LeftNavbar,
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
}

@media screen and (max-width: 1024px) {
  .content {
    margin-left: 50px;
  }
}
</style>
