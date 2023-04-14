<i18n>
  {
    "eng": {
      "title": "<b style='color: #78be20;'>Percentage of patients with EDSS scores ≤ 3.5 over 10 years<sup>1</sup></b>",
      "verticalLegend": "<b style='color: #5b6770;'>Patients With EDSS Scores ≤ 3.5, %</b>",
      "value1": "<b style='color: #5b6770;'>86%</b>",
      "value2": "<b style='color: #5b6770;'>82%</b>",
      "value3": "<b style='color: #5b6770;'>77%</b>",
      "value4": "<b style='color: #5b6770;'>74%</b>",
      "note1": "<span style='color: #5b6770;'>n=479</span>",
      "note2": "<span style='color: #5b6770;'>n=217</span>",
      "note3": "<span style='color: #5b6770;'>n=226</span>",
      "note4": "<span style='color: #5b6770;'>n=90</span>",
      "label1": "<span style='color: #5b6770;'>DMF/DMF</span>",
      "label2": "<span style='color: #5b6770;'>PBO/DMF</span>",
      "label3": "<span style='color: #5b6770;'>DMF/DMF</span>",
      "label4": "<span style='color: #5b6770;'>PBO/DMF</span>",
      "horizontalLegend1": "<b style='color: #5b6770;'>Year 2</b>",
      "horizontalLegend2": "<b style='color: #5b6770;'>Year 10</b>",
      "xValue1": "<span style='color: #5b6770;'>0</span>",
      "xValue2": "<span style='color: #5b6770;'>20</span>",
      "xValue3": "<span style='color: #5b6770;'>40</span>",
      "xValue4": "<span style='color: #5b6770;'>60</span>",
      "xValue5": "<span style='color: #5b6770;'>80</span>",
      "xValue6": "<span style='color: #5b6770;'>100</span>",
      "footnote1": "<span style='color: #5b6770;'>Adapted from Gold R <i>et al.</i> 2020. Poster FC02.05.</span>",
      "footnote2": "<span style='color: #5b6770;'><b style='color: #80276c;'>DMF:</b> Dimethyl Fumerate; <b style='color: #80276c;'>EDSS:</b> Expanded Disability Status Scale; <b style='color: #80276c;'>PBO:</b> Placebo.</span>",
      "hiddenReferences": "<sup refs='ref59'></sup>"
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
        :session-storage-key='myKey'
        :component-name="'Close Popup'"
      ></wiz-bg-close-popup-button>

      <wiz-bg-grid-container
        id="headerArea"
        class="header-area"
        :component-name="'Headline &amp; Subhead container'"
      ></wiz-bg-grid-container>

      <wiz-bg-grid-container
        id="contentArea"
        class="content-area"
        :component-name="'Content area'"
      >
        <wiz-text
          id="title"
          class="pa"
          :text="$t('title')"
          :component-name="'Title'"
        ></wiz-text>
        <wiz-bg-container id="wrapper" class="pa" :component-name="'Wrapper'">
          <wiz-bg-container
            id="graphWrapper"
            class="pa"
            :component-name="'Wrapper'"
          >
            <wiz-bg-container
              id="bar1"
              class="bar pa background-1"
              :component-name="'Bar'"
            >
              &nbsp;
            </wiz-bg-container>
            <wiz-bg-container
              id="bar2"
              class="bar pa background-2"
              :component-name="'Bar'"
            >
              &nbsp;
            </wiz-bg-container>
            <wiz-bg-container
              id="bar3"
              class="bar pa background-1"
              :component-name="'Bar'"
            >
              &nbsp;
            </wiz-bg-container>
            <wiz-bg-container
              id="bar4"
              class="bar pa background-2"
              :component-name="'Bar'"
            >
              &nbsp;
            </wiz-bg-container>
            <wiz-bg-container
              id="scale1"
              class="pa scale"
              :component-name="'Scale'"
            >
              &nbsp;
            </wiz-bg-container>
            <wiz-bg-container
              id="scale2"
              class="pa scale"
              :component-name="'Scale'"
            >
              &nbsp;
            </wiz-bg-container>
            <wiz-bg-container
              id="scale3"
              class="pa scale"
              :component-name="'Scale'"
            >
              &nbsp;
            </wiz-bg-container>
            <wiz-bg-container
              id="scale4"
              class="pa scale"
              :component-name="'Scale'"
            >
              &nbsp;
            </wiz-bg-container>
            <wiz-bg-container
              id="scale5"
              class="pa scale"
              :component-name="'Scale'"
            >
              &nbsp;
            </wiz-bg-container>
            <wiz-bg-container
              id="scale6"
              class="pa scale"
              :component-name="'Scale'"
            >
              &nbsp;
            </wiz-bg-container>
            <wiz-text
              id="xValue1"
              class="pa x-value"
              :text="$t('xValue1')"
              :component-name="'X-axis value'"
            ></wiz-text>
            <wiz-text
              id="xValue2"
              class="pa x-value"
              :text="$t('xValue2')"
              :component-name="'X-axis value'"
            ></wiz-text>
            <wiz-text
              id="xValue3"
              class="pa x-value"
              :text="$t('xValue3')"
              :component-name="'X-axis value'"
            ></wiz-text>
            <wiz-text
              id="xValue4"
              class="pa x-value"
              :text="$t('xValue4')"
              :component-name="'X-axis value'"
            ></wiz-text>
            <wiz-text
              id="xValue5"
              class="pa x-value"
              :text="$t('xValue5')"
              :component-name="'X-axis value'"
            ></wiz-text>
            <wiz-text
              id="xValue6"
              class="pa x-value"
              :text="$t('xValue6')"
              :component-name="'X-axis value'"
            ></wiz-text>
            <wiz-text
              id="value1"
              class="pa value"
              :text="$t('value1')"
              :component-name="'Value'"
            ></wiz-text>
            <wiz-text
              id="value2"
              class="pa value"
              :text="$t('value2')"
              :component-name="'Value'"
            ></wiz-text>
            <wiz-text
              id="value3"
              class="pa value"
              :text="$t('value3')"
              :component-name="'Value'"
            ></wiz-text>
            <wiz-text
              id="value4"
              class="pa value"
              :text="$t('value4')"
              :component-name="'Value'"
            ></wiz-text>
            <wiz-text
              id="note1"
              class="pa note"
              :text="$t('note1')"
              :component-name="'Note'"
            ></wiz-text>
            <wiz-text
              id="note2"
              class="pa note"
              :text="$t('note2')"
              :component-name="'Note'"
            ></wiz-text>
            <wiz-text
              id="note3"
              class="pa note"
              :text="$t('note3')"
              :component-name="'Note'"
            ></wiz-text>
            <wiz-text
              id="note4"
              class="pa note"
              :text="$t('note4')"
              :component-name="'Note'"
            ></wiz-text>
            <wiz-text
              id="label1"
              class="pa label"
              :text="$t('label1')"
              :component-name="'Label'"
            ></wiz-text>
            <wiz-text
              id="label2"
              class="pa label"
              :text="$t('label2')"
              :component-name="'Label'"
            ></wiz-text>
            <wiz-text
              id="label3"
              class="pa label"
              :text="$t('label3')"
              :component-name="'Label'"
            ></wiz-text>
            <wiz-text
              id="label4"
              class="pa label"
              :text="$t('label4')"
              :component-name="'Label'"
            ></wiz-text>
          </wiz-bg-container>
          <wiz-text
            id="verticalLegend"
            class="pa"
            :text="$t('verticalLegend')"
            :component-name="'Vertical legend'"
          ></wiz-text>
          <wiz-text
            id="horizontalLegend1"
            class="pa horizontal-legend"
            :text="$t('horizontalLegend1')"
            :component-name="'Horizontal legend'"
          ></wiz-text>
          <wiz-text
            id="horizontalLegend2"
            class="pa horizontal-legend"
            :text="$t('horizontalLegend2')"
            :component-name="'Horizontal legend'"
          ></wiz-text>
        </wiz-bg-container>
      </wiz-bg-grid-container>

      <wiz-bg-grid-container
        id="footnoteArea"
        class="footnote-area"
        :component-name="'Footnote area'"
      >
        <wiz-text
          id="footnote1"
          class="footnote"
          :text="$t('footnote1')"
          :component-name="'Footnote'"
        ></wiz-text>
        <wiz-text
          id="footnote2"
          class="footnote"
          :text="$t('footnote2')"
          :component-name="'Footnote'"
        ></wiz-text>
        <wiz-text
          id="hiddenReferences"
          class="hidden"
          :text="$t('hiddenReferences')"
          :component-name="'Hidden references'"
        ></wiz-text>
      </wiz-bg-grid-container>
    </wiz-bg-container>
  </wiz-slide>
</template>
<script>
export default {
  data() {
    return {
      closeBtnNavigation: {
        slide: "",
        chapter: "",
      },
      myKey: "close-popup"
    };
  },
};
</script>
<style scoped>
.wiz-bg-grid-container {
  width: 800px !important;
}
#title {
  font-size: 20px;
  line-height: 20px;
  transform: matrix(1, 0, 0, 1, 108, -93);
}
#wrapper {
  transform: matrix(1, 0, 0, 1, -30, 20);
  width: 800px;
  height: 415px;
}
#graphWrapper {
  transform: matrix(1, 0, 0, 1, 70, 30);
  width: 685px;
  height: 325px;
  border-left: 1px solid #574419;
  border-bottom: 1px solid #574419;
}
#verticalLegend {
  transform: matrix(1, 0, 0, 1, -86, 186) rotate(-90deg);
  font-size: 14px;
  line-height: 14px;
}
.horizontal-legend {
  transform: matrix(1, 0, 0, 1, 226, 396);
  font-size: 14px;
  line-height: 14px;
}
#horizontalLegend2 {
  transform: matrix(1, 0, 0, 1, 557, 396);
}
.value {
  transform: matrix(1, 0, 0, 1, 104, -20);
  font: 30px/30px "DinProCondensed";
}
#value2 {
  transform: matrix(1, 0, 0, 1, 198, -1);
}
#value3 {
  transform: matrix(1, 0, 0, 1, 441, 16);
}
#value4 {
  transform: matrix(1, 0, 0, 1, 535, 26);
}
.note {
  transform: matrix(1, 0, 0, 1, 103, 13);
  font-size: 18px;
  line-height: 18px;
}
#note2 {
  transform: matrix(1, 0, 0, 1, 197, 31);
}
#note3 {
  transform: matrix(1, 0, 0, 1, 440, 50);
}
#note4 {
  transform: matrix(1, 0, 0, 1, 539, 59);
}
.label {
  transform: matrix(1, 0, 0, 1, 96, 333);
  font-size: 14px;
  line-height: 14px;
}
#label2 {
  transform: matrix(1, 0, 0, 1, 190, 333);
}
#label3 {
  transform: matrix(1, 0, 0, 1, 433, 333);
}
#label4 {
  transform: matrix(1, 0, 0, 1, 527, 333);
}
.x-value {
  transform: matrix(1, 0, 0, 1, -15, 319);
  font-size: 14px;
  line-height: 14px;
}
#xValue2 {
  transform: matrix(1, 0, 0, 1, -22, 253);
}
#xValue3 {
  transform: matrix(1, 0, 0, 1, -22, 188);
}
#xValue4 {
  transform: matrix(1, 0, 0, 1, -22, 123);
}
#xValue5 {
  transform: matrix(1, 0, 0, 1, -22, 58);
}
#xValue6 {
  transform: matrix(1, 0, 0, 1, -30, -7);
}
.scale {
  transform: matrix(1, 0, 0, 1, -6, 0);
  width: 11px;
  height: 1px;
  background: #574319;
}
#scale2 {
  transform: matrix(1, 0, 0, 1, -6, 65);
}
#scale3 {
  transform: matrix(1, 0, 0, 1, -6, 130);
}
#scale4 {
  transform: matrix(1, 0, 0, 1, -6, 195);
}
#scale5 {
  transform: matrix(1, 0, 0, 1, -6, 260);
}
#scale6 {
  transform: matrix(1, 0, 0, 1, -6, 325);
}
.bar {
  width: 61px;
}
.background-1 {
  background: linear-gradient(#80276c, #601950);
}
.background-2 {
  background: linear-gradient(#04a2df, #2287ab);
}
#bar1 {
  transform: matrix(1, 0, 0, 1, 97, 46);
  height: 279px;
}
#bar2 {
  transform: matrix(1, 0, 0, 1, 190, 59);
  height: 266px;
}
#bar3 {
  transform: matrix(1, 0, 0, 1, 435, 76);
  width: 60px;
  height: 249px;
}
#bar4 {
  transform: matrix(1, 0, 0, 1, 527, 85);
  height: 240px;
}
#footnote1 {
  transform: matrix(1, 0, 0, 1, -44, 89);
}
#footnote2 {
  transform: matrix(1, 0, 0, 1, -44, 101);
}
</style>
