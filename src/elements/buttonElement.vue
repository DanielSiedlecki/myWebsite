<template>
  <div
    ref="myElement"
    class="button-container h-12 w-36 bg-white flex justify-center hover:w-40 animation"
  >
    <button
      type="button"
      class="text-sm tracking-wide"
      @click="redirectToAttachment"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    attachment: {
      type: String,
    },
  },
  methods: {
    redirectToAttachment() {
      if (this.attachment) {
        const myElement = this.$refs.myElement;
        if (myElement) {
          window.location.href = this.attachment;
        }
      }
    },
  },
};
</script>

<style scoped>
.animation {
  transition: 0.3s ease-in;
}
</style>
