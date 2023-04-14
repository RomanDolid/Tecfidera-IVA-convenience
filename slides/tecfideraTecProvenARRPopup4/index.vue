<i18n>
  {
    "eng": {
      "headline": "<span style='color: #78be20;'><b>Annualised relapse rate at 2 years<sup>1</sup>*</b></span>",
      "hiddenReferences": "<sup refs='ref79'></sup>",
      "graphName": "<span style='color: #5b6770;'>RR (95% CI) 0.515 (0.427-0.622); p<0.0001</span>",
      "rotateText": "<span style='color: #5b6770;'><b>Annualised relapse rate (95% CI)</b></span>",
      "y1": "<span style='color: #5b6770;'>0.5</span>",
      "y2": "<span style='color: #5b6770;'>0.4</span>",
      "y3": "<span style='color: #5b6770;'>0.3</span>",
      "y4": "<span style='color: #5b6770;'>0.2</span>",
      "y5": "<span style='color: #5b6770;'>0.1</span>",
      "y6": "<span style='color: #5b6770;'>0.0</span>",
      "x1": "<span style='color: #5b6770;'>Placebo<br>(n=771)</span>",
      "x2": "<span style='color: #5b6770;'>DMF* BID<br>(n=769)</span>",
      "barLabel1": "<span style='color: #fff;'><b>0.37</b></span>",
      "barLabel2": "<span style='color: #fff;'><b>0.19</b></span>",
      "footnote1": "<span style='color: #5b6770;'>Adapted from Viglietta V <i>et al.</i> 2015.</span>",
      "footnote2": "<span style='color: #5b6770;'>* ARR was calculated using a negative binomial regression model adjusted for study, region, baseline age (<40 vs. ≥40 years), baseline EDSS score (≤2.0 vs. >2.0), and<br> number of relapses in the year prior to study entry.</span>"
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
        :session-storage-key='myKey'
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
          :component-name="'Headline'"
        ></wiz-text>
        <wiz-text
          id="rotateText"
          class="pa rotate-text"
          :text="$t('rotateText')"
          :component-name="'Vertical legend'"
        ></wiz-text>
        <wiz-bg-container
          id="VerticalScale"
          class="pa vertical-scale"
        ></wiz-bg-container>
        <wiz-bg-container
          id="HorizontalScale"
          class="pa horizontal-scale"
        ></wiz-bg-container>
        <wiz-bg-container
          id="scale1"
          class="pa scale scale-1"
        ></wiz-bg-container>
        <wiz-bg-container
          id="scale2"
          class="pa scale scale-2"
        ></wiz-bg-container>
        <wiz-bg-container
          id="scale3"
          class="pa scale scale-3"
        ></wiz-bg-container>
        <wiz-bg-container
          id="scale4"
          class="pa scale scale-4"
        ></wiz-bg-container>
        <wiz-bg-container
          id="scale5"
          class="pa scale scale-5"
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
        <wiz-bg-container
          id="bar1"
          class="pa bar-1"
        ></wiz-bg-container>
        <wiz-bg-container
          id="bar2"
          class="pa bar-2"
        ></wiz-bg-container>
        <wiz-text
          id="bar1Title"
          class="pa bar1-title"
          :text="$t('barLabel1')"
          :component-name="'Graph wrapper'"
        ></wiz-text>
        <wiz-image
          id="line1"
          class="pa line-1"
          :src="'./media/images/line1.png'"
          :component-name="'Vertical line'"
        ></wiz-image>
        <wiz-text
          id="bar2Title"
          class="pa bar-2-title"
          :text="$t('barLabel2')"
          :component-name="'Graph wrapper'"
        ></wiz-text>
        <wiz-image
          id="connectLine"
          class="pa connect-line"
          :src="'./media/images/line3.png'"
          :component-name="'Connect line'"
        ></wiz-image>
        <wiz-image
          id="line2"
          class="pa line-2"
          :src="'./media/images/line2.png'"
          :component-name="'Vertical line'"
        ></wiz-image>
        <wiz-text
          id="percentNumber"
          class="pa percent-number"
          :text="$t('percentNumber')"
          :component-name="'Value wrapper'"
        ></wiz-text>
        <wiz-text
          id="percent"
          class="pa percent"
          :text="$t('percent')"
          :component-name="'Value wrapper'"
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
      closeBtnNavigation: {
        slide: '',
        chapter: '',
      },
      myKey: "close-popup"
    };
  },
};
</script>
<style scoped>
.headline {
  width: 855px;
  font-size: 20px;
  font-family: 'DinPro', sans-serif;
  transform: matrix(1, 0, 0, 1, 220, 35);
}

.graph-name {
  font-size: 15px;
  transform: matrix(1, 0, 0, 1, 256, 48);
}

.rotate-text {
  font-size: 14px;
  transform: matrix(0, -1, 1, 0, -98, 218);
}

.vertical-scale {
  height: 325px;
  border-left: 1px solid #000;
  transform: matrix(1, 0, 0, 1, 51, 62);
}

.horizontal-scale {
  width: 668px;
  border-bottom: 1px solid #000;
  transform: matrix(1, 0, 0, 1, 47, 387);
}

.scale {
  width: 9px;
  border-bottom: 1px solid #000;
}

.scale-1 {
  transform: matrix(1, 0, 0, 1, 47, 62);
}

.scale-2 {
  transform: matrix(1, 0, 0, 1, 47, 127);
}

.scale-3 {
  transform: matrix(1, 0, 0, 1, 47, 192);
}

.scale-4 {
  transform: matrix(1, 0, 0, 1, 47, 258);
}

.scale-5 {
  transform: matrix(1, 0, 0, 1, 47, 322);
}

.y {
  font-size: 14px;
  font-family: 'DinPro', sans-serif;
}

.y-1 {
  transform: matrix(1, 0, 0, 1, 26, 55);
}

.y-2 {
  transform: matrix(1, 0, 0, 1, 26, 120);
}

.y-3 {
  transform: matrix(1, 0, 0, 1, 26, 185);
}

.y-4 {
  transform: matrix(1, 0, 0, 1, 26, 251);
}

.y-5 {
  transform: matrix(1, 0, 0, 1, 26, 316);
}

.y-6 {
  transform: matrix(1, 0, 0, 1, 26, 381);
}

.bar-1 {
  width: 60px;
  height: 239px;
  background: linear-gradient(158deg, rgba(199, 200, 202, 1) 0%, rgba(124, 135, 142, 1) 100%);
  transform: matrix(1, 0, 0, 1, 288, 148);
}

.bar-2 {
  width: 59px;
  height: 122px;
  background: linear-gradient(158deg, rgba(128, 39, 108, 1) 0%, rgba(96, 26, 80, 1) 100%);
  transform: matrix(1, 0, 0, 1, 420, 265);
}

.bar1-title {
  font: 30px 'DinProCondensed', sans-serif;
  transform: matrix(1, 0, 0, 1, 296, 251);
}

.wiz-image.line-1 {
  width: 5px;
  height: 61px;
  transform: matrix(1, 0, 0, 1, 316, 114);
}

.bar-2-title {
  font: 30px 'DinProCondensed', sans-serif;
  transform: matrix(1, 0, 0, 1, 428, 308);
}

.wiz-image.connect-line {
  width: 134px;
  height: 161px;
  transform: matrix(1, 0, 0, 1, 318, 73);
}

.wiz-image.line-2 {
  width: 5px;
  height: 44px;
  transform: matrix(1, 0, 0, 1, 448, 243);
}

.x {
  width: 300px;
  font-size: 14px;
  text-align: center;
}

.x-1 {
  transform: matrix(1, 0, 0, 1, 168, 391);
}

.x-2 {
  transform: matrix(1, 0, 0, 1, 299, 391);
}

.footnote-1 {
  transform: matrix(1, 0, 0, 1, -44, 77);
}

.footnote-2 {
  transform: matrix(1, 0, 0, 1, -44, 101);
}
</style>
