<i18n>
  {
    "eng": {
      "headline": "<span style='color: #80276c;'><b>TECFIDERA reduces disease activity, with effectiveness<br> you can expect in the real-world<sup>1-15</sup></b></span>",
      "ribbonText1": "<span style='color: #ffffff;'>Proven efficacy in <b>newly diagnosed RRMS patients,</b><br> sustained up to 10 years<sup>1-3</sup></span>",
      "ribbonText2": "<span style='color: #ffffff;'><b>Robust efficacy in the overall RRMS population,</b><br> sustained up to 10 years<sup>3-6</sup></span>",
      "ribbonText3": "<span style='color: #ffffff;'>May be an effective treatment option for RRMS patients<br> <b>switching</b>  due to a suboptimal response to GA<sup>7</sup></span>",
      "ribbonText4": "<span style='color: #ffffff;'><b>Indirect comparative evidence</b> shows consistent results <br>for TECFIDERA across multiple <b>real-world* studies</b><sup>8-12</sup></span>",
      "ribbonText5": "<span style='color: #ffffff;'><b>Patients report</b>  real-world sustained <b>improvements or<br> stabilisation in fatigue, work productivity and QoL</b><sup>1,13-15</sup></span>",
      "footnote1":"<span style='color: #5b6770;'>* Propensity score-matched, inverse probability of treatment weighted, and network meta-analysis of real-world evidence.</span>",
      "footnote2":"<span style='color: #5b6770;'><b style='color: #80276c;'>GA:</b>  Glatiramer Acetate; <b style='color: #80276c;'>QoL:</b>  Quality of Life; <b style='color: #80276c;'>RRMS:</b> Relapsing Remitting Multiple Sclerosis.</span>",
      "hiddenReferences": "<sup refs='ref58 ref6 ref7 ref9 ref59 ref60 ref55 ref11 ref61 ref88 ref89 ref62 ref68 ref64 ref65'></sup>"
    }
  }
</i18n>

<template>
  <wiz-slide>
    <layouts :layouts="[{ name: 'logo' },{ name: 'top-image' }]"></layouts>
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
          id="mainImage"
          class="pa main-image"
          :src="'./media/images/main-image.png'"
          :component-name="'Main image'"
        ></wiz-image>
        <wiz-bg-container
          id="ribbonsContainer"
          class="pa ribbons-container"
          :component-name="'Ribbons container'"
        >
          <wiz-bg-container
            id="ribbonWrapper1"
            class="pa ribbon-wrapper-1 ribbon-wrapper"
            :component-name="'Ribbon wrapper 1'"
          >
            <wiz-image
              id="ribbon1"
              class="pa ribbon"
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
              :slide="toSlide1"
              :component-name="'ribbon button 1'"
            ></wiz-bg-button>
          </wiz-bg-container>
          <wiz-bg-container
            id="ribbonWrapper2"
            class="pa ribbon-wrapper-2 ribbon-wrapper"
            :component-name="'Ribbon wrapper 2'"
          >
            <wiz-image
              id="ribbon2"
              class="pa ribbon"
              :src="'./media/images/ribbon.png'"
              :component-name="'Ribbon 2'"
            ></wiz-image>
            <wiz-text
              id="ribbonText2"
              class="pa ribbon-text"
              :text="$t('ribbonText2')"
              :component-name="'Ribbon text 2'"
            ></wiz-text>
            <wiz-bg-button
              id="ribbonButton2"
              class="pa ribbon-button"
              :background-color="'transparent'"
              :slide="toSlide2"
              :component-name="'ribbon button 2'"
            ></wiz-bg-button>
          </wiz-bg-container>
          <wiz-bg-container
            id="ribbonWrapper3"
            class="pa ribbon-wrapper-3 ribbon-wrapper"
            :component-name="'Ribbon wrapper 3'"
          >
            <wiz-image
              id="ribbon3"
              class="pa ribbon"
              :src="'./media/images/ribbon.png'"
              :component-name="'Ribbon 3'"
            ></wiz-image>
            <wiz-text
              id="ribbonText3"
              class="pa ribbon-text"
              :text="$t('ribbonText3')"
              :component-name="'Ribbon text 3'"
            ></wiz-text>
            <wiz-bg-button
              id="ribbonButton3"
              class="pa ribbon-button"
              :background-color="'transparent'"
              :slide="toSlide3"
              :component-name="'ribbon button 3'"
            ></wiz-bg-button>
          </wiz-bg-container>
          <wiz-bg-container
            id="ribbonWrapper4"
            class="pa ribbon-wrapper-4 ribbon-wrapper"
            :component-name="'Ribbon wrapper 4'"
          >
            <wiz-image
              id="ribbon4"
              class="pa ribbon"
              :src="'./media/images/ribbon.png'"
              :component-name="'Ribbon 4'"
            ></wiz-image>
            <wiz-text
              id="ribbonText4"
              class="pa ribbon-text"
              :text="$t('ribbonText4')"
              :component-name="'Ribbon text 4'"
            ></wiz-text>
            <wiz-bg-button
              id="ribbonButton4"
              class="pa ribbon-button"
              :background-color="'transparent'"
              :slide="toSlide4"
              :component-name="'ribbon button 4'"
            ></wiz-bg-button>
          </wiz-bg-container>
          <wiz-bg-container
            id="ribbonWrapper5"
            class="pa ribbon-wrapper-5 ribbon-wrapper"
            :component-name="'Ribbon wrapper 5'"
          >
            <wiz-image
              id="ribbon5"
              class="pa ribbon"
              :src="'./media/images/ribbon.png'"
              :component-name="'Ribbon 5'"
            ></wiz-image>
            <wiz-text
              id="ribbonText5"
              class="pa ribbon-text"
              :text="$t('ribbonText5')"
              :component-name="'Ribbon text 5'"
            ></wiz-text>
            <wiz-bg-button
              id="ribbonButton5"
              class="pa ribbon-button"
              :background-color="'transparent'"
              :slide="toSlide5"
              :component-name="'ribbon button 5'"
            ></wiz-bg-button>
          </wiz-bg-container>
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
          id="footnote1"
          class="pa footnote1 footnote"
          :text="$t('footnote1')"
          :component-name="'Footnote 1'"
        ></wiz-text>
        <wiz-text
          id="footnote2"
          class="pa footnote2 footnote"
          :text="$t('footnote2')"
          :component-name="'Footnote 2'"
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
        slide: 'tecfideraNewlyARR',
        chapter: 'slidesPopup',
      },
      toSlide2: {
        slide: 'tecfideraTecProvenARR',
        chapter: 'slidesPopup',
      },
      toSlide3: {
        slide: 'tecfideraSwitchARR',
        chapter: 'slidesPopup',
      },
      toSlide4: {
        slide: 'tecfideraTecRWE',
        chapter: 'slidesPopup',
      },
      toSlide5: {
        slide: 'tecfideraTecPRO3',
        chapter: 'slidesPopup',
      },
    };
  },
};
</script>

<style scoped>
.wiz-slide .headline {
  width: 800px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}

.wiz-slide .content-wrapper {
  width: 981px;
  height: 768px;
  transform: matrix(1, 0, 0, 1, -40, -179);
}

.wiz-slide .main-image{
  width: 981px;
  height: 580px;
  transform: matrix(1, 0, 0, 1, 0, 107);
}

.wiz-slide .ribbons-container{
  width: 590px;
  height: 430px;
  transform: matrix(1, 0, 0, 1, 392, 170);
}

.wiz-slide .ribbon-wrapper {
  width: 589px;
  height: 85px;
}

.wiz-slide .ribbon-wrapper-1 {
  transform: matrix(1, 0, 0, 1, 0, 0);
}

.wiz-slide .ribbon-wrapper-2 {
  transform: matrix(1, 0, 0, 1, 0, 82);
}

.wiz-slide .ribbon-wrapper-3 {
  transform: matrix(1, 0, 0, 1, 0, 167);
}

.wiz-slide .ribbon-wrapper-4 {
  transform: matrix(1, 0, 0, 1, 0, 252);
}

.wiz-slide .ribbon-wrapper-5 {
  transform: matrix(1, 0, 0, 1, 0, 338);
}

.wiz-slide .ribbon {
  width: 100%;
  height: 100%;
  transform: matrix(1, 0, 0, 1, 0, 0);
}

.wiz-slide .ribbon-text {
  width: 500px;
  font-size: 20px;
  line-height: 22px;
  transform: matrix(1, 0, 0, 1, 32, 26);
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

.wiz-slide .ribbon-button {
  width: 755px;
  height: 67px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}

.wiz-slide .footnote1 {
  width: 540px;
  transform: matrix(1, 0, 0, 1, -25, 125);
}

.wiz-slide .footnote2 {
  width: 404px;
  transform: matrix(1, 0, 0, 1, -25, 149);
}
</style>
