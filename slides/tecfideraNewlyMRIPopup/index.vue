<i18n>
  {
    "eng": {
      "headline": "<span style='color: #78be20;'><b>TECFIDERA demonstrated relative reduction across MRI endpoints vs placebo<br>at 2 years in newly diagnosed patients<sup>1</sup></b></span>",
      "hiddenReferences": "<sup refs='ref6'></span>",
      "leftTitle": "<span style='color: #5b6770;'><b>New or enlarging <br>T2-hyperintense lesions</b></span>",
      "leftSubtitle": "<span style='color: #5b6770;'>Lesion mean ratio vs placebo (95% CI)<br>DMF BID: 0.20 (0.13-0.31)</span>",
      "leftRotateText": "<span style='color: #5b6770;'><b>Adjusted mean number of T2 lesions (95% CI)</b></span>",
      "leftY1": "<span style='color: #5b6770;'>30</span>",
      "leftY2": "<span style='color: #5b6770;'>20</span>",
      "leftY3": "<span style='color: #5b6770;'>10</span>",
      "leftY4": "<span style='color: #5b6770;'>0</span>",
      "leftX1": "<span style='color: #5b6770;'>Placebo<br>(n=100)</span>",
      "leftX2": "<span style='color: #5b6770;'>DMF BID<br>(n=99)</span>",
      "leftPercentNumber": "<span style='color: #80276c;'><b>80</b></span>",
      "leftPercent": "<span style='color: #80276c;'><b>%</b></span>",
      "leftUnderPercent": "<span style='color: #5b6770;'>p<0.0001<br>vs placebo</span>",
      "leftGraphName1": "<span style='color: #fff;'><b>20.0</b></span>",
      "leftGraphName2": "<span style='color: #fff;'><b>4.0</b></span>",
      "centerTitle": "<span style='color: #5b6770;'><b>Gd+ lesions</b></span>",
      "centerSubtitle": "<span style='color: #5b6770;'>Odds ratio vs placebo (95% CI)<br>DMF BID: 0.08 (0.03-0.19)</span>",
      "centerRotateText": "<span style='color: #5b6770;'><b>Mean number of Gd+ lesions</b></span>",
      "centerY1": "<span style='color: #5b6770;'>3</span>",
      "centerY2": "<span style='color: #5b6770;'>2</span>",
      "centerY3": "<span style='color: #5b6770;'>1</span>",
      "centerY4": "<span style='color: #5b6770;'>0</span>",
      "centerX1": "<span style='color: #5b6770;'>Placebo<br>(n=100)</span>",
      "centerX2": "<span style='color: #5b6770;'>DMF BID<br>(n=99)</span>",
      "centerPercentNumber": "<span style='color: #80276c;'><b>92</b></span>",
      "centerPercent": "<span style='color: #80276c;'><b>%</b></span>",
      "centerUnderPercent": "<span style='color: #5b6770;'>p<0.0001<br>vs placebo</span>",
      "centerGraphName1": "<span style='color: #fff;'><b>1.9</b></span>",
      "centerGraphName2": "<span style='color: #fff;'><b>0.3</b></span>",
      "rightTitle": "<span style='color: #5b6770;'><b>New T1-hypointense lesions</b></span>",
      "rightSubtitle": "<span style='color: #5b6770;'>Lesion mean ratio vs placebo (95% CI)<br>DMF BID: 0.32 (0.21-0.50)</span>",
      "rightRotateText": "<span style='color: #5b6770;'><b>Adjusted mean number of T1 lesions (95% CI)</b></span>",
      "rightY1": "<span style='color: #5b6770;'>10</span>",
      "rightY2": "<span style='color: #5b6770;'>8</span>",
      "rightY3": "<span style='color: #5b6770;'>6</span>",
      "rightY4": "<span style='color: #5b6770;'>4</span>",
      "rightY5": "<span style='color: #5b6770;'>2</span>",
      "rightY6": "<span style='color: #5b6770;'>0</span>",
      "rightX1": "<span style='color: #5b6770;'>Placebo<br>(n=100)</span>",
      "rightX2": "<span style='color: #5b6770;'>DMF BID<br>(n=99)</span>",
      "rightPercentNumber": "<span style='color: #80276c;'><b>68</b></span>",
      "rightPercent": "<span style='color: #80276c;'><b>%</b></span>",
      "rightUnderPercent": "<span style='color: #5b6770;'>p<0.0001<br>vs placebo</span>",
      "rightGraphName1": "<span style='color: #fff;'><b>6.6</b></span>",
      "rightGraphName2": "<span style='color: #fff;'><b>2.1</b></span>",
      "footnote1": "<span style='color: #5b6770;'>Adapted from Gold <i>et al.</i> 2015.</span>",
      "footnote2": "<span style='color: #5b6770;'><span style='color: #80276c;'><b>BID:</b></span> Twice Daily; <span style='color: #80276c;'><b>CI:</b></span> Confidence Interval; <span style='color: #80276c;'><b>DMF:</b></span> Dimethyl Fumerate; <span style='color: #80276c;'><b>Gd+:</b></span> Gadolinium-Enhancing; <span style='color: #80276c;'><b>MRI:</b></span> Magnetic Resonance Imaging.</span>"
    }
  }
</i18n>

<template>
  <wiz-slide
    class="slide-popup"
    @slideswipe.native.stop
  >
    <layouts :layouts="[{ name: 'logo'}, {name: 'top-image' }]"></layouts>
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
          id="leftTitle"
          class="pa left-title"
          :text="$t('leftTitle')"
          :component-name="'Caption'"
        ></wiz-text>
        <wiz-text
          id="leftSubtitle"
          class="pa left-subtitle"
          :text="$t('leftSubtitle')"
          :component-name="'Caption'"
        ></wiz-text>
        <wiz-bg-container
          id="left-line1"
          class="pa left-line-1"
        >
        </wiz-bg-container>
        <wiz-bg-container
          id="leftScale1"
          class="pa scale-y left-scale-1"
        ></wiz-bg-container>
        <wiz-bg-container
          id="leftScale2"
          class="pa scale-y left-scale-2"
        ></wiz-bg-container>
        <wiz-bg-container
          id="leftScale3"
          class="pa scale-y left-scale-3"
        ></wiz-bg-container>
        <wiz-bg-container
          id="leftScale4"
          class="pa scale-y left-scale-4"
        ></wiz-bg-container>
        <wiz-bg-container
          id="left-line2"
          class="pa left-line-2"
        ></wiz-bg-container>
        <wiz-bg-container
          id="left-graph-1"
          class="pa left-graph-1"
        ></wiz-bg-container>
        <wiz-bg-container
          id="left-graph-2"
          class="pa left-graph-2"
        ></wiz-bg-container>
        <wiz-text
          id="leftY1"
          class="pa left-y-1"
          :text="$t('leftY1')"
          :component-name="'Vertical scale'"
        ></wiz-text>
        <wiz-text
          id="leftY2"
          class="pa left-y-2"
          :text="$t('leftY2')"
          :component-name="'Vertical scale'"
        ></wiz-text>
        <wiz-text
          id="leftY3"
          class="pa left-y-3"
          :text="$t('leftY3')"
          :component-name="'Vertical scale'"
        ></wiz-text>
        <wiz-text
          id="leftY4"
          class="pa left-y-4"
          :text="$t('leftY4')"
          :component-name="'Vertical scale'"
        ></wiz-text>
        <wiz-text
          id="leftRotateText"
          class="pa left-rotate-text"
          :text="$t('leftRotateText')"
          :component-name="'Vertical legend'"
        ></wiz-text>
        <wiz-text
          id="leftX1"
          class="pa left-x-1"
          :text="$t('leftX1')"
          :component-name="'Horizontal scale'"
        ></wiz-text>
        <wiz-text
          id="leftX2"
          class="pa left-x-2"
          :text="$t('leftX2')"
          :component-name="'Horizontal scale'"
        ></wiz-text>
        <wiz-image
          id="line1"
          class="pa line-1"
          :src="'./media/images/line1.png'"
          :component-name="'Vertical line'"
        ></wiz-image>
        <wiz-text
          id="leftPercentNumber"
          class="pa left-percent-number"
          :text="$t('leftPercentNumber')"
          :component-name="'Value wrapper'"
        ></wiz-text>
        <wiz-text
          id="leftPercent"
          class="pa left-percent"
          :text="$t('leftPercent')"
          :component-name="'Value wrapper'"
        ></wiz-text>
        <wiz-image
          id="arrowLeft"
          class="pa arrow-tecfidera"
          :src="'./media/images/arrow-tecfidera.png'"
          :component-name="'Arrow'"
        ></wiz-image>
        <wiz-text
          id="leftUnderPercent"
          class="pa left-under-percent"
          :text="$t('leftUnderPercent')"
          :component-name="'Value note'"
        ></wiz-text>
        <wiz-text
          id="leftGraphName1"
          class="pa left-graph-name-1"
          :text="$t('leftGraphName1')"
          :component-name="'Bar label'"
        ></wiz-text>
        <wiz-text
          id="leftGraphName2"
          class="pa left-graph-name-2"
          :text="$t('leftGraphName2')"
          :component-name="'Bar label'"
        ></wiz-text>
        <wiz-image
          id="line2"
          class="pa line-2"
          :src="'./media/images/line2.png'"
          :component-name="'Vertical line'"
        ></wiz-image>

        <wiz-bg-container
          id="betweenLine1"
          class="pa between-line-1"
        ></wiz-bg-container>

        <wiz-text
          id="centerTitle"
          class="pa left-title center-title"
          :text="$t('centerTitle')"
          :component-name="'Caption'"
        ></wiz-text>
        <wiz-text
          id="centerSubtitle"
          class="pa left-subtitle center-subtitle"
          :text="$t('centerSubtitle')"
          :component-name="'Caption'"
        ></wiz-text>
        <wiz-bg-container
          id="center-line1"
          class="pa center-line-1 left-line-1"
        ></wiz-bg-container>
        <wiz-bg-container
          id="centerScale1"
          class="pa scale-y center-scale-1"
        ></wiz-bg-container>
        <wiz-bg-container
          id="centerScale2"
          class="pa scale-y center-scale-2"
        ></wiz-bg-container>
        <wiz-bg-container
          id="centerScale3"
          class="pa scale-y center-scale-3"
        ></wiz-bg-container>
        <wiz-bg-container
          id="centerScale4"
          class="pa scale-y center-scale-4"
        ></wiz-bg-container>
        <wiz-bg-container
          id="center-line2"
          class="pa center-line-2 left-line-2"
        ></wiz-bg-container>
        <wiz-bg-container
          id="center-graph-1"
          class="pa center-graph-1 left-graph-1"
        ></wiz-bg-container>
        <wiz-bg-container
          id="center-graph-2"
          class="pa center-graph-2 left-graph-2"
        ></wiz-bg-container>
        <wiz-text
          id="centerY1"
          class="pa center-y-1 left-y-1"
          :text="$t('centerY1')"
          :component-name="'Vertical scale'"
        ></wiz-text>
        <wiz-text
          id="centerY2"
          class="pa center-y-2 left-y-2"
          :text="$t('centerY2')"
          :component-name="'Vertical scale'"
        ></wiz-text>
        <wiz-text
          id="centerY3"
          class="pa center-y-3 left-y-3"
          :text="$t('centerY3')"
          :component-name="'Vertical scale'"
        ></wiz-text>
        <wiz-text
          id="centerY4"
          class="pa center-y-4 left-y-4"
          :text="$t('centerY4')"
          :component-name="'Vertical scale'"
        ></wiz-text>
        <wiz-text
          id="centerRotateText"
          class="pa center-rotate-text left-rotate-text"
          :text="$t('centerRotateText')"
          :component-name="'Vertical legend'"
        ></wiz-text>
        <wiz-text
          id="centerX1"
          class="pa center-x-1 left-x-1"
          :text="$t('centerX1')"
          :component-name="'Horizontal scale'"
        ></wiz-text>
        <wiz-text
          id="centerX2"
          class="pa center-x-2 left-x-2"
          :text="$t('centerX2')"
          :component-name="'Horizontal scale'"
        ></wiz-text>
        <wiz-image
          id="line1"
          class="pa line-1-2 line-1"
          :src="'./media/images/line1.png'"
          :component-name="'Vertical line'"
        ></wiz-image>
        <wiz-text
          id="centerPercentNumber"
          class="pa center-percent-number left-percent-number"
          :text="$t('centerPercentNumber')"
          :component-name="'Value wrapper'"
        ></wiz-text>
        <wiz-text
          id="centerPercent"
          class="pa center-percent left-percent"
          :text="$t('centerPercent')"
          :component-name="'Value wrapper'"
        ></wiz-text>
        <wiz-image
          id="arrowLeft"
          class="pa arrow-tecfidera arrow-tecfidera-2"
          :src="'./media/images/arrow-tecfidera.png'"
          :component-name="'Arrow'"
        ></wiz-image>
        <wiz-text
          id="centerUnderPercent"
          class="pa center-under-percent left-under-percent"
          :text="$t('centerUnderPercent')"
          :component-name="'Value note'"
        ></wiz-text>
        <wiz-text
          id="centerGraphName1"
          class="pa center-graph-name-1 left-graph-name-1"
          :text="$t('centerGraphName1')"
          :component-name="'Bar label'"
        ></wiz-text>
        <wiz-text
          id="centerGraphName2"
          class="pa center-graph-name-2 left-graph-name-2"
          :text="$t('centerGraphName2')"
          :component-name="'Bar label'"
        ></wiz-text>
        <wiz-image
          id="line2"
          class="pa line-2-2 line-2"
          :src="'./media/images/line2.png'"
          :component-name="'Vertical line'"
        ></wiz-image>

        <wiz-bg-container
          id="betweenLine2"
          class="pa between-line-1 between-line-2"
        ></wiz-bg-container>

        <wiz-text
          id="rightTitle"
          class="pa left-title right-title"
          :text="$t('rightTitle')"
          :component-name="'Caption'"
        ></wiz-text>
        <wiz-text
          id="rightSubtitle"
          class="pa left-subtitle right-subtitle"
          :text="$t('rightSubtitle')"
          :component-name="'Caption'"
        ></wiz-text>
        <wiz-bg-container
          id="right-line1"
          class="pa right-line-1 left-line-1"
        ></wiz-bg-container>
        <wiz-bg-container
          id="rightScale1"
          class="pa scale-y right-scale-1"
        ></wiz-bg-container>
        <wiz-bg-container
          id="rightScale2"
          class="pa scale-y right-scale-2"
        ></wiz-bg-container>
        <wiz-bg-container
          id="rightScale3"
          class="pa scale-y right-scale-3"
        ></wiz-bg-container>
        <wiz-bg-container
          id="rightScale4"
          class="pa scale-y right-scale-4"
        ></wiz-bg-container>
        <wiz-bg-container
          id="rightScale5"
          class="pa scale-y right-scale-5"
        ></wiz-bg-container>
        <wiz-bg-container
          id="rightScale6"
          class="pa scale-y right-scale-6"
        ></wiz-bg-container>
        <wiz-bg-container
          id="right-line2"
          class="pa right-line-2 left-line-2"
        ></wiz-bg-container>
        <wiz-bg-container
          id="right-graph-1"
          class="pa right-graph-1 left-graph-1"
        ></wiz-bg-container>
        <wiz-bg-container
          id="right-graph-2"
          class="pa right-graph-2 left-graph-2"
        ></wiz-bg-container>
        <wiz-text
          id="rightY1"
          class="pa right-y-1 left-y-1"
          :text="$t('rightY1')"
          :component-name="'Vertical scale'"
        ></wiz-text>
        <wiz-text
          id="rightY2"
          class="pa right-y-2 left-y-2"
          :text="$t('rightY2')"
          :component-name="'Vertical scale'"
        ></wiz-text>
        <wiz-text
          id="rightY3"
          class="pa right-y-3 left-y-3"
          :text="$t('rightY3')"
          :component-name="'Vertical scale'"
        ></wiz-text>
        <wiz-text
          id="rightY4"
          class="pa right-y-4 left-y-4"
          :text="$t('rightY4')"
          :component-name="'Vertical scale'"
        ></wiz-text>
        <wiz-text
          id="rightY5"
          class="pa right-y-5 left-y-3"
          :text="$t('rightY5')"
          :component-name="'Vertical scale'"
        ></wiz-text>
        <wiz-text
          id="rightY6"
          class="pa right-y-6 left-y-4"
          :text="$t('rightY6')"
          :component-name="'Vertical scale'"
        ></wiz-text>
        <wiz-text
          id="rightRotateText"
          class="pa right-rotate-text left-rotate-text"
          :text="$t('rightRotateText')"
          :component-name="'Vertical legend'"
        ></wiz-text>
        <wiz-text
          id="rightX1"
          class="pa right-x-1 left-x-1"
          :text="$t('rightX1')"
          :component-name="'Horizontal scale'"
        ></wiz-text>
        <wiz-text
          id="rightX2"
          class="pa right-x-2 left-x-2"
          :text="$t('rightX2')"
          :component-name="'Horizontal scale'"
        ></wiz-text>
        <wiz-image
          id="line3"
          class="pa line-3"
          :src="'./media/images/line3.png'"
          :component-name="'Vertical line'"
        ></wiz-image>
        <wiz-text
          id="rightPercentNumber"
          class="pa right-percent-number left-percent-number"
          :text="$t('rightPercentNumber')"
          :component-name="'Value wrapper'"
        ></wiz-text>
        <wiz-text
          id="rightPercent"
          class="pa right-percent left-percent"
          :text="$t('rightPercent')"
          :component-name="'Value wrapper'"
        ></wiz-text>
        <wiz-image
          id="arrowLeft"
          class="pa arrow-tecfidera arrow-tecfidera-3"
          :src="'./media/images/arrow-tecfidera.png'"
          :component-name="'Arrow'"
        ></wiz-image>
        <wiz-text
          id="rightUnderPercent"
          class="pa right-under-percent left-under-percent"
          :text="$t('rightUnderPercent')"
          :component-name="'Value note'"
        ></wiz-text>
        <wiz-text
          id="rightGraphName1"
          class="pa right-graph-name-1 left-graph-name-1"
          :text="$t('rightGraphName1')"
          :component-name="'Bar label'"
        ></wiz-text>
        <wiz-text
          id="rightGraphName2"
          class="pa right-graph-name-2 left-graph-name-2"
          :text="$t('rightGraphName2')"
          :component-name="'Bar label'"
        ></wiz-text>
        <wiz-image
          id="line4"
          class="pa line-4"
          :src="'./media/images/line4.png'"
          :component-name="'Vertical line'"
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
        slide: 'tecfideraNewlyMRI',
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
  line-height: 1.1;
  text-align: center;
  transform: matrix(1, 0, 0, 1, -28, 36);
}

.left-title {
  width: 290px;
  font-size: 18px;
  font-family: 'DinPro', sans-serif;
  line-height: 1.1;
  text-align: center;
  transform: matrix(1, 0, 0, 1, -44, -35);
}

.left-subtitle {
  font-size: 15px;
  transform: matrix(1, 0, 0, 1, -30, 18);
}

.left-line-1 {
  height: 325px;
  border-left: 1px solid #000;
  transform: matrix(1, 0, 0, 1, 29, 63);
}

.scale-y {
  width: 9px;
  border-bottom: 1px solid #000;
}

.left-scale-1 {
  transform: matrix(1, 0, 0, 1, 25, 63);
}

.left-scale-2 {
  transform: matrix(1, 0, 0, 1, 25, 172);
}

.left-scale-3 {
  transform: matrix(1, 0, 0, 1, 25, 280);
}

.left-scale-4 {
  transform: matrix(1, 0, 0, 1, 25, 388);
}

.left-line-2 {
  width: 204px;
  border-bottom: 1px solid #000000;
  transform: matrix(1, 0, 0, 1, 28, 388);
}

.left-graph-1 {
  width: 59px;
  height: 216px;
  background: linear-gradient(158deg, rgba(198, 199, 201, 1) 0%, rgba(125, 136, 143, 1) 100%);
  transform: matrix(1, 0, 0, 1, 56, 172);
}

.left-graph-2 {
  width: 59px;
  height: 42px;
  background: linear-gradient(158deg, rgba(127, 38, 107, 1) 0%, rgba(97, 27, 81, 1) 100%);
  transform: matrix(1, 0, 0, 1, 158, 346);
}

.left-y-1 {
  font-size: 14px;
  transform: matrix(1, 0, 0, 1, 2, 55);
}

.left-y-2 {
  font-size: 14px;
  transform: matrix(1, 0, 0, 1, 2, 164);
}

.left-y-3 {
  font-size: 14px;
  transform: matrix(1, 0, 0, 1, 2, 272);
}

.left-y-4 {
  font-size: 14px;
  transform: matrix(1, 0, 0, 1, 10, 381);
}

.left-rotate-text {
  font-size: 14px;
  transform: matrix(0, -1, 1, 0, -162, 218);
}

.left-x-1 {
  font-size: 14px;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 61, 393);
}

.left-x-2 {
  font-size: 14px;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 160, 393);
}

.wiz-image.line-1 {
  width: 5px;
  height: 138px;
  transform: matrix(1, 0, 0, 1, 84, 91);
}

.left-percent-number {
  font-size: 60px;
  font-family: 'DinProCondensed', sans-serif;
  transform: matrix(1, 0, 0, 1, 157, 160);
}

.left-percent {
  font-size: 34px;
  font-family: 'DinProCondensed', sans-serif;
  transform: matrix(1, 0, 0, 1, 206, 165);
}

.wiz-image.arrow-tecfidera {
  overflow: visible;
  width: 24px;
  height: 12px;
  transform: matrix(1, 0, 0, 1, 207, 202);
}

.left-under-percent {
  font-size: 12px;
  transform: matrix(1, 0, 0, 1, 157, 222);
}

.left-graph-name-1 {
  font: 30px 'DinProCondensed', sans-serif;
  transform: matrix(0, -1, 1, 0, 64, 344);
}

.left-graph-name-2 {
  font: 30px 'DinProCondensed', sans-serif;
  transform: matrix(0, -1, 1, 0, 172, 350);
}

.between-line-1 {
  height: 492px;
  border-left: 1px solid #000;
  transform: matrix(1, 0, 0, 1, 254, -34);
}

.wiz-image.line-2 {
  width: 5px;
  height: 30px;
  transform: matrix(1, 0, 0, 1, 185, 330);
}

.center-title {
  transform: matrix(1, 0, 0, 1, 260, -15);
}

.center-subtitle {
  transform: matrix(1, 0, 0, 1, 273, 18);
}

.center-rotate-text {
  transform: matrix(0, -1, 1, 0, 195, 218);
}

.center-line-1 {
  transform: matrix(1, 0, 0, 1, 328, 63);
}

.center-scale-1 {
  transform: matrix(1, 0, 0, 1, 324, 63);
}

.center-scale-2 {
  transform: matrix(1, 0, 0, 1, 324, 172);
}

.center-scale-3 {
  transform: matrix(1, 0, 0, 1, 324, 280);
}

.center-scale-4 {
  transform: matrix(1, 0, 0, 1, 324, 388);
}

.center-line-2 {
  transform: matrix(1, 0, 0, 1, 328, 388);
}

.center-y-1 {
  transform: matrix(1, 0, 0, 1, 313, 54);
}

.center-y-2 {
  transform: matrix(1, 0, 0, 1, 313, 163);
}

.center-y-3 {
  transform: matrix(1, 0, 0, 1, 313, 271);
}

.center-y-4 {
  transform: matrix(1, 0, 0, 1, 313, 380);
}

.center-x-1 {
  transform: matrix(1, 0, 0, 1, 364, 393);
}

.center-x-2 {
  transform: matrix(1, 0, 0, 1, 463, 393);
}

.center-graph-1 {
  height: 206px;
  transform: matrix(1, 0, 0, 1, 359, 182);
}

.center-graph-2 {
  height: 32px;
  transform: matrix(1, 0, 0, 1, 461, 357);
}

.center-percent-number {
  transform: matrix(1, 0, 0, 1, 460, 160);
}

.center-percent {
  transform: matrix(1, 0, 0, 1, 509, 165);
}

.wiz-image.arrow-tecfidera-2 {
  transform: matrix(1, 0, 0, 1, 510, 202);
}

.center-under-percent {
  transform: matrix(1, 0, 0, 1, 460, 222);
}

.center-graph-name-1 {
  transform: matrix(0, -1, 1, 0, 373, 350);
}

.center-graph-name-2 {
  transform: matrix(0, -1, 1, 0, 475, 355);
}

.between-line-2 {
  transform: matrix(1, 0, 0, 1, 555, -34);
}

.right-title {
  transform: matrix(1, 0, 0, 1, 563, -15);
}

.right-subtitle {
  transform: matrix(1, 0, 0, 1, 576, 18);
}

.right-rotate-text {
  transform: matrix(0, -1, 1, 0, 445, 218);
}

.right-y-1 {
  transform: matrix(1, 0, 0, 1, 609, 54);
}

.right-y-2 {
  transform: matrix(1, 0, 0, 1, 617, 119);
}

.right-y-3 {
  transform: matrix(1, 0, 0, 1, 617, 184);
}

.right-y-4 {
  transform: matrix(1, 0, 0, 1, 617, 251);
}

.right-y-5 {
  transform: matrix(1, 0, 0, 1, 616, 315);
}

.right-y-6 {
  transform: matrix(1, 0, 0, 1, 616, 380);
}

.right-line-1 {
  transform: matrix(1, 0, 0, 1, 634, 63);
}

.right-scale-1 {
  transform: matrix(1, 0, 0, 1, 630, 63);
}

.right-scale-2 {
  transform: matrix(1, 0, 0, 1, 630, 127);
}

.right-scale-3 {
  transform: matrix(1, 0, 0, 1, 630, 192);
}

.right-scale-4 {
  transform: matrix(1, 0, 0, 1, 630, 259);
}

.right-scale-5 {
  transform: matrix(1, 0, 0, 1, 630, 323);
}

.right-scale-6 {
  transform: matrix(1, 0, 0, 1, 630, 388);
}

.right-line-2 {
  transform: matrix(1, 0, 0, 1, 634, 388);
}

.right-graph-1 {
  height: 213px;
  transform: matrix(1, 0, 0, 1, 662, 175);
}

.right-graph-2 {
  height: 67px;
  transform: matrix(1, 0, 0, 1, 764, 321);
}

.right-x-1 {
  transform: matrix(1, 0, 0, 1, 667, 393);
}

.right-x-2 {
  transform: matrix(1, 0, 0, 1, 766, 393);
}

.right-percent-number {
  transform: matrix(1, 0, 0, 1, 764, 160);
}

.right-percent {
  transform: matrix(1, 0, 0, 1, 813, 165);
}

.wiz-image.arrow-tecfidera-3 {
  transform: matrix(1, 0, 0, 1, 814, 202);
}

.right-under-percent {
  transform: matrix(1, 0, 0, 1, 764, 222);
}

.right-graph-name-1 {
  transform: matrix(0, -1, 1, 0, 676, 350);
}

.right-graph-name-2 {
  transform: matrix(0, -1, 1, 0, 778, 349);
}

.wiz-image.line-3 {
  width: 5px;
  height: 130px;
  transform: matrix(1, 0, 0, 1, 690, 99);
}

.wiz-image.line-4 {
  width: 4px;
  height: 48px;
  transform: matrix(1, 0, 0, 1, 792, 294);
}

.footnote-1 {
  transform: matrix(1, 0, 0, 1, -42, 90);
}

.footnote-2 {
  transform: matrix(1, 0, 0, 1, -42, 114);
}
</style>
