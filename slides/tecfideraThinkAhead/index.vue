<i18n>
  {
    "eng": {
      "headline": "<span style='color: #80276c;'><b>Treating early in your active RRMS patients requires thinking ahead<sup>1</sup></b></span>",
      "paragraph": "<span style='color: #5b6770;'>What is the main goal for you and your patients when initiating treatment?</span>",
      "text1":"<span style='color: #5b6770;'><b style='color: #80276c;'>Reducing disease activity</b><br>effectively and over the<br>long-term<sup>2-12</sup></span>",
      "text2":"<span style='color: #5b6770;'>A <b style='color: #78be20;'>flexible option</b> with reversible<br>immunological effects*<br>and timely elimination<sup>†1,13–15</sup></span>",
      "text3":"<span style='color: #5b6770;'><b style='color: #00a3e0;'>Convenient</b> and <b style='color: #00a3e0;'>easy to initiate</b><br>and manage with <b style='color: #00a3e0;'>long-term<br>safety you can trust<sup style='color: #00a3e0;'>6,13,16–19</sup></b></span>",
      "ribbonText1": "<span style='color: #ffffff;'>Why start treatment early in your newly diagnosed active RRMS patients?<sup>1,20,21</sup></span>",
      "footnote":"<span style='color: #5b6770;'>* Restoration of absolute lymphocyte counts in >4 weeks after discontinuation in RRMS patients without severe lymphopenia.<sup>1</sup><br><sup>†</sup> Within 24 hours in the majority of individuals.<sup>13</sup></span>",
      "hiddenReferences": "<sup refs='ref106 ref113 ref4 ref5 ref6 ref7 ref8 ref9 ref10 ref11 ref115 ref58 ref66 ref14 ref15 ref16 ref17 ref18 ref19 ref22 ref23'></sup>"
    }
  }
</i18n>

<template>
  <wiz-slide>
    <layouts :layouts="[{ name: 'logo' }, { name: 'top-image' }]"></layouts>
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
        <wiz-text
          id="paragraph"
          class="paragraph"
          :text="$t('paragraph')"
          :component-name="'Paragraph'"
        ></wiz-text>
      </wiz-bg-container>
    </wiz-bg-grid-container>

    <wiz-bg-grid-container
      id="contentArea"
      class="content-area"
      :component-name="'Content area'"
    >
      <wiz-bg-container
        id="contentWrapper1"
        class="content-wrapper"
      >
        <wiz-image
          id="horse"
          class="pa horse"
          :src="'./media/images/horse.png'"
          :component-name="'A Horse'"
        ></wiz-image>
        <wiz-bg-container
          id="block1"
          class="pa block-1"
          :component-name="'Block 1'"
        >
          <wiz-image
            id="image1"
            class="pa image-1"
            :src="'./media/images/image-1.png'"
            :component-name="'Image 1'"
          ></wiz-image>
          <wiz-text
            id="text1"
            class="pa text-1 block-text"
            :text="$t('text1')"
            :component-name="'Text 1'"
          ></wiz-text>
          <wiz-image
            id="marker1"
            class="pa marker"
            :src="'./media/images/marker.png'"
            :component-name="'Marker 1'"
          ></wiz-image>
          <wiz-bg-button
            id="blockButton1"
            class="pa block-button-1"
            :background-color="'transparent'"
            :slide="toSlide1"
            :component-name="'Block button 1'"
          ></wiz-bg-button>
        </wiz-bg-container>
        <wiz-bg-container
          id="block2"
          class="pa block-2"
          :component-name="'Block 2'"
        >
          <wiz-image
            id="image2"
            class="pa image-2"
            :src="'./media/images/image-2.png'"
            :component-name="'Image 2'"
          ></wiz-image>
          <wiz-text
            id="text2"
            class="pa text-2 block-text"
            :text="$t('text2')"
            :component-name="'Text 2'"
          ></wiz-text>
          <wiz-image
            id="marker2"
            class="pa marker"
            :src="'./media/images/marker.png'"
            :component-name="'Marker 2'"
          ></wiz-image>
          <wiz-bg-button
            id="blockButton2"
            class="pa block-button-2"
            :background-color="'transparent'"
            :slide="toSlide2"
            :component-name="'Block button 2'"
          ></wiz-bg-button>
        </wiz-bg-container>
        <wiz-bg-container
          id="block3"
          class="pa block-3"
          :component-name="'Block 3'"
        >
          <wiz-image
            id="image3"
            class="pa image-3"
            :src="'./media/images/image-3.png'"
            :component-name="'Image 3'"
          ></wiz-image>
          <wiz-text
            id="text3"
            class="pa text-3 block-text"
            :text="$t('text3')"
            :component-name="'Text 3'"
          ></wiz-text>
          <wiz-image
            id="marker3"
            class="pa marker"
            :src="'./media/images/marker.png'"
            :component-name="'Marker 3'"
          ></wiz-image>
          <wiz-bg-button
            id="blockButton3"
            class="pa block-button-3"
            :background-color="'transparent'"
            :slide="toSlide3"
            :component-name="'Block button 3'"
          ></wiz-bg-button>
        </wiz-bg-container>
        <wiz-bg-container
          id="ribbonWrapper1"
          class="pa ribbon-wrapper-1"
          :component-name="'Ribbon wrapper 1'"
        >
          <wiz-image
            id="ribbon1"
            class="pa ribbon-1"
            :src="'./media/images/ribbon.png'"
            :component-name="'Ribbon 1'"
          ></wiz-image>
          <wiz-text
            id="ribbonText1"
            class="pa ribbon-text"
            :text="$t('ribbonText1')"
            :component-name="'Ribbon text 1'"
          ></wiz-text>
          <wiz-bg-button
            id="ribbonButton1"
            class="pa ribbon-button"
            :background-color="'transparent'"
            :slide="toSlide4"
            :component-name="'ribbon button 1'"
          ></wiz-bg-button>
        </wiz-bg-container>
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
          id="hidden"
          class="hidden"
          :text="$t('hiddenReferences')"
          :component-name="'Hidden Refs'"
        ></wiz-text>
        <wiz-text
          id="footnote"
          class="pa footnote"
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
      toSlide1: {
        slide: 'tecfideraEfficacy',
        chapter: 'efficacy',
      },
      toSlide2: {
        slide: 'tecfideraFlexibility',
        chapter: 'flexibility',
      },
      toSlide3: {
        slide: 'tecfideraConvenience',
        chapter: 'convenience',
      },
      toSlide4: {
        slide: 'tecfideraEarlyTreatment',
        chapter: 'slidesPopup',
      },
      toSlide5: {
        slide: 'tecfideraPotentialTreatment',
        chapter: 'slidesPopup',
      },
    };
  },
};
</script>

<style scoped>
.wiz-slide .headline {
  width: 800px;
  transform: matrix(1, 0, 0, 1, 0, 38);
}

.wiz-slide .paragraph {
  width: 653px;
  font-size: 20px;
  transform: matrix(1, 0, 0, 1, 1, 38);
}

.wiz-slide .content-wrapper {
  width: 980px;
  height: 697px;
  transform: matrix(1, 0, 0, 1, -40, -179);
}

.wiz-slide .horse {
  width: 125px;
  height: 153px;
  transform: matrix(1, 0, 0, 1, 849, 43);
}

.wiz-slide .block-1 {
  width: 312px;
  height: 422px;
  transform: matrix(1, 0, 0, 1, 1, 175);
}

.wiz-slide .wiz-bg-grid-container.content-area{
  z-index: 2;
}

.wiz-slide .block-2 {
  width: 313px;
  height: 422px;
  transform: matrix(1, 0, 0, 1, 312, 175);
}

.wiz-slide .block-3 {
  width: 356px;
  height: 422px;
  transform: matrix(1, 0, 0, 1, 622, 175);
}

.wiz-slide .block-1,
.wiz-slide .block-2,
.wiz-slide .block-3 {
  z-index: 3;
}

.wiz-slide .image-1 {
  width: 313px;
  height: 330px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}

.wiz-slide .image-2 {
  width: 313px;
  height: 330px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}

.wiz-slide .image-3 {
  width: 356px;
  height: 330px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}

.wiz-slide .block-text {
  width: 275px;
  font-size: 19px;
  line-height: 22px;
}

.wiz-slide .text-1 {
  transform: matrix(1, 0, 0, 1, 21, 344);
}

.wiz-slide .text-2 {
  height: 75px;
  padding-right: 12px;
  padding-left: 24px;
  border-right: 1px solid #7c878e;
  border-left: 1px solid #7c878e;
  transform: matrix(1, 0, 0, 1, 1, 347);
}

.wiz-slide .text-2 ::v-deep span {
  position: absolute;
  transform: matrix(1, 0, 0, 1, 0, -3);
}

.wiz-slide .text-3 {
  transform: matrix(1, 0, 0, 1, 28, 344);
}

.wiz-slide .marker {
  overflow: visible;
  width: 10px;
  height: 10px;
  transform: matrix(1, 0, 0, 1, 154, 406);
}

.wiz-slide .block-button-1 {
  width: 312px;
  height: 422px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}

.wiz-slide .block-button-2 {
  width: 313px;
  height: 422px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}

.wiz-slide .block-button-3 {
  width: 356px;
  height: 422px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}

.wiz-slide .wiz-bg-button {
  max-height: unset;
  border-radius: unset;
}

.wiz-slide .wiz-bg-button ::v-deep .wiz-button {
  padding: unset;
}

.wiz-slide .wiz-bg-button ::v-deep .icon-wrapper,
.wiz-slide .wiz-bg-button ::v-deep .wiz-button .wiz-text {
  display: none;
  padding: unset;
}

.wiz-slide .ribbon-wrapper-1,
.wiz-slide .ribbon-wrapper-2 {
  z-index: 2;
  width: 755px;
  height: 67px;
}

.wiz-slide .ribbon-wrapper-1 {
  transform: matrix(1, 0, 0, 1, 225, 621);
}

.wiz-slide .ribbon-wrapper-2 {
  z-index: 3;
  transform: matrix(1, 0, 0, 1, 223, 631);
}

.wiz-slide .ribbon-1,
.wiz-slide .ribbon-2 {
  width: 755px;
  height: 67px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}

.wiz-slide .ribbon-text {
  width: 682px;
  font-size: 20px;
  line-height: 22px;
  transform: matrix(1, 0, 0, 1, 32, 31);
}

.wiz-slide .ribbon-button {
  width: 755px;
  height: 67px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}

.wiz-slide .footnote-area {
  z-index: unset;
}

.wiz-slide .footnote {
  width: 580px;
  transform: matrix(1, 0, 0, 1, -25, 137);
}
</style>
