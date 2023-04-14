<i18n>
  {
    "eng": {
      "headline": "<span style='color: #80276c;'><b>TECFIDERA is flexible option due to its reversible immunological<br> effects* and timely elimination<sup>†1-3</sup></b></span>",
      "firstCardText": "<span style='color: #fff;'><b>Rapid elimination<sup>*</sup>,</b> and <b>reversible</b><br> immunological effects<sup>†</sup> support <br><b>treatment sequencing<sup>1-4</sup></b></span>",
      "secondCardText": "<span style='color: #fff;'>A <b>flexible treatment</b> option with features<br> that may be important for patients who<br> are planning a family<sup>‡4-12</sup></span>",
      "footnote1": "<span style='color: #5b6770;'><sup>†</sup> No circulating monomethyl fumarate is present at 24 hours in the majority of individuals.</span><sup>4</sup>",
      "footnote2": "<span style='color: #5b6770;'>* Restoration of absolute lymphocyte counts in > 4 weeks after discontinuation in RRMS patients without severe lymphopenia.</span><sup>3</sup>",
      "footnote3": "<span style='color: #5b6770;'><sup>‡</sup> Tecfidera should only be used during pregnancy if clearly needed and if the potential benefit outweighs the potential risk to the foetus.</span><sup>4</sup>",
      "hiddenReferences": "<sup refs='ref14 ref15 ref106 ref66 ref36 ref37 ref38 ref39 ref40 ref41 ref42 ref5'></sup>"
    }
  }
</i18n>

<template>
  <wiz-slide>
    <layouts :layouts="[{ name: 'logo' }, { name: 'top-image' }]"></layouts>
    <wiz-image
      id="background"
      class="pa background"
      :src="'./media/images/background.jpg'"
    ></wiz-image>
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
      <wiz-bg-container
        id="firstCont"
        class="pa first-cont"
      >
        <wiz-image
          id="ribbon1"
          class="pa ribbon"
          :src="'./media/images/ribbon.png'"
          :component-name="'Wrapper image'"
        ></wiz-image>
        <wiz-text
          id="firstCardText"
          class="pa card-text first-card-text"
          :text="$t('firstCardText')"
          :component-name="'Wrapper text'"
        ></wiz-text>
        <wiz-container
          id="opnPopup1"
          v-goto="toPopup1"
          class="pa open-popup-1"
          :component-name="'Open button'"
        ></wiz-container>
      </wiz-bg-container>
      <wiz-bg-container
        id="secondCont"
        class="pa second-cont"
      >
        <wiz-image
          id="ribbon2"
          class="pa ribbon"
          :src="'./media/images/ribbon.png'"
          :component-name="'Wrapper image'"
        ></wiz-image>
        <wiz-text
          id="secondCardText"
          class="pa card-text second-card-text"
          :text="$t('secondCardText')"
          :component-name="'Wrapper text'"
        ></wiz-text>
        <wiz-container
          id="opnPopup2"
          v-goto="toPopup2"
          class="pa open-popup-2"
          :component-name="'Open button'"
        ></wiz-container>
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
  </wiz-slide>
</template>
<script>
export default {
  data() {
    return {
      toPopup1: {
        slide: 'tecfideraTime',
        chapter: 'slidesPopup',
      },
      toPopup2: {
        slide: 'tecfideraFamily',
        chapter: 'slidesPopup',
      },
    };
  },
};
</script>
<style scoped>
.headline {
  transform: matrix(1, 0, 0, 1, 1, 1);
}

.wiz-image.background {
  width: 981px;
  height: 640px;
  transform: matrix(1, 0, 0, 1, 44, 48);
}

.first-cont {
  width: 570px;
  height: 120px;
  transform: matrix(1, 0, 0, 1, 369, 102);
}

.second-cont {
  width: 570px;
  height: 120px;
  transform: matrix(1, 0, 0, 1, 369, 238);
}

.wiz-image.ribbon {
  width: 570px;
  height: 120px;
  transform: matrix(1, 0, 0, 1, 2, 2);
}

.card-text {
  width: 410px;
  font: 22px 'DinPro', sans-serif;
  line-height: 1.1;
  transform: matrix(1, 0, 0, 1, 77, 38);
}

.second-card-text {
  transform: matrix(1, 0, 0, 1, 77, 39);
}

.open-popup-1, .open-popup-2  {
  width: 570px;
  height: 114px;
  min-height: 114px;
  max-height: 114px;
  background-color: transparent;
  transform: matrix(1, 0, 0, 1, 7, 5);
}

.footnote-1 {
  transform: matrix(1, 0, 0, 1, -24, 126);
}

.footnote-2 {
  transform: matrix(1, 0, 0, 1, -24, 139);
}

.footnote-3 {
  transform: matrix(1, 0, 0, 1, -24, 152);
}
</style>
