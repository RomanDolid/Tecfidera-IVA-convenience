<i18n>
  {
    "eng": {
      "headline": "<span style='color: #78be20;'><b>Model-based Mean BPF Changes from baseline from Week 48 to 96,<br>showing brain volume changes by treatment in the pooled study populations<sup>1</sup></b></span>",
      "hiddenReferences": "<sup refs='ref60'></span>",
      "graphName": "<span style='color: #5b6770;'><b>Week 48 to Week 96</b></span>",
      "rotateText": "<span style='color: #5b6770;'><b>Model-Based Mean (95% CI)<br>Change in BPF</b></span>",
      "x1": "<span style='color: #5b6770;'>TECFIDERA</span>",
      "x2": "<span style='color: #5b6770;'>Placebo</span>",
      "y1": "<span style='color: #5b6770;'>0.000</span>",
      "y2": "<span style='color: #5b6770;'>-0.001</span>",
      "y3": "<span style='color: #5b6770;'>-0.002</span>",
      "y4": "<span style='color: #5b6770;'>-0.003</span>",
      "y5": "<span style='color: #5b6770;'>-0.004</span>",
      "barLabel1": "<span style='color: #fff;'><b>-0.0021</b></span>",
      "barLabel2": "<span style='color: #fff;'><b>-0.0033</b></span>",
      "percentText": "<span style='color: #80276c;'><b>35.9</b></span>",
      "percent": "<span style='color: #80276c;'><b>%</b></span>",
      "subtextPercent": "<span style='color: #5b6770;'>reduction in brain<br>volume loss<br>TECFIDERA BID<br>vs. placebo<br>(p = 0.0025)</span>",
      "footnote1": "<span style='color: #5b6770;'>Adapted from Nakamura K <i>et al.</i> 2020.</span>",
      "footnote2": "<span style='color: #5b6770;'>The effect of Tecfidera on brain atrophy was a tertiary objective in DEFINE/CONFIRM.</span>",
      "footnote3": "<span style='color: #5b6770;'><b style='color: #80276c;'>BID:</b> Twice Daily; <b style='color: #80276c;'>BPF:</b> Brain Parenchymal Fraction; <b style='color: #80276c;'>CI:</b> Confidence Interval.</span>"
    }
  }
</i18n>

<template>
  <wiz-slide
    class="slide-popup"
    @slideswipe.native.stop
  >
    <layouts :layouts="[{ name: 'top-image' }]"></layouts>
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
        :component-name="'Headline &amp; Subhead container'"
      >
        <wiz-bg-container
          id="headlineWrapper"
          class="headline-wrapper"
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
        :component-name="'Content area'"
      >
        <wiz-text
          id="graphName"
          class="pa graph-name"
          :text="$t('graphName')"
          :component-name="'Caption'"
        ></wiz-text>
        <div
          id="xScale"
          class="pa x-scale"
        ></div>
        <div
          id="yScale"
          class="pa y-scale"
        ></div>
        <div
          id="yScale1"
          class="pa number-scale y-scale-1"
        ></div>
        <div
          id="yScale2"
          class="pa number-scale y-scale-2"
        ></div>
        <div
          id="yScale3"
          class="pa number-scale y-scale-3"
        ></div>
        <div
          id="yScale4"
          class="pa number-scale y-scale-4"
        ></div>
        <wiz-text
          id="rotateText"
          class="pa rotate-text"
          :text="$t('rotateText')"
          :component-name="'Vertical legend'"
        ></wiz-text>
        <wiz-text
          id="x1"
          class="pa x x-1"
          :text="$t('x1')"
          :component-name="'Horizontal scale'"
        ></wiz-text>
        <wiz-text
          id="x2"
          class="pa x x-2"
          :text="$t('x2')"
          :component-name="'Horizontal scale'"
        ></wiz-text>
        <wiz-text
          id="y1"
          class="pa y y-1"
          :text="$t('y1')"
          :component-name="'Vertical scale'"
        ></wiz-text>
        <wiz-text
          id="y2"
          class="pa y y-2"
          :text="$t('y2')"
          :component-name="'Vertical scale'"
        ></wiz-text>
        <wiz-text
          id="y3"
          class="pa y y-3"
          :text="$t('y3')"
          :component-name="'Vertical scale'"
        ></wiz-text>
        <wiz-text
          id="y4"
          class="pa y y-4"
          :text="$t('y4')"
          :component-name="'Vertical scale'"
        ></wiz-text>
        <wiz-text
          id="y5"
          class="pa y y-5"
          :text="$t('y5')"
          :component-name="'Vertical scale'"
        ></wiz-text>
        <div
          id="bar1"
          class="pa bar-1"
        >
          <wiz-text
            id="barLabel1"
            class="pa bar-label bar-label-1"
            :text="$t('barLabel1')"
            :component-name="'Bar label'"
          ></wiz-text>
        </div>
        <wiz-image
          id="line1"
          class="pa line-1"
          :src="'./media/images/line1.png'"
          :component-name="'Bar line'"
        ></wiz-image>
        <div
          id="bar2"
          class="pa bar-2"
        >
          <wiz-text
            id="barLabel2"
            class="pa bar-label bar-label-2"
            :text="$t('barLabel2')"
            :component-name="'Bar label'"
          ></wiz-text>
        </div>
        <wiz-image
          id="line2"
          class="pa line-2"
          :src="'./media/images/line2.png'"
          :component-name="'Bar line'"
        ></wiz-image>
        <wiz-text
          id="percentText"
          class="pa percent-text"
          :text="$t('percentText')"
          component-name="'Value wrapper'"
        ></wiz-text>
        <wiz-text
          id="percent"
          class="pa percent"
          :text="$t('percent')"
          component-name="'Value wrapper'"
        ></wiz-text>
        <wiz-image
          id="arrowTecfidera"
          class="pa arrow-tecfidera"
          :src="'./media/images/arrow-tecfidera.png'"
          :component-name="'Arrow'"
        ></wiz-image>
        <wiz-text
          id="subtextPercent"
          class="pa subtext-percent"
          :text="$t('subtextPercent')"
          :component-name="'Note'"
        ></wiz-text>
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
            id="hidden"
            class="hidden"
            :text="$t('hiddenReferences')"
            :component-name="'Hidden Refs'"
          ></wiz-text>
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
      </wiz-bg-grid-container>
    </wiz-bg-container>
  </wiz-slide>
</template>
<script>
export default {
  data() {
    return {
      closeBtnNavigation: { // where to go when closing popup
        slide: 'tecfideraProvenBrainVolume',
        chapter: 'slidesPopup',
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
  text-align: center;
  transform: matrix(1, 0, 0, 1, -45, 35);
}

.graph-name {
  font-size: 14px;
  transform: matrix(1, 0, 0, 1, 322, -9);
}

.x-scale {
  width: 689px;
  border-bottom: 1px solid #000;
  transform: matrix(1, 0, 0, 1, 37, 47);
}

.y-scale {
  height: 328px;
  border-left: 1px solid #000;
  transform: matrix(1, 0, 0, 1, 41, 47);
}

.number-scale {
  width: 9px;
  border-bottom: 1px solid #000;
}

.y-scale-1 {
  transform: matrix(1, 0, 0, 1, 37, 130);
}

.y-scale-2 {
  transform: matrix(1, 0, 0, 1, 37, 212);
}

.y-scale-3 {
  transform: matrix(1, 0, 0, 1, 37, 293);
}

.y-scale-4 {
  transform: matrix(1, 0, 0, 1, 37, 375);
}

.rotate-text {
  font-size: 14px;
  text-align: center;
  transform: matrix(0, -1, 1, 0, -115, 196);
}

.x {
  font-size: 14px;
}

.x-1 {
  transform: matrix(1, 0, 0, 1, 270, 23);
}

.x-2 {
  transform: matrix(1, 0, 0, 1, 438, 22);
}

.y {
  font-size: 14px;
}

.y-1 {
  transform: matrix(1, 0, 0, 1, 1, 39);
}

.y-2 {
  transform: matrix(1, 0, 0, 1, -5, 121);
}

.y-3 {
  transform: matrix(1, 0, 0, 1, -5, 203);
}

.y-4 {
  transform: matrix(1, 0, 0, 1, -5, 285);
}

.y-5 {
  transform: matrix(1, 0, 0, 1, -5, 367);
}

.bar-1 {
  width: 92px;
  height: 172px;
  background: -webkit-linear-gradient(-90deg, #80276c, #601a50);
  transform: matrix(1, 0, 0, 1, 261, 48);
}

.wiz-image.line-1 {
  width: 5px;
  height: 50px;
  transform: matrix(1, 0, 0, 1, 305, 219);
}

.bar-2 {
  width: 92px;
  height: 270px;
  background: #c7c8ca;
  transform: matrix(1, 0, 0, 1, 417, 48);
}

.wiz-image.line-2 {
  width: 5px;
  height: 51px;
  transform: matrix(1, 0, 0, 1, 460, 319);
}

.bar-label {
  font: 30px 'DinProCondensed', sans-serif;
  transform: matrix(1, 0, 0, 1, 7, 13);
}

.percent-text {
  font-size: 60px;
  font-family: 'DinProCondensed', sans-serif;
  transform: matrix(1, 0, 0, 1, 246, 260);
}

.percent {
  font-size: 34px;
  font-family: 'DinProCondensed', sans-serif;
  transform: matrix(1, 0, 0, 1, 333, 265);
}

.wiz-image.arrow-tecfidera {
  overflow: visible;
  width: 24px;
  height: 12px;
  transform: matrix(1, 0, 0, 1, 333, 306);
}

.subtext-percent {
  font-size: 12px;
  transform: matrix(1, 0, 0, 1, 247, 326);
}

.footnote-1 {
  transform: matrix(1, 0, 0, 1, -43, 65);
}

.footnote-2 {
  transform: matrix(1, 0, 0, 1, -43, 90);
}

.footnote-3 {
  transform: matrix(1, 0, 0, 1, -43, 113);
}
</style>
