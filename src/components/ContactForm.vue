<template>
  <div
    class="md:container mx-auto bg-custom-color md:p-10 animate__animated animate__fadeInLeft"
  >
    <toasts-element
      v-if="showToast"
      :message="toastMessage"
      :types="toastType"
      @close-toast="closeToast"
    ></toasts-element>
    <section class="md:p-10 md:p-10">
      <div
        class="bg-contactForm h-52 lg:h-96 w-full bg-cover bg-no-repeat mx-auto mx-y rounded-lg"
      >
        <div class="title h-full flex justify-center items-center shadow-xl">
          <h1 class="text-white text-5xl font-semibold">Get Touch</h1>
        </div>
      </div>

      <div
        class="md:container h-full w-full md:w-9/12 mx-auto md:-mt-36 bg-black rounded-lg flex flex-wrap"
      >
        <div
          class="basis-full md:basis-2/4 flex items-center justify-center flex-col gap-5 mt-10"
        >
          <i class="bi bi-telephone-fill text-5xl text-white"></i>
          <h1 class="text-white">+48 534 166 602</h1>
        </div>
        <div
          class="basis-full md:basis-2/4 flex items-center justify-center flex-col gap-5 mt-10"
        >
          <i class="bi bi-envelope-fill text-5xl text-white"></i>
          <h1 class="text-white">mrSiedlecki@outlook.com</h1>
        </div>
        <div
          class="basis-full md:basis-2/4 flex items-center justify-center flex-col gap-5 mt-10"
        >
          <i class="bi bi-geo-fill text-5xl text-white"></i>
          <h1 class="text-white">Poland | Wrocław</h1>
        </div>
        <div
          class="basis-full md:basis-2/4 flex items-center justify-center flex-col gap-5 mt-10"
        >
          <i class="bi bi-facebook text-5xl text-white"></i>
          <h1 class="text-white">Daniel Siedlecki</h1>
        </div>

        <form class="flex flex-col gap-5 mx-auto mt-15 pb-10 w-11/12 lg:w-3/4">
          <div class="mx-auto w-11/12 lg:flex lg:flex-col lg:items-center">
            <div
              v-for="(input, index) in inputs"
              :key="index"
              class="relative mt-7 flex items-center"
            >
              <label
                class="text-white absolute transition-transform duration-300 transform cursor-text ml-1"
                :class="{
                  'text-sm -translate-y-9': input.isFocused || input.value,
                }"
                :for="`input${index + 1}`"
              >
                {{ input.label }}
              </label>
              <input
                ref="Input"
                :id="`input${index + 1}`"
                v-model="input.value"
                @focus="onInputFocus(index)"
                @blur="onInputBlur(index)"
                class="h-10 w-full md:w-96 border-gray-300 bg-custom-color text-white p-2 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 flex items-center"
              />
            </div>

            <div class="relative mt-7">
              <label
                class="text-white absolute transition-transform duration-300 transform cursor-text ml-1"
                :class="{
                  'text-sm -translate-y-5': isTextareaFocused || textareaValue,
                }"
                for="textarea"
              >
                Text
              </label>
              <textarea
                ref="textarea"
                id="textarea"
                v-model="textareaValue"
                @focus="onTextareaFocus"
                @blur="onTextareaBlur"
                class="h-28 w-full lg:w-96 border-gray-300 bg-custom-color text-white mt-2 p-2 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 flex items-center"
              ></textarea>
            </div>
            <p class="text-gray-400 w-full md:w-96" style="font-size: 10px">
              The data provided by you are processed for the purpose of
              responding to your inquiry, and the data controller is Daniel
              Siedlecki. More information on how your data is processed and what
              your rights are can be found in my
              <a
                class="text-white text-sm"
                href="./PrivacyPolicy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                >Privacy Policy</a
              >.
            </p>
            <button
              type="button"
              placeholder="Send"
              class="text-white text-2xl lg:text-lg border w-2/4 md:w-1/3 h-12 lg:h-8 mt-5 rounded-md hover:bg-white hover:text-black"
              @click="validationForm"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import toastsElement from "@/elements/toastsElement.vue";
export default {
  components: { toastsElement },
  data() {
    return {
      inputs: [
        { label: "Name", value: "", isFocused: false },
        { label: "Email", value: "", isFocused: false },
      ],
      isTextareaFocused: false,
      showToast: false,
      toastType: "",
      toastMessage: "",
    };
  },
  methods: {
    validationForm() {
      this.handleShowToast("testestsetestsset", "error");

      if (
        this.$refs.Input[0].value != "" &&
        this.$refs.Input[1].value != "" &&
        this.$refs.textarea.value != ""
      ) {
        if (!this.$refs.Input[1].value.includes("@")) alert("zly format mail");
      }
    },
    onInputFocus(index) {
      this.inputs[index].isFocused = true;
    },
    onInputBlur(index) {
      this.inputs[index].isFocused = false;
    },
    onTextareaFocus() {
      this.isTextareaFocused = true;
    },
    onTextareaBlur() {
      this.isTextareaFocused = false;
    },
    closeToast() {
      this.showToast = false;
    },
    handleShowToast(text, type) {
      this.showToast = true;
      this.toastType = type;
      this.toastMessage = text;

      setTimeout(() => {
        this.showToast = false;
      }, 3000);
    },
  },
};
</script>
<style></style>
