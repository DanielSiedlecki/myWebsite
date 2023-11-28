<template>
  <div class="container w-96 flex justify-center mt-2">
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
  </div>
</template>

<script>
export default {};
</script>

<style></style>
