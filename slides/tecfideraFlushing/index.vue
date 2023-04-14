<i18n>
  {
    "eng": {
      "headline": "<span style='color: #80276c;'><b>Flushing<sup>1</sup></b></span>",
      "ribbonTxt1": "<b style='color: #ffffff;'>Dosing</b>",
      "ribbonTxt2": "<b style='color: #ffffff;'>Monitoring</b>",
      "ribbonTxt3": "<b style='color: #ffffff;'>Immunity</b>",
      "ribbonTxt4": "<b style='color: #ffffff;'>Vaccinations</b>",
      "ribbonTxt5": "<b style='color: #ffffff;'>AE Profile</b>",
      "ribbonTxt6": "<b style='color: #ffffff;'>GI Events</b>",
      "ribbonTxt7": "<b style='color: #ffffff;'>Infections & malignancies</b>",
      "ribbonTxt8": "<b style='color: #ffffff;'>Flushing</b>",
      "list1Item1": "<span style='color: #5b6770;'>In clinical trials, 34% of TECFIDERA-treated patients experienced flushing<sup>1</sup></span>",
      "list2Item1": "<span style='color: #5b6770;'>The majority of patients experiencing flushing had mild or moderate symptoms<sup>1</sup></span>",
      "list2Item2": "<span style='color: #5b6770;'>For patients with intolerable flushing, a short course of treatment with 75mg<br>non-enteric coated acetylsalicylic acid may be beneficial<sup>1</sup></span>",
      "list3Item1": "<span style='color: #5b6770;'>Long-term (>4 weeks) continuous use of acetylsalicylic acid has not been studied<sup>1</sup></span>",
      "list3Item2": "<span style='color: #5b6770;'>Potential risks associated with acetylsalicylic acid therapy should be considered prior to co-administration with TECFIDERA in patients with relapsing remitting MS<sup>1</sup></span>",
      "hiddenReferences": "<sup refs='ref66'></sup>"
    }
  }
</i18n>

<template>
  <wiz-slide
    @slideswipe.native.stop
  >
    <layouts :layouts="[{ name: 'logo' }, { name: 'top-image' }]">
      &nbsp;
    </layouts>
    <wiz-bg-close-popup-button
      id="closePopup"
      class="close-popup close-popup-slide"
      :slide="closeBtnNavigation"
      :component-name="'Close Popup'"
    ></wiz-bg-close-popup-button>
    <wiz-bg-grid-container
      id="headerArea"
      class="header-area"
      :component-name="'Headline &amp; Subhead Container'"
    >
      <wiz-bg-container
        id="headlineWrapper"
        class="headline-wrapper"
        :component-name="'Headline Wrapper'"
      >
        <wiz-text
          id="headline"
          class="pa headline"
          :text="$t('headline')"
          :component-name="'Headline'"
        ></wiz-text>
      </wiz-bg-container>
    </wiz-bg-grid-container>

    <wiz-bg-grid-container
      id="contentArea"
      class="content-area"
      :component-name="'Content Area'"
    >
      <wiz-bg-container
        id="contentWrapper1"
        class="pa content-wrapper"
        :component-name="'Content Wrapper'"
      >
        <wiz-text
          id="list1Item1"
          class="pa list-item list-1-item-1"
          :text="$t('list1Item1')"
          :component-name="'List Item'"
        ></wiz-text>
        <wiz-text
          id="list2Item1"
          class="pa list-item list-2-item-1"
          :text="$t('list2Item1')"
          :component-name="'List Item'"
        ></wiz-text>
        <wiz-text
          id="list2Item2"
          class="pa list-item list-2-item-2"
          :text="$t('list2Item2')"
          :component-name="'List Item'"
        ></wiz-text>
        <wiz-text
          id="list3Item1"
          class="pa list-item list-3-item-1"
          :text="$t('list3Item1')"
          :component-name="'List Item'"
        ></wiz-text>
        <wiz-text
          id="list3Item2"
          class="pa list-item list-3-item-2"
          :text="$t('list3Item2')"
          :component-name="'List Item'"
        ></wiz-text>
      </wiz-bg-container>
      <wiz-bg-ribbon
        id="ribbonMain"
        class="pa ribbon-main"
        v-bind="ribbonOptions"
        :index="7"
        :component-name="'Dropdown Menu'"
      >
      </wiz-bg-ribbon>
    </wiz-bg-grid-container>

    <wiz-bg-grid-container
      id="footnoteArea"
      class="footnote-area"
      :component-name="'Footnote Area'"
    >
      <wiz-bg-container
        id="footnoteWrapper"
        class="footnote-wrapper"
        :component-name="'Footnote Wrapper'"
      >
        <wiz-text
          id="hidden"
          class="hidden"
          :text="$t('hiddenReferences')"
          :component-name="'Hidden Refs'"
        ></wiz-text>
      </wiz-bg-container>
    </wiz-bg-grid-container>
  </wiz-slide>
</template>
<script>
export default {
  data() {
    return {
      closeBtnNavigation: {
        slide: 'tecfideraConvenience',
        chapter: 'convenience',
      },
      ribbonOptions: {
        openIconImage: './common/media/images/indicator-active.png',
        closeIconImage: './common/media/images/indicator.png',
        items: [
          {
            name: this.$t('ribbonTxt1'),
            slide: {
              slide: 'tecfideraDosing',
              chapter: 'slidesPopup',
            },
            animation: true,
          },
          {
            name: this.$t('ribbonTxt2'),
            slide: {
              slide: 'tecfideraMonitoring',
              chapter: 'slidesPopup',
            },
            animation: true,
          },
          {
            name: this.$t('ribbonTxt3'),
            slide: {
              slide: 'tecfideraImmunity',
              chapter: 'slidesPopup',
            },
            animation: true,
          },
          {
            name: this.$t('ribbonTxt4'),
            slide: {
              slide: 'tecfideraVaccinations',
              chapter: 'slidesPopup',
            },
            animation: true,
          },
          {
            name: this.$t('ribbonTxt5'),
            slide: {
              slide: 'tecfideraAEProfile',
              chapter: 'slidesPopup',
            },
            animation: true,
          },
          {
            name: this.$t('ribbonTxt6'),
            slide: {
              slide: 'tecfideraGIEvents',
              chapter: 'slidesPopup',
            },
            animation: true,
          },
          {
            name: this.$t('ribbonTxt7'),
            slide: {
              slide: 'tecfideraInfectionsMalignancies',
              chapter: 'slidesPopup',
            },
            animation: true,
          },
          {
            name: this.$t('ribbonTxt8'),
            slide: {
              slide: 'tecfideraFlushing',
              chapter: 'slidesPopup',
            },
            animation: true,
          },
        ],
      },
    };
  },
};
</script>
<style scoped>
.headline {
  width: 630px;
  transform: matrix(1, 0, 0, 1, 0, 37);
}
.content-wrapper {
  width: 786px;
  height: 271px;
}
.list-item {
  width: 745px;
  font-size: 20px;
  line-height: 1.1;
}
.list-item::before {
  content: '';
  position: absolute;
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #00a3e0;
  transform: matrix(1, 0, 0, 1, -14, 9);
}
.list-1-item-1 {
  transform: matrix(1, 0, 0, 1, 16, 72);
}
.list-2-item-1 {
  transform: matrix(1, 0, 0, 1, 16, 109);
}
.list-2-item-2 {
  transform: matrix(1, 0, 0, 1, 16, 146);
}
.list-3-item-1 {
  transform: matrix(1, 0, 0, 1, 16, 205);
}
.list-3-item-2 {
  transform: matrix(1, 0, 0, 1, 16, 242);
}
</style>
