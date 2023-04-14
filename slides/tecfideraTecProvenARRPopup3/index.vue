<i18n>
  {
    "eng": {
      "headline": "<span style='color: #78be20;'><b>Adjusted ARR by yearly interval in patients treated continuously with TECFIDERA in the<br/>overall ENDORSE population over 9 years (ENDORSE 7 years)<sup>1</sup></b></span>",
      "hiddenReferences": "<sup refs='ref53'></sup>",
      "y1": "<span style='color: #5b6770;'>0.5</span>",
      "y2": "<span style='color: #5b6770;'>0.4</span>",
      "y3": "<span style='color: #5b6770;'>0.3</span>",
      "y4": "<span style='color: #5b6770;'>0.2</span>",
      "y5": "<span style='color: #5b6770;'>0.1</span>",
      "y6": "<span style='color: #5b6770;'>0.0</span>",
      "x1": "<span style='color: #5b6770;'>0-1</span>",
      "x2": "<span style='color: #5b6770;'>1-2</span>",
      "x3": "<span style='color: #5b6770;'>2-3</span>",
      "x4": "<span style='color: #5b6770;'>3-4</span>",
      "x5": "<span style='color: #5b6770;'>4-5</span>",
      "x6": "<span style='color: #5b6770;'>5-6</span>",
      "x7": "<span style='color: #5b6770;'>6-7</span>",
      "x8": "<span style='color: #5b6770;'>7-8</span>",
      "x9": "<span style='color: #5b6770;'>8-9</span>",
      "rotateText": "<span style='color: #5b6770;'><b>Adjusted ARR (95% CI)</b></span>",
      "xName": "<span style='color: #5b6770;'>DMF</span>",
      "xGroupName1": "<span style='color: #5b6770;'><b>DEFINE/<br>CONFIRM</b></span>",
      "xGroupName2": "<span style='color: #5b6770;'><b>ENDORSE</b></span>",
      "horizontalLegend": "<span style='color: #5b6770;'><b>Year</b></span>",
      "graph1Name": "<span style='color: #5b6770;'>n=501</span>",
      "graph2Name": "<span style='color: #5b6770;'>n=495</span>",
      "graph3Name": "<span style='color: #5b6770;'>n=501</span>",
      "graph4Name": "<span style='color: #5b6770;'>n=472</span>",
      "graph5Name": "<span style='color: #5b6770;'>n=444</span>",
      "graph6Name": "<span style='color: #5b6770;'>n=394</span>",
      "graph7Name": "<span style='color: #5b6770;'>n=369</span>",
      "graph8Name": "<span style='color: #5b6770;'>n=338</span>",
      "graph9Name": "<span style='color: #5b6770;'>n=293</span>",
      "bottomTable": "<span style='color: #5b6770;'>For patients continuously treated (DMF/DMF; n=501) for up to 10<br/>years, overall ARR (95% CI) remained low: 0.24 (0.16–0.34) in the<br/>first year to 0.10 (0.07, 0.17) in Years 8–9.</span>",
      "footnote1": "<span style='color: #5b6770;'>Adapted from Gold <i>et al.</i> 2020.</span>",
      "footnote2": "<span style='color: #5b6770;'><span style='color: #80276c;'><b>ARR:</b></span> Annualised Relapse Rate; <span style='color: #80276c;'><b>CI:</b></span> Confidence Interval; <span style='color: #80276c;'><b>DMF:</b></span> Dimethyl Fumerate.</span>"
    }
  }
</i18n>

<template>
  <wiz-slide class="slide-popup" @slideswipe.native.stop>
    <layouts :layouts="[{ name: 'logo' }, { name: 'top-image' }]"></layouts>
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
        <wiz-bg-container id="headlineWrapper" class="headline-wrapper">
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
          class="pa rotateText"
          :text="$t('rotateText')"
        ></wiz-text>
        <wiz-bg-container id="yScale" class="pa y-scale"></wiz-bg-container>
        <wiz-bg-container id="xScale" class="pa x-scale"></wiz-bg-container>

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

        <wiz-text id="y1" class="pa y y-1" :text="$t('y1')"></wiz-text>
        <wiz-text id="y2" class="pa y y-2" :text="$t('y2')"></wiz-text>
        <wiz-text id="y3" class="pa y y-3" :text="$t('y3')"></wiz-text>
        <wiz-text id="y4" class="pa y y-4" :text="$t('y4')"></wiz-text>
        <wiz-text id="y5" class="pa y y-5" :text="$t('y5')"></wiz-text>
        <wiz-text id="y6" class="pa y y-6" :text="$t('y6')"></wiz-text>

        <wiz-text id="x1" class="pa x x-1" :text="$t('x1')"></wiz-text>
        <wiz-text id="x2" class="pa x x-2" :text="$t('x2')"></wiz-text>
        <wiz-text id="x3" class="pa x x-3" :text="$t('x3')"></wiz-text>
        <wiz-text id="x4" class="pa x x-4" :text="$t('x4')"></wiz-text>
        <wiz-text id="x5" class="pa x x-5" :text="$t('x5')"></wiz-text>
        <wiz-text id="x6" class="pa x x-6" :text="$t('x6')"></wiz-text>
        <wiz-text id="x7" class="pa x x-7" :text="$t('x7')"></wiz-text>
        <wiz-text id="x8" class="pa x x-8" :text="$t('x8')"></wiz-text>
        <wiz-text id="x9" class="pa x x-9" :text="$t('x9')"></wiz-text>

        <wiz-bg-container id="bar1" class="pa bar bar-1"></wiz-bg-container>
        <wiz-image
          id="line1"
          class="pa lines line-1"
          :src="'./media/images/line1.png'"
        ></wiz-image>
        <wiz-bg-container id="bar2" class="pa bar bar-2"></wiz-bg-container>
        <wiz-image
          id="line2"
          class="pa lines line-2"
          :src="'./media/images/line1.png'"
        ></wiz-image>
        <wiz-bg-container id="bar3" class="pa bar bar-3"></wiz-bg-container>
        <wiz-image
          id="line3"
          class="pa lines line-3"
          :src="'./media/images/line1.png'"
        ></wiz-image>
        <wiz-bg-container id="bar4" class="pa bar bar-4"></wiz-bg-container>
        <wiz-image
          id="line4"
          class="pa lines line-4"
          :src="'./media/images/line1.png'"
        ></wiz-image>
        <wiz-bg-container id="bar5" class="pa bar bar-5"></wiz-bg-container>
        <wiz-image
          id="line5"
          class="pa lines line-5"
          :src="'./media/images/line1.png'"
        ></wiz-image>
        <wiz-bg-container id="bar6" class="pa bar bar-6"></wiz-bg-container>
        <wiz-image
          id="line6"
          class="pa lines line-6"
          :src="'./media/images/line1.png'"
        ></wiz-image>
        <wiz-bg-container id="bar7" class="pa bar bar-7"></wiz-bg-container>
        <wiz-image
          id="line7"
          class="pa lines line-7"
          :src="'./media/images/line1.png'"
        ></wiz-image>
        <wiz-bg-container id="bar8" class="pa bar bar-8"></wiz-bg-container>
        <wiz-image
          id="line8"
          class="pa lines line-8"
          :src="'./media/images/line1.png'"
        ></wiz-image>
        <wiz-bg-container id="bar9" class="pa bar bar-9"></wiz-bg-container>
        <wiz-image
          id="line9"
          class="pa lines line-9"
          :src="'./media/images/line1.png'"
        ></wiz-image>

        <wiz-text
          id="graph1Name"
          class="pa graph-1-name"
          :text="$t('graph1Name')"
        ></wiz-text>
        <wiz-text
          id="graph2Name"
          class="pa graph-2-name"
          :text="$t('graph2Name')"
        ></wiz-text>
        <wiz-text
          id="graph3Name"
          class="pa graph-3-name"
          :text="$t('graph3Name')"
        ></wiz-text>
        <wiz-text
          id="graph4Name"
          class="pa graph-4-name"
          :text="$t('graph4Name')"
        ></wiz-text>
        <wiz-text
          id="graph5Name"
          class="pa graph-5-name"
          :text="$t('graph5Name')"
        ></wiz-text>
        <wiz-text
          id="graph6Name"
          class="pa graph-6-name"
          :text="$t('graph6Name')"
        ></wiz-text>
        <wiz-text
          id="graph7Name"
          class="pa graph-7-name"
          :text="$t('graph7Name')"
        ></wiz-text>
        <wiz-text
          id="graph8Name"
          class="pa graph-8-name"
          :text="$t('graph8Name')"
        ></wiz-text>
        <wiz-text
          id="graph9Name"
          class="pa graph-9-name"
          :text="$t('graph9Name')"
        ></wiz-text>
        <wiz-text
          id="graph10Name"
          class="pa graph-10-name"
          :text="$t('graph10Name')"
        ></wiz-text>

        <wiz-text
          id="xName1"
          class="pa x-name x-name-1"
          :text="$t('xName')"
        ></wiz-text>
        <wiz-text
          id="xName2"
          class="pa x-name x-name-2"
          :text="$t('xName')"
        ></wiz-text>
        <wiz-bg-container
          id="borderCont1"
          class="pa border-cont-1"
        ></wiz-bg-container>
        <wiz-text
          id="xGroupName1"
          class="pa x-group-name x-group-name-1"
          :text="$t('xGroupName1')"
        ></wiz-text>
        <wiz-bg-container
          id="borderCont2"
          class="pa border-cont-2"
        ></wiz-bg-container>
        <wiz-text
          id="xGroupName2"
          class="pa x-group-name x-group-name-2"
          :text="$t('xGroupName2')"
        ></wiz-text>
        <wiz-text
          id="horizontalLegend"
          class="pa"
          :text="$t('horizontalLegend')"
        ></wiz-text>
        <wiz-text
          id="bottomTable"
          class="pa bottom-table"
          :text="$t('bottomTable')"
        ></wiz-text>
      </wiz-bg-grid-container>

      <wiz-bg-grid-container
        id="footnoteArea"
        class="footnote-area"
        :component-name="'Footnote area'"
      >
        <wiz-bg-container id="footnoteWrapper" class="footnote-wrapper">
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
      closeBtnNavigation: {
        slide: "tecfideraTecProvenARR",
        chapter: "slidesPopup",
      },
    };
  },
};
</script>
<style scoped>
.headline {
  width: 855px;
  font-size: 20px;
  font-family: "DinPro", sans-serif;
  line-height: 1.1;
  text-align: center;
  transform: matrix(1, 0, 0, 1, -29, 35);
}

.rotateText {
  font-size: 19px;
  font-family: "DinPro", sans-serif;
  transform: matrix(0, -1, 1, 0, -20, 154);
}

.y-scale {
  height: 249px;
  border-right: 1px solid #000;
  transform: matrix(1, 0, 0, 1, 137, 41);
}

.x-scale {
  width: 509px;
  border-bottom: 1px solid #000;
  transform: matrix(1, 0, 0, 1, 132, 290);
}

.scale {
  width: 11px;
  border-bottom: 1px solid #000;
}

.scale-1 {
  transform: matrix(1, 0, 0, 1, 132, 40);
}

.scale-2 {
  transform: matrix(1, 0, 0, 1, 132, 90);
}

.scale-3 {
  transform: matrix(1, 0, 0, 1, 132, 140);
}

.scale-4 {
  transform: matrix(1, 0, 0, 1, 132, 190);
}

.scale-5 {
  transform: matrix(1, 0, 0, 1, 132, 240);
}

.y {
  font-size: 19px;
  font-family: "DinPro", sans-serif;
}

.x {
  font-size: 19px;
  font-family: "DinPro", sans-serif;
}

.y-1 {
  transform: matrix(1, 0, 0, 1, 101, 28);
}

.y-2 {
  transform: matrix(1, 0, 0, 1, 101, 78);
}

.y-3 {
  transform: matrix(1, 0, 0, 1, 101, 128);
}

.y-4 {
  transform: matrix(1, 0, 0, 1, 101, 178);
}

.y-5 {
  transform: matrix(1, 0, 0, 1, 101, 228);
}

.y-6 {
  transform: matrix(1, 0, 0, 1, 101, 278);
}

.x-1 {
  transform: matrix(1, 0, 0, 1, 164, 295);
}

.x-2 {
  transform: matrix(1, 0, 0, 1, 217, 295);
}

.x-3 {
  transform: matrix(1, 0, 0, 1, 270, 295);
}

.x-4 {
  transform: matrix(1, 0, 0, 1, 323, 295);
}

.x-5 {
  transform: matrix(1, 0, 0, 1, 376, 295);
}

.x-6 {
  transform: matrix(1, 0, 0, 1, 430, 295);
}

.x-7 {
  transform: matrix(1, 0, 0, 1, 483, 295);
}

.x-8 {
  transform: matrix(1, 0, 0, 1, 536, 295);
}

.x-9 {
  transform: matrix(1, 0, 0, 1, 589, 295);
}

.bar {
  width: 39px;
  background: -webkit-linear-gradient(-90deg, #80276c, #601a50);
}

.bar-1 {
  height: 103px;
  transform: matrix(1, 0, 0, 1, 158, 187);
}

.wiz-image.lines {
  width: 6px;
  height: 46px;
}

.line-1 {
  transform: matrix(1, 0, 0, 1, 175, 165);
}

.bar-2 {
  height: 79px;
  width: 39px;
  transform: matrix(1, 0, 0, 1, 211, 211);
}

.wiz-image.line-2 {
  height: 39px;
  transform: matrix(1, 0, 0, 1, 228, 187);
}

.bar-3 {
  height: 68px;
  width: 40px;
  transform: matrix(1, 0, 0, 1, 264, 222);
}

.wiz-image.line-3 {
  height: 39px;
  transform: matrix(1, 0, 0, 1, 281, 200);
}

.bar-4 {
  height: 68px;
  transform: matrix(1, 0, 0, 1, 318, 222);
}

.wiz-image.line-4 {
  height: 41px;
  transform: matrix(1, 0, 0, 1, 334, 198);
}

.bar-5 {
  height: 68px;
  width: 39px;
  transform: matrix(1, 0, 0, 1, 371, 222);
}

.wiz-image.line-5 {
  height: 40px;
  transform: matrix(1, 0, 0, 1, 387, 199);
}

.bar-6 {
  height: 77px;
  transform: matrix(1, 0, 0, 1, 424, 213);
}

.wiz-image.line-6 {
  height: 44px;
  transform: matrix(1, 0, 0, 1, 441, 188);
}

.bar-7 {
  height: 44px;
  width: 40px;
  transform: matrix(1, 0, 0, 1, 477, 246);
}

.wiz-image.line-7 {
  height: 33px;
  transform: matrix(1, 0, 0, 1, 494, 227);
}

.bar-8 {
  height: 64px;
  transform: matrix(1, 0, 0, 1, 531, 226);
}

.wiz-image.line-8 {
  height: 46px;
  transform: matrix(1, 0, 0, 1, 547, 197);
}

.bar-9 {
  height: 41px;
  transform: matrix(1, 0, 0, 1, 584, 249);
}

.wiz-image.line-9 {
  height: 43px;
  transform: matrix(1, 0, 0, 1, 600, 223);
}

.graph-1-name {
  font-size: 19px;
  transform: matrix(1, 0, 0, 1, 152, 140);
}

.graph-2-name {
  font-size: 19px;
  transform: matrix(1, 0, 0, 1, 206, 163);
}

.graph-3-name {
  font-size: 19px;
  transform: matrix(1, 0, 0, 1, 259, 176);
}

.graph-4-name {
  font-size: 19px;
  transform: matrix(1, 0, 0, 1, 312, 174);
}

.graph-5-name {
  font-size: 19px;
  transform: matrix(1, 0, 0, 1, 365, 175);
}

.graph-6-name {
  font-size: 19px;
  transform: matrix(1, 0, 0, 1, 418, 163);
}

.graph-7-name {
  font-size: 19px;
  transform: matrix(1, 0, 0, 1, 472, 202);
}

.graph-8-name {
  font-size: 19px;
  transform: matrix(1, 0, 0, 1, 525, 172);
}

.graph-9-name {
  font-size: 19px;
  transform: matrix(1, 0, 0, 1, 578, 198);
}
.x-name {
  font-size: 19px;
}

.x-name-1 {
  transform: matrix(1, 0, 0, 1, 184, 322);
}

.x-name-2 {
  transform: matrix(1, 0, 0, 1, 424, 322);
}

.x-group-name {
  font-size: 19px;
  line-height: 1.1;
  text-align: center;
}

.x-group-name-1 {
  transform: matrix(1, 0, 0, 1, 162, 354);
}

.x-group-name-2 {
  transform: matrix(1, 0, 0, 1, 402, 354);
}

#horizontalLegend {
  font-size: 19px;
  transform: matrix(1, 0, 0, 1, 370, 391);
}

.bottom-table {
  width: 420px;
  font-size: 14px;
  line-height: 1.2;
  transform: matrix(1, 0, 0, 1, 187, 424);
}

.border-cont-1 {
  width: 96px;
  height: 16px;
  border: 2px solid #000;
  border-top: none;
  transform: matrix(1, 0, 0, 1, 154, 330);
}

.border-cont-2 {
  width: 362px;
  height: 16px;
  border: 2px solid #000;
  border-top: none;
  transform: matrix(1, 0, 0, 1, 261, 330);
}

.footnote-1 {
  transform: matrix(1, 0, 0, 1, -43, 91);
}

.footnote-2 {
  width: 450px;
  transform: matrix(1, 0, 0, 1, -43, 111);
}
</style>
