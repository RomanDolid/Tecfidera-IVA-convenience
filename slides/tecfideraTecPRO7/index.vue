<i18n>
  {
    "eng": {
      "headline": "<span style='color: #80276c;'><b>Patients ≥55 experienced less impact of fatigue and less activity<br>impairment from baseline* on TECFIDERA, allowing them to<br>continue with their usual activities<sup>1</sup></b></span>",
      "ribbon1": "<b style='color: #ffffff;'>Impact of MS on QoL</b>",
      "ribbon2": "<b style='color: #ffffff;'>PROs at 1 year</b>",
      "ribbon3": "<b style='color: #ffffff;'>PROs stable long-term</b>",
      "ribbon4": "<b style='color: #ffffff;'>Patient support</b>",
      "ribbon5": "<b style='color: #ffffff;'>≥55 age group</b>",
      "subtitle": "<span style='color: #5b6770;'>Across age groups, compared to<br/> baseline, patients on TECFIDERA<br/> reported:</span>",
      "caption1": "<span style='color: #78be20;'>(MFIS-5)</span>",
      "caption2": "<span style='color: #78be20;'>(WPAI-MS)</span>",
      "description1": "<span style='color: #80276c;'><b>Less impact of fatigue<br>on their lives<sup>1</sup>*</b></span>",
      "description2": "<span style='color: #80276c;'><b>Less impact of RRMS on<br>work productivity, and<br>daily activities<sup>1</sup>*</b></span>",
      "note": "<span style='color: #5b6770;'>There were no notable differences in other<br>patient-reported outcomes, effectiveness,<br>and safety findings in patients aged ≥55 years<br>vs patients aged <55 years, suggesting that<br><b>TECFIDERA may be an effective treatment<br>option in older patients with RRMS.<sup>1</sup></b></span>",
      "footnote1": "<span style='color: #5b6770;'>* 12 months after switching from GA.</span>",
      "footnote2": "<span style='color: #5b6770;'>The above conditions are not licensed indications for Tecfidera. Tecfidera is licensed for the treatment of adult patients with relapsing remitting multiple sclerosis.</span>",
      "footnote3": "<span style='color: #5b6770;'><b>GA:</b> Glatiramer Acetate; <b>MFIS-5:</b> Modified Fatigue Impact Scale 5-item version; <b>QoL:</b> Quality of Life; <b>RRMS:</b> Relapsing Remitting Multiple Sclerosis;<br/> <b>WPAI-MS:</b> Work Productivity and Activity Impairment for Multiple Sclerosis.",
      "hiddenReferences": "<sup refs='ref65'></span>"
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
          class="headline"
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
        <wiz-image
          id="bg"
          class="pa background"
          :src="'./media/images/bg.jpg'"
          :component-name="'Background'"
        ></wiz-image>

        <wiz-container
          id="container"
          class="pa container"
          :component-name="'Container'"
        >
          <wiz-text
            id="subtitle"
            class="pa subtitle"
            :text="$t('subtitle')"
            :component-name="'Subtitle'"
          ></wiz-text>
        </wiz-container>

        <wiz-container
          id="wrapper1"
          class="pa wrapper wrapper-1"
          :component-name="'Wrapper'"
        >
          <wiz-image
            id="icon1"
            class="pa slide-icon icon-1"
            :src="'./media/images/icon1.png'"
            :component-name="'Icon'"
          ></wiz-image>
          <wiz-text
            id="caption1"
            class="pa caption caption-1"
            :text="$t('caption1')"
            :component-name="'Caption'"
          ></wiz-text>
          <wiz-text
            id="description1"
            class="pa description description-1"
            :text="$t('description1')"
            :component-name="'Description'"
          ></wiz-text>
        </wiz-container>

        <wiz-container
          id="wrapper2"
          class="pa wrapper wrapper-2"
          :component-name="'Wrapper'"
        >
          <wiz-image
            id="icon2"
            class="pa slide-icon icon-2"
            :src="'./media/images/icon2.png'"
            :component-name="'Icon'"
          ></wiz-image>
          <wiz-text
            id="caption2"
            class="pa caption caption-2"
            :text="$t('caption2')"
            :component-name="'Caption'"
          ></wiz-text>
          <wiz-text
            id="description2"
            class="pa description description-2"
            :text="$t('description2')"
            :component-name="'Description'"
          ></wiz-text>
        </wiz-container>
        <wiz-text
          id="note"
          class="pa note"
          :text="$t('note')"
          :component-name="'Note'"
        ></wiz-text>
      </wiz-bg-container>
      <wiz-bg-ribbon
        id="ribbonMain"
        class="pa ribbon-main"
        v-bind="ribbonOptions"
        :index="4"
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
          id="footnote1"
          class="pa footnote footnote-1"
          :text="$t('footnote1')"
          :component-name="'Footnote'"
        ></wiz-text>
        <wiz-text
          id="footnote2"
          class="pa footnote footnote-2"
          :text="$t('footnote2')"
          :component-name="'Footnote'"
        ></wiz-text>
        <wiz-text
          id="footnote3"
          class="pa footnote footnote-3"
          :text="$t('footnote3')"
          :component-name="'Footnote'"
        ></wiz-text>
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
        // where to go when closing popup
        slide: 'tecfideraEfficacy',
        chapter: 'efficacy',
      },
      ribbonOptions: {
        openIconImage: './common/media/images/indicator-active.png',
        closeIconImage: './common/media/images/indicator.png',
        items: [
          {
            name: this.$t('ribbon1'),
            slide: {
              slide: 'tecfideraTecPRO3',
              chapter: 'slidesPopup',
            },
          },
          {
            name: this.$t('ribbon2'),
            slide: {
              slide: 'tecfideraTecPRO4',
              chapter: 'slidesPopup',
            },
            animation: true,
          },
          {
            name: this.$t('ribbon3'),
            slide: {
              slide: 'tecfideraTecPRO5',
              chapter: 'slidesPopup',
            },
            animation: true,
          },
          {
            name: this.$t('ribbon4'),
            slide: {
              slide: 'tecfideraTecPRO6',
              chapter: 'slidesPopup',
            },
            animation: true,
          },
          {
            name: this.$t('ribbon5'),
            slide: {
              slide: 'tecfideraTecPRO7',
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
.wiz-bg-grid-container.header-area {
  width: 756px !important;
  z-index: 2;
}
.ribbon-main {
  z-index: 2;
}
.content-wrapper {
  width: 1024px;
  height: 456px;
}

.background {
  width: 667px;
  height: 534px;
  transform: matrix(1, 0, 0, 1, -41, -76);
}

.slide-icon {
  width: 72px;
  height: 72px;
}

.icon-1 {
  transform: matrix(1, 0, 0, 1, 10, 6);
}

.icon-2 {
  transform: matrix(1, 0, 0, 1, 10, 11);
}

.wrapper {
  width: 300px;
  height: 105px;
  transform: matrix(1, 0, 0, 1, 424, 70);
}

.wrapper-2 {
  transform: matrix(1, 0, 0, 1, 424, 174);
}

.subtitle {
  width: 325px;
  font-size: 20px;
  font-family: 'DinPro', sans-serif;
  line-height: 24px;
  transform: matrix(1, 0, 0, 1, 434, -2);
}

.caption {
  width: 65px;
  color: #78be20;
  font-size: 13px;
  font-family: 'DinPro', sans-serif;
  line-height: 24px;
}

.caption-1 {
  transform: matrix(1, 0, 0, 1, 22, 80);
}

.caption-2 {
  transform: matrix(1, 0, 0, 1, 16, 83);
}

.description {
  width: 200px;
  color: #80276c;
  font-size: 18px;
  font-family: 'DinPro', sans-serif;
  line-height: 20px;
}

.description-1 {
  transform: matrix(1, 0, 0, 1, 94, 22);
}

.description-2 {
  transform: matrix(1, 0, 0, 1, 94, 16);
}

.note {
  width: 401px;
  font-size: 20px;
  font-family: 'DinPro', sans-serif;
  line-height: 23px;
  transform: matrix(1, 0, 0, 1, 434, 291);
}

.footnote-1 {
  width: 165px;
  transform: matrix(1, 0, 0, 1, -25, 89);
}

.footnote-2 {
  width: 715px;
  transform: matrix(1, 0, 0, 1, -25, 113);
}

.footnote-3 {
  width: 650px;
  transform: matrix(1, 0, 0, 1, -25, 137);
}

</style>
