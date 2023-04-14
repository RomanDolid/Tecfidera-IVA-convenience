<i18n>
  {
    "eng": {
      "headline": "<span style='color: #80276c;'><b>TECFIDERA is rapidly eliminated* and associated with reversible<br>immunological effects<sup>†1-4</sup></b></span>",
      "hiddenReferences": "<sup refs='ref14 ref15 ref106 ref66'></span>",
      "rotateText": "<span style='color: #5b6770;'><b>Absolute lymphocyte count</b></span>",
      "leftGraphText": "<span style='color: #5b6770;'><b>Effect on immune cells</b><br>In first year <span style='color: #78be20;'><b>lymphocyte</b></span> counts show<br>a mean decline of approximately 30%<br>from baseline<sup>1-3</sup></span>",
      "rightGraphText": "<span style='color: #5b6770;'><span style='color: #78be20;'><b>Lymphocytes</b></span><br>Restoration of <span style='color: #78be20;'><b>lymphocytes</b></span><br>takes around 4 plus weeks after discontinuation<br>in patients without severe lymphopenia<sup>3,4</sup></span>",
      "graphText": "<span style='color: #5b6770;'><span style='color: #78be20;'><b>Lymphocytes</span> levels:</b> steady plateau after 1 year<sup>1-3</sup></span>",
      "x1": "<span style='color: #5b6770;'><b>Start<br>TECFIDERA</b></span>",
      "x2": "<span style='color: #5b6770;'><b>1 year</b></span>",
      "x3": "<span style='color: #5b6770;'><b>Stop/continue<br>TECFIDERA</b></span>",
      "lineName": "<span style='color: #5b6770;'><span class='bigName'><b>LLN</b></span><br>LLN = 0.91x10<sup>9</sup>/L</span>",
      "bottomLineName": "<span style='color: #5b6770;'>LLN = 0.91x10<sup>9</sup>/L</span>",
      "label1Text": "<span style='color: #fff;'><b>Reversible<br>immunological effects<sup>1-4</sup></b></span>",
      "label2Text": "<span style='color: #fff;'><b>Timely elimination<br>within 24 hours<sup>4</sup></b></span>",
      "label3Text": "<span style='color: #fff;'><b>Short half-life<br>of approx. 1 hour<sup>4</sup></b></span>",
      "label4Text": "<span style='color: #fff;'><b>No known drug<br>interactions<sup>4</sup></b></span>",
      "footnote1": "<span style='color: #5b6770;'>This graph is for illustrative purposes only.</span>",
      "footnote2": "<span style='color: #5b6770;'>Adapted from Fox RJ <i>et al.</i> 2016, Mehta D <i>et al.</i> 2019, and Pardo G <i>et al.</i> 2017.</span>",
      "footnote3": "<span style='color: #5b6770;'>* No circulating monomethyl fumarate is present at 24 hours in the majority of individuals.</span>",
      "footnote4": "<span style='color: #5b6770;'><sup>†</sup> Restoration of absolute lymphocyte counts in >4 weeks after discontinuation in RRMS patients without severe lymphopenia.<sup>3</sup></span>",
      "footnote5": "<span style='color: #5b6770;'><span style='color: #80276c;'><b>LLN:</b></span> Lower Limit of Normal; <span style='color: #80276c;'><b>MOA:</b></span> Mechanism of Action.</span>"
    }
  }
</i18n>

<template>
  <wiz-slide
    @slideswipe.native.stop
  >
    <layouts :layouts="[{ name: 'logo'}, {name: 'top-image' }]"></layouts>
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
        :component-name="'Vertical legend'"
      ></wiz-text>
      <wiz-image
        id="graph"
        class="pa graph"
        :src="'./media/images/line-graph.png'"
        :component-name="'Graph'"
      ></wiz-image>
      <wiz-image
        id="scaleX"
        class="pa scale-x"
        :src="'./media/images/scale-x.png'"
        :component-name="'Scale'"
      ></wiz-image>
      <wiz-bg-container
        id="scaleY"
        class="pa scale-y"
      ></wiz-bg-container>
      <wiz-text
        id="leftGraphText"
        class="pa left-graph-text"
        :text="$t('leftGraphText')"
        :component-name="'Graph note'"
      ></wiz-text>
      <wiz-text
        id="rightGraphText"
        class="pa right-graph-text"
        :text="$t('rightGraphText')"
        :component-name="'Graph note'"
      ></wiz-text>
      <wiz-bg-container
        id="dottedLine"
        class="pa dotted-line"
      ></wiz-bg-container>
      <wiz-text
        id="lineName"
        class="pa line-name"
        :text="$t('lineName')"
        :component-name="'Graph note'"
      ></wiz-text>
      <wiz-text
        id="graphText"
        class="pa graph-text"
        :text="$t('graphText')"
        :component-name="'Graph note'"
      ></wiz-text>
      <wiz-text
        id="x1"
        class="pa x-1"
        :text="$t('x1')"
        :component-name="'Horizontal scale'"
      ></wiz-text>
      <wiz-text
        id="x2"
        class="pa x-2"
        :text="$t('x2')"
        :component-name="'Horizontal scale'"
      ></wiz-text>
      <wiz-text
        id="x3"
        class="pa x-3"
        :text="$t('x3')"
        :component-name="'Horizontal scale'"
      ></wiz-text>
      <wiz-image
        id="labelImage1"
        class="pa label-image label-image-1"
        :src="'./media/images/label-image1.png'"
        :component-name="'Icon'"
      ></wiz-image>
      <wiz-image
        id="labelImage2"
        class="pa label-image label-image-2"
        :src="'./media/images/label-image2.png'"
        :component-name="'Icon'"
      ></wiz-image>
      <wiz-image
        id="labelImage3"
        class="pa label-image label-image-3"
        :src="'./media/images/label-image3.png'"
        :component-name="'Icon'"
      ></wiz-image>
      <wiz-image
        id="labelImage4"
        class="pa label-image label-image-4"
        :src="'./media/images/label-image4.png'"
        :component-name="'Icon'"
      ></wiz-image>
      <wiz-text
        id="label1Text"
        class="pa label-1-text"
        :text="$t('label1Text')"
        :component-name="'Note'"
      ></wiz-text>
      <wiz-text
        id="label2Text"
        class="pa label-2-text"
        :text="$t('label2Text')"
        :component-name="'Note'"
      ></wiz-text>
      <wiz-text
        id="label3Text"
        class="pa label-3-text"
        :text="$t('label3Text')"
        :component-name="'Note'"
      ></wiz-text>
      <wiz-text
        id="label4Text"
        class="pa label-4-text"
        :text="$t('label4Text')"
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
        <wiz-text
          id="footnote4"
          class="pa footnote footnote-4"
          :text="$t('footnote4')"
          :component-name="'Footnote'"
        ></wiz-text>
        <wiz-text
          id="footnote5"
          class="pa footnote footnote-5"
          :text="$t('footnote5')"
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
      closeBtnNavigation: { // where to go when closing popup
        slide: 'tecfideraFlexibility',
        chapter: 'flexibility',
      },
    };
  },
};
</script>
<style scoped>
.headline {
  transform: matrix(1, 0, 0, 1, 1, 1);
}

.wiz-text >>> .green {
  color: #78be20;
}

.rotate-text {
  font-size: 18px;
  font-family: 'DinProCondensed', sans-serif;
  transform: matrix(0, -1, 1, 0, -28, 213);
}

.wiz-image.graph {
  width: 666px;
  max-width: 666px;
  height: 189px;
  transform: matrix(1, 0, 0, 1, 88, 172);
}

.wiz-image.scale-x {
  width: 687px;
  max-width: 687px;
  height: 15px;
  transform: matrix(1, 0, 0, 1, 85, 353);
}

.scale-y {
  width: 275px;
  height: 1px;
  border: 0 solid #5b6770;
  background: #5b6770;
  transform: matrix(0, -1, 1, 0, -52, 226);
}

.left-graph-text {
  font-size: 18px;
  line-height: 1.15;
  transform: matrix(1, 0, 0, 1, 98, 64);
}

.right-graph-text {
  font-size: 18px;
  line-height: 1.15;
  transform: matrix(1, 0, 0, 1, 496, 64);
}

.dotted-line {
  width: 680px;
  border-bottom: 1px dashed #5b6770;
  transform: matrix(1, 0, 0, 1, 85, 300);
}

.line-name {
  font-size: 17px;
  font-family: 'DinProCondensed', sans-serif;
  text-align: right;
  transform: matrix(1, 0, 0, 1, 706, 290);
}

.graph-text {
  font-size: 18px;
  transform: matrix(1, 0, 0, 1, 176, 260);
}

.x-1 {
  font-size: 18px;
  font-family: 'DinProCondensed', sans-serif;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 53, 365);
}

.x-2 {
  font-size: 18px;
  font-family: 'DinProCondensed', sans-serif;
  transform: matrix(1, 0, 0, 1, 319, 366);
}

.x-3 {
  font-size: 18px;
  font-family: 'DinProCondensed', sans-serif;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 542, 366);
}

.wiz-image.label-image {
  width: 167px;
  height: 51px;
}

.label-image-1 {
  transform: matrix(1, 0, 0, 1, 89, 437);
}

.label-1-text {
  color: #fff;
  font-size: 15px;
  line-height: 1.2;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 90, 443);
}

.label-image-2 {
  transform: matrix(1, 0, 0, 1, 261, 437);
}

.label-2-text {
  color: #fff;
  font-size: 16px;
  line-height: 1.2;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 276, 442);
}

.label-image-3 {
  transform: matrix(1, 0, 0, 1, 432, 437);
}

.label-3-text {
  color: #fff;
  font-size: 16px;
  line-height: 1.2;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 452, 442);
}

.label-image-4 {
  transform: matrix(1, 0, 0, 1, 604, 437);
}

.label-4-text {
  color: #fff;
  font-size: 16px;
  line-height: 1.2;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 632, 442);
}

.footnote {
  font-size: 10px;
}

.footnote-1 {
  transform: matrix(1, 0, 0, 1, -23, 92);
}

.footnote-2 {
  transform: matrix(1, 0, 0, 1, -23, 105);
}

.footnote-3 {
  transform: matrix(1, 0, 0, 1, -23, 117);
}

.footnote-4 {
  transform: matrix(1, 0, 0, 1, -23, 129);
}

.footnote-5 {
  transform: matrix(1, 0, 0, 1, -23, 147);
}
</style>
