<i18n>
  {
    "eng": {
      "hiddenReferences": "<sup refs='ref6'></sup>",
      "headline1": "<span style='color: #80276c;'><b>Newly diagnosed patients showed significantly reduced disease<br/>activity on MRI with TECFIDERA at 2 years vs placebo<sup>1</sup></b></span>",
      "ribbonTxt1": "<b style='color: #ffffff;'>ARR</b>",
      "ribbonTxt2": "<b style='color: #ffffff;'>Disability<br>progression</b>",
      "ribbonTxt3": "<b style='color: #ffffff;'>MRI activity</b>",
      "caption1": "<span style='color: #5b6770;'>How would reduced disease activity on MRI early in the treatment journey help your<br>RRMS patients preserve neurological and functional capacity for their future?</span>",
      "tab1": "<b>Initiation</b>",
      "tab2": "<b>1 year</b>",
      "tab3": "<b>2 years</b>",
      "tab4": "<b>9+ years</b>",
      "bubble1Number": "<span style='color: #80276c;'><b>80</b></span>",
      "bubble1Percentage": "<span style='color: #80276c;'><b>%</b></span>",
      "bubble1Description": "<span style='color: #5b6770;'><b>Relative reduction vs. placebo</b><br/>PBO=20.0 (n=100)<br/><mark>TECFIDERA=4.0 (n=99)</mark><br/>LMR=0.20 95% CI (0.13-0.31)<br/>p<0.0001</span>",
      "bubble1BeforeText": "<span style='color: #80276c;'><b>Mean number of new or<br/>enlarging T2-hyperintense<br/>lesions<sup>1</sup><sup>*</sup></b></span>",
      "bubble2Number": "<span style='color: #80276c;'><b>92</b></span>",
      "bubble2Percentage": "<span style='color: #80276c;'><b>%</b></span>",
      "bubble2Description": "<span style='color: #5b6770;'><b>Reduction vs. PBO</b><br/>PBO=1.9 (n=100)<br/><mark>TECFIDERA=0.3 (n=99)</mark><br/>OR=0.08 95% CI=(0.03-0.19)<br/>p<0.0001</span>",
      "bubble2BeforeText": "<span style='color: #80276c;'><b>Mean number of<br/>Gd+ lesions<sup>1</sup><sup>*</sup></b></span>",
      "bubble3Number": "<span style='color: #80276c;'><b>68</b></span>",
      "bubble3Percentage": "<span style='color: #80276c;'><b>%</b></span>",
      "bubble3Description": "<span style='color: #5b6770;'><b>Reduction vs. PBO</b><br/>PBO=6.6 (n=100)<br/><mark>TECFIDERA=2.1 (n=99)</mark><br/>LMR=0.32 95% <br/>CI=(0.21-0.50)<br/>p<0.0001</span>",
      "bubble3BeforeText": "<span style='color: #80276c;'><b>Mean number of new <br/>T1-hypointense lesions<sup>1</sup><sup>*</sup></b></span>",
      "footnote1": "<span style='color: #5b6770;'>* MRI end points analysed using negative binomial regression analysis. The odds of having more Gd+ lesions were analysed using ordinal logistic regression adjusted for<br/>study, region, and baseline number of Gd+ lesions.</span>",
      "footnote2": "<span style='color: #5b6770;'><b style='color: #80276c;'>CI:</b> Confidence Interval; <b style='color: #80276c;'>Gd+:</b> Gadolinium-enhancing; <b style='color: #80276c;'>LMR:</b> Lesion Mean Ratio; <b style='color: #80276c;'>MRI:</b> Magnetic Resonance Imaging; <b style='color: #80276c;'>OR:</b> Odds Ratio; <b style='color: #80276c;'>PBO:</b> Placebo.</span>"
    }
  }
</i18n>

<template>
  <wiz-slide @slideswipe.native.stop>
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
      &nbsp;
    </wiz-bg-grid-container>

    <wiz-bg-grid-container
      id="contentArea"
      class="content-area"
      :component-name="'Content Area'"
    >
      <wiz-image
        id="arrow"
        class="pa"
        :src="'./media/images/arrow.png'"
        :component-name="'Arrow'"
      ></wiz-image>
      <wiz-bg-sliding-content
        class="pa sliding-content-area before-style"
        v-bind="optionsContent"
        :component-name="'Sliding Content Area'"
      >
        <wiz-bg-container
          id="contentWrapper2"
          slot="2"
          class="pa content-wrapper"
          :component-name="'Content Wrapper'"
        >
          <wiz-image
            id="bg1"
            class="pa bg-image bg-1"
            :src="'./media/images/background.png'"
            :component-name="'Background'"
          ></wiz-image>
          <wiz-text
            id="headline1"
            class="pa headline"
            :text="$t('headline1')"
            :component-name="'Headline'"
          ></wiz-text>
          <wiz-text
            id="caption1"
            class="pa caption"
            :text="$t('caption1')"
            :component-name="'Caption'"
          ></wiz-text>
          <wiz-bg-bubble
            id="bubble1"
            v-goto="toPopupbubble1"
            class="pa bubble bubble-1"
            v-bind="bubbleOptions1"
            :component-name="'Bubble Component'"
          ></wiz-bg-bubble>
          <wiz-bg-bubble
            id="bubble2"
            v-goto="toPopupbubble1"
            class="pa bubble bubble-2"
            v-bind="bubbleOptions2"
            :component-name="'Bubble Component'"
          ></wiz-bg-bubble>
          <wiz-bg-bubble
            id="bubble3"
            v-goto="toPopupbubble1"
            class="pa bubble bubble-3"
            v-bind="bubbleOptions3"
            :component-name="'Bubble Component'"
          ></wiz-bg-bubble>
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
        </wiz-bg-container>
      </wiz-bg-sliding-content>
      <wiz-bg-ribbon
        id="ribbonMain"
        class="pa ribbon-main"
        v-bind="ribbonOptions"
        :index="2"
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
        slide: 'tecfideraEfficacy',
        chapter: 'efficacy',
      },
      optionsContent: {
        activeState: 2,
        states: [
          {
            stateTitle: this.$t('tab1'),
            disabled: true,
            showImage: false,
          },
          {
            stateTitle: this.$t('tab2'),
            disabled: true,
            showImage: false,
          },
          {
            stateTitle: this.$t('tab3'),
            showImage: true,
          },
          {
            stateTitle: this.$t('tab4'),
            disabled: true,
            showImage: true,
          },
        ],
      },
      ribbonOptions: {
        openIconImage: './common/media/images/indicator-active.png',
        closeIconImage: './common/media/images/indicator.png',
        items: [
          {
            name: this.$t('ribbonTxt1'),
            slide: {
              slide: 'tecfideraNewlyARR',
              chapter: 'slidesPopup',
            },
            animation: true,
          },
          {
            name: this.$t('ribbonTxt2'),
            slide: {
              slide: 'tecfideraNewlyDisability',
              chapter: 'slidesPopup',
            },
            animation: true,
          },
          {
            name: this.$t('ribbonTxt3'),
            slide: {
              slide: 'tecfideraNewlyMRI',
              chapter: 'slidesPopup',
            },
            animation: true,
          },
        ],
      },
      bubbleOptions1: {
        beforeText: this.$t('bubble1BeforeText'),
        number: this.$t('bubble1Number'),
        percentage: this.$t('bubble1Percentage'),
        description: this.$t('bubble1Description'),
        showAfterText: false,
        arrow: './common/media/images/arrow-tecfidera.png',
        backgroundImage: './common/media/images/bubble-icon.png',
      },
      bubbleOptions2: {
        beforeText: this.$t('bubble2BeforeText'),
        number: this.$t('bubble2Number'),
        percentage: this.$t('bubble2Percentage'),
        description: this.$t('bubble2Description'),
        showAfterText: false,
        arrow: './common/media/images/arrow-tecfidera.png',
        backgroundImage: './common/media/images/bubble-icon.png',
      },
      bubbleOptions3: {
        beforeText: this.$t('bubble3BeforeText'),
        number: this.$t('bubble3Number'),
        percentage: this.$t('bubble3Percentage'),
        description: this.$t('bubble3Description'),
        showAfterText: false,
        arrow: './common/media/images/arrow-tecfidera.png',
        backgroundImage: './common/media/images/bubble-icon.png',
      },
      toPopupbubble1: {
        slide: 'tecfideraNewlyMRIPopup',
        chapter: 'slidesPopup',
      },
    };
  },
};
</script>
<style scoped>
.wiz-slide .sliding-content-area {
  top: 0;
  left: 0;
  overflow: visible;
}

.wiz-slide .sliding-content-area::v-deep .nav-wrapper {
  justify-content: flex-start;
  width: 67%;
  transform: matrix(1, 0, 0, 1, -63, 0);
}

.wiz-slide .sliding-content-area::v-deep .nav-wrapper .state-container {
  position: absolute;
  transform: matrix(1, 0, 0, 1, 0, -5);
}

.wiz-slide
  .sliding-content-area::v-deep
  .nav-wrapper
  .state-container:nth-of-type(1) {
  width: 80px;
}

.wiz-slide
  .sliding-content-area::v-deep
  .nav-wrapper
  .state-container:nth-of-type(2) {
  width: 147px;
  transform: matrix(1, 0, 0, 1, 82, -6);
}

.wiz-slide
  .sliding-content-area::v-deep
  .nav-wrapper
  .state-container:nth-of-type(3) {
  width: 143px;
  transform: matrix(1, 0, 0, 1, 223, -6);
}

.wiz-slide
  .sliding-content-area::v-deep
  .nav-wrapper
  .state-container:nth-of-type(4) {
  width: 296px;
  transform: matrix(1, 0, 0, 1, 360, -6);
}

.wiz-slide
  .sliding-content-area::v-deep
  .nav-wrapper
  .state-container
  .wiz-image.state-image {
  width: 245px !important;
  height: 24px !important;
  transform: translate(-100%, 0) !important;
}

.content-wrapper {
  width: 981px;
  height: 360px;
}
.headline {
  width: 860px;
  transform: matrix(1, 0, 0, 1, 1, -130);
}

.caption {
  width: 735px;
  font-size: 20px;
  line-height: 1.3;
  transform: matrix(1, 0, 0, 1, 1, -53);
}

.wiz-image.bg-image {
  z-index: -1;
  width: 981px;
  height: 563px;
  transform: matrix(1, 0, 0, 1, -40, -105);
}

.ribbon-main {
  z-index: 2;
}

.footnote {
  width: 775px;
}
.footnote ::v-deep b {
  color: #80276c;
}
.footnote-1 {
  transform: matrix(1, 0, 0, 1, -25, 534);
}

.footnote-2 {
  transform: matrix(1, 0, 0, 1, -25, 572);
}

/* wiz-bg-bubble */

.wiz-bg-bubble.bubble-1 {
  overflow: visible;
  width: 275px;
  height: 340px;
  max-height: 340px;
  transform: matrix(1, 0, 0, 1, 67, 49);
}
.wiz-bg-bubble.bubble-2 {
  width: 327px;
  height: 302px;
  transform: matrix(1, 0, 0, 1, 334, 49);
}
.wiz-bg-bubble.bubble-3 {
  width: 327px;
  height: 320px;
  transform: matrix(1, 0, 0, 1, 598, 49);
}
.wiz-bg-bubble.noBackground::v-deep .background {
  display: none;
}
.wiz-bg-bubble.bubble::v-deep .background {
  position: absolute;
  width: 23px;
  height: 19px;
  transform: matrix(1, 0, 0, 1, 24, 10);
}
.wiz-bg-bubble.bubble-1::v-deep .background {
  transform: matrix(1, 0, 0, 1, 24, -10);
}
.wiz-bg-bubble.bubble::v-deep .before-text {
  top: 0;
  font-size: 18px;
  font-family: "DinPro", sans-serif;
  line-height: 1.2;
  text-align: left;
  transform: matrix(1, 0, 0, 1, 23, 31);
}
.wiz-bg-bubble.bubble-1::v-deep .before-text {
  transform: matrix(1, 0, 0, 1, 23, 10);
}
.wiz-bg-bubble.bubble::v-deep .before-text,
.wiz-bg-bubble.bubble::v-deep .number,
.wiz-bg-bubble.bubble::v-deep .percentage {
  color: #80276c;
}
.wiz-bg-bubble.bubble::v-deep .number,
.wiz-bg-bubble.bubble::v-deep .percentage {
  font-family: "DinProCondensed", sans-serif;
}
.wiz-bg-bubble.bubble::v-deep .number {
  top: 0;
  left: 0;
  width: 120px;
  font-size: 149px;
  transform: matrix(1, 0, 0, 1, 18, 61);
}
.wiz-bg-bubble.bubble::v-deep .percentage {
  top: 0;
  left: 0;
  width: 65px;
  font-size: 88px;
  transform: matrix(1, 0, 0, 1, 138, 65);
}
.wiz-bg-bubble.bubble::v-deep .arrow {
  top: 0;
  left: 0;
  width: 49px;
  height: 26px;
  transform: matrix(1, 0, 0, 1, 154, 167);
}
.wiz-bg-bubble.noArrow::v-deep .arrow {
  display: none;
}
.wiz-bg-bubble.bubble::v-deep .description {
  top: 0;
  width: 320px;
  color: #5b6770;
  font-size: 15px;
  font-family: "DinPro", sans-serif;
  line-height: 1.2;
  text-align: left;
  transform: matrix(1, 0, 0, 1, 23, 200);
}
.wiz-bg-bubble.bubble::v-deep .description mark {
  background-color: transparent;
  color: #80276c;
}

.wiz-slide #arrow {
  width: 76px;
  height: 16px;
  overflow: visible;
  transform: matrix(1, 0, 0, 1, 186, 465);
}
</style>
