<template>
  <form>
    <div
      class="g-recaptcha"
      ref="recaptchaElement"
      data-sitekey="6LdUFOMmAAAAAB9zknMxDPOwg2gBR2ek7yz1Ya14"
      data-callback="onRecaptchaVerify"
      data-hl="en"
      data-theme="dark"
    ></div>
    <br />
  </form>
</template>

<script>
import { validationCaptcha } from "../scripts/recaptcha";
export default {
  mounted() {
    window.onRecaptchaVerify = this.onRecaptchaVerify;
  },

  methods: {
    async onRecaptchaVerify(response) {
      try {
        const data = await validationCaptcha(response);

        if (data) {
          this.$emit("captchaValidStatus", true);
        } else {
          this.$emit("captchaValidStatus", false);
        }

        console.log(response);
      } catch (error) {
        console.log("Error", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 569px) {
  .g-recaptcha {
    transform: scale(0.77);
    transform-origin: 0 0;
  }
}
</style>
