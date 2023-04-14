<i18n>
    {
      "eng": {

      }
    }
</i18n>

<template>
  <div>
    <wiz-image
      id="tecfideraLogo"
      v-goto="gotoHome"
      class="pa tecfidera-logo"
      :src="'./../media/images/logo-tecfidera.png'"
      :component-name="'Logo'"
    ></wiz-image>
  </div>
</template>

<script>

export default {
  components: {},
  props: {
  },
  data() {
    return {
      gotoHome: {
        slide: 'tecfideraFrontPage',
        chapter: 'core',
        animation: true,
      },
    };
  },
};
</script>

<style scoped>
.wiz-image.tecfidera-logo {
  z-index: 2;
  width: 151px;
  height: 35px;
  transform: matrix(1, 0, 0, 1, 834, 707);
}
</style>
