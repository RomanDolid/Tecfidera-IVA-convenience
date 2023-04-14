<i18n>
  {
    "eng": {
      "headline": "<span style='color: #80276c;'><b>Why start treatment early in your newly diagnosed active RRMS patients?</b></span>",
      "paragraph1": "<span style='color: #5b6770;'>Early treatment with an effective DMT has the potential to slow the course of MS over time<br>and is more likely to lead to better long-term outcomes for your patients compared with later<br>intervention<sup>1-4</sup></span>",
      "paragraph2": "<span style='color: #5b6770;'>Optimizing therapy early by addressing key aspects of<br>disease activity and worsening may most effectively<br>delay disease progression and modify the course of<br>the disease.<sup>1–3</sup></span>",
      "verticalLegend1": "<span style='color: #5b6770;'><b>Increasing disability</b></span>",
      "horizontalLegend1": "<span style='color: #5b6770;'><b>Time</b></span>",
      "caption1": "<span style='color: #78be20;'><b>Treatment<br>start at<br>diagnosis</b></span>",
      "caption2": "<span style='color: #ffffff;'><b>Intervention at diagnosis</b></span>",
      "verticalLegend2": "<span style='color: #5b6770;'><b>Increasing disability</b></span>",
      "horizontalLegend2": "<span style='color: #5b6770;'><b>Time</b></span>",
      "paragraph3": "<span style='color: #5b6770;'>Some patients may have a <b style='color: #5b6770;'>suboptimal response<br>to treatment</b> and may continue to experience<br>significant disease activity.</span>",
      "paragraph4": "<span style='color: #5b6770;'>Identifying non-responders and switching patients<br>to another therapy early in their<br>disease course is crucial.<sup>2</sup></span>",
      "caption3": "<span style='color: #5b6770;'><b>Treatment<br>start at<br>diagnosis</b></span>",
      "caption4": "<span style='color: #78be20;'><b>Treatment switch<br>if disease activity<br>continues</b></span>",
      "caption5": "<span style='color: #ffffff;'><b>Later intervention</b></span>",
      "caption6": "<span style='color: #ffffff;'><b>Intervention at diagnosis</b></span>",
      "verticalLegend3": "<span style='color: #5b6770;'><b>Increasing disability</b></span>",
      "horizontalLegend3": "<span style='color: #5b6770;'><b>Time</b></span>",
      "paragraph5": "<span style='color: #5b6770;'><b style='color: #5b6770;'>Early window of opportunity</b> to influence<br>the accumulation of irreversible<br>long-term damage.<sup>3,4</sup></span>",
      "caption7": "<span style='color: #5b6770;'><b>Treatment<br>start at<br>diagnosis</b></span>",
      "caption8": "<span style='color: #5b6770;'><b>Treatment switch<br>if disease activity<br>continues</b></span>",
      "caption9": "<span style='color: #ffffff;'><b>No treatment</b></span>",
      "caption10": "<span style='color: #ffffff;'><b>Later intervention</b></span>",
      "caption11": "<span style='color: #ffffff;'><b>Intervention at diagnosis</b></span>",
      "tab1": "<b>Intervention at diagnosis</b>",
      "tab2": "<b>Later intervention</b>",
      "tab3": "<b>No treatment</b>",
      "footnote": "<span style='color: #5b6770;'>Adapted from Giovannoni G, <i>et al.</i> 2016 and Ziemssen 2015.<sup>3</sup></span>",
      "hiddenReferences": "<sup refs='ref106 ref22 ref23 ref24'></sup>"
    }
  }
</i18n>

<template>
  <wiz-slide class="slide-popup" @slideswipe.native.stop>
    <layouts :layouts="[{ name: 'logo' }, { name: 'top-image' }]"></layouts>
    <wiz-bg-close-popup-button
      id="closePopup"
      class="close-popup close-popup-slide"
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
        id="paragraph1"
        class="paragraph1 pa"
        :text="$t('paragraph1')"
        :component-name="'Paragraph'"
      ></wiz-text>
      <wiz-bg-sliding-content
        id="slidingContent"
        class="sliding-content pa"
        :states="states"
        :swiped-content="isSwiped"
      >
        <div slot="0">
          <wiz-image
            id="graph"
            class="graph graph1 pa"
            src="./media/images/graph1.png"
            :component-name="'Graph'"
          ></wiz-image>
          <wiz-image
            id="healthyPerson"
            class="healthy-person pa"
            src="./media/images/healthy-person.png"
            :component-name="'Healthy person'"
          ></wiz-image>
          <wiz-image
            id="arrowBlock1"
            class="arrow-block arrow-block1 pa"
            src="./media/images/arrow-block1.png"
            :component-name="'Arrow block'"
          ></wiz-image>
          <wiz-text
            id="verticalLegend1"
            class="vertical-legend vertical-legend1 pa"
            :text="$t('verticalLegend1')"
            :component-name="'Vertical legend'"
          ></wiz-text>
          <wiz-text
            id="horizontalLegend1"
            class="horizontal-legend horizontal-legend1 pa"
            :text="$t('horizontalLegend1')"
            :component-name="'Horizontal legend'"
          ></wiz-text>
          <wiz-text
            id="paragraph2"
            class="paragraph paragraph2 pa"
            :text="$t('paragraph2')"
            :component-name="'Paragraph'"
          ></wiz-text>
          <wiz-text
            id="caption1"
            class="caption caption1 pa"
            :text="$t('caption1')"
            :component-name="'Caption'"
          ></wiz-text>
          <wiz-text
            id="caption2"
            class="caption caption2 pa"
            :text="$t('caption2')"
            :component-name="'Caption'"
          ></wiz-text>
        </div>
        <div slot="1">
          <wiz-image
            id="graph2"
            class="graph graph2 pa"
            src="./media/images/graph2.png"
            :component-name="'Graph'"
          ></wiz-image>
          <wiz-image
            id="healthyPerson2"
            class="healthy-person pa"
            src="./media/images/healthy-person.png"
            :component-name="'Healthy person'"
          ></wiz-image>
          <wiz-image
            id="elderlyPerson2"
            class="elderly-person pa"
            src="./media/images/elderly-person.png"
            :component-name="'Elderly person'"
          ></wiz-image>
          <wiz-image
            id="arrowBlock2"
            class="arrow-block arrow-block2 pa"
            src="./media/images/arrow-block2.png"
            :component-name="'Arrow block'"
          ></wiz-image>
          <wiz-image
            id="arrow"
            class="arrow pa"
            src="./media/images/arrow1.png"
            :component-name="'Arrow'"
          ></wiz-image>
          <wiz-text
            id="verticalLegend2"
            class="vertical-legend vertical-legend2 pa"
            :text="$t('verticalLegend2')"
            :component-name="'Vertical legend'"
          ></wiz-text>
          <wiz-text
            id="horizontalLegend2"
            class="horizontal-legend horizontal-legend2 pa"
            :text="$t('horizontalLegend2')"
            :component-name="'Horizontal legend'"
          ></wiz-text>
          <wiz-text
            id="paragraph3"
            class="paragraph paragraph3 pa"
            :text="$t('paragraph3')"
            :component-name="'Paragraph'"
          ></wiz-text>
          <wiz-text
            id="paragraph4"
            class="paragraph paragraph4 pa"
            :text="$t('paragraph4')"
            :component-name="'Paragraph'"
          ></wiz-text>
          <wiz-text
            id="caption3"
            class="caption caption3 pa"
            :text="$t('caption3')"
            :component-name="'Caption'"
          ></wiz-text>
          <wiz-text
            id="caption4"
            class="caption caption4 pa"
            :text="$t('caption4')"
            :component-name="'Caption'"
          ></wiz-text>
          <wiz-text
            id="caption5"
            class="caption caption5 pa"
            :text="$t('caption5')"
            :component-name="'Caption'"
          ></wiz-text>
          <wiz-text
            id="caption6"
            class="caption caption6 pa"
            :text="$t('caption6')"
            :component-name="'Caption'"
          ></wiz-text>
        </div>
        <div slot="2">
          <wiz-image
            id="graph3"
            class="graph graph3 pa"
            src="./media/images/graph3.png"
            :component-name="'Graph'"
          ></wiz-image>
          <wiz-image
            id="healthyPerson3"
            class="healthy-person pa"
            src="./media/images/healthy-person.png"
            :component-name="'Healthy person'"
          ></wiz-image>
          <wiz-image
            id="elderlyPerson3"
            class="elderly-person pa"
            src="./media/images/elderly-person.png"
            :component-name="'Elderly person'"
          ></wiz-image>
          <wiz-image
            id="sickPerson3"
            class="sick-person pa"
            src="./media/images/sick-person.png"
            :component-name="'Sick person'"
          ></wiz-image>
          <wiz-image
            id="arrowBlock3"
            class="arrow-block arrow-block3 pa"
            src="./media/images/arrow-block3.png"
            :component-name="'Arrow block'"
          ></wiz-image>
          <wiz-text
            id="verticalLegend3"
            class="vertical-legend vertical-legend3 pa"
            :text="$t('verticalLegend3')"
            :component-name="'Vertical legend'"
          ></wiz-text>
          <wiz-text
            id="horizontalLegend3"
            class="horizontal-legend horizontal-legend3 pa"
            :text="$t('horizontalLegend3')"
            :component-name="'Horizontal legend'"
          ></wiz-text>
          <wiz-text
            id="paragraph5"
            class="paragraph paragraph5 pa"
            :text="$t('paragraph5')"
            :component-name="'Paragraph'"
          ></wiz-text>
          <wiz-text
            id="caption7"
            class="caption caption7 pa"
            :text="$t('caption7')"
            :component-name="'Caption'"
          ></wiz-text>
          <wiz-text
            id="caption8"
            class="caption caption8 pa"
            :text="$t('caption8')"
            :component-name="'Caption'"
          ></wiz-text>
          <wiz-text
            id="caption9"
            class="caption caption9 pa"
            :text="$t('caption9')"
            :component-name="'Caption'"
          ></wiz-text>
          <wiz-text
            id="caption10"
            class="caption caption10 pa"
            :text="$t('caption10')"
            :component-name="'Caption'"
          ></wiz-text>
          <wiz-text
            id="caption11"
            class="caption caption11 pa"
            :text="$t('caption11')"
            :component-name="'Caption'"
          ></wiz-text>
        </div>
      </wiz-bg-sliding-content>
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
          id="footnote"
          class="footnote pa"
          :text="$t('footnote')"
          :component-name="'Footnote'"
        ></wiz-text>
      </wiz-bg-container>
    </wiz-bg-grid-container>
  </wiz-slide>
</template>
<script>
export default {
  data() {
    return {
      closeBtnNavigation: {
        // where to go when closing popup
        slide: "tecfideraThinkAhead",
        chapter: "thinkAhead",
      },
      states: [
        {
          stateTitle: this.$t("tab1"),
        },
        {
          stateTitle: this.$t("tab2"),
        },
        {
          stateTitle: this.$t("tab3"),
        },
      ],
      isSwiped: false,
    };
  },
};
</script>
<style scoped>
.wiz-slide .content-area {
  z-index: 2;
}
.wiz-slide .sliding-content {
  transform: matrix(1, 0, 0, 1, 30, 0);
}

.wiz-slide .sliding-content::v-deep .nav-wrapper {
  justify-content: space-between;
  width: 722px;
  transform: matrix(1, 0, 0, 1, -105, 0);
}

.wiz-slide .sliding-content::v-deep .nav-wrapper .state-container {
  width: 187px;
}

.wiz-slide .sliding-content::v-deep .nav-wrapper::before {
  left: -140px !important;
  width: 135% !important;
}

.wiz-slide .sliding-content::v-deep .nav-wrapper .state-container .state-title-wrapper{
  margin-top: -8px;
}

.paragraph1 {
  width: 842px;
  font-size: 20px;
  line-height: 23px;
  transform: matrix(1, 0, 0, 1, 0, -52);
}

.paragraph {
  font-size: 18px;
  line-height: 20px;
}

.paragraph2 {
  transform: matrix(1, 0, 0, 1, 316, 137);
}

.paragraph3 {
  transform: matrix(1, 0, 0, 1, 316, 59);
}

.paragraph4 {
  transform: matrix(1, 0, 0, 1, 316, 138);
}

.paragraph5 {
  transform: matrix(1, 0, 0, 1, 316, 59);
}

.wiz-slide .graph {
  width: 689px;
  height: 328px;
  transform: matrix(1, 0, 0, 1, 61, 84);
}

.wiz-slide .healthy-person {
  width: 57px;
  height: 57px;
  transform: matrix(1, 0, 0, 1, 760, 308);
}

.wiz-slide .elderly-person {
  width: 57px;
  height: 57px;
  transform: matrix(1, 0, 0, 1, 760, 198);
}

.wiz-slide .sick-person {
  width: 57px;
  height: 57px;
  transform: matrix(1, 0, 0, 1, 760, 112);
}

.vertical-legend {
  font-size: 15px;
  transform: matrix(1, 0, 0, 1, -27, 238) rotate(-90deg);
}

.wiz-slide .arrow-block1 {
  width: 162px;
  height: 222px;
  transform: matrix(1, 0, 0, 1, 141, 173);
}

.wiz-slide .arrow-block2 {
  width: 46px;
  height: 202px;
  transform: matrix(1, 0, 0, 1, 253, 123);
}

.wiz-slide .arrow-block3 {
  width: 165px;
  height: 311px;
  transform: matrix(1, 0, 0, 1, 138, 85);
}

.wiz-slide .arrow {
  width: 7px;
  height: 30px;
  transform: matrix(1, 0, 0, 1, 141, 366);
}

.horizontal-legend {
  font-size: 18px;
  font-family: "DinProCondensed", sans-serif;
  transform: matrix(1, 0, 0, 1, 392, 416);
}

.caption {
  font-size: 18px;
  font-family: "DinProCondensed", sans-serif;
  line-height: 18px;
  text-align: center;
}

.caption1 {
  transform: matrix(1, 0, 0, 1, 115, 304);
}

.caption2 {
  transform: matrix(1, 0, 0, 1, 577, 335);
}

.caption3 {
  transform: matrix(1, 0, 0, 1, 115, 304);
}

.caption4 {
  transform: matrix(1, 0, 0, 1, 203, 226);
}

.caption5 {
  transform: matrix(1, 0, 0, 1, 619, 218);
}

.caption6 {
  transform: matrix(1, 0, 0, 1, 577, 335);
}

.caption7 {
  transform: matrix(1, 0, 0, 1, 114, 304);
}

.caption8 {
  transform: matrix(1, 0, 0, 1, 203, 226);
}

.caption9 {
  transform: matrix(1, 0, 0, 1, 648, 135);
}

.caption10 {
  transform: matrix(1, 0, 0, 1, 619, 218);
}

.caption11 {
  transform: matrix(1, 0, 0, 1, 577, 335);
}

.footnote {
  transform: matrix(1, 0, 0, 1, -22, 149);
}
</style>
