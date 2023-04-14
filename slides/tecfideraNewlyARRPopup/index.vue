<i18n>
  {
    "eng": {
      "headline": "<span style='color: #78be20;'><b>ARR at 2 years in the newly diagnosed population<sup>1</sup></b></span>",
      "graphDescription": "<span style='color: #5b6770;'>Integrated data from the DEFINE and CONFIRM studies (post-hoc analysis).</span>",
      "barLabel1": "<span style='color: #5b6770;'>Placebo<br/>(n=223)</span>",
      "barLabel2": "<span style='color: #5b6770;'>TECFIDERA<br/>240 mg BID<br/>(n=221)</span>",
      "verticalLegend": "<span style='color: #5b6770;'><b>Adjusted ARR (95% CI)</b></span>",
      "barValue1": "<span style='color: #ffffff;'>0.384</span>",
      "barValue2": "<span style='color: #ffffff;'>0.170</span>",
      "vScale1": "<span style='color: #5b6770;'>0.5</span>",
      "vScale2": "<span style='color: #5b6770;'>0.4</span>",
      "vScale3": "<span style='color: #5b6770;'>0.3</span>",
      "vScale4": "<span style='color: #5b6770;'>0.2</span>",
      "vScale5": "<span style='color: #5b6770;'>0.1</span>",
      "vScale6": "<span style='color: #5b6770;'>0.0</span>",
      "bubbleNumber": "<span style='color: #80276c;'><b>56</b></span>",
      "bubblePercentage": "<span style='color: #80276c;'><b>%</b></span>",
      "bubbleDescription": "<span style='color: #5b6770;'>p<0.0001<br/>vs placebo</span>",
      "bubbleBeforeText": "<span style='color: #ff0000;'></span>",
      "bubbleAfterText": "<span style='color: #ff0000;'></span>",
      "footnote1": "<span style='color: #5b6770;'>Adapted from Gold R, <i>et al.</i> 2015.</span>",
      "footnote2": "<span style='color: #5b6770;'><b>ARR:</b> Annualized Relapse Rate; <b>BID:</b> Twice Daily.</span>",
      "hiddenReferences": "<sup refs='ref2'></sup>"
    }
  }
</i18n>

<template>
  <wiz-slide
    class="slide-popup"
    @slideswipe.native.stop
  >
    <layouts :layouts="[{ name: 'logo' }, { name: 'top-image' }]">
      &nbsp;
    </layouts>
    <wiz-bg-container
      id="popupWrapper"
      class="popup-wrapper"
      :component-name="'Popup Wrapper'"
    >
      <wiz-bg-close-popup-button
        id="closePopup"
        class="close-popup"
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
          <wiz-image
            id="graph"
            class="pa graph"
            :src="'./media/images/graph.png'"
            :component-name="'Graph'"
          ></wiz-image>
          <wiz-bg-bubble
            id="bubble"
            class="pa bubble noBackground"
            v-bind="optionsContent"
            :component-name="'Bubble Component'"
          ></wiz-bg-bubble>
          <wiz-text
            id="barValue1"
            class="pa bar-value bar-value-1"
            :text="$t('barValue1')"
            :component-name="'Bar Value'"
          ></wiz-text>
          <wiz-text
            id="barValue2"
            class="pa bar-value bar-value-2"
            :text="$t('barValue2')"
            :component-name="'Bar Value'"
          ></wiz-text>
          <wiz-text
            id="verticalLegend"
            class="pa vertical-legend"
            :text="$t('verticalLegend')"
            :component-name="'Vertical Legend'"
          ></wiz-text>
          <wiz-bg-container
            id="verticalScaleWrapper"
            class="pa vertical-scale-wrapper"
            :component-name="'Vertical Scale Wrapper'"
          >
            <wiz-text
              id="vScale1"
              class="pa v-scale v-scale-1"
              :text="$t('vScale1')"
              :component-name="'Vertical Scale'"
            ></wiz-text>
            <wiz-text
              id="vScale2"
              class="pa v-scale v-scale-2"
              :text="$t('vScale2')"
              :component-name="'Vertical Scale'"
            ></wiz-text>
            <wiz-text
              id="vScale3"
              class="pa v-scale v-scale-3"
              :text="$t('vScale3')"
              :component-name="'Vertical Scale'"
            ></wiz-text>
            <wiz-text
              id="vScale4"
              class="pa v-scale v-scale-4"
              :text="$t('vScale4')"
              :component-name="'Vertical Scale'"
            ></wiz-text>
            <wiz-text
              id="vScale5"
              class="pa v-scale v-scale-5"
              :text="$t('vScale5')"
              :component-name="'Vertical Scale'"
            ></wiz-text>
            <wiz-text
              id="vScale6"
              class="pa v-scale v-scale-6"
              :text="$t('vScale6')"
              :component-name="'Vertical Scale'"
            ></wiz-text>
          </wiz-bg-container>
          <wiz-text
            id="barLabel1"
            class="pa bar-label bar-label-1"
            :text="$t('barLabel1')"
            :component-name="'Bar Label'"
          ></wiz-text>
          <wiz-text
            id="barLabel2"
            class="pa bar-label bar-label-2"
            :text="$t('barLabel2')"
            :component-name="'Bar Label'"
          ></wiz-text>
          <wiz-text
            id="graphDescription"
            class="pa graph-description"
            :text="$t('graphDescription')"
            :component-name="'Description'"
          ></wiz-text>
        </wiz-bg-container>
      </wiz-bg-grid-container>

      <wiz-bg-grid-container
        id="footnoteArea"
        class="footnote-area"
        :component-name="'Footnote area'"
      >
        <wiz-bg-container
          id="footnoteWrapper"
          class="footnote-wrapper"
        >
          <wiz-text
            id="footnote1"
            class="pa footnote footnote-1"
            :text="$t('footnote1')"
            :component-name="'Bar Label'"
          ></wiz-text>
          <wiz-text
            id="footnote2"
            class="pa footnote footnote-2"
            :text="$t('footnote2')"
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
    </wiz-bg-container>
  </wiz-slide>
</template>
<script>
export default {
  data() {
    return {
      closeBtnNavigation: {
        // where to go when closing popup
        slide: 'tecfideraNewlyARR',
        chapter: 'slidesPopup',
      },
      optionsContent: {
        beforeText: this.$t('bubbleBeforeText'),
        number: this.$t('bubbleNumber'),
        percentage: this.$t('bubblePercentage'),
        description: this.$t('bubbleDescription'),
        afterText: this.$t('bubbleAfterText'),
        showAfterText: false,
        showBeforeText: false,
        arrow: './common/media/images/arrow-tecfidera.png',
        backgroundImage: './common/media/images/bubble-icon.png',
      },
    };
  },
};
</script>
<style scoped>
.headline {
  width: 855px;
  font-size: 20px;
  font-family: 'DinPro', sans-serif;
  line-height: 1.1;
  text-align: center;
  transform: matrix(1, 0, 0, 1, -29, 35);
}
.wiz-bg-grid-container .content-wrapper {
  width: 853px;
  height: 410px;
}
.wiz-image.graph {
  width: 691px;
  height: 334px;
  transform: matrix(1, 0, 0, 1, 36, 41);
}
.graph-description {
  width: 500px;
  font-size: 15px;
  transform: matrix(1, 0, 0, 1, 41, 446);
}
.vertical-legend {
  width: 143px;
  font-size: 14px;
  transform: matrix(0, -1, 1, 0, -13, 284);
  transform-origin: 0 0;
}
.vertical-scale-wrapper {
  width: 25px;
  height: 340px;
  transform: matrix(1, 0, 0, 1, 11, 40);
}
.v-scale {
  width: 25px;
  font-size: 14px;
  text-align: center;
}
.v-scale-1 {
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.v-scale-2 {
  transform: matrix(1, 0, 0, 1, 0, 65);
}
.v-scale-3 {
  transform: matrix(1, 0, 0, 1, 0, 130);
}
.v-scale-4 {
  transform: matrix(1, 0, 0, 1, 0, 195);
}
.v-scale-5 {
  transform: matrix(1, 0, 0, 1, 0, 260);
}
.v-scale-6 {
  transform: matrix(1, 0, 0, 1, 0, 325);
}
.bar-value {
  width: 120px;
  font-weight: 600;
  font-size: 30px;
  font-family: 'DinProCondensed', sans-serif;
  line-height: normal;
  text-align: center;
}
.bar-value-1 {
  transform: matrix(0, -1, 1, 0, 273, 326);
}
.bar-value-2 {
  transform: matrix(0, -1, 1, 0, 375, 326);
}
.bar-label {
  width: 120px;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
}
.bar-label-1 {
  transform: matrix(1, 0, 0, 1, 271, 382);
}
.bar-label-2 {
  transform: matrix(1, 0, 0, 1, 375, 382);
}

/* wiz-bg-bubble */

.wiz-bg-bubble.bubble {
  width: 100px;
  height: 100px;
  transform: matrix(1, 0, 0, 1, 397, 134);
}
.wiz-bg-bubble.bubble::v-deep .background {
  position: absolute;
  width: 23px;
  height: 19px;
  transform: matrix(1, 0, 0, 1, 24, 0);
}
.wiz-bg-bubble.bubble.noBackground::v-deep .background {
  display: none;
}
.wiz-bg-bubble.bubble::v-deep .before-text {
  top: 0;
  font-size: 25px;
  font-family: 'DinPro', sans-serif;
  line-height: 1;
  text-align: left;
  transform: matrix(1, 0, 0, 1, 23, 19);
}
.wiz-bg-bubble.bubble::v-deep .number,
.wiz-bg-bubble.bubble::v-deep .percentage {
  font-family: 'DinProCondensed', sans-serif;
}
.wiz-bg-bubble.bubble::v-deep .number {
  top: 0;
  left: 0;
  width: 49px;
  font-size: 60px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.wiz-bg-bubble.bubble::v-deep .percentage {
  top: 0;
  left: 0;
  width: 25px;
  font-size: 34px;
  transform: matrix(1, 0, 0, 1, 48, 2);
}
.wiz-bg-bubble.bubble::v-deep .arrow {
  top: 0;
  left: 0;
  width: 24px;
  height: 12px;
  transform: matrix(1, 0, 0, 1, 50, 40);
}
.wiz-bg-bubble.bubble::v-deep .arrow img {
  display: block;
}
.wiz-bg-bubble.bubble.noArrow::v-deep .arrow {
  display: none;
}
.wiz-bg-bubble.bubble::v-deep .description {
  top: 0;
  width: 100px;
  font-size: 12px;
  font-family: 'DinPro', sans-serif;
  line-height: 1.2;
  text-align: left;
  transform: matrix(1, 0, 0, 1, 0, 58);
}
.wiz-bg-bubble.bubble::v-deep .description mark {
  background-color: transparent;
  color: #78be20;
}
.footnote-1 {
  width: 144px;
  transform: matrix(1, 0, 0, 1, -44, 90);
}
.footnote-2 {
  width: 214px;
  transform: matrix(1, 0, 0, 1, -44, 113);
}
</style>
