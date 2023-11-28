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
export default {};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 569px) {
  .g-recaptcha {
    transform: scale(0.77);
    transform-origin: 0 0;
  }
}
</style>
