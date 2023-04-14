<i18n>
  {
    "eng": {
      "headline": "<span style='color: #78be20;'><b>Time to 12-week confirmed disability progression<sup>1</sup><b></span>",
      "hiddenReferences": "<sup refs='ref2'></sup>",
      "graphName": "<span style='color: #5b6770;'>Hazard ratio vs placebo (95% CI)<br>TECFIDERA BID = 0.29 (0.16-0.53)</span>",
      "rotateText": "<span style='color: #5b6770;'><b>Probability of progression</b></span>",
      "y1": "<span style='color: #5b6770;'>0.4</span>",
      "y2": "<span style='color: #5b6770;'>0.3</span>",
      "y3": "<span style='color: #5b6770;'>0.2</span>",
      "y4": "<span style='color: #5b6770;'>0.1</span>",
      "y5": "<span style='color: #5b6770;'>0</span>",
      "x1": "<span style='color: #5b6770;'>BL</span>",
      "x2": "<span style='color: #5b6770;'>12</span>",
      "x3": "<span style='color: #5b6770;'>24</span>",
      "x4": "<span style='color: #5b6770;'>36</span>",
      "x5": "<span style='color: #5b6770;'>48</span>",
      "x6": "<span style='color: #5b6770;'>60</span>",
      "x7": "<span style='color: #5b6770;'>72</span>",
      "x8": "<span style='color: #5b6770;'>84</span>",
      "x9": "<span style='color: #5b6770;'>96</span>",
      "line1Text": "<span style='color: #5b6770;'>Placebo<br>0.233</span>",
      "line2Text": "<span style='color: #80276c;'>TECFIDERA BID<br>0.073</span>",
      "xScaleName": "<span style='color: #5b6770;'><b>Time on Study (weeks)</b></span>",
      "tableName": "<span style='color: #5b6770;'>No. of patients at risk</span>",
      "fistLineName": "<span style='color: #5b6770;'>Placebo</span>",
      "tr1_1": "<span style='color: #5b6770;'>223</span>",
      "tr1_2": "<span style='color: #5b6770;'>209</span>",
      "tr1_3": "<span style='color: #5b6770;'>197</span>",
      "tr1_4": "<span style='color: #5b6770;'>185</span>",
      "tr1_5": "<span style='color: #5b6770;'>172</span>",
      "tr1_6": "<span style='color: #5b6770;'>156</span>",
      "tr1_7": "<span style='color: #5b6770;'>146</span>",
      "tr1_8": "<span style='color: #5b6770;'>142</span>",
      "tr1_9": "<span style='color: #5b6770;'>128<sup>a</sup></span>",
      "secondLineName": "<span style='color: #5b6770;'>TECFIDERA BID</span>",
      "tr2_1": "<span style='color: #5b6770;'>221</span>",
      "tr2_2": "<span style='color: #5b6770;'>201</span>",
      "tr2_3": "<span style='color: #5b6770;'>191</span>",
      "tr2_4": "<span style='color: #5b6770;'>183</span>",
      "tr2_5": "<span style='color: #5b6770;'>174</span>",
      "tr2_6": "<span style='color: #5b6770;'>171</span>",
      "tr2_7": "<span style='color: #5b6770;'>166</span>",
      "tr2_8": "<span style='color: #5b6770;'>163</span>",
      "tr2_9": "<span style='color: #5b6770;'>142<sup>a</sup></span>",
      "footnote1": "<span style='color: #5b6770;'>Adapted from Gold <i>et al.</i> 2015.</span>",
      "footnote2": "<span style='color: #5b6770;'><sup>a</sup> Number of patients at risk 5 days prior to the week 96 visit.</span>",
      "footnote3": "<span style='color: #5b6770;'><span style='color: #80276c;'><b>BID:</b></span> Twice Daily; <span style='color: #80276c;'><b>CI:</b></span> Confidence Interval; <span style='color: #80276c;'><b>DMF:</b></span> Dimethyl Fumerate.</span>"
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
          id="rotateText"
          class="pa rotate-text"
          :text="$t('rotateText')"
          :component-name="'Rotate text'"
        ></wiz-text>
        <wiz-text
          id="graphName"
          class="pa graph-name"
          :text="$t('graphName')"
          :component-name="'Paragraph'"
        ></wiz-text>
        <wiz-text
          id="line1Text"
          class="pa line-1-text"
          :text="$t('line1Text')"
          :component-name="'Graph note'"
        ></wiz-text>
        <wiz-text
          id="line2Text"
          class="pa line-2-text"
          :text="$t('line2Text')"
          :component-name="'Graph note'"
        ></wiz-text>
        <div
          id="yLine"
          class="pa y-line"
        ></div>
        <div
          id="yScale1"
          class="pa y-scales y-scale-1"
        ></div>
        <div
          id="yScale2"
          class="pa y-scales y-scale-2"
        ></div>
        <div
          id="yScale3"
          class="pa y-scales y-scale-3"
        ></div>
        <div
          id="yScale4"
          class="pa y-scales y-scale-4"
        ></div>
        <div
          id="xLine"
          class="pa x-line"
        ></div>
        <div
          id="xScale1"
          class="pa x-scales x-scale-1"
        ></div>
        <div
          id="xScale2"
          class="pa x-scales x-scale-2"
        ></div>
        <div
          id="xScale3"
          class="pa x-scales x-scale-3"
        ></div>
        <div
          id="xScale4"
          class="pa x-scales x-scale-4"
        ></div>
        <div
          id="xScale5"
          class="pa x-scales x-scale-5"
        ></div>
        <div
          id="xScale6"
          class="pa x-scales x-scale-6"
        ></div>
        <div
          id="xScale7"
          class="pa x-scales x-scale-7"
        ></div>
        <div
          id="xScale8"
          class="pa x-scales x-scale-8"
        ></div>
        <wiz-image
          id="graph"
          class="pa graph"
          :src="'./media/images/graph.png'"
          :component-name="'Graph'"
        ></wiz-image>

        <wiz-text
          id="y1"
          class="pa y y-1"
          :text="$t('y1')"
          :component-name="'Vertical scale wrapper'"
        ></wiz-text>
        <wiz-text
          id="y2"
          class="pa y y-2"
          :text="$t('y2')"
          :component-name="'Vertical scale wrapper'"
        ></wiz-text>
        <wiz-text
          id="y3"
          class="pa y y-3"
          :text="$t('y3')"
          :component-name="'Vertical scale wrapper'"
        ></wiz-text>
        <wiz-text
          id="y4"
          class="pa y y-4"
          :text="$t('y4')"
          :component-name="'Vertical scale wrapper'"
        ></wiz-text>
        <wiz-text
          id="y5"
          class="pa y y-5"
          :text="$t('y5')"
          :component-name="'Vertical scale wrapper'"
        ></wiz-text>

        <wiz-text
          id="x1"
          class="pa x x-1"
          :text="$t('x1')"
          :component-name="'Horizontal scale wrapper'"
        ></wiz-text>
        <wiz-text
          id="x2"
          class="pa x x-2"
          :text="$t('x2')"
          :component-name="'Horizontal scale wrapper'"
        ></wiz-text>
        <wiz-text
          id="x3"
          class="pa x x-3"
          :text="$t('x3')"
          :component-name="'Horizontal scale wrapper'"
        ></wiz-text>
        <wiz-text
          id="x4"
          class="pa x x-4"
          :text="$t('x4')"
          :component-name="'Horizontal scale wrapper'"
        ></wiz-text>
        <wiz-text
          id="x5"
          class="pa x x-5"
          :text="$t('x5')"
          :component-name="'Horizontal scale wrapper'"
        ></wiz-text>
        <wiz-text
          id="x6"
          class="pa x x-6"
          :text="$t('x6')"
          :component-name="'Horizontal scale wrapper'"
        ></wiz-text>
        <wiz-text
          id="x7"
          class="pa x x-7"
          :text="$t('x7')"
          :component-name="'Horizontal scale wrapper'"
        ></wiz-text>
        <wiz-text
          id="x8"
          class="pa x x-8"
          :text="$t('x8')"
          :component-name="'Horizontal scale wrapper'"
        ></wiz-text>
        <wiz-text
          id="x9"
          class="pa x x-9"
          :text="$t('x9')"
          :component-name="'Horizontal scale wrapper'"
        ></wiz-text>
        <wiz-text
          id="xScaleName"
          class="pa x-scale-name"
          :text="$t('xScaleName')"
          :component-name="'Bar label'"
        ></wiz-text>

        <wiz-text
          id="tableName"
          class="pa table-name"
          :text="$t('tableName')"
          :component-name="'Caption'"
        ></wiz-text>

        <wiz-text
          id="fistLineName"
          class="pa fist-line-name"
          :text="$t('fistLineName')"
          :component-name="'Table title'"
        ></wiz-text>
        <wiz-text
          id="tr1_1"
          class="pa tr tr1-1"
          :text="$t('tr1_1')"
          :component-name="'Note'"
        ></wiz-text>
        <wiz-text
          id="tr1_2"
          class="pa tr tr1-2"
          :text="$t('tr1_2')"
          :component-name="'Note'"
        ></wiz-text>
        <wiz-text
          id="tr1_3"
          class="pa tr tr1-3"
          :text="$t('tr1_3')"
          :component-name="'Note'"
        ></wiz-text>
        <wiz-text
          id="tr1_4"
          class="pa tr tr1-4"
          :text="$t('tr1_4')"
          :component-name="'Note'"
        ></wiz-text>
        <wiz-text
          id="tr1_5"
          class="pa tr tr1-5"
          :text="$t('tr1_5')"
          :component-name="'Note'"
        ></wiz-text>
        <wiz-text
          id="tr1_6"
          class="pa tr tr1-6"
          :text="$t('tr1_6')"
          :component-name="'Note'"
        ></wiz-text>
        <wiz-text
          id="tr1_7"
          class="pa tr tr1-7"
          :text="$t('tr1_7')"
          :component-name="'Note'"
        ></wiz-text>
        <wiz-text
          id="tr1_8"
          class="pa tr tr1-8"
          :text="$t('tr1_8')"
          :component-name="'Note'"
        ></wiz-text>
        <wiz-text
          id="tr1_9"
          class="pa tr tr1-9"
          :text="$t('tr1_9')"
          :component-name="'Note'"
        ></wiz-text>
        <wiz-text
          id="secondLineName"
          class="pa second-line-name"
          :text="$t('secondLineName')"
          :component-name="'Table title'"
        ></wiz-text>
        <wiz-text
          id="tr2_1"
          class="pa tr tr2-1"
          :text="$t('tr2_1')"
          :component-name="'Note'"
        ></wiz-text>
        <wiz-text
          id="tr2_2"
          class="pa tr tr2-2"
          :text="$t('tr2_2')"
          :component-name="'Note'"
        ></wiz-text>
        <wiz-text
          id="tr2_3"
          class="pa tr tr2-3"
          :text="$t('tr2_3')"
          :component-name="'Note'"
        ></wiz-text>
        <wiz-text
          id="tr2_4"
          class="pa tr tr2-4"
          :text="$t('tr2_4')"
          :component-name="'Note'"
        ></wiz-text>
        <wiz-text
          id="tr2_5"
          class="pa tr tr2-5"
          :text="$t('tr2_5')"
          :component-name="'Note'"
        ></wiz-text>
        <wiz-text
          id="tr2_6"
          class="pa tr tr2-6"
          :text="$t('tr2_6')"
          :component-name="'Note'"
        ></wiz-text>
        <wiz-text
          id="tr2_7"
          class="pa tr tr2-7"
          :text="$t('tr2_7')"
          :component-name="'Note'"
        ></wiz-text>
        <wiz-text
          id="tr2_8"
          class="pa tr tr2-8"
          :text="$t('tr2_8')"
          :component-name="'Note'"
        ></wiz-text>
        <wiz-text
          id="tr2_9"
          class="pa tr tr2-9"
          :text="$t('tr2_9')"
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
        slide: 'tecfideraNewlyDisability',
        chapter: 'slidesPopup',
      },
    };
  },
};
</script>
<style scoped>
.headline {
  font-size: 20px;
  font-family: 'DinPro', sans-serif;
  transform: matrix(1, 0, 0, 1, 154, 35);
}

.graph-name {
  font: 15px/20px 'DinProMedium', sans-serif;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 271, -21);
}

.rotate-text {
  font-size: 14px;
  transform: matrix(0, -1, 1, 0, 16, 168);
}

.line-1-text {
  font-size: 14px;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 634, 81);
}

.line-2-text {
  font-size: 14px;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 608, 201);
}

.y-line {
  width: 300px;
  height: 1px;
  border-left: 1px solid #5b6770;
  background: #5b6770;
  transform: matrix(0, -1, 1, 0, 2, 152);
}

.y-scales {
  width: 8px;
  height: 1px;
  border: 0 solid #5b6770;
  background: #5b6770;
}

.x-scales {
  width: 8px;
  height: 1px;
  border: 0 solid #5b6770;
  background: #5b6770;
}

.y-scale-1 {
  transform: matrix(1, 0, 0, 1, 144, 2);
}

.y-scale-2 {
  transform: matrix(1, 0, 0, 1, 144, 75);
}

.y-scale-3 {
  transform: matrix(1, 0, 0, 1, 144, 149);
}

.y-scale-4 {
  transform: matrix(1, 0, 0, 1, 144, 222);
}

.x-scale-1 {
  transform: matrix(0, -1, 1, 0, 231, 299);
}

.x-scale-2 {
  transform: matrix(0, -1, 1, 0, 292, 299);
}

.x-scale-3 {
  transform: matrix(0, -1, 1, 0, 352, 299);
}

.x-scale-4 {
  transform: matrix(0, -1, 1, 0, 412, 299);
}

.x-scale-5 {
  transform: matrix(0, -1, 1, 0, 471, 299);
}

.x-scale-6 {
  transform: matrix(0, -1, 1, 0, 533, 299);
}

.x-scale-7 {
  transform: matrix(0, -1, 1, 0, 593, 299);
}

.x-scale-8 {
  transform: matrix(0, -1, 1, 0, 654, 299);
}

.x-line {
  width: 513px;
  height: 1px;
  border: 0 solid #5b6770;
  background: #5b6770;
  transform: matrix(1, 0, 0, 1, 144, 295);
}

.wiz-image.graph {
  width: 554px;
  max-width: 554px;
  height: 180px;
  transform: matrix(1, 0, 0, 1, 105, 124);
}

.y {
  font-size: 14px;
}

.y-1 {
  transform: matrix(1, 0, 0, 1, 115, -6);
}

.y-2 {
  transform: matrix(1, 0, 0, 1, 115, 67);
}

.y-3 {
  transform: matrix(1, 0, 0, 1, 115, 141);
}

.y-4 {
  transform: matrix(1, 0, 0, 1, 115, 214);
}

.y-5 {
  transform: matrix(1, 0, 0, 1, 119, 286);
}

.x {
  font-size: 14px;
}

.x-1 {
  transform: matrix(1, 0, 0, 1, 168, 303);
}

.x-2 {
  transform: matrix(1, 0, 0, 1, 230, 303);
}

.x-3 {
  transform: matrix(1, 0, 0, 1, 290, 303);
}

.x-4 {
  transform: matrix(1, 0, 0, 1, 350, 303);
}

.x-5 {
  transform: matrix(1, 0, 0, 1, 410, 303);
}

.x-6 {
  transform: matrix(1, 0, 0, 1, 470, 303);
}

.x-7 {
  transform: matrix(1, 0, 0, 1, 530, 303);
}

.x-8 {
  transform: matrix(1, 0, 0, 1, 590, 303);
}

.x-9 {
  transform: matrix(1, 0, 0, 1, 650, 303);
}

.x-scale-name {
  font-size: 14px;
  transform: matrix(1, 0, 0, 1, 335, 330);
}

.table-name {
  font-size: 12px;
  font-family: 'DinProMedium', sans-serif;
  word-spacing: 1px;
  transform: matrix(1, 0, 0, 1, 51, 353);
}

.fist-line-name {
  font-size: 12px;
  font-family: 'DinProMedium', sans-serif;
  transform: matrix(1, 0, 0, 1, 51, 377);
}

.second-line-name {
  font-size: 12px;
  font-family: 'DinProMedium', sans-serif;
  transform: matrix(1, 0, 0, 1, 51, 398);
}

.tr {
  font-size: 14px;
  font-family: 'DinProMedium', sans-serif;
}

.tr1-1 {
  transform: matrix(1, 0, 0, 1, 166, 376);
}

.tr1-2 {
  transform: matrix(1, 0, 0, 1, 227, 376);
}

.tr1-3 {
  transform: matrix(1, 0, 0, 1, 288, 376);
}

.tr1-4 {
  transform: matrix(1, 0, 0, 1, 350, 376);
}

.tr1-5 {
  transform: matrix(1, 0, 0, 1, 410, 376);
}

.tr1-6 {
  transform: matrix(1, 0, 0, 1, 471, 376);
}

.tr1-7 {
  transform: matrix(1, 0, 0, 1, 532, 376);
}

.tr1-8 {
  transform: matrix(1, 0, 0, 1, 592, 376);
}

.tr1-9 {
  transform: matrix(1, 0, 0, 1, 650, 376);
}

.tr2-1 {
  transform: matrix(1, 0, 0, 1, 166, 397);
}

.tr2-2 {
  transform: matrix(1, 0, 0, 1, 227, 397);
}

.tr2-3 {
  transform: matrix(1, 0, 0, 1, 288, 397);
}

.tr2-4 {
  transform: matrix(1, 0, 0, 1, 350, 397);
}

.tr2-5 {
  transform: matrix(1, 0, 0, 1, 410, 397);
}

.tr2-6 {
  transform: matrix(1, 0, 0, 1, 471, 397);
}

.tr2-7 {
  transform: matrix(1, 0, 0, 1, 532, 397);
}

.tr2-8 {
  transform: matrix(1, 0, 0, 1, 592, 397);
}

.tr2-9 {
  transform: matrix(1, 0, 0, 1, 650, 397);
}

.footnote-1 {
  transform: matrix(1, 0, 0, 1, -44, 66);
}

.footnote-2 {
  transform: matrix(1, 0, 0, 1, -44, 90);
}

.footnote-3 {
  transform: matrix(1, 0, 0, 1, -44, 113);
}
</style>
