<i18n>
  {
    "eng": {
      "headline": "<span style='color: #80276c;'><b>Incidence of serious infections, potential hepatic disorders and<br> malignancies remained low up to 11 years of treatment with TECFIDERA<sup>4</sup></b></span>",
      "hiddenReferences": "<sup refs='ref66 ref16 ref17 ref53'></sup>",
      "tableTitle": "<span style='color: #5b6770;'><b>AEs of interest in ENDORSE</b></span>",
      "table1_1": "<span style='color: #5b6770;'><b>AE, <i>n</i> %</b></span>",
      "table1_2": "<span style='color: #fff;'><b>Overall safety population<br>(n=1736)</b></span>",
      "table1_3": "<span style='color: #5b6770;'><b>Newly diagnosed population<br>(n=470)</b></span>",
      "table2_1": "<span style='color: #5b6770;'><span class='medium'>GI disorders</span></span>",
      "table2_2": "<span style='color: #fff;'><b>735 (42)</b></span>",
      "table2_3": "<span style='color: #5b6770;'>206 (44)</span>",
      "table3_1": "<span style='color: #5b6770;'><span class='medium'>Flushing</span></span>",
      "table3_2": "<span style='color: #fff;'><b>332 (19)</b></span>",
      "table3_3": "<span style='color: #5b6770;'>107 (23)</span>",
      "table4_1": "<span style='color: #5b6770;'><span class='medium'>Anaphylactic reaction</span></span>",
      "table4_2": "<span style='color: #fff;'><b>1 (<1)</b></span>",
      "table4_3": "<span style='color: #5b6770;'>1(<1)</span>",
      "table5_1": "<span style='color: #5b6770;'><span class='medium'>Potential hepatic disorders</span></span>",
      "table5_2": "<span style='color: #fff;'><b>189 (11)</b></span>",
      "table5_3": "<span style='color: #5b6770;'>46 (10)</span>",
      "table6_1": "<span style='color: #5b6770;'>ALT increasead</span>",
      "table6_2": "<span style='color: #fff;'><b>163 (9)</b></span>",
      "table6_3": "<span style='color: #5b6770;'>24 (5)</span>",
      "table7_1": "<span style='color: #5b6770;'>AST increased</span>",
      "table7_2": "<span style='color: #fff;'><b>108 (6)</b></span>",
      "table7_3": "<span style='color: #5b6770;'>16 (3)</span>",
      "table8_1": "<span style='color: #5b6770;'><span class='medium'>Renal and urinary disorders</span></span>",
      "table8_2": "<span style='color: #fff;'><b>431 (25)</b></span>",
      "table8_3": "<span style='color: #5b6770;'>120 (26)</span>",
      "table9_1": "<span style='color: #5b6770;'>Proteinuria</span>",
      "table9_2": "<span style='color: #fff;'><b>151 (9)</b></span>",
      "table9_3": "<span style='color: #5b6770;'>44 (9)</span>",
      "table10_1": "<span style='color: #5b6770;'>Microalbuminuria</span>",
      "table10_2": "<span style='color: #fff;'><b>116 (7)</b></span>",
      "table10_3": "<span style='color: #5b6770;'>29 (6)</span>",
      "table11_1": "<span style='color: #5b6770;'>Hematuria</span>",
      "table11_2": "<span style='color: #fff;'><b>110 (6)</b></span>",
      "table11_3": "<span style='color: #5b6770;'>29 (6)</span>",
      "table12_1": "<span style='color: #5b6770;'><span class='medium'>Serious infections</span></span>",
      "table12_2": "<span style='color: #fff;'><b>79 (5)</b></span>",
      "table12_3": "<span style='color: #5b6770;'>24 (5)</span>",
      "table13_1": "<span style='color: #5b6770;'><span class='medium'>Potential opportunistic<br>infection</span></span>",
      "table13_2": "<span style='color: #fff;'><b>7 (<1)</b></span>",
      "table13_3": "<span style='color: #5b6770;'>0</span>",
      "table14_1": "<span style='color: #5b6770;'><span class='medium'>Opportunistic infections</span></span>",
      "table14_2": "<span style='color: #fff;'><b>1 (<1)</b></span>",
      "table14_3": "<span style='color: #5b6770;'>0</span>",
      "table15_1": "<span style='color: #5b6770;'><span class='medium'>Malignancy</span></span>",
      "table15_2": "<span style='color: #fff;'><b>45 (3)</b></span>",
      "table15_3": "<span style='color: #5b6770;'>16 (3)</span>",
      "ribbonTxt1": "<b style='color: #ffffff;'>Dosing</b>",
      "ribbonTxt2": "<b style='color: #ffffff;'>Monitoring</b>",
      "ribbonTxt3": "<b style='color: #ffffff;'>Immunity</b>",
      "ribbonTxt4": "<b style='color: #ffffff;'>Vaccinations</b>",
      "ribbonTxt5": "<b style='color: #ffffff;'>AE Profile</b>",
      "ribbonTxt6": "<b style='color: #ffffff;'>GI Events</b>",
      "ribbonTxt7": "<b style='color: #ffffff;'>Infections & malignancies</b>",
      "ribbonTxt8": "<b style='color: #ffffff;'>Flushing</b>",
      "footnote": "<span style='color: #5b6770;'><span style='color: #80276c;'><b>AE:</b></span> Adverse Event; <span style='color: #80276c;'><b>ALT:</b></span> Alanine Aminotransferase; <span style='color: #80276c;'><b>AST:</b></span> Aspartate Aminotransferase; <span style='color: #80276c;'><b>GI:</b></span> Gastrointestinal.</span>"
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
      <wiz-text
        id="tableTitle"
        class="pa tableTitle"
        :text="$t('tableTitle')"
        :component-name="'Table title'"
      ></wiz-text>
      <wiz-container
        id="table1"
        class="pa table-1"
        :component-name="'Table cont'"
      >
        <wiz-container
          id="cont1_1"
          class="pa cont-1-1"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table1_1"
            class="pa table-1-1"
            :text="$t('table1_1')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont1_2"
          class="pa cont-1-2"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table1_2"
            class="pa table-1-2"
            :text="$t('table1_2')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont1_3"
          class="pa cont-1-3"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table1_3"
            class="pa table-1-3"
            :text="$t('table1_3')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>

        <wiz-container
          id="cont2_1"
          class="pa cont-2-1"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table2_1"
            class="pa table-medium-text table-2-1"
            :text="$t('table2_1')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont2_2"
          class="pa cont-2-2"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table2_2"
            class="pa table-2-2"
            :text="$t('table2_2')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont2_3"
          class="pa cont-2-3"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table2_3"
            class="pa table-2-3"
            :text="$t('table2_3')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>

        <wiz-container
          id="cont3_1"
          class="pa cont-3-1"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table3_1"
            class="pa table-medium-text table-3-1"
            :text="$t('table3_1')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont3_2"
          class="pa cont-3-2"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table3_2"
            class="pa table-3-2"
            :text="$t('table3_2')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont3_3"
          class="pa cont-3-3"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table3_3"
            class="pa table-3-3"
            :text="$t('table3_3')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>

        <wiz-container
          id="cont4_1"
          class="pa cont-4-1"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table4_1"
            class="pa table-medium-text table-4-1"
            :text="$t('table4_1')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont4_2"
          class="pa cont-4-2"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table4_2"
            class="pa table-4-2"
            :text="$t('table4_2')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont4_3"
          class="pa cont-4-3"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table4_3"
            class="pa table-4-3"
            :text="$t('table4_3')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>

        <wiz-container
          id="cont5_1"
          class="pa cont-5-1"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table5_1"
            class="pa table-medium-text table-5-1"
            :text="$t('table5_1')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont5_2"
          class="pa cont-5-2"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table5_2"
            class="pa table-5-2"
            :text="$t('table5_2')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont5_3"
          class="pa cont-5-3"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table5_3"
            class="pa table-5-3"
            :text="$t('table5_3')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>

        <wiz-container
          id="cont6_1"
          class="pa cont-6-1"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table6_1"
            class="pa table-6-1"
            :text="$t('table6_1')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont6_2"
          class="pa cont-6-2"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table6_2"
            class="pa table-6-2"
            :text="$t('table6_2')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont6_3"
          class="pa cont-6-3"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table6_3"
            class="pa table-6-3"
            :text="$t('table6_3')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>

        <wiz-container
          id="cont7_1"
          class="pa cont-7-1"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table7_1"
            class="pa table-7-1"
            :text="$t('table7_1')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont7_2"
          class="pa cont-7-2"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table7_2"
            class="pa table-7-2"
            :text="$t('table7_2')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont7_3"
          class="pa cont-7-3"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table7_3"
            class="pa table-7-3"
            :text="$t('table7_3')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>

        <wiz-container
          id="cont8_1"
          class="pa cont-8-1"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table8_1"
            class="pa table-medium-text table-8-1"
            :text="$t('table8_1')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont8_2"
          class="pa cont-8-2"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table8_2"
            class="pa table-8-2"
            :text="$t('table8_2')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont8_3"
          class="pa cont-8-3"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table8_3"
            class="pa table-8-3"
            :text="$t('table8_3')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>

        <wiz-container
          id="cont9_1"
          class="pa cont-9-1"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table9_1"
            class="pa table-9-1"
            :text="$t('table9_1')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont9_2"
          class="pa cont-9-2"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table9_2"
            class="pa table-9-2"
            :text="$t('table9_2')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont9_3"
          class="pa cont-9-3"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table9_3"
            class="pa table-9-3"
            :text="$t('table9_3')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>

        <wiz-container
          id="cont10_1"
          class="pa cont-10-1"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table10_1"
            class="pa table-10-1"
            :text="$t('table10_1')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont10_2"
          class="pa cont-10-2"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table10_2"
            class="pa table-10-2"
            :text="$t('table10_2')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont10_3"
          class="pa cont-10-3"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table10_3"
            class="pa table-10-3"
            :text="$t('table10_3')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>

        <wiz-container
          id="cont11_1"
          class="pa cont-11-1"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table11_1"
            class="pa table-11-1"
            :text="$t('table11_1')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont11_2"
          class="pa cont-11-2"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table11_2"
            class="pa table-11-2"
            :text="$t('table11_2')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont11_3"
          class="pa cont-11-3"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table11_3"
            class="pa table-11-3"
            :text="$t('table11_3')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>

        <wiz-container
          id="cont12_1"
          class="pa cont-12-1"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table12_1"
            class="pa table-medium-text table-12-1"
            :text="$t('table12_1')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont12_2"
          class="pa cont-12-2"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table12_2"
            class="pa table-12-2"
            :text="$t('table12_2')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont12_3"
          class="pa cont-12-3"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table12_3"
            class="pa table-12-3"
            :text="$t('table12_3')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>

        <wiz-container
          id="cont13_1"
          class="pa cont-13-1"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table13_1"
            class="pa table-medium-text table-13-1"
            :text="$t('table13_1')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont13_2"
          class="pa cont-13-2"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table13_2"
            class="pa table-13-2"
            :text="$t('table13_2')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont13_3"
          class="pa cont-13-3"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table13_3"
            class="pa table-13-3"
            :text="$t('table13_3')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>

        <wiz-container
          id="cont14_1"
          class="pa cont-14-1"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table14_1"
            class="pa table-medium-text table-14-1"
            :text="$t('table14_1')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont14_2"
          class="pa cont-14-2"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table14_2"
            class="pa table-14-2"
            :text="$t('table14_2')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont14_3"
          class="pa cont-14-3"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table14_3"
            class="pa table-14-3"
            :text="$t('table14_3')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>

        <wiz-container
          id="cont15_1"
          class="pa cont-15-1"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table15_1"
            class="pa table-medium-text table-15-1"
            :text="$t('table15_1')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont15_2"
          class="pa cont-15-2"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table15_2"
            class="pa table-15-2"
            :text="$t('table15_2')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="cont15_3"
          class="pa cont-15-3"
          :component-name="'Container wrapper'"
        >
          <wiz-text
            id="table15_3"
            class="pa table-15-3"
            :text="$t('table15_3')"
            :component-name="'Table note'"
          ></wiz-text>
        </wiz-container>
      </wiz-container>
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
              slide: 'tecfideraAEProfile2',
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
      if (swipeDirection === 2) {
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
}

.wiz-text .medium {
  font-family: 'DinProMedium', sans-serif;
}

.tableTitle {
  font-size: 18px;
  transform: matrix(1, 0, 0, 1, 0, -21);
}

.table-1 {
  width: 809px;
  height: 507px;
  transform: matrix(1, 0, 0, 1, 0, 15);
}

.cont-1-1 {
  width: 224px;
  height: 46px;
  border-bottom: 1px solid rgb(239, 240, 241);
}

.cont-1-2 {
  width: 293px;
  height: 46px;
  background: #80276c;
  transform: matrix(1, 0, 0, 1, 224, 0);
}

.cont-1-3 {
  width: 293px;
  height: 46px;
  border-bottom: 1px solid rgb(239, 240, 241);
  transform: matrix(1, 0, 0, 1, 517, 0);
}

.cont-2-1 {
  width: 224px;
  height: 31px;
  transform: matrix(1, 0, 0, 1, 0, 47);
}

.cont-2-2 {
  width: 293px;
  height: 31px;
  background: #80276c;
  transform: matrix(1, 0, 0, 1, 224, 47);
}

.cont-2-3 {
  width: 293px;
  height: 31px;
  transform: matrix(1, 0, 0, 1, 517, 47);
}

.cont-3-1 {
  width: 224px;
  height: 30px;
  background: #eff0f2;
  transform: matrix(1, 0, 0, 1, 0, 79);
}

.cont-3-2 {
  width: 293px;
  height: 30px;
  background: #80276c;
  transform: matrix(1, 0, 0, 1, 224, 79);
}

.cont-3-3 {
  width: 293px;
  height: 30px;
  background: #eff0f2;
  transform: matrix(1, 0, 0, 1, 517, 79);
}

.cont-4-1 {
  width: 224px;
  height: 31px;
  transform: matrix(1, 0, 0, 1, 0, 110);
}

.cont-4-2 {
  width: 293px;
  height: 31px;
  background: #80276c;
  transform: matrix(1, 0, 0, 1, 224, 110);
}

.cont-4-3 {
  width: 293px;
  height: 31px;
  transform: matrix(1, 0, 0, 1, 517, 110);
}

.cont-5-1 {
  width: 224px;
  height: 30px;
  background: #eff0f2;
  transform: matrix(1, 0, 0, 1, 0, 142);
}

.cont-5-2 {
  width: 293px;
  height: 30px;
  background: #80276c;
  transform: matrix(1, 0, 0, 1, 224, 142);
}

.cont-5-3 {
  width: 293px;
  height: 30px;
  background: #eff0f2;
  transform: matrix(1, 0, 0, 1, 517, 142);
}

.cont-6-1 {
  width: 224px;
  height: 31px;
  transform: matrix(1, 0, 0, 1, 0, 173);
}

.cont-6-2 {
  width: 293px;
  height: 31px;
  background: #80276c;
  transform: matrix(1, 0, 0, 1, 224, 173);
}

.cont-6-3 {
  width: 293px;
  height: 31px;
  transform: matrix(1, 0, 0, 1, 517, 173);
}

.cont-7-1 {
  width: 224px;
  height: 31px;
  background: #eff0f2;
  transform: matrix(1, 0, 0, 1, 0, 205);
}

.cont-7-2 {
  width: 293px;
  height: 31px;
  background: #80276c;
  transform: matrix(1, 0, 0, 1, 224, 205);
}

.cont-7-3 {
  width: 293px;
  height: 31px;
  background: #eff0f2;
  transform: matrix(1, 0, 0, 1, 517, 205);
}

.cont-8-1 {
  width: 224px;
  height: 30px;
  transform: matrix(1, 0, 0, 1, 0, 237);
}

.cont-8-2 {
  width: 293px;
  height: 30px;
  background: #80276c;
  transform: matrix(1, 0, 0, 1, 224, 237);
}

.cont-8-3 {
  width: 293px;
  height: 30px;
  transform: matrix(1, 0, 0, 1, 517, 237);
}

.cont-9-1 {
  width: 224px;
  height: 31px;
  background: #eff0f2;
  transform: matrix(1, 0, 0, 1, 0, 268);
}

.cont-9-2 {
  width: 293px;
  height: 31px;
  background: #80276c;
  transform: matrix(1, 0, 0, 1, 224, 268);
}

.cont-9-3 {
  width: 293px;
  height: 31px;
  background: #eff0f2;
  transform: matrix(1, 0, 0, 1, 517, 268);
}

.cont-10-1 {
  width: 224px;
  height: 30px;
  transform: matrix(1, 0, 0, 1, 0, 300);
}

.cont-10-2 {
  width: 293px;
  height: 30px;
  background: #80276c;
  transform: matrix(1, 0, 0, 1, 224, 300);
}

.cont-10-3 {
  width: 293px;
  height: 30px;
  transform: matrix(1, 0, 0, 1, 517, 300);
}

.cont-11-1 {
  width: 224px;
  height: 31px;
  background: #eff0f2;
  transform: matrix(1, 0, 0, 1, 0, 331);
}

.cont-11-2 {
  width: 293px;
  height: 31px;
  background: #80276c;
  transform: matrix(1, 0, 0, 1, 224, 331);
}

.cont-11-3 {
  width: 293px;
  height: 31px;
  background: #eff0f2;
  transform: matrix(1, 0, 0, 1, 517, 331);
}

.cont-12-1 {
  width: 224px;
  height: 31px;
  transform: matrix(1, 0, 0, 1, 0, 363);
}

.cont-12-2 {
  width: 293px;
  height: 31px;
  background: #80276c;
  transform: matrix(1, 0, 0, 1, 224, 363);
}

.cont-12-3 {
  width: 293px;
  height: 31px;
  transform: matrix(1, 0, 0, 1, 517, 363);
}

.cont-13-1 {
  width: 224px;
  height: 49px;
  background: #eff0f2;
  transform: matrix(1, 0, 0, 1, 0, 395);
}

.cont-13-2 {
  width: 293px;
  height: 49px;
  background: #80276c;
  transform: matrix(1, 0, 0, 1, 224, 395);
}

.cont-13-3 {
  width: 293px;
  height: 49px;
  background: #eff0f2;
  transform: matrix(1, 0, 0, 1, 517, 395);
}

.cont-14-1 {
  width: 224px;
  height: 30px;
  transform: matrix(1, 0, 0, 1, 0, 445);
}

.cont-14-2 {
  width: 293px;
  height: 30px;
  background: #80276c;
  transform: matrix(1, 0, 0, 1, 224, 445);
}

.cont-14-3 {
  width: 293px;
  height: 30px;
  transform: matrix(1, 0, 0, 1, 517, 445);
}

.cont-15-1 {
  width: 224px;
  height: 31px;
  background: #eff0f2;
  transform: matrix(1, 0, 0, 1, 0, 476);
}

.cont-15-2 {
  width: 293px;
  height: 31px;
  background: #80276c;
  transform: matrix(1, 0, 0, 1, 224, 476);
}

.cont-15-3 {
  width: 293px;
  height: 31px;
  background: #eff0f2;
  transform: matrix(1, 0, 0, 1, 517, 476);
}

.table-medium-text {
  font-family: 'DinProMedium', sans-serif;
}

.table-1-1 {
  font-size: 17px;
  transform: matrix(1, 0, 0, 1, 5, 13);
}

.table-1-2 {
  font-size: 17px;
  line-height: 1.1;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 50, 5);
}

.table-1-3 {
  font-size: 17px;
  line-height: 1.1;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 38, 5);
}

.table-2-1 {
  font-size: 17px;
  transform: matrix(1, 0, 0, 1, 5, 5);
}

.table-2-2 {
  font-size: 17px;
  line-height: 1.1;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 116, 6);
}

.table-2-3 {
  font-size: 17px;
  line-height: 1.1;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 117, 7);
}

.table-3-1 {
  font-size: 17px;
  transform: matrix(1, 0, 0, 1, 5, 5);
}

.table-3-2 {
  font-size: 17px;
  line-height: 1.1;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 116, 6);
}

.table-3-3 {
  font-size: 17px;
  line-height: 1.1;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 117, 7);
}

.table-4-1 {
  font-size: 17px;
  transform: matrix(1, 0, 0, 1, 5, 5);
}

.table-4-2 {
  font-size: 17px;
  line-height: 1.1;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 125, 7);
}

.table-4-3 {
  font-size: 17px;
  line-height: 1.1;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 128, 7);
}

.table-5-1 {
  font-size: 17px;
  transform: matrix(1, 0, 0, 1, 5, 5);
}

.table-5-2 {
  font-size: 17px;
  line-height: 1.1;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 116, 6);
}

.table-5-3 {
  font-size: 17px;
  line-height: 1.1;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 121, 7);
}

.table-6-1 {
  font-size: 17px;
  transform: matrix(1, 0, 0, 1, 25, 5);
}

.table-6-2 {
  font-size: 17px;
  line-height: 1.1;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 120, 7);
}

.table-6-3 {
  font-size: 17px;
  line-height: 1.1;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 126, 7);
}

.table-7-1 {
  font-size: 17px;
  transform: matrix(1, 0, 0, 1, 25, 5);
}

.table-7-2 {
  font-size: 17px;
  line-height: 1.1;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 120, 6);
}

.table-7-3 {
  font-size: 17px;
  line-height: 1.1;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 123, 7);
}

.table-8-1 {
  font-size: 17px;
  transform: matrix(1, 0, 0, 1, 5, 4);
}

.table-8-2 {
  font-size: 17px;
  line-height: 1.1;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 116, 6);
}

.table-8-3 {
  font-size: 17px;
  line-height: 1.1;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 117, 7);
}

.table-9-1 {
  font-size: 17px;
  transform: matrix(1, 0, 0, 1, 25, 5);
}

.table-9-2 {
  font-size: 17px;
  line-height: 1.1;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 120, 7);
}

.table-9-3 {
  font-size: 17px;
  line-height: 1.1;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 125, 7);
}

.table-10-1 {
  font-size: 17px;
  transform: matrix(1, 0, 0, 1, 25, 5);
}

.table-10-2 {
  font-size: 17px;
  line-height: 1.1;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 120, 6);
}

.table-10-3 {
  font-size: 17px;
  line-height: 1.1;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 125, 7);
}

.table-11-1 {
  font-size: 17px;
  transform: matrix(1, 0, 0, 1, 25, 5);
}

.table-11-2 {
  font-size: 17px;
  line-height: 1.1;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 120, 7);
}

.table-11-3 {
  font-size: 17px;
  line-height: 1.1;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 126, 7);
}

.table-12-1 {
  font-size: 17px;
  transform: matrix(1, 0, 0, 1, 5, 5);
}

.table-12-2 {
  font-size: 17px;
  line-height: 1.1;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 125, 6);
}

.table-12-3 {
  font-size: 17px;
  line-height: 1.1;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 126, 7);
}

.table-13-1 {
  font-size: 17px;
  transform: matrix(1, 0, 0, 1, 5, 5);
}

.table-13-2 {
  font-size: 17px;
  line-height: 1.1;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 125, 15);
}

.table-13-3 {
  font-size: 17px;
  line-height: 1.1;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 142, 16);
}

.table-14-1 {
  font-size: 17px;
  transform: matrix(1, 0, 0, 1, 5, 5);
}

.table-14-2 {
  font-size: 17px;
  line-height: 1.1;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 125, 6);
}

.table-14-3 {
  font-size: 17px;
  line-height: 1.1;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 142, 7);
}

.table-15-1 {
  font-size: 17px;
  transform: matrix(1, 0, 0, 1, 5, 5);
}

.table-15-2 {
  font-size: 17px;
  line-height: 1.1;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 125, 6);
}

.table-15-3 {
  font-size: 17px;
  line-height: 1.1;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 125, 7);
}

.bottom-chapter-2 {
  width: 20px;
  height: 10px;
  background: #00a3e0;
  transform: matrix(1, 0, 0, 1, 434, 548);
}

.bottom-chapter-1 {
  width: 18px;
  height: 8px;
  border: 1px solid #7c878e;
  transform: matrix(1, 0, 0, 1, 402, 548);
}

.ribbon-main {
  z-index: 2;
}

.footnote {
  transform: matrix(1, 0, 0, 1, -24, 149);
}
</style>
