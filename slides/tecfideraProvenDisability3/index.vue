<i18n>
  {
    "eng": {
      "hiddenReferences": "<sup refs='ref9 ref101 ref53'></sup>",
      "headlineCaption": "<b style='color: #ffffff;'>Version B</b>",
      "headline": "<span style='color: #80276c;'><b>In the overall population, ~8 out of 10 patients remained free of<br>disability progression at 2 years of treatment with TECFIDERA<sup rv-references='ref9'>1</sup></b></span>",
      "headline1": "<span style='color: #80276c;'><b>~7 out of 10 patients in the overall ENDORSE population remained free<br>of disability progression over 10 years of treatment with TECFIDERA,<br>with the majority of patients maintaining their walking ability<sup rv-references='ref59'>2</sup><sup>†</sup></b></span>",
      "caption": "<span style='color: #5b6770;'>How can TECFIDERA help your patient achieve their life goals with MS?</span>",
      "caption1": "<span style='color: #5b6770;'>How would freedom from disability progression help your RRMS patients achieve<br>their long-term life goals with RRMS?</span>",
      "ribbonTxt1": "<b style='color: #ffffff;'>ARR</b>",
      "ribbonTxt2": "<b style='color: #ffffff;'>Disability<br>progression</b>",
      "ribbonTxt3": "<b style='color: #ffffff;'>MRI activity</b>",
      "ribbonTxt4": "<b style='color: #ffffff;'>Brain volume</b>",
      "tab1": "<b>Initiation</b>",
      "tab2": "<b>2 years</b>",
      "tab3": "<b>10 years</b>",
      "bubbleCaption": "<span style='color: #80276c;'><b>At 2 years of TECFIDERA treatment</b></span>",
      "bubble1Number": "<span style='color: #80276c;'><b>85</b></span>",
      "bubble1Percentage": "<span style='color: #80276c;'><b>%</b></span>",
      "bubble1Description": "<span style='color: #5b6770;'><mark><b>of patients experienced no<br>12-week CDP at 2 years</b></mark><br>vs PBO 78% (p=0.0034)</span>",
      "bubble1BeforeText": "<span style='color: #80276c;'></span>",
      "bubble1AfterText": "<span style='color: #5b6770;'>Estimated proportion with<br>progression at 2 years: PBO=22%<br>(n=399) TEC=15% (n=470)<br>equivalent to 32% reduced risk<br>of 12-week CDP over 2 years vs<br>placebo<br>(HR=0.68 95% CI (0.52-0.88))</span>",
      "bubble2Number": "<span style='color: #80276c;'><b>89</b></span>",
      "bubble2Percentage": "<span style='color: #80276c;'><b>%</b></span>",
      "bubble2Description": "<span style='color: #5b6770;'><mark><b>of patients experienced no<br>24-week CDP at 2 years</b></mark><br>vs PBO 85% (p=0.0278)</span>",
      "bubble2BeforeText": "<span style='color: #80276c;'></span>",
      "bubble2AfterText": "<span style='color: #5b6770;'>Estimated proportion with<br>progression at 2 years:<br>PBO=15% (n=401) TEC=11% (n=477)<br>equivalent to 29% reduced risk<br>of 12-week CDP over 2 years vs<br>placebo<br>(HR=0.71 95% CI (0.52-0.96))</span>",
      "bubble3Number": "<span style='color: #80276c;'><b>72</b></span>",
      "bubble3Percentage": "<span style='color: #80276c;'><b>%</b></span>",
      "bubble3Description": "<span style='color: #5b6770;'><b>of TECFIDERA (DMF/DMF) treated<br>patients remained <mark>free of 24-<br>week CDP</mark> over 10 years<sup rv-references='ref59'>2</sup>*</b></span>",
      "bubble3BeforeText": "<span style='color: #80276c;'><b>Rates of disease progression<br>remained low over 10 years</b></span>",
      "bubble4Number": "<span style='color: #80276c;'><b>77</b></span>",
      "bubble4Percentage": "<span style='color: #80276c;'><b>%</b></span>",
      "bubble4Description": "<span style='color: #5b6770;'><b>(n=173/226) of TECFIDERA (DMF/<br>DMF) treated patients <mark>maintained<br>their walking ability<sup>†</sup></mark> at Year 10<sup rv-references='ref59'>2</sup></b></span>",
      "bubble4BeforeText": "<span style='color: #80276c;'><b>Of patients with no walking<br>impairment<sup>†</sup> at baseline</b></span>",
      "footnote1": "<span style='color: #5b6770;'>* Integrated analysis of DEFINE and CONFIRM at 2 years (overall population). Disability progression as measured by EDSS (12-week and 24-week confirmation) was analyzed<br/>using a Cox proportional hazards model with study as a stratifying factor, and adjusted for the following covariates: region, baseline EDSS score (as a continuous variable),<br/>and baseline age (<40 vs. ≥40 years).</span>",
      "footnote2": "<span style='color: #5b6770;'><b>CDP:</b> Confirmed Disability Progression; <b>CI:</b> Confidence Interval; <b>EDSS:</b> Expanded Disability Status Scale; <b>HR:</b> Hazard Ratio; <b>PBO:</b> Placebo;<br><b>RRMS:</b> Relapsing Remitting Multiple Sclerosis.</span>",
      "footnote5": "<span style='color: #5b6770;'>* Estimated proportion of patients with CDP and time to CDP up to 480 weeks based on the Kaplan-Meier product limit method. CDP was defined as a ≥1.0-point increase on<br/>the EDSS from a baseline EDSS score ≥1 confirmed for 24 weeks, or a ≥1.5-point increase on the EDSS from a baseline EDSS score of 0 confirmed for 24 weeks.<br/><sup>†</sup> No walking impairment was defined in ENDORSE as not progressing to an EDSS score of ≥3.5.<sup rv-references='ref53'></sup></span>",
      "footnote6": "<span style='color: #5b6770;'><b>CDP:</b> Confirmed Disability Progression; <b>CI:</b> Confidence Interval; <b>DMF:</b> Dimethyl Fumerate; <b>EDSS:</b> Expanded Disability Status Scale;<br/> <b>RRMS:</b> Relapsing Remitting Multiple Sclerosis.</span>"
    }
  }
</i18n>

<template>
  <wiz-slide @slideswipe.native="lockSwipe ">
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
        id="versionContainer"
        class="pa"
        :component-name="'Version container'"
      >
        <wiz-text
          id="headlineCaption"
          class="pa"
          :text="$t('headlineCaption')"
          :component-name="'Caption'"
        ></wiz-text>
      </wiz-bg-container>
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
          slot="1"
          class="pa content-wrapper"
          :component-name="'Content Wrapper'"
        >
          <wiz-text
            id="headline"
            class="pa headline"
            :text="$t('headline')"
            :component-name="'Headline'"
          ></wiz-text>
          <wiz-text
            id="caption"
            class="pa caption"
            :text="$t('caption')"
            :component-name="'Caption'"
          ></wiz-text>
          <wiz-image
            id="bg1"
            class="pa bg-image bg-1"
            :src="'./media/images/bg1.png'"
            :component-name="'Background'"
          ></wiz-image>
          <wiz-text
            id="bubbleCaption"
            class="pa"
            :text="$t('bubbleCaption')"
            :component-name="'Caption'"
          ></wiz-text>
          <wiz-bg-bubble
            id="bubble1"
            class="pa bubble noArrow bubble-1"
            v-bind="bubbleOptions1"
            :component-name="'Bubble Component'"
            @click.native="saveSlide(toPopupbubble1)"
          ></wiz-bg-bubble>
          <wiz-bg-bubble
            id="bubble2"
            class="pa bubble noBackground noArrow bubble-2"
            v-bind="bubbleOptions2"
            :component-name="'Bubble Component'"
            @click.native="saveSlide(toPopupbubble2)"
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
          slot="2"
          class="pa content-wrapper"
          :component-name="'Content Wrapper'"
        >
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
          <wiz-image
            id="bg2"
            class="pa bg-image bg-2"
            :src="'./media/images/bg2.png'"
            :component-name="'Background'"
          ></wiz-image>
          <wiz-bg-bubble
            id="bubble3"
            class="pa bubble noArrow bubble-3"
            v-bind="bubbleOptions3"
            :component-name="'Bubble Component'"
            @click.native="saveSlide(toPopupbubble3)"
          ></wiz-bg-bubble>
          <wiz-bg-bubble
            id="bubble4"
            class="pa bubble noArrow bubble-4"
            v-bind="bubbleOptions4"
            :component-name="'Bubble Component'"
            @click.native="saveSlide(toPopupbubble4)"
          ></wiz-bg-bubble>
          <wiz-text
            id="footnote5"
            class="pa footnote footnote-5"
            :text="$t('footnote5')"
            :component-name="'Footnote'"
          ></wiz-text>
          <wiz-text
            id="footnote6"
            class="pa footnote footnote-6"
            :text="$t('footnote6')"
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
        slide: "tecfideraEfficacy",
        chapter: "efficacy",
      },
      optionsContent: {
        activeState: 1,
        states: [
          {
            stateTitle: this.$t("tab1"),
            disabled: true,
            showImage: false,
          },
          {
            stateTitle: this.$t("tab2"),
            showImage: true,
          },
          {
            stateTitle: this.$t("tab3"),
            showImage: true,
          },
        ],
      },
      ribbonOptions: {
        openIconImage: "./common/media/images/indicator-active.png",
        closeIconImage: "./common/media/images/indicator.png",
        items: [
          {
            name: this.$t("ribbonTxt1"),
            slide: {
              slide: "tecfideraTecProvenARR",
              chapter: "slidesPopup",
            },
          },
          {
            name: this.$t("ribbonTxt2"),
            slide: {
              slide: "tecfideraProvenDisability3",
              chapter: "slidesPopup",
            },
            animation: true,
          },
          {
            name: this.$t("ribbonTxt3"),
            slide: {
              slide: "tecfideraProvenMRI",
              chapter: "slidesPopup",
            },
            animation: true,
          },
          {
            name: this.$t("ribbonTxt4"),
            slide: {
              slide: "tecfideraProvenBrainVolume",
              chapter: "slidesPopup",
            },
            animation: true,
          },
        ],
      },
      bubbleOptions1: {
        beforeText: this.$t("bubble1BeforeText"),
        number: this.$t("bubble1Number"),
        percentage: this.$t("bubble1Percentage"),
        description: this.$t("bubble1Description"),
        afterText: this.$t("bubble1AfterText"),
        arrow: "./common/media/images/arrow-tecfidera.png",
        backgroundImage: "./common/media/images/bubble-icon.png",
      },
      bubbleOptions2: {
        beforeText: this.$t("bubble2BeforeText"),
        number: this.$t("bubble2Number"),
        percentage: this.$t("bubble2Percentage"),
        description: this.$t("bubble2Description"),
        afterText: this.$t("bubble2AfterText"),
        arrow: "./common/media/images/arrow-tecfidera.png",
        backgroundImage: "./common/media/images/bubble-icon.png",
      },
      bubbleOptions3: {
        beforeText: this.$t("bubble3BeforeText"),
        number: this.$t("bubble3Number"),
        percentage: this.$t("bubble3Percentage"),
        description: this.$t("bubble3Description"),
        showAfterText: false,
        arrow: "./common/media/images/arrow-tecfidera.png",
        backgroundImage: "./common/media/images/bubble-icon.png",
      },
      bubbleOptions4: {
        beforeText: this.$t("bubble4BeforeText"),
        number: this.$t("bubble4Number"),
        percentage: this.$t("bubble4Percentage"),
        description: this.$t("bubble4Description"),
        showAfterText: false,
        arrow: "./common/media/images/arrow-tecfidera.png",
        backgroundImage: "./common/media/images/bubble-icon.png",
      },
      toPopupbubble1: {
        slide: "tecfideraProvenDisabilityPopup1",
        chapter: "slidesPopup",
      },
      toPopupbubble2: {
        slide: "tecfideraProvenDisabilityPopup2",
        chapter: "slidesPopup",
      },
      toPopupbubble3: {
        slide: "tecfideraProvenDisabilityPopup3",
        chapter: "slidesPopup",
      },
      toPopupbubble4: {
        slide: "tecfideraProvenDisabilityPopup4",
        chapter: "slidesPopup",
      },
    };
  },
  methods: {
    lockSwipe(event) {
      const swipeDirection = event.gesture.direction;
      if (swipeDirection === 2) {
        event.stopImmediatePropagation();
      }
    },
    saveSlide(slide) {
      sessionStorage.setItem('close-popup', JSON.stringify(this.$navigator.getCurrentSlide()));
      this.$navigator.goTo(slide);
    },
  },
};
</script>
<style scoped>
#versionContainer {
    width: 150px;
    height: 40px;
    z-index: 10;
    background: #ef3d33;
    transform: matrix(1, 0, 0, 1, -41, -10);
}

#headlineCaption {
    font-size: 20px;
    transform: matrix(1, 0, 0, 1, 31, 6);
}

#bubbleCaption {
    font-size: 18px;
    transform: matrix(1, 0, 0, 1, 358, 90);
}

.wiz-slide .bubble-caption-icon {
    width: 24px;
    height: 20px;
}

#bubbleCaptionIcon {
    transform: matrix(1, 0, 0, 1, 357, 65);
}

.wiz-bg-grid-container.header-area {
    z-index: 2;
    width: 756px !important;
}

.wiz-slide .sliding-content-area {
    top: 0;
    left: 0;
    overflow: visible;
}

.wiz-slide .sliding-content-area::v-deep .nav-wrapper .state-container {
  transform: matrix(1, 0, 0, 1, 0, -5);
}

.wiz-slide .sliding-content-area::v-deep .nav-wrapper {
  transform: matrix(1, 0, 0, 1, -63, 0);
  width: 67%;
}

.wiz-slide .sliding-content-area::v-deep .nav-wrapper .state-container .wiz-image.state-image img {
  height: 7px;
}

.wiz-slide .sliding-content-area::v-deep .nav-wrapper .state-container .wiz-image.state-image {
  width: 206px !important;
  transform: matrix(1, 0, 0, 1, -208, 8) !important;
}

.content-wrapper {
    width: 981px;
    height: 522px;
}

.headline {
    width: 860px;
    z-index: 11;
    transform: matrix(1, 0, 0, 1, 1, -129);
}

.caption {
    width: 627px;
    z-index: 11;
    font-size: 20px;
    line-height: 1.3;
    transform: matrix(1, 0, 0, 1, 2, -53);
}

#caption1 {
    width: 715px;
    transform: matrix(1, 0, 0, 1, 1, -5);
}

.wiz-image.bg-image {
    width: 980px;
    height: 522px;
    transform: matrix(1, 0, 0, 1, -40, -63);
}

.wiz-image.bg-image.bg-1 {
    height: 472px;
    transform: matrix(1, 0, 0, 1, -40, -15);
}

.wiz-image.bg-image.bg-2 {
    height: 557px;
    transform: matrix(1, 0, 0, 1, -40, -101);
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

.footnote-1,
.footnote-3 {
    transform: matrix(1, 0, 0, 1, -25, 510);
}

.footnote-2 {
    transform: matrix(1, 0, 0, 1, -25, 553);
}

.footnote-4 {
    transform: matrix(1, 0, 0, 1, -25, 522);
}

.footnote-5 {
    transform: matrix(1, 0, 0, 1, -25, 509);
}

.footnote-6 {
    transform: matrix(1, 0, 0, 1, -25, 553);
}

/* wiz-bg-bubble */

.wiz-slide .bubble-1 {
    width: 265px;
    height: 400px;
    max-height: 400px;
    transform: matrix(1, 0, 0, 1, 335, 50);
}

.wiz-slide .bubble-2 {
    width: 265px;
    height: 400px;
    max-height: 400px;
    transform: matrix(1, 0, 0, 1, 599, 50);
}

.wiz-slide .bubble-3 {
    width: 270px;
    height: 302px;
    transform: matrix(1, 0, 0, 1, 327, 47);
}

.wiz-slide .bubble-4 {
    width: 260px;
    height: 302px;
    transform: matrix(1, 0, 0, 1, 627, 47);
}

.wiz-slide .wiz-bg-bubble::v-deep .background {
    width: 23px;
    height: 19px;
    position: absolute;
    transform: matrix(1, 0, 0, 1, 24, 0);
}

.wiz-slide .bubble-3::v-deep .background {
    transform: matrix(1, 0, 0, 1, 22, 7);
}

.wiz-slide .bubble-1::v-deep .background {
    transform: matrix(1, 0, 0, 1, 24, 15);
}

.wiz-slide .bubble-4::v-deep .background {
    transform: matrix(1, 0, 0, 1, 26, 7);
}

.wiz-slide .wiz-bg-bubble.noBackground::v-deep .background {
    display: none;
}

.wiz-slide .wiz-bg-bubble::v-deep .before-text {
    top: 0;
    text-align: left;
    font-family: 'DinPro', sans-serif;
    font-size: 18px;
    line-height: 1.2;
    transform: matrix(1, 0, 0, 1, 23, 31);
}

.wiz-slide .bubble-3::v-deep .before-text {
    transform: matrix(1, 0, 0, 1, 24, 29);
}

.wiz-slide .bubble-4::v-deep .before-text {
    transform: matrix(1, 0, 0, 1, 24, 29);
}

.wiz-slide .wiz-bg-bubble::v-deep .before-text,
.wiz-slide .wiz-bg-bubble::v-deep .number,
.wiz-slide .wiz-bg-bubble::v-deep .percentage {
    color: #80276c;
}

.wiz-slide .wiz-bg-bubble::v-deep .number,
.wiz-slide .wiz-bg-bubble::v-deep .percentage {
    font-family: 'DinProCondensed', sans-serif;
}

.wiz-slide .wiz-bg-bubble::v-deep .number {
    width: 120px;
    top: 0;
    left: 0;
    font-size: 149px;
    transform: matrix(1, 0, 0, 1, 18, 53);
}

.wiz-slide .wiz-bg-bubble::v-deep .percentage {
    width: 65px;
    top: 0;
    left: 0;
    font-size: 88px;
    transform: matrix(1, 0, 0, 1, 138, 58);
}

.wiz-slide .wiz-bg-bubble::v-deep .arrow {
    width: 49px;
    height: 26px;
    top: 0;
    left: 0;
    transform: matrix(1, 0, 0, 1, 154, 167);
}

.wiz-slide .wiz-bg-bubble.noArrow::v-deep .arrow {
    display: none;
}

.wiz-slide .wiz-bg-bubble::v-deep .description {
    width: 320px;
    top: 0;
    text-align: left;
    font-family: 'DinPro', sans-serif;
    font-size: 15px;
    color: #5b6770;
    line-height: 1.2;
    transform: matrix(1, 0, 0, 1, 23, 195);
}

.wiz-slide .wiz-bg-bubble::v-deep .description mark {
    background-color: transparent;
    color: #78be20;
}

.wiz-slide .wiz-bg-bubble::v-deep .after-text {
    top: 0;
    text-align: left;
    line-height: 1.15;
    transform: matrix(1, 0, 0, 1, 23, 271);
}

.wiz-bg-grid-container.footnote-area {
    z-index: 0;
}

</style>
