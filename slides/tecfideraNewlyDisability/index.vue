<i18n>
  {
    "eng": {
      "hiddenReferences": "<sup refs='ref2 ref7'></sup>",
      "headline1": "<span style='color: #80276c;'><b>~9 out of 10 newly diagnosed RRMS patients remained free <br>of disability progression with TECFIDERA at 2 years<sup>1</sup></b></span>",
      "headline2": "<span style='color: #80276c;'><b>~8 out of 10 newly diagnosed patients remained free of disability <br>progression on TECFIDERA over 9 years, with the majority of <br>patients maintaining their walking ability<sup>2†</sup></b></span>",
      "ribbonTxt1": "<b style='color: #ffffff;'>ARR</b>",
      "ribbonTxt2": "<b style='color: #ffffff;'>Disability<br>progression</b>",
      "ribbonTxt3": "<b style='color: #ffffff;'>MRI activity</b>",
      "caption1": "<span style='color: #5b6770;'>How would remaining free of disability progression help your RRMS patients <br>feel in control of their disease and continue with their daily activities?</span>",
      "caption2": "<span style='color: #5b6770;'>How would freedom from disability progression help your RRMS patients <br>achieve their long-term life goals with RRMS?</span>",
      "tab1": "<b>Initiation</b>",
      "tab2": "<b>1 year</b>",
      "tab3": "<b>2 years</b>",
      "tab4": "<b>9+ years</b>",
      "bubble1Number": "<span style='color: #80276c;'><b>93</b></span>",
      "bubble1Percentage": "<span style='color: #80276c;'><b>%</b></span>",
      "bubble1Description": "<span style='color: #5b6770;'><b>of patients on TECFIDERA (DMF/<br>DMF) <mark>remained free of 12-week CDP</mark> <br>compared with 77% with placebo.<sup>1</sup>*</b> <br>Proportion of patients with 12-week <br>CDP at 2 years: 0.07 in the DMF BID <br>group vs 0.23 in the placebo group <br>(p<0.0001 vs placebo).</span>",
      "bubble1BeforeText": "<span style='color: #80276c;'><b>At 2 years,</b></span>",
      "bubble2Number": "<span style='color: #80276c;'><b>71</b></span>",
      "bubble2Percentage": "<span style='color: #80276c;'><b>%</b></span>",
      "bubble2Description": "<span style='color: #5b6770;'><b>in patients on TECFIDERA <br>(DMF/DMF) <mark>vs placebo</mark></b> <br>HR vs placebo [95% CI]: DMF <br>BID 0.29 (0.16, 0.53).<sup>1</sup></span>",
      "bubble2BeforeText": "<span style='color: #80276c;'><b>Relative risk of 12-week <br>CDP was reduced by</b></span>",
      "bubble3Number": "<span style='color: #80276c;'><b>83</b></span>",
      "bubble3Percentage": "<span style='color: #80276c;'><b>%</b></span>",
      "bubble3Description": "<span style='color: #5b6770;'><b>of patients on continuous <br>TECFIDERA remained <br><mark>free of 24-week CDP<sup>2</sup>*</mark></b></span>",
      "bubble3BeforeText": "<span style='color: #80276c;'><b>Over 9 years,</b></span>",
      "bubble4Number": "<span style='color: #80276c;'><b>97</b></span>",
      "bubble4Percentage": "<span style='color: #80276c;'><b>%</b></span>",
      "bubble4Description": "<span style='color: #5b6770;'><b><mark>maintained their walking <br>ability</mark> over 9 years on <br>TECFIDERA<sup>2</sup></b></span>",
      "bubble4BeforeText": "<span style='color: #80276c;'><b>Of the patients with <br>no walking impairment<sup>†</sup> <br>at baseline</b></span>",
      "footnote1": "<span style='color: #5b6770;'>* Disability progression based on Kaplan-Meier estimates. Disability was measured by time to 12-week confirmed EDSS progression was analyzed using a Cox proportional <br>hazards model with study as a stratifying factor and adjusted for the following covariates: baseline EDSS score (as a continuous variable), baseline age (<40 vs. ≥40), and <br>region.</span>",
      "footnote2": "<span style='color: #5b6770;'><b>BID:</b> Twice Daily; <b>CDP:</b> Confirmed Disability Progression; <b>CI:</b> Confidence Interval; <b>DMF:</b> Dimethyl Fumerate; <b>EDSS:</b> Expanded Disability Status Scale; <b>HR:</b> Hazard Ratio; <br><b>RRMS:</b> Relapsing Remitting Multiple Sclerosis.</span>",
      "footnote3": "<span style='color: #5b6770;'>* Estimated proportion of patients with CDP and time to CDP up to 480 weeks based on the Kaplan-Meier product limit method. CDP was defined as a ≥1.0-point increase on <br>the EDSS from a baseline EDSS score ≥1 confirmed for 24 weeks, or a ≥1.5-point increase on the EDSS from a baseline EDSS score of 0 confirmed for 24 weeks. <br><sup>†</sup> No walking impairment was defined as not progressing to an EDSS score of >3.5.</span>",
      "footnote4": "<span style='color: #5b6770;'><b>CDP:</b> Confirmed Disability Progression; <b>DMF:</b> Dimethyl Fumerate; <b>EDSS:</b> Expanded Disability Status Scale; <b>RRMS:</b> Relapsing Remitting Multiple Sclerosis.</span>"
    }
  }
</i18n>

<template>
  <wiz-slide
    @slideswipe.native.stop
  >
    <layouts :layouts="[{name: 'logo'},{name: 'top-image' }]">
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
      <wiz-bg-sliding-content
        class="pa sliding-content-area"
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
            :src="'./media/images/bg1.png'"
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
            class="pa bubble noArrow bubble-1"
            v-bind="bubbleOptions1"
            :component-name="'Bubble Component'"
          ></wiz-bg-bubble>
          <wiz-bg-bubble
            id="bubble2"
            class="pa bubble noBackground bubble-2"
            v-bind="bubbleOptions2"
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
        <wiz-bg-container
          id="contentWrapper3"
          slot="3"
          class="pa content-wrapper"
          :component-name="'Content Wrapper'"
        >
          <wiz-image
            id="bg2"
            class="pa bg-image bg-2"
            :src="'./media/images/bg2.png'"
            :component-name="'Background'"
          ></wiz-image>
          <wiz-text
            id="headline2"
            class="pa headline"
            :text="$t('headline2')"
            :component-name="'Headline'"
          ></wiz-text>
          <wiz-text
            id="caption2"
            class="pa caption caption-2"
            :text="$t('caption2')"
            :component-name="'Caption'"
          ></wiz-text>
          <wiz-bg-bubble
            id="bubble3"
            class="pa bubble noBackground noArrow bubble-3"
            v-bind="bubbleOptions3"
            :component-name="'Bubble Component'"
          ></wiz-bg-bubble>
          <wiz-bg-bubble
            id="bubble4"
            class="pa bubble noBackground noArrow bubble-4"
            v-bind="bubbleOptions4"
            :component-name="'Bubble Component'"
          ></wiz-bg-bubble>
          <wiz-text
            id="footnote3"
            class="pa footnote footnote-3"
            :text="$t('footnote3')"
            :component-name="'Footnote'"
          ></wiz-text>
          <wiz-text
            id="footnote4"
            class="pa footnote footnote-4"
            :text="$t('footnote4')"
            :component-name="'Footnote'"
          ></wiz-text>
        </wiz-bg-container>
      </wiz-bg-sliding-content>
      <wiz-bg-ribbon
        id="ribbonMain"
        class="pa ribbon-main"
        v-bind="ribbonOptions"
        :index="1"
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
            showImage: true,
          },
          {
            stateTitle: this.$t('tab3'),
            showImage: true,
          },
          {
            stateTitle: this.$t('tab4'),
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
      bubbleOptions4: {
        beforeText: this.$t('bubble4BeforeText'),
        number: this.$t('bubble4Number'),
        percentage: this.$t('bubble4Percentage'),
        description: this.$t('bubble4Description'),
        showAfterText: false,
        arrow: './common/media/images/arrow-tecfidera.png',
        backgroundImage: './common/media/images/bubble-icon.png',
      },
      toPopupbubble1: {
        slide: 'tecfideraNewlyDisabilityPopup',
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

.wiz-slide .sliding-content-area::v-deep .nav-wrapper .state-container:nth-of-type(1) {
  width: 80px;
}

.wiz-slide .sliding-content-area::v-deep .nav-wrapper .state-container:nth-of-type(2) {
  width: 147px;
  transform: matrix(1, 0, 0, 1, 82, -6);
}

.wiz-slide .sliding-content-area::v-deep .nav-wrapper .state-container:nth-of-type(3) {
  width: 143px;
  transform: matrix(1, 0, 0, 1, 223, -6);
}

.wiz-slide .sliding-content-area::v-deep .nav-wrapper .state-container:nth-of-type(4) {
  width: 296px;
  transform: matrix(1, 0, 0, 1, 360, -6);
}

.wiz-slide .sliding-content-area::v-deep .nav-wrapper .state-container .wiz-image.state-image {
  width: 245px !important;
  height: 24px !important;
  transform: translate(-100%, 0) !important;
}

.content-wrapper {
  width: 981px;
  height: 522px;
}
.headline {
  width: 860px;
  transform: matrix(1, 0, 0, 1, 1, -130);
}

#arrow1{
  transform: matrix(1, 0, 0, 1, 165, 465);
  width: 175px;
  height: 5px;
  overflow: visible;
}
.caption {
  width: 675px;
  font-size: 20px;
  line-height: 1.3;
  transform: matrix(1, 0, 0, 1, 1, -53);
}
.caption-2 {
  transform: matrix(1, 0, 0, 1, 1, -2);
}

.wiz-image.bg-image {
  width: 981px;
  height: 522px;
  transform: matrix(1, 0, 0, 1, -40, -63);
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
  transform: matrix(1, 0, 0, 1, -25, 511);
}

.footnote-2 {
  transform: matrix(1, 0, 0, 1, -25, 559);
}

.footnote-3 {
  transform: matrix(1, 0, 0, 1, -25, 523);
}

.footnote-4 {
  transform: matrix(1, 0, 0, 1, -25, 570);
}

/* wiz-bg-bubble */

.bubble-1 {
  width: 275px;
  height: 340px;
  max-height: 340px;
  transform: matrix(1, 0, 0, 1, 328, 41);
}
.bubble-2 {
  width: 327px;
  height: 320px;
  transform: matrix(1, 0, 0, 1, 586, 41);
}
.bubble-3 {
  width: 327px;
  height: 302px;
  transform: matrix(1, 0, 0, 1, 334, 41);
}
.bubble-4 {
  width: 327px;
  height: 302px;
  transform: matrix(1, 0, 0, 1, 597, 41);
}
.wiz-bg-bubble::v-deep .background {
  position: absolute;
  width: 23px;
  height: 19px;
  transform: matrix(1, 0, 0, 1, 24, 0);
}
.bubble-1::v-deep .background {
  transform: matrix(1, 0, 0, 1, 24, 23);
}
.wiz-bg-bubble.noBackground::v-deep .background {
  display: none;
}
.wiz-bg-bubble::v-deep .before-text {
  top: 0;
  font-size: 18px;
  font-family: 'DinPro', sans-serif;
  line-height: 1.2;
  text-align: left;
  transform: matrix(1, 0, 0, 1, 23, 31);
}
.bubble-1::v-deep .before-text {
  transform: matrix(1, 0, 0, 1, 23, 50);
}
.bubble-3::v-deep .before-text {
  transform: matrix(1, 0, 0, 1, 23, 50);
}
.bubble-4::v-deep .before-text {
  transform: matrix(1, 0, 0, 1, 23, 15);
}
.wiz-bg-bubble::v-deep .before-text,
.wiz-bg-bubble::v-deep .number,
.wiz-bg-bubble::v-deep .percentage {
  color: #80276c;
}
.wiz-bg-bubble::v-deep .number,
.wiz-bg-bubble::v-deep .percentage {
  font-family: 'DinProCondensed', sans-serif;
}
.wiz-bg-bubble::v-deep .number {
  top: 0;
  left: 0;
  width: 120px;
  font-size: 149px;
  transform: matrix(1, 0, 0, 1, 18, 61);
}
.wiz-bg-bubble::v-deep .percentage {
  top: 0;
  left: 0;
  width: 65px;
  font-size: 88px;
  transform: matrix(1, 0, 0, 1, 138, 65);
}
.wiz-bg-bubble::v-deep .arrow {
  top: 0;
  left: 0;
  width: 49px;
  height: 26px;
  transform: matrix(1, 0, 0, 1, 154, 167);
}
.wiz-bg-bubble.noArrow::v-deep .arrow {
  display: none;
}
.wiz-bg-bubble::v-deep .description {
  top: 0;
  width: 320px;
  color: #5b6770;
  font-size: 15px;
  font-family: 'DinPro', sans-serif;
  line-height: 1.2;
  text-align: left;
  transform: matrix(1, 0, 0, 1, 23, 208);
}
.wiz-bg-bubble::v-deep .description mark {
  background-color: transparent;
  color: #78be20;
}
.wiz-bg-grid-container.footnote-area {
  z-index: 0;
}
</style>
