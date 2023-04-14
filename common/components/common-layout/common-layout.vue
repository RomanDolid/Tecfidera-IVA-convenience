<i18n>
    {
      "eng": {

      }
    }
</i18n>

<template>
  <wiz-bg-container class="common">
    <wiz-bg-container class="above-references">
      <!-- common blocks that should be above references -->
    </wiz-bg-container>
    <!-- common blocks -->

    <!-- <wiz-bg-navigation-bar class="navbar"></wiz-bg-navigation-bar> -->
  </wiz-bg-container>
</template>

<script>
export default {
  name: 'common-layout',
  components: {},
  data() {
    return {
      chapterInvisibleHeaderImage: [
        'tecfideraFrontPage',
        'tecfideraTrackRecord',
        'tecfideraSummary',
      ],

    };
  },
  computed: {
    currentChapter() {
      return this.chapterInvisibleHeaderImage.includes(this.$navigator.getCurrentSlide().slide);
    },
  },
};
</script>

<style scoped>
.above-references {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3000;
  width: 1024px;
  height: 768px;
  pointer-events: none;
}

#logo {
  pointer-events: all;
}

.wiz-image.top-image {
  width: 1024px;
  height: 74px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.wiz-image.top-image.invisible {
  display: none;
}

</style>
