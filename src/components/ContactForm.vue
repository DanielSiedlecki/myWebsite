<template>
  <div
    class="md:container mx-auto bg-custom-color md:p-10 animate__animated animate__fadeInLeft"
  >
    <section class="md:p-10 md:p-10">
      <div
        class="bg-contactForm h-52 lg:h-96 w-full bg-cover bg-no-repeat mx-auto mx-y rounded-lg"
      >
        <div
          class="title border h-full flex justify-center items-center shadow-xl"
        >
          <h1 class="text-white text-5xl font-semibold">Get Touch</h1>
        </div>
      </div>

      <div
        class="md:container h-screen w-full md:w-9/12 mx-auto md:-mt-36 bg-black rounded-lg flex flex-wrap"
      >
        <div
          class="basis-2/4 flex items-center justify-center flex-col gap-5 mt-10"
        >
          <i class="bi bi-globe-americas text-5xl text-white"></i>
          <h1 class="text-white">Lorem Ipsum</h1>
        </div>
        <div
          class="basis-2/4 flex items-center justify-center flex-col gap-5 mt-10"
        >
          <i class="bi bi-globe-americas text-5xl text-white"></i>
          <h1 class="text-white">Lorem Ipsum</h1>
        </div>
        <div
          class="basis-2/4 flex items-center justify-center flex-col gap-5 mt-10"
        >
          <i class="bi bi-globe-americas text-5xl text-white"></i>
          <h1 class="text-white">Lorem Ipsum</h1>
        </div>
        <div
          class="basis-2/4 flex items-center justify-center flex-col gap-5 mt-10"
        >
          <i class="bi bi-globe-americas text-5xl text-white"></i>
          <h1 class="text-white">Lorem Ipsum</h1>
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
            <button
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
export default {
  data() {
    return {
      inputs: [
        { label: "Name", value: "", isFocused: false },
        { label: "Email", value: "", isFocused: false },
      ],
      isTextareaFocused: false,
      showButton: false,
    };
  },
  methods: {
    validationForm() {
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
  },
};
</script>
<style></style>
