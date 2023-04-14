<i18n>
  {
    "eng": {
      "headline": "<span style='color: #78be20;'><b>Adjusted ARR in the newly diagnosed population for patients <br>who received TECFIDERA during DEFINE/CONFIRM<sup>1</sup></b></span>",
      "graphDescription": "<span style='color: #5b6770;'>Adjusted ARR was 0.24 (95% CI 0.16–0.34) in the first year compared<br>with 0.10 (0.05–0.23) at years 8–9 of DMF treatment</span>",
      "graphNote1": "<span style='color: #5b6770;'>n=144</span>",
      "graphNote2": "<span style='color: #5b6770;'>n=141</span>",
      "graphNote3": "<span style='color: #5b6770;'>n=144</span>",
      "graphNote4": "<span style='color: #5b6770;'>n=137</span>",
      "graphNote5": "<span style='color: #5b6770;'>n=128</span>",
      "graphNote6": "<span style='color: #5b6770;'>n=111</span>",
      "graphNote7": "<span style='color: #5b6770;'>n=99</span>",
      "graphNote8": "<span style='color: #5b6770;'>n=91</span>",
      "graphNote9": "<span style='color: #5b6770;'>n=81</span>",
      "blockLabel1": "<span style='color: #5b6770;'>TEC</span>",
      "blockLabel2": "<span style='color: #5b6770;'>TEC</span>",
      "blockDescription1": "<span style='color: #5b6770;'><b>DEFINE/<br>CONFIRM</b></span>",
      "blockDescription2": "<span style='color: #5b6770;'><b>ENDORSE</b></span>",
      "barLabel1": "<span style='color: #5b6770;'>0-1</span>",
      "barLabel2": "<span style='color: #5b6770;'>1-2</span>",
      "barLabel3": "<span style='color: #5b6770;'>2-3</span>",
      "barLabel4": "<span style='color: #5b6770;'>3-4</span>",
      "barLabel5": "<span style='color: #5b6770;'>4-5</span>",
      "barLabel6": "<span style='color: #5b6770;'>5-6</span>",
      "barLabel7": "<span style='color: #5b6770;'>6-7</span>",
      "barLabel8": "<span style='color: #5b6770;'>7-8</span>",
      "barLabel9": "<span style='color: #5b6770;'>8-9</span>",
      "verticalLegend": "<span style='color: #5b6770;'><b>Adjusted ARR (95% CI)</b></span>",
      "vScale1": "<span style='color: #5b6770;'>0.4</span>",
      "vScale2": "<span style='color: #5b6770;'>0.3</span>",
      "vScale3": "<span style='color: #5b6770;'>0.2</span>",
      "vScale4": "<span style='color: #5b6770;'>0.1</span>",
      "vScale5": "<span style='color: #5b6770;'>0.0</span>",
      "footnote1": "<span style='color: #5b6770;'>Adapted from Gold R, <i>et al.</i> 2020.</span>",
      "footnote2": "<span style='color: #5b6770;'><b>ARR:</b> Annualized Relapse Rate; <b>CI:</b> Confidence Interval; <b>PBO:</b> Placebo; <b>TEC:</b> Tecfidera.</span>",
      "hiddenReferences": "<sup refs='ref3'></sup>"
    }
  }
</i18n>

<template>
  <wiz-slide
    class="slide-popup"
    @slideswipe.native.stop
  >
    <layouts :layouts="[{ name: 'logo' }, { name: 'top-image' }]">
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
          class="content-wrapper"
          :component-name="'Content Wrapper'"
        >
          <wiz-image
            id="graph"
            class="pa graph"
            :src="'./media/images/graph.png'"
            :component-name="'Graph'"
          ></wiz-image>
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
          </wiz-bg-container>
          <wiz-bg-container
            id="graphNoteWrapper"
            class="pa graph-note-wrapper"
            :component-name="'Graph Note Wrapper'"
          >
            <wiz-text
              id="graphNote1"
              class="pa graph-note graph-note-1"
              :text="$t('graphNote1')"
              :component-name="'Graph Note'"
            ></wiz-text>
            <wiz-text
              id="graphNote2"
              class="pa graph-note graph-note-2"
              :text="$t('graphNote2')"
              :component-name="'Graph Note'"
            ></wiz-text>
            <wiz-text
              id="graphNote3"
              class="pa graph-note graph-note-3"
              :text="$t('graphNote3')"
              :component-name="'Graph Note'"
            ></wiz-text>
            <wiz-text
              id="graphNote4"
              class="pa graph-note graph-note-4"
              :text="$t('graphNote4')"
              :component-name="'Graph Note'"
            ></wiz-text>
            <wiz-text
              id="graphNote5"
              class="pa graph-note graph-note-5"
              :text="$t('graphNote5')"
              :component-name="'Graph Note'"
            ></wiz-text>
            <wiz-text
              id="graphNote6"
              class="pa graph-note graph-note-6"
              :text="$t('graphNote6')"
              :component-name="'Graph Note'"
            ></wiz-text>
            <wiz-text
              id="graphNote7"
              class="pa graph-note graph-note-7"
              :text="$t('graphNote7')"
              :component-name="'Graph Note'"
            ></wiz-text>
            <wiz-text
              id="graphNote8"
              class="pa graph-note graph-note-8"
              :text="$t('graphNote8')"
              :component-name="'Graph Note'"
            ></wiz-text>
            <wiz-text
              id="graphNote9"
              class="pa graph-note graph-note-9"
              :text="$t('graphNote9')"
              :component-name="'Graph Note'"
            ></wiz-text>
          </wiz-bg-container>
          <wiz-bg-container
            id="barLabelWrapper"
            class="pa bar-label-wrapper"
            :component-name="'Bar Label Wrapper'"
          >
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
            <wiz-text
              id="barLabel3"
              class="pa bar-label bar-label-3"
              :text="$t('barLabel3')"
              :component-name="'Bar Label'"
            ></wiz-text>
            <wiz-text
              id="barLabel4"
              class="pa bar-label bar-label-4"
              :text="$t('barLabel4')"
              :component-name="'Bar Label'"
            ></wiz-text>
            <wiz-text
              id="barLabel5"
              class="pa bar-label bar-label-5"
              :text="$t('barLabel5')"
              :component-name="'Bar Label'"
            ></wiz-text>
            <wiz-text
              id="barLabel6"
              class="pa bar-label bar-label-6"
              :text="$t('barLabel6')"
              :component-name="'Bar Label'"
            ></wiz-text>
            <wiz-text
              id="barLabel7"
              class="pa bar-label bar-label-7"
              :text="$t('barLabel7')"
              :component-name="'Bar Label'"
            ></wiz-text>
            <wiz-text
              id="barLabel8"
              class="pa bar-label bar-label-8"
              :text="$t('barLabel8')"
              :component-name="'Bar Label'"
            ></wiz-text>
            <wiz-text
              id="barLabel9"
              class="pa bar-label bar-label-9"
              :text="$t('barLabel9')"
              :component-name="'Bar Label'"
            ></wiz-text>
          </wiz-bg-container>
          <wiz-text
            id="blockLabel1"
            class="pa block-label block-label-1"
            :text="$t('blockLabel1')"
            :component-name="'Block Label'"
          ></wiz-text>
          <wiz-text
            id="blockLabel2"
            class="pa block-label block-label-2"
            :text="$t('blockLabel2')"
            :component-name="'Block Label'"
          ></wiz-text>
          <wiz-text
            id="blockDescription1"
            class="pa block-description block-description-1"
            :text="$t('blockDescription1')"
            :component-name="'Block Description'"
          ></wiz-text>
          <wiz-text
            id="blockDescription2"
            class="pa block-description block-description-2"
            :text="$t('blockDescription2')"
            :component-name="'Block Description'"
          ></wiz-text>
          <wiz-text
            id="graphDescription"
            class="pa graph-description"
            :text="$t('graphDescription')"
            :component-name="'Description'"
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
  transform: matrix(1, 0, 0, 1, -29, 35);
}
.wiz-image.graph {
  width: 386px;
  height: 369px;
  transform: matrix(1, 0, 0, 1, 223, 7);
}
.graph-description {
  width: 421px;
  font-size: 14px;
  line-height: 1.2;
  transform: matrix(1, 0, 0, 1, 188, 424);
}
.vertical-legend {
  width: 143px;
  font-size: 14px;
  transform: matrix(0, -1, 1, 0, 173, 241);
  transform-origin: 0 0;
}
.vertical-scale-wrapper {
  width: 25px;
  height: 340px;
  transform: matrix(1, 0, 0, 1, 199, -2);
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
  transform: matrix(1, 0, 0, 1, 0, 81);
}
.v-scale-3 {
  transform: matrix(1, 0, 0, 1, 0, 163);
}
.v-scale-4 {
  transform: matrix(1, 0, 0, 1, 0, 244);
}
.v-scale-5 {
  transform: matrix(1, 0, 0, 1, 0, 325);
}

.graph-note-wrapper {
  width: 358px;
  height: 180px;
  transform: matrix(1, 0, 0, 1, 241, 28);
}
.graph-note {
  width: 35px;
  font-size: 13px;
  text-align: center;
}
.graph-note-1 {
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.graph-note-2 {
  transform: matrix(1, 0, 0, 1, 40, 161);
}
.graph-note-3 {
  transform: matrix(1, 0, 0, 1, 80, 131);
}
.graph-note-4 {
  transform: matrix(1, 0, 0, 1, 120, 98);
}
.graph-note-5 {
  transform: matrix(1, 0, 0, 1, 161, 150);
}
.graph-note-6 {
  transform: matrix(1, 0, 0, 1, 201, 90);
}
.graph-note-7 {
  transform: matrix(1, 0, 0, 1, 241, 121);
}
.graph-note-8 {
  transform: matrix(1, 0, 0, 1, 281, 103);
}
.graph-note-9 {
  transform: matrix(1, 0, 0, 1, 321, 93);
}

.bar-label-wrapper {
  width: 352px;
  height: 25px;
  transform: matrix(1, 0, 0, 1, 243, 336);
}
.bar-label {
  width: 31px;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
}
.bar-label-1 {
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.bar-label-2 {
  transform: matrix(1, 0, 0, 1, 40, 0);
}
.bar-label-3 {
  transform: matrix(1, 0, 0, 1, 80, 0);
}
.bar-label-4 {
  transform: matrix(1, 0, 0, 1, 120, 0);
}
.bar-label-5 {
  transform: matrix(1, 0, 0, 1, 161, 0);
}
.bar-label-6 {
  transform: matrix(1, 0, 0, 1, 201, 0);
}
.bar-label-7 {
  transform: matrix(1, 0, 0, 1, 241, 0);
}
.bar-label-8 {
  transform: matrix(1, 0, 0, 1, 281, 0);
}
.bar-label-9 {
  transform: matrix(1, 0, 0, 1, 321, 0);
}
.block-label {
  width: 25px;
  font-size: 14px;
}
.block-label-1 {
  transform: matrix(1, 0, 0, 1, 266, 356);
}
.block-label-2 {
  transform: matrix(1, 0, 0, 1, 448, 356);
}
.block-description {
  width: 63px;
  font-size: 14px;
  line-height: 1.1;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.block-description-1 {
  transform: matrix(1, 0, 0, 1, 250, 381);
}
.block-description-2 {
  transform: matrix(1, 0, 0, 1, 429, 381);
}

.footnote-1 {
  width: 147px;
  transform: matrix(1, 0, 0, 1, -44, 90);
}
.footnote-2 {
  width: 379px;
  transform: matrix(1, 0, 0, 1, -44, 113);
}
</style>
