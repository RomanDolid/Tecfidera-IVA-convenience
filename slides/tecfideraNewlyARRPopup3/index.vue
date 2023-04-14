<i18n>
  {
    "eng": {
      "headline": "<span style='color: #78be20;'><b>ARR at 12 months before and after TECFIDERA initiation<br>for newly diagnosed patient subgroup<sup>1</sup></b></span>",
      "graphDescription": "<span style='color: #5b6770;'>RR (95% CI) 0.16 (0.11-0.23)</span>",
      "barLabel1": "<span style='color: #5b6770;'>12 months<br>before TECFIDERA<br>initiation<br>(n=184)</span>",
      "barLabel2": "<span style='color: #5b6770;'>12 months<br>after TECFIDERA<br>initiation<br>(n=184)</span>",
      "barValue1": "<span style='color: #7c878e;'>1.13</span>",
      "barValue2": "<span style='color: #7c878e;'>0.18</span>",
      "valueLabel1": "<span style='color: #5b6770;'>(1.04-1.23)</span>",
      "valueLabel2": "<span style='color: #5b6770;'>(0.13-0.26)</span>",
      "verticalLegend": "<span style='color: #5b6770;'><b>Unadjusted ARR (95% CI)</b></span>",
      "vScale1": "<span style='color: #5b6770;'>1.8</span>",
      "vScale2": "<span style='color: #5b6770;'>1.6</span>",
      "vScale3": "<span style='color: #5b6770;'>1.4</span>",
      "vScale4": "<span style='color: #5b6770;'>1.2</span>",
      "vScale5": "<span style='color: #5b6770;'>1.0</span>",
      "vScale6": "<span style='color: #5b6770;'>0.8</span>",
      "vScale7": "<span style='color: #5b6770;'>0.6</span>",
      "vScale8": "<span style='color: #5b6770;'>0.4</span>",
      "vScale9": "<span style='color: #5b6770;'>0.2</span>",
      "vScale10": "<span style='color: #5b6770;'>0.0</span>",
      "bubbleNumber": "<span style='color: #80276c;'><b>84</b></span>",
      "bubblePercentage": "<span style='color: #80276c;'><b>%</b></span>",
      "bubbleDescription": "<span style='color: #ff0000;'></span>",
      "bubbleBeforeText": "<span style='color: #ff0000;'></span>",
      "bubbleAfterText": "<span style='color: #ff0000;'></span>",
      "footnote1": "<span style='color: #5b6770;'>Adapted from Berger <i>et al</i> 2019.</span>",
      "footnote2": "<span style='color: #5b6770;'><b>ARR:</b> Annualised Relapse Rate; <b>CI:</b> Confidence Interval; <b>RR:</b> Rate Ratio.</span>",
      "hiddenReferences": "<sup refs='ref58'></sup>"
    }
  }
</i18n>

<template>
  <wiz-slide
    class="slide-popup"
    @slideswipe.native.stop
  >
    <layouts :layouts="[{ name: 'logo' },{ name: 'top-image' }]">
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
          <wiz-text
            id="graphDescription"
            class="pa graph-description"
            :text="$t('graphDescription')"
            :component-name="'Description'"
          ></wiz-text>
          <wiz-image
            id="graph"
            class="pa graph"
            :src="'./media/images/graph.png'"
            :component-name="'Graph'"
          ></wiz-image>
          <wiz-bg-bubble
            id="bubble"
            class="pa noBackground"
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
            id="valueLabel1"
            class="pa value-label value-label-1"
            :text="$t('valueLabel1')"
            :component-name="'value Label'"
          ></wiz-text>
          <wiz-text
            id="valueLabel2"
            class="pa value-label value-label-2"
            :text="$t('valueLabel2')"
            :component-name="'value Label'"
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
            <wiz-text
              id="vScale7"
              class="pa v-scale v-scale-7"
              :text="$t('vScale7')"
              :component-name="'Vertical Scale'"
            ></wiz-text>
            <wiz-text
              id="vScale8"
              class="pa v-scale v-scale-8"
              :text="$t('vScale8')"
              :component-name="'Vertical Scale'"
            ></wiz-text>
            <wiz-text
              id="vScale9"
              class="pa v-scale v-scale-9"
              :text="$t('vScale9')"
              :component-name="'Vertical Scale'"
            ></wiz-text>
            <wiz-text
              id="vScale10"
              class="pa v-scale v-scale-10"
              :text="$t('vScale10')"
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
  transform: matrix(1, 0, 0, 1, -46, 35);
}
.wiz-bg-grid-container .content-wrapper {
  width: 853px;
  height: 410px;
}

.graph-description {
  width: 184px;
  font-size: 15px;
  transform: matrix(1, 0, 0, 1, -16, 17);
}
.wiz-image.graph {
  width: 680px;
  height: 327px;
  transform: matrix(1, 0, 0, 1, 36, 62);
}
.vertical-legend {
  width: 160px;
  font-size: 14px;
  transform: matrix(0, -1, 1, 0, -13, 305);
  transform-origin: 0 0;
}
.vertical-scale-wrapper {
  width: 25px;
  height: 345px;
  transform: matrix(1, 0, 0, 1, 12, 53);
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
  transform: matrix(1, 0, 0, 1, 0, 36);
}
.v-scale-3 {
  transform: matrix(1, 0, 0, 1, 0, 71);
}
.v-scale-4 {
  transform: matrix(1, 0, 0, 1, 0, 109);
}
.v-scale-5 {
  transform: matrix(1, 0, 0, 1, 0, 145);
}
.v-scale-6 {
  transform: matrix(1, 0, 0, 1, 0, 181);
}
.v-scale-7 {
  transform: matrix(1, 0, 0, 1, 0, 217);
}
.v-scale-8 {
  transform: matrix(1, 0, 0, 1, 0, 254);
}
.v-scale-9 {
  transform: matrix(1, 0, 0, 1, 0, 290);
}
.v-scale-10 {
  transform: matrix(1, 0, 0, 1, 0, 326);
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
  transform: matrix(1, 0, 0, 1, 258, 108);
}
.bar-value-2 {
  transform: matrix(1, 0, 0, 1, 390, 285);
}
.value-label {
  width: 120px;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
}
.value-label-1 {
  transform: matrix(1, 0, 0, 1, 258, 145);
}
.value-label-2 {
  transform: matrix(1, 0, 0, 1, 390, 321);
}
.bar-label {
  width: 120px;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
}
.bar-label-1 {
  transform: matrix(1, 0, 0, 1, 258, 393);
}
.bar-label-2 {
  transform: matrix(1, 0, 0, 1, 390, 393);
}

/* wiz-bg-bubble */

.wiz-bg-bubble {
  transform: matrix(1, 0, 0, 1, 393, 5);
}
.wiz-bg-bubble::v-deep .background {
  position: absolute;
  width: 23px;
  height: 19px;
  transform: matrix(1, 0, 0, 1, 24, 0);
}
.wiz-bg-bubble.noBackground::v-deep .background {
  display: none;
}
.wiz-bg-bubble::v-deep .before-text {
  top: 0;
  font-size: 25px;
  font-family: 'DinPro', sans-serif;
  line-height: 1;
  text-align: left;
  transform: matrix(1, 0, 0, 1, 23, 19);
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
.footnote-1 {
  width: 140px;
  transform: matrix(1, 0, 0, 1, -44, 90);
}
.footnote-2 {
  width: 314px;
  transform: matrix(1, 0, 0, 1, -44, 113);
}
</style>
