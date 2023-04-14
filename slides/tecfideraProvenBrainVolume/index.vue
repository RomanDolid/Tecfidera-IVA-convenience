<i18n>
  {
    "eng": {
      "hiddenReferences": "<sup refs='ref81 ref82 ref83 ref84 ref110'></sup>",
      "headline1": "<span style='color: #80276c;'><b>TECFIDERA significantly slowed the rate of whole brain<br>volume loss during Year 2 of treatment vs placebo<sup>1</sup></b></span>",
      "headline2": "<span style='color: #80276c;'><b>Annual changes in percentage brain volume loss was low year on<br>year up to 8 years of treatment with TECFIDERA<sup>5</sup></b></span>",
      "ribbonTxt1": "<b style='color: #ffffff;'>ARR</b>",
      "ribbonTxt2": "<b style='color: #ffffff;'>Disability<br>progression</b>",
      "ribbonTxt3": "<b style='color: #ffffff;'>MRI activity</b>",
      "ribbonTxt4": "<b style='color: #ffffff;'>Brain volume</b>",
      "caption1": "<span style='color: #5b6770;'>How can slowing brain volume loss help your patients preserve neurological<br>and functional capacity, and QoL for their future?</span>",
      "caption2": "<span style='color: #5b6770;'>How can slowing brain volume loss help your patients preserve neurological<br>and functional capacity, and QoL for their future?</span>",
      "mainText1": "<span style='color: #5b6770;'><b>Accelerated brain volume loss in MS correlates with cognitive<br>impairment, worse EDSS, and reduced quality of life<sup>2-4</sup></b></span>",
      "mainText2": "<span style='color: #5b6770;'><b>Accelerated brain volume loss in MS correlates with cognitive<br/> impairment, worse EDSS, and reduced QoL<sup>2-4</sup></b></span>",
      "tab1": "<b>Initiation</b>",
      "tab2": "<b>2 years</b>",
      "tab3": "<b>8 years</b>",
      "bubble1Number": "<span style='color: #80276c;'><b>36</b></span>",
      "bubble1Percentage": "<span style='color: #80276c;'><b>%</b></span>",
      "bubble1Description": "<span style='color: #5b6770;'><b>compared with placebo during<br>the second year of treatment<br>(p=0.0025)<sup>1</sup>*</b></span>",
      "bubble1BeforeText": "<span style='color: #80276c;'><b>TECFIDERA significantly<br>slowed the rate of whole<br>brain volume loss by</b></span>",
      "bubble2Number": "<span style='color: #80276c;'><b>−0.19% <span>to</span> −0.37%</b></span>",
      "bubble2Percentage": "<span style='color: #80276c;'></span>",
      "bubble2Description": "<span style='color: #5b6770;'><b>which is <mark>approaching that<br>seen in healthy individuals<sup>5</sup>*</mark></b></span>",
      "bubble2BeforeText": "<span style='color: #80276c;'><b>On TECFIDERA, mean adjusted percentage<br>brain volume change compared to the</br>previous year ranged from</b></span>",
      "footnote1": "<span style='color: #5b6770;'>* Pooled and analysis, including patients who were part of the MRI cohort in either DEFINE or CONFIRM and had been randomized to either DMF BID or placebo.</span>",
      "footnote2": "<span style='color: #5b6770;'>The effect of Tecfidera on brain atrophy was a tertiary objective in DEFINE/CONFIRM.</span>",
      "footnote3": "<span style='color: #5b6770;'><b>BPF:</b> Brain Parenchymal Fraction; <b>CI:</b> Confidence Interval; <b>EDSS:</b> Expanded Disability Status Scale; <b>MS:</b> Multiple Sclerosis.</span>",
      "footnote4": "<span style='color: #5b6770;'>* PBVC in healthy adults ranges from −0.1% to 0.3% annually.<sup>5</sup><br>MRI scan readings were restricted to those collected in the ENDORSE study and performed at a single center. The first ENDORSE MRI was performed at the end of year 1;<br>therefore, only data from year 1 forward were analysed (8 years).<br>The effect of Tecfidera on brain atrophy was a tertiary objective in DEFINE/CONFIRM.</span>",
      "footnote5": "<span style='color: #5b6770;'><b>CI:</b> Confidence Interval; <b>EDSS:</b> Expanded Disability Status Scale; <b>MRI:</b> Magnetic Resonance Imaging; <b>MS:</b> Multiple Sclerosis; <b>PBVC:</b> Percentage Brain Volume Change;<br><b>QoL:</b> Quality of Life.</span>"
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
          slot="1"
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
          <wiz-text
            id="mainText1"
            class="pa main-text"
            :text="$t('mainText1')"
            :component-name="'Main Text'"
          ></wiz-text>
          <wiz-bg-bubble
            id="bubble1"
            v-goto="toPopupbubble1"
            class="pa bubble noArrow bubble-1"
            v-bind="bubbleOptions1"
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
          <wiz-text
            id="footnote3"
            class="pa footnote footnote-3"
            :text="$t('footnote3')"
            :component-name="'Footnote'"
          ></wiz-text>
        </wiz-bg-container>
        <wiz-bg-container
          id="contentWrapper2"
          slot="2"
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
            class="pa caption"
            :text="$t('caption2')"
            :component-name="'Caption'"
          ></wiz-text>
          <wiz-text
            id="mainText2"
            class="pa main-text"
            :text="$t('mainText2')"
            :component-name="'Main Text'"
          ></wiz-text>
          <wiz-bg-bubble
            id="bubble2"
            v-goto="toPopupbubble2"
            class="pa bubble noArrow bubble-2"
            v-bind="bubbleOptions2"
            :component-name="'Bubble Component'"
          ></wiz-bg-bubble>
          <wiz-text
            id="footnote4"
            class="pa footnote footnote-4"
            :text="$t('footnote4')"
            :component-name="'Footnote'"
          ></wiz-text>
          <wiz-text
            id="footnote5"
            class="pa footnote footnote-5"
            :text="$t('footnote5')"
            :component-name="'Footnote'"
          ></wiz-text>
        </wiz-bg-container>
      </wiz-bg-sliding-content>
      <wiz-bg-ribbon
        id="ribbonMain"
        class="pa ribbon-main"
        v-bind="ribbonOptions"
        :index="3"
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
        activeState: 1,
        states: [
          {
            stateTitle: this.$t('tab1'),
            disabled: true,
            showImage: false,
          },
          {
            stateTitle: this.$t('tab2'),
            showImage: true,
          },
          {
            stateTitle: this.$t('tab3'),
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
              slide: 'tecfideraTecProvenARR',
              chapter: 'slidesPopup',
            },
          },
          {
            name: this.$t('ribbonTxt2'),
            slide: {
              slide: 'tecfideraProvenDisability2',
              chapter: 'slidesPopup',
            },
            animation: true,
          },
          {
            name: this.$t('ribbonTxt3'),
            slide: {
              slide: 'tecfideraProvenMRI',
              chapter: 'slidesPopup',
            },
            animation: true,
          },
          {
            name: this.$t('ribbonTxt4'),
            slide: {
              slide: 'tecfideraProvenBrainVolume',
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
      toPopupbubble1: {
        slide: 'tecfideraProvenBrainVolumePopup',
        chapter: 'slidesPopup',
      },
      toPopupbubble2: {
        slide: 'tecfideraProvenBrainVolumePopup2',
        chapter: 'slidesPopup',
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

.sliding-content-area::v-deep .nav-wrapper {
  left: 13px !important;
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
  width: 680px;
  font-size: 20px;
  line-height: 1.3;
  transform: matrix(1, 0, 0, 1, 1, -53);
}
.wiz-slide .main-text {
  width: 505px;
  font: 18px/20px 'DinPro', sans-serif;
  transform: matrix(1, 0, 0, 1, 1, 15);
}
.wiz-image.bg-image {
  z-index: -1;
  width: 980px;
  height: 472px;
  transform: matrix(1, 0, 0, 1, -40, -14);
}
.wiz-image.bg-image.bg-2 {
  height: 557px;
  transform: matrix(1, 0, 0, 1, -40, -99);
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
  transform: matrix(1, 0, 0, 1, -25, 522);
}
.footnote-2 {
  transform: matrix(1, 0, 0, 1, -25, 546);
}
.footnote-3 {
  transform: matrix(1, 0, 0, 1, -25, 570);
}
.footnote-4 {
  transform: matrix(1, 0, 0, 1, -25, 498);
}
.footnote-5 {
  transform: matrix(1, 0, 0, 1, -25, 558);
}

/* wiz-bg-bubble */

.wiz-bg-bubble.bubble-1 {
  overflow: visible;
  width: 250px;
  height: 270px;
  transform: matrix(1, 0, 0, 1, 495, 81);
}
.wiz-bg-bubble.bubble-2 {
  width: 462px;
  max-width: 462px;
  height: 302px;
  transform: matrix(1, 0, 0, 1, 334, 91);
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
  transform: matrix(1, 0, 0, 1, 24, -19);
}
.wiz-bg-bubble.bubble::v-deep .before-text {
  top: 0;
  font-size: 18px;
  font-family: 'DinPro', sans-serif;
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
  font-family: 'DinProCondensed', sans-serif;
}
.wiz-bg-bubble.bubble::v-deep .number {
  top: 0;
  left: 0;
  width: 120px;
  font-size: 149px;
  transform: matrix(1, 0, 0, 1, 18, 61);
}
.wiz-bg-bubble.bubble-2::v-deep .number {
  width: 440px;
  font-size: 76px;
  letter-spacing: -1px;
  transform: matrix(1, 0, 0, 1, 23, 88);
}
.wiz-bg-bubble.bubble-2::v-deep .number b span {
  font-size: 41px;
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
  font-family: 'DinPro', sans-serif;
  line-height: 1.2;
  text-align: left;
  transform: matrix(1, 0, 0, 1, 23, 205);
}
.wiz-bg-bubble.bubble-2::v-deep .description {
  width: 400px;
  font-size: 30px;
  line-height: 31px;
  transform: matrix(1, 0, 0, 1, 23, 170);
}
.wiz-bg-bubble.bubble::v-deep .description mark {
  background-color: transparent;
  color: #80276c;
}
.wiz-bg-bubble.bubble-2::v-deep .description mark {
  color: #78be20;
}
.wiz-bg-grid-container.footnote-area {
  z-index: 0;
}
</style>
