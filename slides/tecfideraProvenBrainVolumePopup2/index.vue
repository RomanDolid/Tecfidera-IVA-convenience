<i18n>
  {
    "eng": {
      "headline": "<span style='color: #78be20;'><b>Percentage brain volume change by year of TECFIDERA treatment in ENDORSE<sup>1</b></span>",
      "hiddenReferences": "<sup refs='ref53'></span>",
      "rotateText": "<span style='color: #5b6770;'><b>Adjusted yearly mean (95% CI) PBVC</b></span>",
      "x1": "<span style='color: #5b6770;'><b>Year 4</b></span>",
      "x2": "<span style='color: #5b6770;'><b>Year 5</b></span>",
      "x3": "<span style='color: #5b6770;'><b>Year 6</b></span>",
      "x4": "<span style='color: #5b6770;'><b>Year 7</b></span>",
      "x5": "<span style='color: #5b6770;'><b>Year 8</b></span>",
      "y1": "<span style='color: #5b6770;'>0.0</span>",
      "y2": "<span style='color: #5b6770;'>-0.2</span>",
      "y3": "<span style='color: #5b6770;'>-0.4</span>",
      "y4": "<span style='color: #5b6770;'>-0.6</span>",
      "nameBar1": "<span style='color: #7c878e;'><b>-0.22</b></span>",
      "nameBar2": "<span style='color: #7c878e;'><b>-0.28</b></span>",
      "nameBar3": "<span style='color: #7c878e;'><b>-0.37</b></span>",
      "nameBar4": "<span style='color: #7c878e;'><b>-0.22</b></span>",
      "nameBar5": "<span style='color: #7c878e;'><b>-0.19</b></span>",
      "subnameBar1": "<span style='color: #7c878e;'>(<i>n</i> = 134)</span>",
      "subnameBar2": "<span style='color: #7c878e;'>(<i>n</i> = 116)</span>",
      "subnameBar3": "<span style='color: #7c878e;'>(<i>n</i> = 114)</span>",
      "subnameBar4": "<span style='color: #7c878e;'>(<i>n</i> = 108)</span>",
      "subnameBar5": "<span style='color: #7c878e;'>(<i>n</i> = 89)</span>",
      "footnote1": "<span style='color: #5b6770;'>Adapted from Gold <i>et al.</i> 2020.</span>",
      "footnote2": "<span style='color: #5b6770;'>Adjusted yearly PBVC change from previous year compared with the annual summary from the DMF/DMF group in the ENDORSE MRI cohort. All patients treated with DMF BID continuously from DEFINE/<br>CONFIRM and ENDORSE were included due to sample size restrictions. Data after patients switched to alternative multiple sclerosis medications were excluded. Adjusted mean, standard error, treatment<br>group difference and 95% CI from an analysis of covariance model adjusted for region and baseline T2 lesion volume. Number of patients with an MRI is shown for each time point.</span>",
      "footnote3": "<span style='color: #5b6770;'>The effect of Tecfidera on brain atrophy was a tertiary objective in DEFINE/CONFIRM.</span>",
      "footnote4": "<span style='color: #5b6770;'><span style='color: #80276c;'><b>BID:</b></span> Twice Daily; <span style='color: #80276c;'><b>CI:</b></span> Confidence Interval; <span style='color: #80276c;'><b>DMF:</b></span> Dimethyl Fumerate; <span style='color: #80276c;'><b>EDSS:</b></span> Expanded Disability Status Scale; <span style='color: #80276c;'><b>MRI:</b></span> Magnetic Resonance Imaging; <span style='color: #80276c;'><b>MS:</b></span> Multiple Sclerosis;<br><span style='color: #80276c;'><b>PBVC:</b></span> Percentage Brain Volume Change.</span>"
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
        <div
          id="xLine"
          class="pa x-line"
        ></div>
        <div
          id="yLine"
          class="pa y-line"
        ></div>
        <div
          id="yScale1"
          class="pa y-scale y-scale-1"
        ></div>
        <div
          id="yScale2"
          class="pa y-scale y-scale-2"
        ></div>
        <div
          id="yScale3"
          class="pa y-scale y-scale-3"
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
          id="x3"
          class="pa x x-3"
          :text="$t('x3')"
          :component-name="'Horizontal scale'"
        ></wiz-text>
        <wiz-text
          id="x4"
          class="pa x x-4"
          :text="$t('x4')"
          :component-name="'Horizontal scale'"
        ></wiz-text>
        <wiz-text
          id="x5"
          class="pa x x-5"
          :text="$t('x5')"
          :component-name="'Horizontal scale'"
        ></wiz-text>
        <wiz-text
          id="y1"
          class="pa y y-1"
          :text="$t('y1')"
          component-name="'Vertical scale'"
        ></wiz-text>
        <wiz-text
          id="y2"
          class="pa y y-2"
          :text="$t('y2')"
          component-name="'Vertical scale'"
        ></wiz-text>
        <wiz-text
          id="y3"
          class="pa y y-3"
          :text="$t('y3')"
          component-name="'Vertical scale'"
        ></wiz-text>
        <wiz-text
          id="y4"
          class="pa y y-4"
          :text="$t('y4')"
          component-name="'Vertical scale'"
        ></wiz-text>
        <div
          id="bar1"
          class="pa bar bar-1"
        ></div>
        <wiz-image
          id="line1"
          class="pa line-1"
          :src="'./media/images/line1.png'"
          :component-name="'Bar image'"
        >
        </wiz-image>
        <wiz-text
          id="nameBar1"
          class="pa name-bar name-bar-1"
          :text="$t('nameBar1')"
          :component-name="'Caption'"
        ></wiz-text>
        <wiz-text
          id="subnameBar1"
          class="pa subname-bar-1 subname-bar"
          :text="$t('subnameBar1')"
          component-name="Subcaption"
        ></wiz-text>
        <div
          id="bar2"
          class="pa bar bar-2"
        >
        </div>
        <wiz-image
          id="line2"
          class="pa line-2"
          :src="'./media/images/line2.png'"
          :component-name="'Bar image'"
        >
        </wiz-image>
        <wiz-text
          id="nameBar2"
          class="pa name-bar name-bar-2"
          :text="$t('nameBar2')"
          :component-name="'Caption'"
        ></wiz-text>
        <wiz-text
          id="subnameBar2"
          class="pa subname-bar-2 subname-bar"
          :text="$t('subnameBar2')"
          component-name="Subcaption"
        ></wiz-text>
        <div
          id="bar3"
          class="pa bar bar-3"
        ></div>
        <wiz-image
          id="line3"
          class="pa line-3"
          :src="'./media/images/line3.png'"
          :component-name="'Bar image'"
        >
        </wiz-image>
        <wiz-text
          id="nameBar3"
          class="pa name-bar name-bar-3"
          :text="$t('nameBar3')"
          :component-name="'Caption'"
        ></wiz-text>
        <wiz-text
          id="subnameBar3"
          class="pa subname-bar-3 subname-bar"
          :text="$t('subnameBar3')"
          component-name="Subcaption"
        ></wiz-text>
        <div
          id="bar4"
          class="pa bar bar-4"
        ></div>
        <wiz-image
          id="line4"
          class="pa line-4"
          :src="'./media/images/line4.png'"
          :component-name="'Bar image'"
        >
        </wiz-image>
        <wiz-text
          id="nameBar4"
          class="pa name-bar name-bar-4"
          :text="$t('nameBar4')"
          :component-name="'Caption'"
        ></wiz-text>
        <wiz-text
          id="subnameBar4"
          class="pa subname-bar-4 subname-bar"
          :text="$t('subnameBar4')"
          component-name="Subcaption"
        ></wiz-text>
        <div
          id="bar5"
          class="pa bar bar-5"
        ></div>
        <wiz-image
          id="line5"
          class="pa line-5"
          :src="'./media/images/line5.png'"
          :component-name="'Bar image'"
        >
        </wiz-image>
        <wiz-text
          id="nameBar5"
          class="pa name-bar name-bar-5"
          :text="$t('nameBar5')"
          :component-name="'Caption'"
        ></wiz-text>
        <wiz-text
          id="subnameBar5"
          class="pa subname-bar-5 subname-bar"
          :text="$t('subnameBar5')"
          component-name="Subcaption"
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
          <wiz-text
            id="footnote4"
            class="pa footnote footnote-4"
            :text="$t('footnote4')"
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
  transform: matrix(1, 0, 0, 1, 22, 35);
}

.x-line {
  width: 689px;
  border-bottom: 1px solid #000;
  transform: matrix(1, 0, 0, 1, 36, 48);
}

.y-line {
  height: 279px;
  border-left: 1px solid #000;
  transform: matrix(1, 0, 0, 1, 40, 49);
}

.y-scale {
  width: 8px;
  border-bottom: 1px solid #000;
}

.y-scale-1 {
  transform: matrix(1, 0, 0, 1, 36, 142);
}

.y-scale-2 {
  transform: matrix(1, 0, 0, 1, 36, 235);
}

.y-scale-3 {
  transform: matrix(1, 0, 0, 1, 36, 328);
}

.rotate-text {
  font-size: 14px;
  transform: matrix(0, -1, 1, 0, -127, 182);
}

.x {
  font-size: 14px;
}

.x-1 {
  transform: matrix(1, 0, 0, 1, 106, 28);
}

.x-2 {
  transform: matrix(1, 0, 0, 1, 242, 28);
}

.x-3 {
  transform: matrix(1, 0, 0, 1, 378, 28);
}

.x-4 {
  transform: matrix(1, 0, 0, 1, 515, 28);
}

.x-5 {
  transform: matrix(1, 0, 0, 1, 649, 28);
}

.y {
  font-size: 14px;
}

.y-1 {
  transform: matrix(1, 0, 0, 1, 15, 40);
}

.y-2 {
  transform: matrix(1, 0, 0, 1, 9, 133);
}

.y-3 {
  transform: matrix(1, 0, 0, 1, 9, 227);
}

.y-4 {
  transform: matrix(1, 0, 0, 1, 9, 320);
}

.bar {
  width: 61px;
  background: -webkit-linear-gradient(90deg, #80276c, #601a50);
}

.name-bar {
  font: 30px 'DinProCondensed', sans-serif;
}

.subname-bar {
  font-size: 14px;
}

.bar-1 {
  height: 102px;
  transform: matrix(1, 0, 0, 1, 94, 49);
}

.wiz-image.line-1 {
  width: 5px;
  height: 98px;
  transform: matrix(1, 0, 0, 1, 123, 103);
}

.name-bar-1 {
  transform: matrix(1, 0, 0, 1, 100, 209);
}

.subname-bar-1 {
  transform: matrix(1, 0, 0, 1, 100, 245);
}

.bar-2 {
  height: 130px;
  transform: matrix(1, 0, 0, 1, 231, 49);
}

.wiz-image.line-2 {
  width: 5px;
  height: 108px;
  transform: matrix(1, 0, 0, 1, 259, 125);
}

.name-bar-2 {
  transform: matrix(1, 0, 0, 1, 235, 244);
}

.subname-bar-2 {
  transform: matrix(1, 0, 0, 1, 235, 280);
}

.bar-3 {
  height: 172px;
  transform: matrix(1, 0, 0, 1, 367, 49);
}

.wiz-image.line-3 {
  width: 5px;
  height: 115px;
  transform: matrix(1, 0, 0, 1, 394, 161);
}

.name-bar-3 {
  transform: matrix(1, 0, 0, 1, 371, 289);
}

.subname-bar-3 {
  transform: matrix(1, 0, 0, 1, 371, 325);
}

.bar-4 {
  height: 102px;
  transform: matrix(1, 0, 0, 1, 503, 49);
}

.wiz-image.line-4 {
  width: 5px;
  height: 120px;
  transform: matrix(1, 0, 0, 1, 531, 93);
}

.name-bar-4 {
  transform: matrix(1, 0, 0, 1, 510, 224);
}

.subname-bar-4 {
  transform: matrix(1, 0, 0, 1, 510, 260);
}

.bar-5 {
  height: 88px;
  transform: matrix(1, 0, 0, 1, 639, 49);
}

.wiz-image.line-5 {
  width: 5px;
  height: 129px;
  transform: matrix(1, 0, 0, 1, 667, 72);
}

.name-bar-5 {
  transform: matrix(1, 0, 0, 1, 643, 210);
}

.subname-bar-5 {
  transform: matrix(1, 0, 0, 1, 647, 246);
}

.footnote-1 {
  transform: matrix(1, 0, 0, 1, -44, 17);
}

.footnote-2 {
  width: 900px;
  transform: matrix(1, 0, 0, 1, -44, 41);
}

.footnote-3 {
  transform: matrix(1, 0, 0, 1, -44, 84);
}

.footnote-4 {
  transform: matrix(1, 0, 0, 1, -44, 103);
}
</style>
