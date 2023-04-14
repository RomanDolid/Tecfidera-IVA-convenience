<i18n>
  {
    "eng": {
      "headline": "<span style='color: #80276c;'><b>Robust network meta-analysis of >1 year of real-world data shows<br>consistent results for TECFIDERA<sup>1</sup></b></span>",
      "hiddenReferences": "<sup refs='ref62'></span>",
      "subtitle": "<span style='color: #5b6770;'>TECFIDERA showed <b>greater delay in time to first relapse vs IFN, GA and<br> teriflunomide,</b> and <b>similar effectiveness to fingolimod<sup>1</sup></b></span>",
      "titleTable": "<span style='color: #80276c;'><b>Bayesian NMA Forest Plots:<br>Full analysis scenario for mixed prior treatment patients</b></span>",
      "tableName": "<span style='color: #80276c;'><b>TTFR</b></span>",
      "table1_1": "<span style='color: #78be20;'><b>TECFIDERA vs,</b></span>",
      "table1_2": "<span style='color: #78be20;'><b>Hazard ratio (95% CrI)</b></span>",
      "table1_3": "<span style='color: #78be20;'><b>Probability that TECFIDERA delays<br>time to first relapse vs competitor</b></span>",
      "table2_1": "<span style='color: #5b6770;'>Fingolimod</span>",
      "table2_2": "<span style='color: #5b6770;'>1.09 (0.93; 1.29)</span>",
      "table2_3": "<span style='color: #5b6770;'>13.7%</span>",
      "table3_1": "<span style='color: #5b6770;'>IFNβ</span>",
      "table3_2": "<span style='color: #5b6770;'>0.69 (0.56; 0.86)</span>",
      "table3_3": "<span style='color: #5b6770;'>99.8%</span>",
      "table4_1": "<span style='color: #5b6770;'>GA</span>",
      "table4_2": "<span style='color: #5b6770;'>0.71 (0.58; 0.88)</span>",
      "table4_3": "<span style='color: #5b6770;'>99.8%</span>",
      "table5_1": "<span style='color: #5b6770;'>Teriflunomide</span>",
      "table5_2": "<span style='color: #5b6770;'>0.64 (0.52; 0.77)</span>",
      "table5_3": "<span style='color: #5b6770;'>100%</span>",
      "bottomTable1": "<span style='color: #5b6770;'>0.1</span>",
      "bottomTable2": "<span style='color: #5b6770;'>10</span>",
      "bottomTable3": "<span style='color: #5b6770;'>10</span>",
      "arrowLeft": "<span style='color: #5b6770;'><b>Favours TECFIDERA</b></span>",
      "arrowRight": "<span style='color: #5b6770;'><b>Favours Comparator</b></span>",
      "ribbonText1": "<b style='color: #ffffff;'>Real-world<br>evidence</b>",
      "ribbonText2": "<b style='color: #ffffff;'>IFN beta</b>",
      "ribbonText3": "<b style='color: #ffffff;'>Glatiramer Acetate</b>",
      "ribbonText4": "<b style='color: #ffffff;'>Teriflunomide</b>",
      "ribbonText5": "<b style='color: #ffffff;'>Relapses vs<br>fingolimod</b>",
      "ribbonText6": "<b style='color: #ffffff;'>Disability progression<br>vs fingolimod</b>",
      "ribbonText7": "<b style='color: #ffffff;'>MRI & neuroperformance<br>vs fingolimod</b>",
      "ribbonText8": "<b style='color: #ffffff;'>Network<br>meta-analysis</b>",
      "footnote1": "<span style='color: #5b6770;'>Adapted from Cutter <i>et al.</i> 2019.</span>",
      "footnote2": "<span style='color: #5b6770;'>In the lack of head-to-head clinical trials, NMAs can provide generalised effect estimates beyond controlled trial settings. The NMA minimised confounding inherent to real-<br>world evidence by selecting robust adjusted studies. Real-world comparative effectiveness studies have all the caveats and limitations of observational studies. No head-to-<br>head, randomized, controlled trials comparing the effectiveness of TECFIDERA with these comparators in patients with RRMS have yet been conducted (exception GA – but<br>not powered for statistical significance).</span>",
      "footnote3": "<span style='color: #5b6770;'><span style='color: #80276c;'><b>CrI:</b></span> Credible Interval; <span style='color: #80276c;'><b>GA:</b></span> Glatiramer Acetate; <span style='color: #80276c;'><b>IFN:</b></span> Interferon; <span style='color: #80276c;'><b>NMA:</b></span> Network Meta-Analysis; <span style='color: #80276c;'><b>RRMS:</b></span> Relapsing Remitting Multiple Sclerosis; <span style='color: #80276c;'><b>TTFR:</b></span> Time to First Relapse.</span>"
    }
  }
</i18n>

<template>
  <wiz-slide>
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
        id="subtitle"
        class="pa subtitle"
        :text="$t('subtitle')"
        :component-name="'Title note'"
      ></wiz-text>
      <wiz-text
        id="titleTable"
        class="pa title-table"
        :text="$t('titleTable')"
        :component-name="'Table title'"
      ></wiz-text>
      <wiz-text
        id="tableName"
        class="pa table-name"
        :text="$t('tableName')"
        :component-name="'Table name'"
      ></wiz-text>
      <wiz-container
        id="firstLine"
        class="pa first-line"
        :component-name="'Table line'"
      >
        <wiz-text
          id="table1_1"
          class="pa table-1-1"
          :text="$t('table1_1')"
          :component-name="'Table note'"
        ></wiz-text>
        <wiz-text
          id="table1_2"
          class="pa table-1-2"
          :text="$t('table1_2')"
          :component-name="'Table note'"
        ></wiz-text>
        <wiz-text
          id="table1_3"
          class="pa table-1-3"
          :text="$t('table1_3')"
          :component-name="'Table note'"
        ></wiz-text>
      </wiz-container>
      <wiz-container
        id="secondLine"
        class="pa second-line"
        :component-name="'Table line'"
      >
        <wiz-container
          id="dottedLine"
          class="pa dotted-line"
        ></wiz-container>
        <wiz-image
          id="dot1"
          class="pa dot dot-1"
          :src="'./media/images/slider1.png'"
          :component-name="'Image one'"
        ></wiz-image>
        <wiz-image
          id="dot2"
          class="pa dot dot-2"
          :src="'./media/images/slider2.png'"
          :component-name="'Image one'"
        ></wiz-image>
        <wiz-image
          id="dot3"
          class="pa dot dot-3"
          :src="'./media/images/slider3.png'"
          :component-name="'Image one'"
        ></wiz-image>
        <wiz-image
          id="dot4"
          class="pa dot dot-4"
          :src="'./media/images/slider4.png'"
          :component-name="'Image one'"
        ></wiz-image>
        <wiz-text
          id="table2_1"
          class="pa table-2-1"
          :text="$t('table2_1')"
          :component-name="'Table note'"
        ></wiz-text>
        <wiz-text
          id="table2_2"
          class="pa table-2-2"
          :text="$t('table2_2')"
          :component-name="'Table note'"
        ></wiz-text>
        <wiz-text
          id="table2_3"
          class="pa table-2-3"
          :text="$t('table2_3')"
          :component-name="'Table note'"
        ></wiz-text>

        <wiz-text
          id="table3_1"
          class="pa table-3-1"
          :text="$t('table3_1')"
          :component-name="'Table note'"
        ></wiz-text>
        <wiz-text
          id="table3_2"
          class="pa table-3-2"
          :text="$t('table3_2')"
          :component-name="'Table note'"
        ></wiz-text>
        <wiz-text
          id="table3_3"
          class="pa table-3-3"
          :text="$t('table3_3')"
          :component-name="'Table note'"
        ></wiz-text>

        <wiz-text
          id="table4_1"
          class="pa table-4-1"
          :text="$t('table4_1')"
          :component-name="'Table note'"
        ></wiz-text>
        <wiz-text
          id="table4_2"
          class="pa table-4-2"
          :text="$t('table4_2')"
          :component-name="'Table note'"
        ></wiz-text>
        <wiz-text
          id="table4_3"
          class="pa table-4-3"
          :text="$t('table4_3')"
          :component-name="'Table note'"
        ></wiz-text>

        <wiz-text
          id="table5_1"
          class="pa table-5-1"
          :text="$t('table5_1')"
          :component-name="'Table note'"
        ></wiz-text>
        <wiz-text
          id="table5_2"
          class="pa table-5-2"
          :text="$t('table5_2')"
          :component-name="'Table note'"
        ></wiz-text>
        <wiz-text
          id="table5_3"
          class="pa table-5-3"
          :text="$t('table5_3')"
          :component-name="'Table note'"
        ></wiz-text>
      </wiz-container>

      <wiz-text
        id="bottomTable1"
        class="pa bottom-table-1"
        :text="$t('bottomTable1')"
        :component-name="'Bottom note'"
      ></wiz-text>
      <wiz-text
        id="bottomTable2"
        class="pa bottom-table-2"
        :text="$t('bottomTable2')"
        :component-name="'Bottom note'"
      ></wiz-text>
      <wiz-text
        id="bottomTable3"
        class="pa bottom-table-3"
        :text="$t('bottomTable3')"
        :component-name="'Bottom note'"
      ></wiz-text>

      <wiz-text
        id="arrowLeft"
        class="pa arrow-left"
        :text="$t('arrowLeft')"
        :component-name="'Bottom title'"
      ></wiz-text>
      <wiz-image
        id="arrow"
        class="pa arrow"
        :src="'./media/images/arrow.png'"
        :component-name="'Arrow'"
      ></wiz-image>
      <wiz-text
        id="arrowRight"
        class="pa arrow-right"
        :text="$t('arrowRight')"
        :component-name="'Bottom title'"
      ></wiz-text>
      <wiz-bg-ribbon
        id="ribbonMain"
        class="pa ribbon-main"
        v-bind="ribbonOptions"
        :component-name="'Dropdown Menu'"
        :index="7"
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
      closeBtnNavigation: {
        slide: 'tecfideraTecRWE',
        chapter: 'slidesPopup',
      },
      ribbonOptions: {
        openIconImage: './common/media/images/indicator-active.png',
        closeIconImage: './common/media/images/indicator.png',
        items: [
          {
            name: this.$t('ribbonText1'),
            slide: {
              slide: 'tecfideraTecRWE',
              chapter: 'slidesPopup',
            },
          },
          {
            name: this.$t('ribbonText2'),
            slide: {
              slide: 'tecfideraTecRWE2',
              chapter: 'slidesPopup',
            },
            animation: true,
          },
          {
            name: this.$t('ribbonText3'),
            slide: {
              slide: 'tecfideraTecRWE3',
              chapter: 'slidesPopup',
            },
            animation: true,
          },
          {
            name: this.$t('ribbonText4'),
            slide: {
              slide: 'tecfideraTecRWE4',
              chapter: 'slidesPopup',
            },
            animation: true,
          },
          {
            name: this.$t('ribbonText5'),
            slide: {
              slide: 'tecfideraTecRWE5',
              chapter: 'slidesPopup',
            },
            animation: true,
          },
          {
            name: this.$t('ribbonText6'),
            slide: {
              slide: 'tecfideraTecRWE6',
              chapter: 'slidesPopup',
            },
            animation: true,
          },
          {
            name: this.$t('ribbonText7'),
            slide: {
              slide: 'tecfideraTecRWE7',
              chapter: 'slidesPopup',
            },
            animation: true,
          },
          {
            name: this.$t('ribbonText8'),
            slide: {
              slide: 'tecfideraTecRWE8',
              chapter: 'slidesPopup',
            },
            animation: true,
          },
        ],
      },
    };
  },
};
</script>
<style scoped>
.headline {
  font-size: 35px;
  font-family: 'DinProCondensed', sans-serif;
  line-height: 1.1;
  transform: matrix(1, 0, 0, 1, 1, 0);
}

.subtitle {
  width: 650px;
  font-size: 20px;
  transform: matrix(1, 0, 0, 1, 2, -53);
}

.title-table {
  font-size: 18px;
  line-height: 1.2;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 197, 60);
}

.table-name {
  font-size: 15px;
  transform: matrix(1, 0, 0, 1, 15, 130);
}

.first-line {
  width: 832px;
  height: 40px;
  border-top: 2px solid #80276c;
  border-bottom: 2px solid #5c666f;
  transform: matrix(1, 0, 0, 1, 13, 159);
}

.table-1-1 {
  font-size: 13px;
  letter-spacing: -0.3px;
  transform: matrix(1, 0, 0, 1, 2, 12);
}

.table-1-2 {
  font-size: 13px;
  letter-spacing: -0.3px;
  transform: matrix(1, 0, 0, 1, 417, 12);
}

.table-1-3 {
  font-size: 13px;
  line-height: 1.2;
  letter-spacing: -0.3px;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 618, 6);
}

.second-line {
  width: 832px;
  height: 163px;
  border-bottom: 4px solid #80276c;
  transform: matrix(1, 0, 0, 1, 13, 200);
}

.dotted-line {
  height: 160px;
  border-left: 1px dotted rgb(184, 189, 192);
  transform: matrix(1, 0, 0, 1, 260, 3);
}

.dot {
  overflow: visible;
  width: 19px;
  height: 12px;
}

.dot-1 {
  transform: matrix(1, 0, 0, 1, 251, 14);
}

.dot-2 {
  transform: matrix(1, 0, 0, 1, 231, 54);
}

.dot-3 {
  transform: matrix(1, 0, 0, 1, 235, 95);
}

.dot-4 {
  transform: matrix(1, 0, 0, 1, 224, 135);
}

.table-2-1 {
  font-size: 15px;
  transform: matrix(1, 0, 0, 1, 2, 14);
}

.table-2-2 {
  font-size: 15px;
  transform: matrix(1, 0, 0, 1, 428, 14);
}

.table-2-3 {
  font-size: 15px;
  line-height: 1.2;
  transform: matrix(1, 0, 0, 1, 695, 14);
}

.table-3-1 {
  font-size: 15px;
  transform: matrix(1, 0, 0, 1, 2, 54);
}

.table-3-2 {
  font-size: 15px;
  transform: matrix(1, 0, 0, 1, 428, 54);
}

.table-3-3 {
  font-size: 15px;
  line-height: 1.2;
  transform: matrix(1, 0, 0, 1, 695, 54);
}

.table-4-1 {
  font-size: 15px;
  transform: matrix(1, 0, 0, 1, 2, 93);
}

.table-4-2 {
  font-size: 15px;
  transform: matrix(1, 0, 0, 1, 428, 93);
}

.table-4-3 {
  font-size: 15px;
  line-height: 1.2;
  transform: matrix(1, 0, 0, 1, 695, 93);
}

.table-5-1 {
  font-size: 15px;
  transform: matrix(1, 0, 0, 1, 2, 133);
}

.table-5-2 {
  font-size: 15px;
  transform: matrix(1, 0, 0, 1, 428, 133);
}

.table-5-3 {
  font-size: 15px;
  line-height: 1.2;
  transform: matrix(1, 0, 0, 1, 697, 133);
}

.bottom-table-1 {
  font-size: 15px;
  transform: matrix(1, 0, 0, 1, 134, 378);
}

.bottom-table-2 {
  font-size: 15px;
  transform: matrix(1, 0, 0, 1, 264, 378);
}

.bottom-table-3 {
  font-size: 15px;
  transform: matrix(1, 0, 0, 1, 388, 378);
}

.arrow-left {
  font-size: 13px;
  transform: matrix(1, 0, 0, 1, 128, 414);
}

.arrow-right {
  font-size: 13px;
  transform: matrix(1, 0, 0, 1, 299, 414);
}

.wiz-image.arrow {
  width: 44px;
  height: 16px;
  transform: matrix(1, 0, 0, 1, 251, 414);
}

.footnote-1 {
  transform: matrix(1, 0, 0, 1, -24, 65);
}

.footnote-2 {
  width: 772px;
  transform: matrix(1, 0, 0, 1, -24, 89);
}

.footnote-3 {
  transform: matrix(1, 0, 0, 1, -24, 149);
}

.wiz-slide .wiz-bg-ribbon ::v-deep .list-item:nth-child(6) .item-text,
.wiz-slide .wiz-bg-ribbon ::v-deep .list-item:nth-child(7) .item-text{
  padding-top: 2px;
  font-size: 13px;
}
</style>
