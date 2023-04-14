<i18n>
  {
    "eng": {
      "headline": "<span style='color: #78be20;'><b>MRI endpoints were consistent over 7 years of treatment with TECFIDERA in ENDORSE<sup>1</sup></b></span>",
      "hiddenReferences": "<sup refs='ref53'></span>",
      "leftTitle": "<span style='color: #5b6770;'><b>Patients with no new T1 lesions</b></span>",
      "rightTitle": "<span style='color: #5b6770;'><b>Patients with no new/newly enlarging<br>T2 hyperintense lesions</b></span>",
      "rotateText": "<span style='color: #5b6770;'><b>Percentage of patients (%)</b></span>",
      "bottomGraphText": "<span style='color: #5b6770;'><b>Years on TECFIDERA treatment</b></span>",
      "y1": "<span style='color: #5b6770;'>100</span>",
      "y2": "<span style='color: #5b6770;'>80</span>",
      "y3": "<span style='color: #5b6770;'>60</span>",
      "y4": "<span style='color: #5b6770;'>40</span>",
      "y5": "<span style='color: #5b6770;'>20</span>",
      "y6": "<span style='color: #5b6770;'>0</span>",
      "x1": "<span style='color: #5b6770;'>1-2<sup>a</sup></span>",
      "x2": "<span style='color: #5b6770;'>2-3<sup>b</sup></span>",
      "x3": "<span style='color: #5b6770;'>3-4<sup>c</sup></span>",
      "x4": "<span style='color: #5b6770;'>4-5<sup>d</sup></span>",
      "x5": "<span style='color: #5b6770;'>5-6<sup>e</sup></span>",
      "x6": "<span style='color: #5b6770;'>6-7<sup>f</sup></span>",
      "leftBarNumber1": "<span style='color: #5b6770;'>(83/116)</span>",
      "leftBarNumber2": "<span style='color: #5b6770;'>(79/116)</span>",
      "leftBarNumber3": "<span style='color: #5b6770;'>(145/209)</span>",
      "leftBarNumber4": "<span style='color: #5b6770;'>(146/209)</span>",
      "leftBarNumber5": "<span style='color: #5b6770;'>(65/93)</span>",
      "leftBarNumber6": "<span style='color: #5b6770;'>(67/93)</span>",
      "leftBarName1": "<span style='color: #fff;'><b>72%</b></span>",
      "leftBarName2": "<span style='color: #fff;'><b>68%</b></span>",
      "leftBarName3": "<span style='color: #fff;'><b>69%</b></span>",
      "leftBarName4": "<span style='color: #fff;'><b>70%</b></span>",
      "leftBarName5": "<span style='color: #fff;'><b>70%</b></span>",
      "leftBarName6": "<span style='color: #fff;'><b>72%</b></span>",
      "rightBarNumber1": "<span style='color: #5b6770;'>(110/159)</span>",
      "rightBarNumber2": "<span style='color: #5b6770;'>(108/159)</span>",
      "rightBarNumber3": "<span style='color: #5b6770;'>(201/288)</span>",
      "rightBarNumber4": "<span style='color: #5b6770;'>(195/288)</span>",
      "rightBarNumber5": "<span style='color: #5b6770;'>(92/129)</span>",
      "rightBarNumber6": "<span style='color: #5b6770;'>(85/129)</span>",
      "rightBarName1": "<span style='color: #fff;'><b>69%</b></span>",
      "rightBarName2": "<span style='color: #fff;'><b>70%</b></span>",
      "rightBarName3": "<span style='color: #fff;'><b>70%</b></span>",
      "rightBarName4": "<span style='color: #fff;'><b>68%</b></span>",
      "rightBarName5": "<span style='color: #fff;'><b>71%</b></span>",
      "rightBarName6": "<span style='color: #fff;'><b>66%</b></span>",
      "footnote1": "<span style='color: #5b6770;'><sup>a</sup> Includes patients from the PBO-TEC and GA-TEC groups in Years 1-2 ENDORSE. <sup>b</sup> Includes patients from the PBO-TEC and GA-TEC groups in Years 2-3 of ENDORSE. <sup>c</sup> Includes patients from the PBO-<br>TEC and GA-TEC groups in Years 3-4 of ENDORSE and patients in the TEC-TEC group in Years 1-2 of ENDORSE. <sup>d</sup> Includes patients from the PBO-TEC and GA-TEC groups in Years 4-5 of ENDORSE and<br> patients in the TEC-TEC group in Years 2-3 of ENDORSE. <sup>e</sup> Includes patients from the PBO-TEC and GA-TEC groups in Years 5-6 of ENDORSE and patients in the TEC-TEC group in Years 3-4 of ENDORSE.<br><sup>f</sup> Includes patients from the PBO-TEC and GA-TEC groups in Years 6-7 of ENDORSE and patients in the TEC-TEC group in Years 4-5 of ENDORSE.</span>",
      "footnote2": "<span style='color: #5b6770;'>Adapted from Gold R, <i>et al.</i> 2020.<sup>1</sup></span>"
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
          id="rotateText1"
          class="pa rotate-text rotate-text-1"
          :text="$t('rotateText')"
        ></wiz-text>
        <wiz-text
          id="leftTitle"
          class="pa left-title"
          :text="$t('leftTitle')"
        ></wiz-text>
        <wiz-bg-container
          id="leftY"
          class="pa y-scale left-y-scale"
        ></wiz-bg-container>
        <wiz-bg-container
          id="leftX"
          class="pa x-scale left-x-scale"
        ></wiz-bg-container>
        <wiz-text
          id="leftY1"
          class="pa y-1 left-y-1"
          :text="$t('y1')"
        ></wiz-text>
        <wiz-text
          id="leftY2"
          class="pa y-1 left-y-2"
          :text="$t('y2')"
        ></wiz-text>
        <wiz-text
          id="leftY3"
          class="pa y-1 left-y-3"
          :text="$t('y3')"
        ></wiz-text>
        <wiz-text
          id="leftY4"
          class="pa y-1 left-y-4"
          :text="$t('y4')"
        ></wiz-text>
        <wiz-text
          id="leftY5"
          class="pa y-1 left-y-5"
          :text="$t('y5')"
        ></wiz-text>
        <wiz-text
          id="leftY6"
          class="pa y-1 left-y-6"
          :text="$t('y6')"
        ></wiz-text>
        <wiz-bg-container
          id="leftScale1"
          class="pa left-scale left-scale-1"
        ></wiz-bg-container>
        <wiz-bg-container
          id="leftScale2"
          class="pa left-scale left-scale-2"
        ></wiz-bg-container>
        <wiz-bg-container
          id="leftScale3"
          class="pa left-scale left-scale-3"
        ></wiz-bg-container>
        <wiz-bg-container
          id="leftScale4"
          class="pa left-scale left-scale-4"
        ></wiz-bg-container>
        <wiz-bg-container
          id="leftScale5"
          class="pa left-scale left-scale-5"
        ></wiz-bg-container>
        <wiz-bg-container
          id="leftBar1"
          class="pa bar left-bar-1"
        ></wiz-bg-container>
        <wiz-bg-container
          id="leftBar2"
          class="pa bar left-bar-2"
        ></wiz-bg-container>
        <wiz-bg-container
          id="leftBar3"
          class="pa bar left-bar-3"
        ></wiz-bg-container>
        <wiz-bg-container
          id="leftBar4"
          class="pa bar left-bar-4"
        ></wiz-bg-container>
        <wiz-bg-container
          id="leftBar5"
          class="pa bar left-bar-5"
        ></wiz-bg-container>
        <wiz-bg-container
          id="leftBar6"
          class="pa bar left-bar-6"
        ></wiz-bg-container>
        <wiz-text
          id="leftX1"
          class="pa x left-x-1"
          :text="$t('x1')"
        ></wiz-text>
        <wiz-text
          id="leftX2"
          class="pa x left-x-2"
          :text="$t('x2')"
        ></wiz-text>
        <wiz-text
          id="leftX3"
          class="pa x left-x-3"
          :text="$t('x3')"
        ></wiz-text>
        <wiz-text
          id="leftX4"
          class="pa x left-x-4"
          :text="$t('x4')"
        ></wiz-text>
        <wiz-text
          id="leftX5"
          class="pa x left-x-5"
          :text="$t('x5')"
        ></wiz-text>
        <wiz-text
          id="leftX6"
          class="pa x left-x-6"
          :text="$t('x6')"
        ></wiz-text>
        <wiz-text
          id="leftBarNumber1"
          class="pa left-bar-number left-bar-number-1"
          :text="$t('leftBarNumber1')"
        ></wiz-text>
        <wiz-text
          id="leftBarNumber2"
          class="pa left-bar-number left-bar-number-2"
          :text="$t('leftBarNumber2')"
        ></wiz-text>
        <wiz-text
          id="leftBarNumber3"
          class="pa left-bar-number left-bar-number-3"
          :text="$t('leftBarNumber3')"
        ></wiz-text>
        <wiz-text
          id="leftBarNumber4"
          class="pa left-bar-number left-bar-number-4"
          :text="$t('leftBarNumber4')"
        ></wiz-text>
        <wiz-text
          id="leftBarNumber5"
          class="pa left-bar-number left-bar-number-5"
          :text="$t('leftBarNumber5')"
        ></wiz-text>
        <wiz-text
          id="leftBarNumber6"
          class="pa left-bar-number left-bar-number-6"
          :text="$t('leftBarNumber6')"
        ></wiz-text>
        <wiz-text
          id="leftBarName1"
          class="pa left-bar-name left-bar-name-1"
          :text="$t('leftBarName1')"
        ></wiz-text>
        <wiz-text
          id="leftBarName2"
          class="pa left-bar-name left-bar-name-2"
          :text="$t('leftBarName2')"
        ></wiz-text>
        <wiz-text
          id="leftBarName3"
          class="pa left-bar-name left-bar-name-3"
          :text="$t('leftBarName3')"
        ></wiz-text>
        <wiz-text
          id="leftBarName4"
          class="pa left-bar-name left-bar-name-4"
          :text="$t('leftBarName4')"
        ></wiz-text>
        <wiz-text
          id="leftBarName5"
          class="pa left-bar-name left-bar-name-5"
          :text="$t('leftBarName5')"
        ></wiz-text>
        <wiz-text
          id="leftBarName6"
          class="pa left-bar-name left-bar-name-6"
          :text="$t('leftBarName6')"
        ></wiz-text>
        <wiz-text
          id="bottomGraphText1"
          class="pa bottom-graph-text bottom-graph-text-1"
          :text="$t('bottomGraphText')"
        ></wiz-text>

        <wiz-text
          id="rotateText2"
          class="pa rotate-text rotate-text-2"
          :text="$t('rotateText')"
        ></wiz-text>
        <wiz-text
          id="rightTitle"
          class="pa right-title"
          :text="$t('rightTitle')"
        ></wiz-text>
        <wiz-bg-container
          id="rightY"
          class="pa y-scale right-y-scale"
        ></wiz-bg-container>
        <wiz-bg-container
          id="rightX"
          class="pa x-scale right-x-scale"
        ></wiz-bg-container>
        <wiz-text
          id="rightY1"
          class="pa y-1 right-y-1"
          :text="$t('y1')"
        ></wiz-text>
        <wiz-text
          id="rightY2"
          class="pa y-1 right-y-2"
          :text="$t('y2')"
        ></wiz-text>
        <wiz-text
          id="rightY3"
          class="pa y-1 right-y-3"
          :text="$t('y3')"
        ></wiz-text>
        <wiz-text
          id="rightY4"
          class="pa y-1 right-y-4"
          :text="$t('y4')"
        ></wiz-text>
        <wiz-text
          id="rightY5"
          class="pa y-1 right-y-5"
          :text="$t('y5')"
        ></wiz-text>
        <wiz-text
          id="rightY6"
          class="pa y-1 right-y-6"
          :text="$t('y6')"
        ></wiz-text>
        <wiz-bg-container
          id="rightScale1"
          class="pa left-scale right-scale-1"
        ></wiz-bg-container>
        <wiz-bg-container
          id="rightScale2"
          class="pa left-scale right-scale-2"
        ></wiz-bg-container>
        <wiz-bg-container
          id="rightScale3"
          class="pa left-scale right-scale-3"
        ></wiz-bg-container>
        <wiz-bg-container
          id="rightScale4"
          class="pa left-scale right-scale-4"
        ></wiz-bg-container>
        <wiz-bg-container
          id="rightScale5"
          class="pa left-scale right-scale-5"
        ></wiz-bg-container>
        <wiz-bg-container
          id="rightBar1"
          class="pa bar right-bar-1"
        ></wiz-bg-container>
        <wiz-bg-container
          id="rightBar2"
          class="pa bar right-bar-2"
        ></wiz-bg-container>
        <wiz-bg-container
          id="rightBar3"
          class="pa bar right-bar-3"
        ></wiz-bg-container>
        <wiz-bg-container
          id="rightBar4"
          class="pa bar right-bar-4"
        ></wiz-bg-container>
        <wiz-bg-container
          id="rightBar5"
          class="pa bar right-bar-5"
        ></wiz-bg-container>
        <wiz-bg-container
          id="rightBar6"
          class="pa bar right-bar-6"
        ></wiz-bg-container>
        <wiz-text
          id="rightX1"
          class="pa x right-x-1"
          :text="$t('x1')"
        ></wiz-text>
        <wiz-text
          id="rightX2"
          class="pa x right-x-2"
          :text="$t('x2')"
        ></wiz-text>
        <wiz-text
          id="rightX3"
          class="pa x right-x-3"
          :text="$t('x3')"
        ></wiz-text>
        <wiz-text
          id="rightX4"
          class="pa x right-x-4"
          :text="$t('x4')"
        ></wiz-text>
        <wiz-text
          id="rightX5"
          class="pa x right-x-5"
          :text="$t('x5')"
        ></wiz-text>
        <wiz-text
          id="rightX6"
          class="pa x right-x-6"
          :text="$t('x6')"
        ></wiz-text>
        <wiz-text
          id="rightBarNumber1"
          class="pa left-bar-number right-bar-number-1"
          :text="$t('rightBarNumber1')"
        ></wiz-text>
        <wiz-text
          id="rightBarNumber2"
          class="pa left-bar-number right-bar-number-2"
          :text="$t('rightBarNumber2')"
        ></wiz-text>
        <wiz-text
          id="rightBarNumber3"
          class="pa left-bar-number right-bar-number-3"
          :text="$t('rightBarNumber3')"
        ></wiz-text>
        <wiz-text
          id="rightBarNumber4"
          class="pa left-bar-number right-bar-number-4"
          :text="$t('rightBarNumber4')"
        ></wiz-text>
        <wiz-text
          id="rightBarNumber5"
          class="pa left-bar-number right-bar-number-5"
          :text="$t('rightBarNumber5')"
        ></wiz-text>
        <wiz-text
          id="rightBarNumber6"
          class="pa left-bar-number right-bar-number-6"
          :text="$t('rightBarNumber6')"
        ></wiz-text>
        <wiz-text
          id="rightBarName1"
          class="pa left-bar-name right-bar-name-1"
          :text="$t('rightBarName1')"
        ></wiz-text>
        <wiz-text
          id="rightBarName2"
          class="pa left-bar-name right-bar-name-2"
          :text="$t('rightBarName2')"
        ></wiz-text>
        <wiz-text
          id="rightBarName3"
          class="pa left-bar-name right-bar-name-3"
          :text="$t('rightBarName3')"
        ></wiz-text>
        <wiz-text
          id="rightBarName4"
          class="pa left-bar-name right-bar-name-4"
          :text="$t('rightBarName4')"
        ></wiz-text>
        <wiz-text
          id="rightBarName5"
          class="pa left-bar-name right-bar-name-5"
          :text="$t('rightBarName5')"
        ></wiz-text>
        <wiz-text
          id="rightBarName6"
          class="pa left-bar-name right-bar-name-6"
          :text="$t('rightBarName6')"
        ></wiz-text>
        <wiz-text
          id="bottomGraphText2"
          class="pa bottom-graph-text bottom-graph-text-2"
          :text="$t('bottomGraphText')"
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
          ></wiz-text>
          <wiz-text
            id="footnote2"
            class="pa footnote footnote-2"
            :text="$t('footnote2')"
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
        slide: 'tecfideraProvenMRI',
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
  transform: matrix(1, 0, 0, 1, 6, 36);
}

.rotate-text-1 {
  font-size: 14px;
  font-family: 'DinPro', sans-serif;
  transform: matrix(0, -1, 1, 0, -132, 162);
}

.left-title {
  font: 18px/20px 'DinPro', sans-serif;
  transform: matrix(1, 0, 0, 1, 60, -31);
}

.y-scale {
  height: 325px;
  border-left: 1px solid #000;
}

.left-y-scale {
  transform: matrix(1, 0, 0, 1, -4, 7);
}

.x-scale {
  width: 381px;
  border-bottom: 1px solid #000;
}

.left-x-scale {
  transform: matrix(1, 0, 0, 1, -4, 332);
}

.y-1 {
  font-size: 14px;
}

.left-y-1 {
  transform: matrix(1, 0, 0, 1, -34, -1);
}

.left-y-2 {
  transform: matrix(1, 0, 0, 1, -26, 64);
}

.left-y-3 {
  transform: matrix(1, 0, 0, 1, -26, 129);
}

.left-y-4 {
  transform: matrix(1, 0, 0, 1, -26, 195);
}

.left-y-5 {
  transform: matrix(1, 0, 0, 1, -26, 260);
}

.left-y-6 {
  transform: matrix(1, 0, 0, 1, -19, 325);
}

.left-scale {
  width: 8px;
  border-bottom: 1px solid #000;
}

.left-scale-1 {
  transform: matrix(1, 0, 0, 1, -8, 7);
}

.left-scale-2 {
  transform: matrix(1, 0, 0, 1, -8, 72);
}

.left-scale-3 {
  transform: matrix(1, 0, 0, 1, -8, 137);
}

.left-scale-4 {
  transform: matrix(1, 0, 0, 1, -8, 202);
}

.left-scale-5 {
  transform: matrix(1, 0, 0, 1, -8, 267);
}

.bar {
  width: 51px;
  background: #80276c;
}

.left-bar-1 {
  height: 234px;
  transform: matrix(1, 0, 0, 1, 12, 99);
}

.left-bar-2 {
  height: 221px;
  transform: matrix(1, 0, 0, 1, 73, 112);
}

.left-bar-3 {
  height: 224px;
  transform: matrix(1, 0, 0, 1, 133, 109);
}

.left-bar-4 {
  height: 227px;
  transform: matrix(1, 0, 0, 1, 194, 106);
}

.left-bar-5 {
  height: 227px;
  transform: matrix(1, 0, 0, 1, 254, 106);
}

.left-bar-6 {
  height: 234px;
  transform: matrix(1, 0, 0, 1, 315, 99);
}

.x {
  font-size: 14px;
}

.left-x-1 {
  transform: matrix(1, 0, 0, 1, 25, 337);
}

.left-x-2 {
  transform: matrix(1, 0, 0, 1, 85, 337);
}

.left-x-3 {
  transform: matrix(1, 0, 0, 1, 145, 337);
}

.left-x-4 {
  transform: matrix(1, 0, 0, 1, 205, 337);
}

.left-x-5 {
  transform: matrix(1, 0, 0, 1, 265, 337);
}

.left-x-6 {
  transform: matrix(1, 0, 0, 1, 325, 337);
}

.left-bar-number {
  font-size: 14px;
}

.left-bar-number-1 {
  transform: matrix(1, 0, 0, 1, 12, 75);
}

.left-bar-number-2 {
  transform: matrix(1, 0, 0, 1, 73, 87);
}

.left-bar-number-3 {
  transform: matrix(1, 0, 0, 1, 130, 84);
}

.left-bar-number-4 {
  transform: matrix(1, 0, 0, 1, 190, 80);
}

.left-bar-number-5 {
  transform: matrix(1, 0, 0, 1, 258, 80);
}

.left-bar-number-6 {
  transform: matrix(1, 0, 0, 1, 319, 75);
}

.left-bar-name {
  font: 30px 'DinProCondensed', sans-serif;
}

.left-bar-name-1 {
  transform: matrix(0, -1, 1, 0, 14, 281);
}

.left-bar-name-2 {
  transform: matrix(0, -1, 1, 0, 75, 281);
}

.left-bar-name-3 {
  transform: matrix(0, -1, 1, 0, 135, 281);
}

.left-bar-name-4 {
  transform: matrix(0, -1, 1, 0, 196, 281);
}

.left-bar-name-5 {
  transform: matrix(0, -1, 1, 0, 256, 281);
}

.left-bar-name-6 {
  transform: matrix(0, -1, 1, 0, 317, 281);
}

.bottom-graph-text-1 {
  font-size: 14px;
  transform: matrix(1, 0, 0, 1, 89, 377);
}

.rotate-text-2 {
  font-size: 14px;
  font-family: 'DinPro', sans-serif;
  transform: matrix(0, -1, 1, 0, 342, 162);
}

.right-title {
  font: 18px/20px 'DinPro', sans-serif;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 508, -51);
}

.right-y-scale {
  transform: matrix(1, 0, 0, 1, 470, 7);
}

.right-x-scale {
  transform: matrix(1, 0, 0, 1, 470, 332);
}

.right-y-1 {
  transform: matrix(1, 0, 0, 1, 440, -1);
}

.right-y-2 {
  transform: matrix(1, 0, 0, 1, 448, 64);
}

.right-y-3 {
  transform: matrix(1, 0, 0, 1, 448, 129);
}

.right-y-4 {
  transform: matrix(1, 0, 0, 1, 448, 195);
}

.right-y-5 {
  transform: matrix(1, 0, 0, 1, 448, 260);
}

.right-y-6 {
  transform: matrix(1, 0, 0, 1, 455, 325);
}

.right-scale-1 {
  transform: matrix(1, 0, 0, 1, 466, 7);
}

.right-scale-2 {
  transform: matrix(1, 0, 0, 1, 466, 72);
}

.right-scale-3 {
  transform: matrix(1, 0, 0, 1, 466, 137);
}

.right-scale-4 {
  transform: matrix(1, 0, 0, 1, 466, 202);
}

.right-scale-5 {
  transform: matrix(1, 0, 0, 1, 466, 267);
}

.right-bar-1 {
  height: 224px;
  transform: matrix(1, 0, 0, 1, 486, 109);
}

.right-bar-2 {
  height: 227px;
  transform: matrix(1, 0, 0, 1, 547, 106);
}

.right-bar-3 {
  height: 227px;
  transform: matrix(1, 0, 0, 1, 607, 106);
}

.right-bar-4 {
  height: 221px;
  transform: matrix(1, 0, 0, 1, 668, 112);
}

.right-bar-5 {
  height: 231px;
  transform: matrix(1, 0, 0, 1, 728, 102);
}

.right-bar-6 {
  height: 214px;
  transform: matrix(1, 0, 0, 1, 789, 119);
}

.right-x-1 {
  transform: matrix(1, 0, 0, 1, 499, 337);
}

.right-x-2 {
  transform: matrix(1, 0, 0, 1, 559, 337);
}

.right-x-3 {
  transform: matrix(1, 0, 0, 1, 619, 337);
}

.right-x-4 {
  transform: matrix(1, 0, 0, 1, 679, 337);
}

.right-x-5 {
  transform: matrix(1, 0, 0, 1, 739, 337);
}

.right-x-6 {
  transform: matrix(1, 0, 0, 1, 799, 337);
}

.right-bar-number-1 {
  transform: matrix(1, 0, 0, 1, 483, 84);
}

.right-bar-number-2 {
  transform: matrix(1, 0, 0, 1, 544, 81);
}

.right-bar-number-3 {
  transform: matrix(1, 0, 0, 1, 604, 81);
}

.right-bar-number-4 {
  transform: matrix(1, 0, 0, 1, 664, 88);
}

.right-bar-number-5 {
  transform: matrix(1, 0, 0, 1, 728, 78);
}

.right-bar-number-6 {
  transform: matrix(1, 0, 0, 1, 789, 94);
}

.right-bar-name-1 {
  transform: matrix(0, -1, 1, 0, 488, 280);
}

.right-bar-name-2 {
  transform: matrix(0, -1, 1, 0, 549, 281);
}

.right-bar-name-3 {
  transform: matrix(0, -1, 1, 0, 609, 281);
}

.right-bar-name-4 {
  transform: matrix(0, -1, 1, 0, 670, 281);
}

.right-bar-name-5 {
  transform: matrix(0, -1, 1, 0, 730, 281);
}

.right-bar-name-6 {
  transform: matrix(0, -1, 1, 0, 791, 281);
}

.bottom-graph-text-2 {
  font-size: 14px;
  transform: matrix(1, 0, 0, 1, 563, 377);
}

.footnote-1 {
  width: 895px;
  transform: matrix(1, 0, 0, 1, -42, 54);
}

.footnote-2 {
  transform: matrix(1, 0, 0, 1, -42, 114);
}
</style>
