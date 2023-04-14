<i18n>
{
  "eng": {}
}
</i18n>

<template>
  <wiz-root>
    <div :class="globalClasses">
      <wiz-viewer>
        <wiz-bg-sidebar>
          <wiz-bg-sitemap
            v-bind="common.sitemap"
            :active-icon="iconActiveSitemap"
            :icon="iconSitemap"
            @sitemap-opened="closeMenu"
          ></wiz-bg-sitemap>
          <wiz-bg-references
            v-bind="common.references"
            ref="references"
            :active-icon="iconActiveReferences"
            :icon="iconReferences"
            @references-opened="closeMenu"
          ></wiz-bg-references>
          <wiz-bg-study-design
            v-bind="common.studyDesign"
            :active-icon="iconActiveStudyDesign"
            :icon="iconStudyDesign"
          ></wiz-bg-study-design>
          <wiz-bg-smpc
            :active-icon="'./common/media/images/bg-sidebar/active/icon-active-smpc.png'"
            :icon="'./common/media/images/bg-sidebar/icon-smpc.png'"
            v-bind="common.smpc"
            :open-pdf="'./common/media/pdfs/smpc.pdf'"
          ></wiz-bg-smpc>
        </wiz-bg-sidebar>
        <common-layout></common-layout>
        <wiz-bg-navigation-bar
          id="navbar"
          ref="navbar"
          class="navigator-bar"
          :class="{ disabled: currentSlide === 'tecfideraFrontPage', invisible: closingNavMenu }"
          v-bind="navigationBar"
          @slideswipe.capture.native.stop
        ></wiz-bg-navigation-bar>
      </wiz-viewer>
    </div>
  </wiz-root>
</template>

<script>
import wizBgNavigationBar from 'wiz-bg-navigation-bar';
import commonLayout from './common/components/common-layout/common-layout.vue';
import path from './common/media/pdfs/smpc.pdf';
import iconActiveSitemap from './common/media/images/bg-sidebar/active/icon-active-sitemap.png';
import iconSitemap from './common/media/images/bg-sidebar/icon-sitemap.png';
import iconActiveReferences from './common/media/images/bg-sidebar/active/icon-active-references.png';
import iconReferences from './common/media/images/bg-sidebar/icon-references.png';
import iconActiveStudyDesign from './common/media/images/bg-sidebar/active/icon-active-sd.png';
import iconStudyDesign from './common/media/images/bg-sidebar/icon-sd.png';
import iconActiveSmpc from './common/media/images/bg-sidebar/active/icon-active-smpc.png';
import iconSmpc from './common/media/images/bg-sidebar/icon-smpc.png';

export default {
  name: 'wiz-app',
  components: {
    wizBgNavigationBar,
    commonLayout,
  },
  data() {
    return {
      path,
      iconActiveSitemap,
      iconSitemap,
      iconActiveReferences,
      iconReferences,
      iconActiveStudyDesign,
      iconStudyDesign,
      iconActiveSmpc,
      iconSmpc,
      common: {
        sitemap: {
          closeOnOutsideTap: true,
        },
        studyDesign: {
          disabled: false,
          actionType: 'slide',
          goToSlide: {
            chapter: 'studyDesign',
            slide: 'tecfideraStudyDesign',
          },
        },
        smpc: {
          disabled: false,
          openPdf: path,
        },
        references: {
          referencesHeader: '',
          closeOnOutsideTap: true,
        },
      },
      navigationBar: {
        enableChapterMenuMode: false,
        animationTime: 1000,
        autocloseDelay: 3000,
        hideMenuOnChapters: [],
        hiddenChapters: ['core'],
        activeColor: '#80276c',
        isDoubleTap: true,
      },
      closingNavMenu: false,
    };
  },
  computed: {
    currentSlide() {
      return this.$navigator.getCurrentSlide().slide;
    },
    currentChapter() {
      return this.$navigator.getCurrentSlide().chapter;
    },
    globalClasses() {
      return {
        slide: true,
        [this.currentSlide]: true,
        [this.currentChapter]: true,
        'refs-open': this.isReferencesOpen,
      };
    },
    ispopupSlide() {
      return ['popups', 'studyDesign'].includes(this.currentChapter);
    },
  },
  mounted() {
    this.watchReferencesState();
    this.setupHistoryHandler();
    this.setupNavigationHooks();
  },
  methods: {
    watchReferencesState() {
      this.$watch('$refs.references.opened', (value) => {
        this.isReferencesOpen = value;
      }, { deep: false, immediate: false });
    },
    setupHistoryHandler() {
      this.$navigator.onenter(this.historyHandler, { global: true });
    },
    historyHandler() {
      this.removeCurrentFromHistory();
      this.savePrevSlide();
    },
    removeCurrentFromHistory() {
      if (sessionStorage.getItem('navigationHistory')) {
        let history = JSON.parse(sessionStorage.getItem('navigationHistory'));
        history = history.filter((slide) => { return slide.slide !== this.currentSlide; });

        sessionStorage.navigationHistory = JSON.stringify(history);
      }
    },
    savePrevSlide() {
      sessionStorage.currentSlide = JSON.stringify(this.$navigator.getCurrentSlide());
    },
    checkHomePage(event) {
      if (this.currentSlide === 'tecfideraFrontPage') {
        event.stopPropagation();
      }
    },
    closeMenu() {
      this.$refs.navbar.opened = false;
      this.closingNavMenu = true;
      setTimeout(() => {
        this.closingNavMenu = false;
      }, 500);
    },
    setupNavigationHooks() {
      this.$navigator.onbeforeenter(() => {
        this.closeMenu();
      }, { global: true });
    },
  },

};
</script>

<style>
@import './common/styles/main.css';
@import './common/styles/fonts.css';
</style>

<style lang="scss">
  //here we can import scss globally
</style>

<style lang="scss" scoped></style>
