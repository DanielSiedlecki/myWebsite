<template>
  <div
    class="button-container h-12 w-36 bg-white flex justify-center hover:w-40 animation"
  >
    <button type="button" class="text-sm tracking-wide">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>
<style scoped>
.animation {
  transition: 0.3s ease-in;
}
</style>
