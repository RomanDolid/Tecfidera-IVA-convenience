<i18n>
  {
    "eng": {
      "headline": "<span style='color: #80276c;'><b>Vaccinations</b></span>",
      "ribbonTxt1": "<b style='color: #ffffff;'>Dosing</b>",
      "ribbonTxt2": "<b style='color: #ffffff;'>Monitoring</b>",
      "ribbonTxt3": "<b style='color: #ffffff;'>Immunity</b>",
      "ribbonTxt4": "<b style='color: #ffffff;'>Vaccinations</b>",
      "ribbonTxt5": "<b style='color: #ffffff;'>AE Profile</b>",
      "ribbonTxt6": "<b style='color: #ffffff;'>GI Events</b>",
      "ribbonTxt7": "<b style='color: #ffffff;'>Infections & malignancies</b>",
      "ribbonTxt8": "<b style='color: #ffffff;'>Flushing</b>",
      "caption1": "<span style='color: #78be20;'><b>SmPC details</b></span>",
      "caption2": "<span style='color: #78be20;'><b>TECFIDERA's effect on immune response</b></span>",
      "item1": "<span style='color: #5b6770;'><span style='color: #06a5e1;'>•</span> Concomitant administration of non-live vaccines according to national<br>vaccination schedules may be considered during TECFIDERA therapy.<sup rv-references='ref1'>1</sup></span>",
      "item2": "<span style='color: #5b6770;'><span style='color: #06a5e1;'>•</span> No clinical data are available on the efficacy and safety of live attenuated<br>vaccines in patients taking TECFIDERA.<sup>1</sup></span>",
      "item3": "<span style='color: #5b6770;'><span style='color: #06a5e1;'>•</span> Live vaccines might carry an increased risk of clinical infection and should<br>not be given to patients treated with TECFIDERA unless the potential<br>benefit outweighs the potential risk.<sup>1</sup></span>",
      "item4": "<span style='color: #5b6770;'><span style='color: #06a5e1;'>•</span> TECFIDERA-treated patients mount an immune response to recall,<br>neoantigens, and T-cell–independent antigens, and provided adequate<br>seroprotection.<sup>2</sup></span>",
      "item5": "<span style='color: #5b6770;'><span style='color: #06a5e1;'>•</span> Due to a shift in immune response, DMF treatment does not inhibit<br>humoral immune function, which may contribute to TECFIDERA's<br>therapeutic benefits in MS as well as long-term safety experiences,<br>showing no overall increased risk of infections or malignancies.<sup>3-6</sup></span>",
      "hiddenReferences": "<sup refs='ref66 ref48 ref54 ref49 ref50 ref51'></sup>"
    }
  }
</i18n>

<template>
  <wiz-slide
    class="slide-popup"
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
        id="caption1"
        class="caption caption1 pa"
        :text="$t('caption1')"
        :component-name="'Caption'"
      ></wiz-text>
      <wiz-text
        id="item1"
        class="item item1 pa"
        :text="$t('item1')"
        :component-name="'Item'"
      ></wiz-text>
      <wiz-text
        id="item2"
        class="item item2 pa"
        :text="$t('item2')"
        :component-name="'Item'"
      ></wiz-text>
      <wiz-text
        id="item3"
        class="item item3 pa"
        :text="$t('item3')"
        :component-name="'Item'"
      ></wiz-text>
      <wiz-text
        id="caption2"
        class="caption caption2 pa"
        :text="$t('caption2')"
        :component-name="'Caption'"
      ></wiz-text>
      <wiz-text
        id="item4"
        class="item item4 pa"
        :text="$t('item4')"
        :component-name="'Item'"
      ></wiz-text>
      <wiz-text
        id="item5"
        class="item item5 pa"
        :text="$t('item5')"
        :component-name="'Item'"
      ></wiz-text>
      <wiz-image
        id="img"
        class="img pa"
        src="./media/images/img.png"
        :component-name="'Image'"
      ></wiz-image>

      <wiz-bg-ribbon
        id="ribbonMain"
        class="pa ribbon-main"
        v-bind="ribbonOptions"
        :index="3"
        :component-name="'Dropdown Menu'"
      >
      </wiz-bg-ribbon>
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
      </wiz-bg-container>
    </wiz-bg-grid-container>
  </wiz-slide>
</template>
<script>
export default {
  data() {
    return {
      closeBtnNavigation: { // where to go when closing popup
        slide: 'tecfideraConvenience',
        chapter: 'convenience',
      },
      ribbonOptions: {
        openIconImage: './common/media/images/indicator-active.png',
        closeIconImage: './common/media/images/indicator.png',
        items: [
          {
            name: this.$t('ribbonTxt1'),
            slide: {
              slide: 'tecfideraDosing',
              chapter: 'slidesPopup',
            },
            animation: true,
          },
          {
            name: this.$t('ribbonTxt2'),
            slide: {
              slide: 'tecfideraMonitoring',
              chapter: 'slidesPopup',
            },
            animation: true,
          },
          {
            name: this.$t('ribbonTxt3'),
            slide: {
              slide: 'tecfideraImmunity',
              chapter: 'slidesPopup',
            },
            animation: true,
          },
          {
            name: this.$t('ribbonTxt4'),
            slide: {
              slide: 'tecfideraVaccinations',
              chapter: 'slidesPopup',
            },
            animation: true,
          },
          {
            name: this.$t('ribbonTxt5'),
            slide: {
              slide: 'tecfideraAEProfile',
              chapter: 'slidesPopup',
            },
            animation: true,
          },
          {
            name: this.$t('ribbonTxt6'),
            slide: {
              slide: 'tecfideraGIEvents',
              chapter: 'slidesPopup',
            },
            animation: true,
          },
          {
            name: this.$t('ribbonTxt7'),
            slide: {
              slide: 'tecfideraInfectionsMalignancies',
              chapter: 'slidesPopup',
            },
            animation: true,
          },
          {
            name: this.$t('ribbonTxt8'),
            slide: {
              slide: 'tecfideraFlushing',
              chapter: 'slidesPopup',
            },
            animation: true,
          },
        ],
      },
      toPopup: {
        slide: 'tecfideraVaccinations2',
        chapter: 'slidesPopup',
      },
    };
  },
};
</script>
<style scoped>
.wiz-slide .headline {
  width: 150px;
  transform: matrix(1, 0, 0, 1, 0, 38);
}

.caption {
  font-size: 20px;
}

.caption1 {
  width: 121px;
  transform: matrix(1, 0, 0, 1, 7, -15);
}

.caption2 {
  width: 372px;
  transform: matrix(1, 0, 0, 1, 7, 243);
}

.item {
  font-size: 20px;
  line-height: 1.1;
  text-indent: -16px;
}

.item1 {
  width: 620px;
  transform: matrix(1, 0, 0, 1, 17, 27);
}

.item2 {
  width: 640px;
  transform: matrix(1, 0, 0, 1, 17, 85);
}

.item3 {
  width: 655px;
  transform: matrix(1, 0, 0, 1, 17, 143);
}

.item4 {
  width: 620px;
  transform: matrix(1, 0, 0, 1, 17, 283);
}

.item5 {
  width: 595px;
  transform: matrix(1, 0, 0, 1, 17, 363);
}

.wiz-slide .img {
  width: 178px;
  height: 361px;
  transform: matrix(1, 0, 0, 1, 678, 76);
}

.button {
  width: 41px;
  height: 41px;
  transform: matrix(1, 0, 0, 1, -32, 308);
  display: none;
}

.wiz-slide .button-img {
  width: 100%;
  height: 33px;
  display: none;
}
</style>
