<i18n>
  {
    "eng": {
      "headline": "<span style='color: #78be20;'><b>ARR at 1 year before and after switching to TECFIDERA from glatiramer acetate<sup>1</sup></b></span>",
      "hiddenReferences": "<sup refs='ref25'></span>",
      "subtitle": "<span style='color: #5b6770;'><b>Rate ratio (95% CI)</b><br><span class='smaller'>0.22 (0.14-0.34)</span></span>",
      "rotateText": "<span style='color: #5b6770;'><b>Unadjusted ARR (95% CI)</b></span>",
      "y1": "<span style='color: #5b6770;'>0.6</span>",
      "y2": "<span style='color: #5b6770;'>0.5</span>",
      "y3": "<span style='color: #5b6770;'>0.4</span>",
      "y4": "<span style='color: #5b6770;'>0.3</span>",
      "y5": "<span style='color: #5b6770;'>0.2</span>",
      "y6": "<span style='color: #5b6770;'>0.1</span>",
      "y7": "<span style='color: #5b6770;'>0.0</span>",
      "x1": "<span style='color: #5b6770;'>12 Months before <br>TECFIDERA initiation <br>(patients on glatiramer acetate) <br>(0.42-0.57)</span>",
      "x2": "<span style='color: #5b6770;'>12 Months after switching <br>to TECFIDERA <br>(0.07-0.17)</span>",
      "barLabel1": "<span style='color: #fff;'><b>0.49</b></span>",
      "barLabel2": "<span style='color: #fff;'><b>0.11</b></span>",
      "percentText": "<span style='color: #80276c;'><b>78</b></span>",
      "percent": "<span style='color: #80276c;'><b>%</b></span>",
      "bottomPercent": "<span style='color: #5b6770;'>p<0.0001</span>",
      "footnote1": "<span style='color: #5b6770;'>Adapted from Kresa-Reahl, <i>et al.</i> 2018.</span>",
      "footnote2": "<span style='color: #5b6770;'><span style='color: #80276c;'><b>ARR:</b></span> Annualised Relapse Rate; <span style='color: #80276c;'><b>CI:</b></span> Confidence Interval.</span>"
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
          id="subtitle"
          class="pa subtitle"
          :text="$t('subtitle')"
          :component-name="'Caption'"
        ></wiz-text>
        <wiz-text
          id="rotateText"
          class="pa rotate-text"
          :text="$t('rotateText')"
          :component-name="'Vertical legend'"
        ></wiz-text>
        <wiz-bg-container
          id="yScale"
          class="pa y-scale"
        ></wiz-bg-container>
        <wiz-bg-container
          id="yLine1"
          class="pa y-line y-line-1"
        ></wiz-bg-container>
        <wiz-bg-container
          id="yLine2"
          class="pa y-line y-line-2"
        ></wiz-bg-container>
        <wiz-bg-container
          id="yLine3"
          class="pa y-line y-line-3"
        ></wiz-bg-container>
        <wiz-bg-container
          id="yLine4"
          class="pa y-line y-line-4"
        ></wiz-bg-container>
        <wiz-bg-container
          id="yLine5"
          class="pa y-line y-line-5"
        ></wiz-bg-container>
        <wiz-bg-container
          id="yLine6"
          class="pa y-line y-line-6"
        ></wiz-bg-container>
        <wiz-bg-container
          id="xScale"
          class="pa x-scale"
        ></wiz-bg-container>
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
        <wiz-text
          id="y6"
          class="pa y y-6"
          :text="$t('y6')"
          :component-name="'Vertical scale'"
        ></wiz-text>
        <wiz-text
          id="y7"
          class="pa y y-7"
          :text="$t('y7')"
          :component-name="'Vertical scale'"
        ></wiz-text>
        <wiz-bg-container
          id="bar1"
          class="pa bar-1"
        >
          <wiz-text
            id="barLabel1"
            class="pa bar-label-1"
            :text="$t('barLabel1')"
            :component-name="'Bar label'"
          ></wiz-text>
        </wiz-bg-container>
        <wiz-image
          id="line1"
          class="pa line-1"
          :src="'./media/images/line1.png'"
          :component-name="'Bar 1 line'"
        >
        </wiz-image>
        <wiz-bg-container
          id="bar2"
          class="pa bar-2"
        >
          <wiz-text
            id="barLabel2"
            class="pa bar-label-2"
            :text="$t('barLabel2')"
            :component-name="'Bar label'"
          ></wiz-text>
        </wiz-bg-container>
        <wiz-image
          id="line2"
          class="pa line-2"
          :src="'./media/images/line2.png'"
          :component-name="'Bar 2 line'"
        >
        </wiz-image>
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
          id="percentText"
          class="pa percent-text"
          :text="$t('percentText')"
          :component-name="'Value wrapper'"
        ></wiz-text>
        <wiz-text
          id="percent"
          class="pa percent"
          :text="$t('percent')"
          :component-name="'Value wrapper'"
        ></wiz-text>
        <wiz-text
          id="bottomPercent"
          class="pa bottom-percent"
          :text="$t('bottomPercent')"
          :component-name="'Value note'"
        ></wiz-text>
        <wiz-image
          id="arrow"
          class="pa arrow"
          :src="'./media/images/arrow-tecfidera.png'"
          :component-name="'Arrow'"
        ></wiz-image>
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
            :component-name="'Footnote'"
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
      closeBtnNavigation: { // where to go when closing popup
        slide: 'tecfideraSwitchARR',
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
  transform: matrix(1, 0, 0, 1, 21, 35);
}

.wiz-text >>> .smaller {
  font-size: 15px;
}

.subtitle {
  font-size: 18px;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 308, -53);
}

.rotate-text {
  font-size: 14px;
  transform: matrix(0, -1, 1, 0, -83, 204);
}

.y-scale {
  height: 324px;
  border-left: 1px solid #000;
  transform: matrix(1, 0, 0, 1, 40, 51);
}

.y-line {
  width: 9px;
  border-bottom: 1px solid #000;
}

.y-line-1 {
  transform: matrix(1, 0, 0, 1, 36, 51);
}

.y-line-2 {
  transform: matrix(1, 0, 0, 1, 36, 103);
}

.y-line-3 {
  transform: matrix(1, 0, 0, 1, 36, 156);
}

.y-line-4 {
  transform: matrix(1, 0, 0, 1, 36, 212);
}

.y-line-5 {
  transform: matrix(1, 0, 0, 1, 36, 267);
}

.y-line-6 {
  transform: matrix(1, 0, 0, 1, 36, 321);
}

.x-scale {
  width: 689px;
  border-top: 1px solid #000;
  transform: matrix(1, 0, 0, 1, 35, 375);
}

.y {
  font-size: 14px;
}

.y-1 {
  transform: matrix(1, 0, 0, 1, 15, 41);
}

.y-2 {
  transform: matrix(1, 0, 0, 1, 15, 95);
}

.y-3 {
  transform: matrix(1, 0, 0, 1, 15, 149);
}

.y-4 {
  transform: matrix(1, 0, 0, 1, 15, 204);
}

.y-5 {
  transform: matrix(1, 0, 0, 1, 15, 258);
}

.y-6 {
  transform: matrix(1, 0, 0, 1, 15, 312);
}

.y-7 {
  transform: matrix(1, 0, 0, 1, 15, 366);
}

.bar-1 {
  width: 61px;
  height: 265px;
  background: linear-gradient(158deg, rgba(0, 163, 224, 1) 0%, rgba(33, 135, 172, 1) 100%);
  transform: matrix(1, 0, 0, 1, 253, 110);
}

.bar-label-1 {
  font: 30px 'DinProCondensed', sans-serif;
  transform: matrix(0, -1, 1, 0, 8, 222);
}

.wiz-image.line-1 {
  width: 5px;
  height: 88px;
  transform: matrix(1, 0, 0, 1, 281, 62);
}

.bar-2 {
  width: 60px;
  height: 59px;
  background: linear-gradient(158deg, rgba(128, 39, 108, 1) 0%, rgba(97, 26, 80, 1) 100%);
  transform: matrix(1, 0, 0, 1, 455, 316);
}

.bar-label-2 {
  font: 30px 'DinProCondensed', sans-serif;
  transform: matrix(0, -1, 1, 0, 8, 15);
}

.wiz-image.line-2 {
  width: 5px;
  height: 60px;
  transform: matrix(1, 0, 0, 1, 483, 281);
}

.x {
  font-size: 14px;
  line-height: 1.2;
  text-align: center;
}

.x-1 {
  transform: matrix(1, 0, 0, 1, 185, 382);
}

.x-2 {
  transform: matrix(1, 0, 0, 1, 405, 382);
}

.percent-text {
  font-size: 60px;
  font-family: 'DinProCondensed', sans-serif;
  transform: matrix(1, 0, 0, 1, 446, 146);
}

.percent {
  font-size: 34px;
  font-family: 'DinProCondensed', sans-serif;
  transform: matrix(1, 0, 0, 1, 496, 151);
}

.bottom-percent {
  font-size: 12px;
  transform: matrix(1, 0, 0, 1, 447, 212);
}

.wiz-image.arrow {
  overflow: visible;
  width: 24px;
  height: 12px;
  transform: matrix(1, 0, 0, 1, 496, 192);
}

.footnote-1 {
  transform: matrix(1, 0, 0, 1, -44, 89);
}

.footnote-2 {
  transform: matrix(1, 0, 0, 1, -44, 113);
}
</style>
