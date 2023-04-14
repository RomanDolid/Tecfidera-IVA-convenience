<i18n>
    {
      "eng": {

      }
    }
</i18n>

<template>
  <div>
    <wiz-image
      id="topImage"
      class="pa top-image"
      src="../media/images/top-image.png"
      :component-name="'Top Image'"
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
    };
  },
};
</script>

<style scoped>
#logo {
  pointer-events: all;
}

.wiz-image.top-image {
  z-index: 1;
  width: 1024px;
  height: 74px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.wiz-image.top-image.invisible {
  display: none;
}
</style>
