<i18n>
  {
    "eng": {
      "headline": "<span style='color: #80276c;'><b>TECFIDERA – a track record built on evidence,<br>experience and convenience<sup>1-5</sup></b></span>",
      "number1": "<span style='color: #ffffff;'><i><b><sup>#</sup>1</i></b></span>",
      "ribbonText1": "<span style='color: #ffffff;'><b>Most prescribed</b></span>",
      "ribbonText2": "<span style='color: #ffffff;'>&nbsp;&nbsp;oral DMT for RRMS<br> in the world<sup>5</sup></span>",
      "footnote":"<span style='color: #5b6770;'>*This includes clinical trial use and patients prescribed Tecfidera. <br>Overall, 501,918 patients have been exposed to Tecfidera globally in the clinical trial and post-market settings through 31 December 2020.<br>Of these, 6,335 patients (14,241 patient-years) were from clinical trials.<sup>5</sup><br>Biogen 103620.</span>",
      "hiddenReferences": "<sup refs='ref16 ref17 ref10 ref66 ref114'></sup>"
    }
  }
</i18n>

<template>
  <wiz-slide>
    <layouts :layouts="[{ name: 'logo' }]"></layouts>
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
        id="contentWrapper1"
        class="content-wrapper"
      >
        <wiz-image
          id="bg"
          class="pa bg"
          :src="'./media/images/background.png'"
          :component-name="'Background'"
        ></wiz-image>
        <wiz-image
          id="ribbon"
          class="pa ribbon"
          :src="'./media/images/ribbon.png'"
          :component-name="'Ribbon'"
        ></wiz-image>
        <wiz-text
          id="number1"
          class="pa number-1"
          :text="$t('number1')"
          :component-name="'Number 1'"
        ></wiz-text>
        <wiz-text
          id="ribbonText1"
          class="pa ribbon-text-1"
          :text="$t('ribbonText1')"
          :component-name="'Ribbon text 1'"
        ></wiz-text>
        <wiz-text
          id="ribbonText2"
          class="pa ribbon-text-2"
          :text="$t('ribbonText2')"
          :component-name="'Ribbon text 2'"
        ></wiz-text>
        <wiz-image
          id="mainImage"
          class="pa main-image"
          :src="'./media/images/main-image.png'"
          :component-name="'Main image'"
        ></wiz-image>
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
export default {};
</script>

<style scoped>
.wiz-slide .header-area {
  z-index: 2;
}

.wiz-slide .headline {
  width: 535px;
}

.wiz-slide .content-wrapper {
  width: 980px;
  height: 768px;
  transform: matrix(1, 0, 0, 1, -40, -179);
}

.wiz-slide .bg {
  width: 980px;
  height: 586px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}

.wiz-slide .ribbon {
  width: 394px;
  height: 120px;
    transform: matrix(1, 0, 0, 1, 587, 65);
}

.wiz-slide .main-image {
    width: 685px;
    height: 507px;
    transform: matrix(1, 0, 0, 1, 136, 189);
}

.wiz-slide .number-1 {
  width: 87px;
  font-size: 95px;
  line-height: 22px;
    transform: matrix(1, 0, 0, 1, 627, 114);
}

.wiz-slide .ribbon-text-1 {
  width: 162px;
  font-size: 22px;
  line-height: 22px;
    transform: matrix(1, 0, 0, 1, 720, 102);
}

.wiz-slide .ribbon-text-2 {
  width: 210px;
  font-size: 22px;
  line-height: 22px;
    transform: matrix(1, 0, 0, 1, 704, 127);
}

.wiz-slide .footnote {
    transform: matrix(1, 0, 0, 1, -26, 113);
    width: 800px;
}
</style>
