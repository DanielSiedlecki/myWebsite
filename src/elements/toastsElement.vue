<template>
  <div
    v-if="renderErrorToast || renderSuccesToast"
    class="sticky top-10 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
    role="alert"
  >
    <div
      class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg bg-custom-color text-white"
    >
      <i
        class="bi text-2xl"
        :class="{
          'bi-check': renderSuccesToast,
          'bi-exclamation': renderErrorToast,
        }"
      ></i>
      <span class="sr-only"> icon</span>
    </div>
    <div class="ms-3 text-sm font-normal"><slot></slot></div>
    <button
      @click=""
      type="button"
      class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-100 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
      aria-label="Close"
    >
      <i class="bi bi-x-lg"></i>
      <span class="sr-only">Close</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      renderSuccesToast: true,
      renderErrorToast: false,
    };
  },
};
</script>

<style></style>
