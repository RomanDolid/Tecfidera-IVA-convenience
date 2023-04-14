<i18n>
  {
    "eng": {
      "headline": "<span style='color: #80276c;'><b>Well-established safety and tolerability profile shown in phase III trials<sup>1-3</sup></b></span>",
      "hiddenReferences": "<sup refs='ref66 ref16 ref17 ref53'></sup>",
      "table1_1": "<span style='color: #5b6770;'><b>Most common (≥10%) AEs<sup>1</sup></b></span>",
      "table1_2": "<span style='color: #fff;'><b>TECFIDERA</b><br> (n=769)</span>",
      "table1_3": "<span style='color: #5b6770;'><b>PBO</b><br>(n=771)</span>",
      "table2_1": "<span style='color: #5b6770;'>Flushing</span>",
      "table3_1": "<span style='color: #5b6770;'>Diarrhoea</span>",
      "table4_1": "<span style='color: #5b6770;'>Nausea</span>",
      "table5_1": "<span style='color: #5b6770;'>Abdominal pain upper</span>",
      "table6_1": "<span style='color: #5b6770;'>Abdominal pain</span>",
      "table2_2": "<span style='color: #fff;'><b>34%</b></span>",
      "table3_2": "<span style='color: #fff;'><b>14%</b></span>",
      "table4_2": "<span style='color: #fff;'><b>12%</b></span>",
      "table5_2": "<span style='color: #fff;'><b>10%</b></span>",
      "table6_2": "<span style='color: #fff;'><b>9%</b></span>",
      "table2_3": "<span style='color: #5b6770;'>4%</span>",
      "table3_3": "<span style='color: #5b6770;'>10%</span>",
      "table4_3": "<span style='color: #5b6770;'>9%</span>",
      "table5_3": "<span style='color: #5b6770;'>6%</span>",
      "table6_3": "<span style='color: #5b6770;'>4%</span>",
      "rightText": "<span style='color: #5b6770;'>The most common (≥10%) AEs with TECFIDERA <br>at 2 years were generally reported as mild or <br>moderate<sup>1</sup></span>",
      "secondTable1_1": "<span style='color: #5b6770;'><b>DEFINE<sup>2</sup></b></span>",
      "secondTable1_2": "<span style='color: #5b6770;'><b>CONFIRM<sup>3</sup></b></span>",
      "secondTable2_1": "<span style='color: #fff;'><b>TECFIDERA</b><br> (n=410)</span>",
      "secondTable2_2": "<span style='color: #5b6770;'><b>PBO</b><br> (n=408)</span>",
      "secondTable2_3": "<span style='color: #fff;'><b>TECFIDERA</b><br> (n=359)</span>",
      "secondTable2_4": "<span style='color: #5b6770;'><b>PBO</b><br> (n=363)</span>",
      "secondTable3_0": "<span style='color: #5b6770;'>Overall incidences of AEs</span>",
      "secondTable3_1": "<span style='color: #fff;'><b>96%</b></span>",
      "secondTable3_2": "<span style='color: #5b6770;'>95%</span>",
      "secondTable3_3": "<span style='color: #fff;'><b>94%</b></span>",
      "secondTable3_4": "<span style='color: #5b6770;'>92%</span>",
      "secondTable4_0": "<span style='color: #5b6770;'>Discontinuations due to AEs</span>",
      "secondTable4_1": "<span style='color: #fff;'><b>16%</b></span>",
      "secondTable4_2": "<span style='color: #5b6770;'>13%</span>",
      "secondTable4_3": "<span style='color: #fff;'><b>12%</b></span>",
      "secondTable4_4": "<span style='color: #5b6770;'>10%</span>",
      "secondRightText": "<span style='color: #5b6770;'>The overall incidence <br> of AEs and treatment <br> discontinuation <br> due to AEs was <br> similar between <br> the TECFIDERA and <br> placebo groups<sup>2,3</sup></span>",
      "ribbonTxt1": "<b style='color: #ffffff;'>Dosing</b>",
      "ribbonTxt2": "<b style='color: #ffffff;'>Monitoring</b>",
      "ribbonTxt3": "<b style='color: #ffffff;'>Immunity</b>",
      "ribbonTxt4": "<b style='color: #ffffff;'>Vaccinations</b>",
      "ribbonTxt5": "<b style='color: #ffffff;'>AE Profile</b>",
      "ribbonTxt6": "<b style='color: #ffffff;'>GI Events</b>",
      "ribbonTxt7": "<b style='color: #ffffff;'>Infections & malignancies</b>",
      "ribbonTxt8": "<b style='color: #ffffff;'>Flushing</b>",
      "footnote": "<span style='color: #5b6770;'><span style='color: #80276c;'><b>AE:</b></span> Adverse Event; <span style='color: #80276c;'><b>DMT:</b></span> Disease Modifying Therapy; <span style='color: #80276c;'><b>GI:</b></span> Gastrointestinal; <span style='color: #80276c;'><b>PBO:</b></span> Placebo.</span>"
    }
  }
</i18n>

<template>
  <wiz-slide
    @slideswipe.native="lockSwipe"
  >
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
      <wiz-container
        id="table1"
        class="pa table-1"
        :component-name="'Table'"
      >
        <wiz-container
          id="cont1_1"
          class="pa cont-1-1"
          :component-name="'Table cont'"
        >
          <wiz-text
            id="table1_1"
            class="pa table-1-1"
            :text="$t('table1_1')"
            :component-name="'Table wrapper'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont1_2"
          class="pa cont-1-2"
          :component-name="'Table cont'"
        >
          <wiz-text
            id="table1_2"
            class="pa table-1-2"
            :text="$t('table1_2')"
            :component-name="'Table wrapper'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont1_3"
          class="pa cont-1-3"
          :component-name="'Table cont'"
        >
          <wiz-text
            id="table1_3"
            class="pa table-1-3"
            :text="$t('table1_3')"
            :component-name="'Table wrapper'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont2_1"
          class="pa cont-2-1"
          :component-name="'Table cont'"
        >
          <wiz-text
            id="table2_1"
            class="pa table-first-line table-2-1"
            :text="$t('table2_1')"
            :component-name="'Table wrapper'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont2_2"
          class="pa cont-2-2"
          :component-name="'Table cont'"
        >
          <wiz-text
            id="table2_2"
            class="pa table-second-line table-2-2"
            :text="$t('table2_2')"
            :component-name="'Table wrapper'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont2_3"
          class="pa cont-2-3"
          :component-name="'Table cont'"
        >
          <wiz-text
            id="table2_3"
            class="pa table-third-line table-2-3"
            :text="$t('table2_3')"
            :component-name="'Table wrapper'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont3_1"
          class="pa cont-3-1"
          :component-name="'Table cont'"
        >
          <wiz-text
            id="table3_1"
            class="pa table-first-line table-3-1"
            :text="$t('table3_1')"
            :component-name="'Table wrapper'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont3_2"
          class="pa cont-3-2"
          :component-name="'Table cont'"
        >
          <wiz-text
            id="table3_2"
            class="pa table-second-line table-3-2"
            :text="$t('table3_2')"
            :component-name="'Table wrapper'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont3_3"
          class="pa cont-3-3"
          :component-name="'Table cont'"
        >
          <wiz-text
            id="table3_3"
            class="pa table-third-line table-3-3"
            :text="$t('table3_3')"
            :component-name="'Table wrapper'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont4_1"
          class="pa cont-4-1"
          :component-name="'Table cont'"
        >
          <wiz-text
            id="table4_1"
            class="pa table-first-line table-4-1"
            :text="$t('table4_1')"
            :component-name="'Table wrapper'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont4_2"
          class="pa cont-4-2"
          :component-name="'Table cont'"
        >
          <wiz-text
            id="table4_2"
            class="pa table-second-line table-4-2"
            :text="$t('table4_2')"
            :component-name="'Table wrapper'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont4_3"
          class="pa cont-4-3"
          :component-name="'Table cont'"
        >
          <wiz-text
            id="table4_3"
            class="pa table-third-line table-4-3"
            :text="$t('table4_3')"
            :component-name="'Table wrapper'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont5_1"
          class="pa cont-5-1"
          :component-name="'Table cont'"
        >
          <wiz-text
            id="table5_1"
            class="pa table-first-line table-5-1"
            :text="$t('table5_1')"
            :component-name="'Table wrapper'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont5_2"
          class="pa cont-5-2"
          :component-name="'Table cont'"
        >
          <wiz-text
            id="table5_2"
            class="pa table-second-line table-5-2"
            :text="$t('table5_2')"
            :component-name="'Table wrapper'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont5_3"
          class="pa cont-5-3"
          :component-name="'Table cont'"
        >
          <wiz-text
            id="table5_3"
            class="pa table-third-line table-5-3"
            :text="$t('table5_3')"
            :component-name="'Table wrapper'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont6_1"
          class="pa cont-6-1"
          :component-name="'Table cont'"
        >
          <wiz-text
            id="table6_1"
            class="pa table-first-line table-6-1"
            :text="$t('table6_1')"
            :component-name="'Table wrapper'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont6_2"
          class="pa cont-6-2"
          :component-name="'Table cont'"
        >
          <wiz-text
            id="table6_2"
            class="pa table-second-line table-6-2"
            :text="$t('table6_2')"
            :component-name="'Table wrapper'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont6_3"
          class="pa cont-6-3"
          :component-name="'Table cont'"
        >
          <wiz-text
            id="table6_3"
            class="pa table-third-line table-6-3"
            :text="$t('table6_3')"
            :component-name="'Table wrapper'"
          ></wiz-text>
        </wiz-container>
      </wiz-container>
      <wiz-text
        id="rightText"
        class="pa right-text"
        :text="$t('rightText')"
        :component-name="'Right note'"
      ></wiz-text>

      <wiz-container
        id="table2"
        class="pa table-2"
        :component-name="'Table'"
      >
        <wiz-container
          id="second_cont1_1"
          class="pa second-cont-1-1"
          :component-name="'Table cont'"
        >
          <wiz-text
            id="secondTable1_1"
            class="pa second-table-1-1"
            :text="$t('secondTable1_1')"
            component-name="'Table wrapper'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="second_cont1_2"
          class="pa second-cont-1-2"
          :component-name="'Table cont'"
        >
          <wiz-text
            id="secondTable1_2"
            class="pa second-table-1-2"
            :text="$t('secondTable1_2')"
            component-name="'Table wrapper'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="second_cont2_0"
          class="pa second-cont-2-0"
          :component-name="'Table cont'"
        ></wiz-container>
        <wiz-container
          id="second_cont_2_1"
          class="pa second-cont-2-1"
          :component-name="'Table cont'"
        >
          <wiz-text
            id="secondTable2_1"
            class="pa second-table-2-1"
            :text="$t('secondTable2_1')"
            component-name="'Table wrapper'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="second_cont_2_2"
          class="pa second-cont-2-2"
          :component-name="'Table cont'"
        >
          <wiz-text
            id="secondTable2_2"
            class="pa second-table-2-2"
            :text="$t('secondTable2_2')"
            component-name="'Table wrapper'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="second_cont_2_3"
          class="pa second-cont-2-3"
          :component-name="'Table cont'"
        >
          <wiz-text
            id="secondTable2_3"
            class="pa second-table-2-3"
            :text="$t('secondTable2_3')"
            component-name="'Table wrapper'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="second_cont_2_4"
          class="pa second-cont-2-4"
          :component-name="'Table cont'"
        >
          <wiz-text
            id="secondTable2_4"
            class="pa second-table-2-4"
            :text="$t('secondTable2_4')"
            component-name="'Table wrapper'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="second_cont3_0"
          class="pa second-cont-3-0"
          :component-name="'Table cont'"
        >
          <wiz-text
            id="secondTable3_0"
            class="pa second-table-3-0"
            :text="$t('secondTable3_0')"
            component-name="'Table wrapper'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="second_cont_3_1"
          class="pa second-cont-3-1"
          :component-name="'Table cont'"
        >
          <wiz-text
            id="secondTable3_1"
            class="pa second-table-3-1"
            :text="$t('secondTable3_1')"
            component-name="'Table wrapper'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="second_cont_3_2"
          class="pa second-cont-3-2"
          :component-name="'Table cont'"
        >
          <wiz-text
            id="secondTable3_2"
            class="pa second-table-3-2"
            :text="$t('secondTable3_2')"
            component-name="'Table wrapper'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="second_cont_3_3"
          class="pa second-cont-3-3"
          :component-name="'Table cont'"
        >
          <wiz-text
            id="secondTable3_3"
            class="pa second-table-3-3"
            :text="$t('secondTable3_3')"
            component-name="'Table wrapper'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="second_cont_3_4"
          class="pa second-cont-3-4"
          :component-name="'Table cont'"
        >
          <wiz-text
            id="secondTable3_4"
            class="pa second-table-3-4"
            :text="$t('secondTable3_4')"
            component-name="'Table wrapper'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="second_cont4_0"
          class="pa second-cont-4-0"
          :component-name="'Table cont'"
        >
          <wiz-text
            id="secondTable4_0"
            class="pa second-table-4-0"
            :text="$t('secondTable4_0')"
            component-name="'Table wrapper'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="second_cont_4_1"
          class="pa second-cont-4-1"
          :component-name="'Table cont'"
        >
          <wiz-text
            id="secondTable4_1"
            class="pa second-table-4-1"
            :text="$t('secondTable4_1')"
            component-name="'Table wrapper'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="second_cont_4_2"
          class="pa second-cont-4-2"
          :component-name="'Table cont'"
        >
          <wiz-text
            id="secondTable4_2"
            class="pa second-table-4-2"
            :text="$t('secondTable4_2')"
            component-name="'Table wrapper'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="second_cont_4_3"
          class="pa second-cont-4-3"
          :component-name="'Table cont'"
        >
          <wiz-text
            id="secondTable4_3"
            class="pa second-table-4-3"
            :text="$t('secondTable4_3')"
            component-name="'Table wrapper'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="second_cont_4_4"
          class="pa second-cont-4-4"
          :component-name="'Table cont'"
        >
          <wiz-text
            id="secondTable4_4"
            class="pa second-table-4-4"
            :text="$t('secondTable4_4')"
            component-name="'Table wrapper'"
          ></wiz-text>
        </wiz-container>
      </wiz-container>
      <wiz-text
        id="secondRightText"
        class="pa second-right-text"
        :text="$t('secondRightText')"
        :component-name="'Right note'"
      ></wiz-text>

      <wiz-container
        id="bottomChapter1"
        class="pa bottom-chapter bottom-chapter-1"
      ></wiz-container>
      <wiz-container
        id="bottomChapter2"
        class="pa bottom-chapter bottom-chapter-2"
      ></wiz-container>
      <wiz-bg-ribbon
        id="ribbonMain"
        class="pa ribbon-main"
        v-bind="ribbonOptions"
        :component-name="'Dropdown Menu'"
        :index="4"
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
      closeBtnNavigation: {
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
    };
  },
  methods: {
    lockSwipe(event) {
      const swipeDirection = event.gesture.direction;
      if (swipeDirection === 4) {
        event.stopImmediatePropagation();
      }
    },
  },
};
</script>
<style scoped>
.headline {
  width: 865px;
  font-size: 35px;
  font-family: 'DinProCondensed', sans-serif;
  line-height: 1.1;
  transform: matrix(1, 0, 0, 1, 1, 38);
}

.table-1 {
  width: 448px;
  height: 236px;
  transform: matrix(1, 0, 0, 1, 0, 29);
}

.cont-1-1 {
  width: 226px;
  height: 58px;
  border-bottom: 1px solid rgb(239, 240, 241);
}

.cont-1-2 {
  width: 110px;
  height: 58px;
  background: #80276c;
  transform: matrix(1, 0, 0, 1, 226, 0);
}

.cont-1-3 {
  width: 110px;
  height: 58px;
  border-bottom: 1px solid rgb(239, 240, 241);
  transform: matrix(1, 0, 0, 1, 336, 0);
}

.table-1-1 {
  font-size: 17px;
  transform: matrix(1, 0, 0, 1, 6, 18);
}

.table-1-2 {
  font-size: 17px;
  line-height: 1.2;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 10, 9);
}

.table-1-3 {
  font-size: 17px;
  line-height: 1.2;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 28, 9);
}

.cont-2-1 {
  width: 226px;
  height: 34px;
  transform: matrix(1, 0, 0, 1, 0, 59);
}

.cont-2-2 {
  width: 110px;
  height: 34px;
  background: #80276c;
  transform: matrix(1, 0, 0, 1, 226, 59);
}

.cont-2-3 {
  width: 110px;
  height: 34px;
  transform: matrix(1, 0, 0, 1, 336, 59);
}

.table-first-line {
  font-size: 17px;
  transform: matrix(1, 0, 0, 1, 6, 7);
}

.table-second-line {
  font-size: 17px;
  transform: matrix(1, 0, 0, 1, 38, 6);
}

.table-third-line {
  font-size: 17px;
  transform: matrix(1, 0, 0, 1, 44, 7);
}

.cont-3-1 {
  width: 226px;
  height: 35px;
  background: #eff0f2;
  transform: matrix(1, 0, 0, 1, 0, 94);
}

.cont-3-2 {
  width: 110px;
  height: 35px;
  background: #80276c;
  transform: matrix(1, 0, 0, 1, 226, 94);
}

.cont-3-3 {
  width: 110px;
  height: 35px;
  background: #eff0f2;
  transform: matrix(1, 0, 0, 1, 336, 94);
}

.table-3-3 {
  transform: matrix(1, 0, 0, 1, 40, 7);
}

.cont-4-1 {
  width: 226px;
  height: 35px;
  transform: matrix(1, 0, 0, 1, 0, 130);
}

.cont-4-2 {
  width: 110px;
  height: 35px;
  background: #80276c;
  transform: matrix(1, 0, 0, 1, 226, 130);
}

.cont-4-3 {
  width: 110px;
  height: 35px;
  transform: matrix(1, 0, 0, 1, 336, 130);
}

.cont-5-1 {
  width: 226px;
  height: 34px;
  background: #eff0f2;
  transform: matrix(1, 0, 0, 1, 0, 166);
}

.cont-5-2 {
  width: 110px;
  height: 34px;
  background: #80276c;
  transform: matrix(1, 0, 0, 1, 226, 166);
}

.cont-5-3 {
  width: 110px;
  height: 34px;
  background: #eff0f2;
  transform: matrix(1, 0, 0, 1, 336, 166);
}

.cont-6-1 {
  width: 226px;
  height: 35px;
  transform: matrix(1, 0, 0, 1, 0, 201);
}

.cont-6-2 {
  width: 110px;
  height: 35px;
  background: #80276c;
  transform: matrix(1, 0, 0, 1, 226, 201);
}

.cont-6-3 {
  width: 110px;
  height: 35px;
  transform: matrix(1, 0, 0, 1, 336, 201);
}

.table-6-2 {
  transform: matrix(1, 0, 0, 1, 43, 7);
}

.right-text {
  font-size: 18px;
  line-height: 1.15;
  transform: matrix(1, 0, 0, 1, 463, 117);
}

.table-2 {
  width: 667px;
  height: 174px;
  transform: matrix(1, 0, 0, 1, 1, 295);
}

.second-cont-1-1 {
  width: 250px;
  height: 46px;
  background: #eff0f2;
  transform: matrix(1, 0, 0, 1, 225, 0);
}

.second-cont-1-2 {
  width: 191px;
  height: 46px;
  background: #eff0f2;
  transform: matrix(1, 0, 0, 1, 476, 0);
}

.second-cont-2-0 {
  width: 225px;
  height: 57px;
  border-bottom: 1px solid rgb(239, 240, 241);
  transform: matrix(1, 0, 0, 1, 0, 46);
}

.second-cont-2-1 {
  width: 126px;
  height: 57px;
  background: #80276c;
  transform: matrix(1, 0, 0, 1, 225, 46);
}

.second-cont-2-2 {
  width: 124px;
  height: 57px;
  border-bottom: 1px solid rgb(239, 240, 241);
  transform: matrix(1, 0, 0, 1, 352, 46);
}

.second-cont-2-3 {
  width: 110px;
  height: 57px;
  background: #80276c;
  transform: matrix(1, 0, 0, 1, 476, 46);
}

.second-cont-2-4 {
  width: 81px;
  height: 57px;
  border-bottom: 1px solid rgb(239, 240, 241);
  transform: matrix(1, 0, 0, 1, 586, 46);
}

.second-cont-3-0 {
  width: 225px;
  height: 35px;
  transform: matrix(1, 0, 0, 1, 0, 104);
}

.second-cont-3-1 {
  width: 126px;
  height: 35px;
  background: #80276c;
  transform: matrix(1, 0, 0, 1, 225, 104);
}

.second-cont-3-2 {
  width: 124px;
  height: 35px;
  transform: matrix(1, 0, 0, 1, 352, 104);
}

.second-cont-3-3 {
  width: 110px;
  height: 35px;
  background: #80276c;
  transform: matrix(1, 0, 0, 1, 476, 104);
}

.second-cont-3-4 {
  width: 81px;
  height: 35px;
  transform: matrix(1, 0, 0, 1, 586, 104);
}

.second-cont-4-0 {
  width: 225px;
  height: 34px;
  background: #eff0f2;
  transform: matrix(1, 0, 0, 1, 0, 140);
}

.second-cont-4-1 {
  width: 126px;
  height: 34px;
  background: #80276c;
  transform: matrix(1, 0, 0, 1, 225, 140);
}

.second-cont-4-2 {
  width: 124px;
  height: 34px;
  background: #eff0f2;
  transform: matrix(1, 0, 0, 1, 352, 140);
}

.second-cont-4-3 {
  width: 110px;
  height: 34px;
  background: #80276c;
  transform: matrix(1, 0, 0, 1, 476, 140);
}

.second-cont-4-4 {
  width: 81px;
  height: 34px;
  background: #eff0f2;
  transform: matrix(1, 0, 0, 1, 586, 140);
}

.second-table-1-1 {
  font-size: 17px;
  transform: matrix(1, 0, 0, 1, 93, 12);
}

.second-table-1-2 {
  font-size: 17px;
  transform: matrix(1, 0, 0, 1, 56, 12);
}

.second-table-2-1 {
  font-size: 17px;
  line-height: 1.2;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 19, 9);
}

.second-table-2-2 {
  font-size: 17px;
  line-height: 1.2;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 34, 9);
}

.second-table-2-3 {
  font-size: 17px;
  line-height: 1.2;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 11, 9);
}

.second-table-2-4 {
  font-size: 17px;
  line-height: 1.2;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 13, 9);
}

.second-table-3-0 {
  font-size: 17px;
  line-height: 1.2;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 5, 8);
}

.second-table-3-1 {
  font-size: 17px;
  line-height: 1.2;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 46, 7);
}

.second-table-3-2 {
  font-size: 17px;
  line-height: 1.2;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 45, 8);
}

.second-table-3-3 {
  font-size: 17px;
  line-height: 1.2;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 38, 7);
}

.second-table-3-4 {
  font-size: 17px;
  line-height: 1.2;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 25, 8);
}

.second-table-4-0 {
  font-size: 17px;
  line-height: 1.2;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 5, 7);
}

.second-table-4-1 {
  font-size: 17px;
  line-height: 1.2;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 46, 7);
}

.second-table-4-2 {
  font-size: 17px;
  line-height: 1.2;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 45, 7);
}

.second-table-4-3 {
  font-size: 17px;
  line-height: 1.2;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 38, 7);
}

.second-table-4-4 {
  font-size: 17px;
  line-height: 1.2;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 25, 7);
}

.second-right-text {
  font-size: 18px;
  line-height: 1.15;
  transform: matrix(1, 0, 0, 1, 683, 312);
}

.bottom-chapter {
  width: 20px;
  height: 10px;
}

.bottom-chapter-1 {
  background: #00a3e0;
  transform: matrix(1, 0, 0, 1, 403, 548);
}

.bottom-chapter-2 {
  width: 18px;
  height: 8px;
  border: 1px solid #7c878e;
  transform: matrix(1, 0, 0, 1, 435, 548);
}

.ribbon-main {
  z-index: 2;
}

.footnote {
  transform: matrix(1, 0, 0, 1, -24, 149);
}
</style>
