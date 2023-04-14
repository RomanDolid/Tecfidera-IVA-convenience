<i18n>
  {
    "eng": {
      "headline": "<span style='color: #78be20;'><b>ARR at 12 months before and after TECFIDERA initiation in the overall patient group<sup>1</sup>*</b></span>",
      "hiddenReferences": "<sup refs='ref118'></sup>",
      "graphName": "<span style='color: #5b6770;'>RR (95% CI) 0.25 (0.21-0.30), p<0.0001</span>",
      "rotateText": "<span style='color: #5b6770;'><b>Unadjusted ARR<sup>b</sup> (95% CI)<sup>a</sup></b></span>",
      "y1": "<span style='color: #5b6770;'>0.8</span>",
      "y2": "<span style='color: #5b6770;'>0.6</span>",
      "y3": "<span style='color: #5b6770;'>0.4</span>",
      "y4": "<span style='color: #5b6770;'>0.2</span>",
      "y5": "<span style='color: #5b6770;'>0.0</span>",
      "x1": "<span style='color: #5b6770;'>12 months<br>before TECFIDERA<br>initiation</span>",
      "x2": "<span style='color: #5b6770;'>12 months<br>after TECFIDERA<br>initiation</span>",
      "bar1Title": "<span style='color: #7c878e;'><b>0.64</b></span>",
      "bar1Subtitle": "<span style='color: #5b6770;'>(0.60-0.69)</span>",
      "bar2Title": "<span style='color: #7c878e;'><b>0.16</b></span>",
      "bar2Subtitle": "<span style='color: #5b6770;'>(0.14-0.19)</span>",
      "percentNumber": "<span style='color: #80276c;'><b>75</b></span>",
      "percent": "<span style='color: #80276c;'><b>%</b></span>",
      "footnote1": "<span style='color: #5b6770;'>Adapted from Berger <i>et al.</i> 2019.</span>",
      "footnote2": "<span style='color: #5b6770;'>* Primary outcome results from PROTEC, a Phase 4, 12-month, open-label, single-arm, observational, multicenter study that evaluated TECFIDERA’s effectiveness on<br> disease activity and PROs in patients with RRMS in a real-world clinical setting. Analysis includes patients previously treated with 1st line DMTs and newly diagnosed<br> patients.</span>",
      "footnote3": "<span style='color: #5b6770;'><span style='color: #80276c;'><b>ARR:</b></span> Annualised Relapse Rate; <span style='color: #80276c;'><b>CI:</b></span> Confidence Interval; <span style='color: #80276c;'><b>RR:</b></span> Rate Ratio.</span>"
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
          :text="$t('bar1Title')"
          :component-name="'Graph wrapper'"
        ></wiz-text>
        <wiz-text
          id="bar1Subtitle"
          class="pa bar-1-subtitle"
          :text="$t('bar1Subtitle')"
          :component-name="'Graph note'"
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
          :text="$t('bar2Title')"
          :component-name="'Graph wrapper'"
        ></wiz-text>
        <wiz-text
          id="bar2Subtitle"
          class="pa bar-2-subtitle"
          :text="$t('bar2Subtitle')"
          :component-name="'Graph note'"
        ></wiz-text>
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
        <wiz-image
          id="arrowTecfidera"
          class="pa arrow-tecfidera"
          :src="'./media/images/arrow-tecfidera.png'"
          :component-name="'Arrow'"
        ></wiz-image>
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
  transform: matrix(1, 0, 0, 1, -4, 35);
}

.graph-name {
  font-size: 15px;
  transform: matrix(1, 0, 0, 1, -4, 17);
}

.rotate-text {
  font-size: 14px;
  transform: matrix(0, -1, 1, 0, -76, 218);
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
  transform: matrix(1, 0, 0, 1, 47, 145);
}

.scale-3 {
  transform: matrix(1, 0, 0, 1, 47, 226);
}

.scale-4 {
  transform: matrix(1, 0, 0, 1, 47, 309);
}

.y {
  font-size: 14px;
  font-family: 'DinPro', sans-serif;
}

.y-1 {
  transform: matrix(1, 0, 0, 1, 27, 55);
}

.y-2 {
  transform: matrix(1, 0, 0, 1, 27, 137);
}

.y-3 {
  transform: matrix(1, 0, 0, 1, 27, 218);
}

.y-4 {
  transform: matrix(1, 0, 0, 1, 27, 300);
}

.y-5 {
  transform: matrix(1, 0, 0, 1, 27, 381);
}

.bar-1 {
  width: 59px;
  height: 259px;
  background: linear-gradient(158deg, rgba(199, 200, 202, 1) 0%, rgba(124, 135, 142, 1) 100%);
  transform: matrix(1, 0, 0, 1, 290, 128);
}

.bar-2 {
  width: 58px;
  height: 64px;
  background: linear-gradient(158deg, rgba(128, 39, 108, 1) 0%, rgba(96, 26, 80, 1) 100%);
  transform: matrix(1, 0, 0, 1, 423, 323);
}

.bar1-title {
  font: 30px 'DinProCondensed', sans-serif;
  transform: matrix(1, 0, 0, 1, 298, 54);
}

.bar-1-subtitle {
  font: 13px 'DinPro', sans-serif;
  transform: matrix(1, 0, 0, 1, 289, 90);
}

.wiz-image.line-1 {
  width: 5px;
  height: 37px;
  transform: matrix(1, 0, 0, 1, 317, 110);
}

.bar-2-title {
  font: 30px 'DinProCondensed', sans-serif;
  transform: matrix(1, 0, 0, 1, 429, 253);
}

.bar-2-subtitle {
  font: 13px 'DinPro', sans-serif;
  transform: matrix(1, 0, 0, 1, 420, 289);
}

.wiz-image.line-2 {
  width: 5px;
  height: 23px;
  transform: matrix(1, 0, 0, 1, 448, 310);
}

.percent-number {
  font-size: 150px;
  font-family: 'DinProCondensed', sans-serif;
  transform: matrix(1, 0, 0, 1, 411, 50);
}

.percent {
  font-size: 85px;
  font-family: 'DinProCondensed', sans-serif;
  transform: matrix(1, 0, 0, 1, 531, 60);
}

.wiz-image.arrow-tecfidera {
  width: 49px;
  height: 25px;
  transform: matrix(1, 0, 0, 1, 547, 170);
}

.x {
  width: 300px;
  font-size: 14px;
  text-align: center;
}

.x-1 {
  transform: matrix(1, 0, 0, 1, 169, 392);
}

.x-2 {
  transform: matrix(1, 0, 0, 1, 302, 392);
}

.footnote-1 {
  transform: matrix(1, 0, 0, 1, -43, 46);
}

.footnote-2 {
  transform: matrix(1, 0, 0, 1, -42, 69);
}

.footnote-3 {
  transform: matrix(1, 0, 0, 1, -43, 113);
}
</style>
