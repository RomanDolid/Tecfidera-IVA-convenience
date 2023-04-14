<i18n>
  {
    "eng": {
      "headline": "<span style='color: #80276c;'><b>Monitoring you can schedule <br> alongside your patients’ regular appointments<sup>1</sup></b></span>",
      "slideTitle": "<span style='color: #5b6770;'><b>Recommended monitoring schedule<sup>1</sup></b></span>",
      "row1Title": "<span style='color: #5b6770;'>Magnetic resonance imaging <br>prior to treatment <br>(within 3 months)</span>",
      "row1Text": "<span style='color: #ffffff;'><b>In accordance with national and local recommendations<sup>1</sup></b></span>",
      "row2Title": "<span style='color: #5b6770;'>Complete blood count <br> including lymphocytes</span>",
      "row2Text": "<span style='color: #ffffff;'><b>Every 3 months</b></span>",
      "row3Title": "<span style='color: #5b6770;'>Renal function assessment*</span>",
      "row3Text": "<span style='color: #ffffff;'><b>Every 6–12 months and<br>as clinically indicated</b></span>",
      "row4Title": "<span style='color: #5b6770;'>Hepatic function <br>assessment**</span>",
      "row4Text": "<span style='color: #ffffff;'><b>As clinically indicated</b></span>",
      "lineX1": "<span style='color: #575857;'>-3</span>",
      "lineX2": "<span style='color: #575857;'>0</span>",
      "lineX3": "<span style='color: #575857;'>3</span>",
      "lineX4": "<span style='color: #575857;'>6</span>",
      "lineX5": "<span style='color: #575857;'>9</span>",
      "lineX6": "<span style='color: #575857;'>12</span>",
      "bottomTitle": "<span style='color: #5b6770;'><b>Months pre- ⁄ post-treatment initiation</b></span>",
      "footnote1": "<span style='color: #5b6770;'>* Renal function assessment: e.g. creatinine, blood urea nitrogen, urinalysis. <br>** Hepatic function assessment: serum aminotransferases (e.g. ALT, AST) and total bilirubin levels.</span>",
      "footnote2": "<span style='color: #5b6770;'><b style='color: #80276c;'>ALT:</b> Alanine Transaminase; <b style='color: #80276c;'>AST:</b> Aspartate Transaminase; <b style='color: #80276c;'>MRI:</b>  Magnetic Resonance Imaging.</span>",
      "ribbonTxt1": "<b style='color: #ffffff;'>Dosing</b>",
      "ribbonTxt2": "<b style='color: #ffffff;'>Monitoring</b>",
      "ribbonTxt3": "<b style='color: #ffffff;'>Immunity</b>",
      "ribbonTxt4": "<b style='color: #ffffff;'>Vaccinations</b>",
      "ribbonTxt5": "<b style='color: #ffffff;'>AE Profile</b>",
      "ribbonTxt6": "<b style='color: #ffffff;'>GI Events</b>",
      "ribbonTxt7": "<b style='color: #ffffff;'>Infections & malignancies</b>",
      "ribbonTxt8": "<b style='color: #ffffff;'>Flushing</b>",
      "hiddenReferences": "<sup refs='ref66'></sup>"
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
      <wiz-bg-container
        id="contentWrapper1"
        class="content-wrapper pa"
        :component-name="'Content wrapper'"
      >
        <wiz-text
          id="slideTitle"
          class="slide-title pa"
          :text="$t('slideTitle')"
          :component-name="'Slide Title'"
        ></wiz-text>
        <wiz-bg-container
          id="row1"
          class="row row1 pa"
          :component-name="'Content row'"
        >
          <wiz-text
            id="row1Title"
            class="row-title row1-title pa"
            :text="$t('row1Title')"
            :component-name="'Row Title'"
          ></wiz-text>
          <wiz-bg-container
            id="cirle1"
            class="circle circle-green pa"
            :component-name="'Circle'"
          >
            &nbsp;
          </wiz-bg-container>
          <wiz-bg-container
            id="arrowContainer1"
            class="arrow-container1 pa"
            :component-name="'Arrow Container'"
          >
            <wiz-image
              id="arrow"
              class="pa arrow"
              :src="'./media/images/arrow1.png'"
              :component-name="'Content image'"
            ></wiz-image>
            <wiz-text
              id="row1Text"
              class="row-text row1-text pa"
              :text="$t('row1Text')"
              :component-name="'Row Text'"
            ></wiz-text>
          </wiz-bg-container>
        </wiz-bg-container>

        <wiz-bg-container
          id="line1"
          class="line line1 pa"
          :component-name="'Line'"
        >
          &nbsp;
        </wiz-bg-container>

        <wiz-bg-container
          id="row2"
          class="row row2 pa"
          :component-name="'Content row'"
        >
          <wiz-text
            id="row2Title"
            class="row-title pa"
            :text="$t('row2Title')"
            :component-name="'Row Title'"
          ></wiz-text>
          <wiz-bg-container
            id="cirle2"
            class="circle circle2 circle-violet pa"
            :component-name="'Circle'"
          >
            &nbsp;
          </wiz-bg-container>
          <wiz-bg-container
            id="cirle3"
            class="circle circle3 circle-violet pa"
            :component-name="'Circle'"
          >
            &nbsp;
          </wiz-bg-container>
          <wiz-bg-container
            id="cirle4"
            class="circle circle4 circle-violet pa"
            :component-name="'Circle'"
          >
            &nbsp;
          </wiz-bg-container>
          <wiz-bg-container
            id="cirle5"
            class="circle circle5 circle-violet pa"
            :component-name="'Circle'"
          >
            &nbsp;
          </wiz-bg-container>
          <wiz-bg-container
            id="cirle6"
            class="circle circle6 circle-violet pa"
            :component-name="'Circle'"
          >
            &nbsp;
          </wiz-bg-container>
          <wiz-bg-container
            id="arrowContainer2"
            class="arrow-container2 pa"
            :component-name="'Arrow Container'"
          >
            <wiz-image
              id="arrow"
              class="pa arrow"
              :src="'./media/images/arrow2.png'"
              :component-name="'Content image'"
            ></wiz-image>
            <wiz-text
              id="row2Text"
              class="row-text row2-text pa"
              :text="$t('row2Text')"
              :component-name="'Row Text'"
            ></wiz-text>
          </wiz-bg-container>
        </wiz-bg-container>

        <wiz-bg-container
          id="line2"
          class="line line2 pa"
          :component-name="'Line'"
        >
          &nbsp;
        </wiz-bg-container>

        <wiz-bg-container
          id="row3"
          class="row row3 pa"
          :component-name="'Content row'"
        >
          <wiz-text
            id="row3Title"
            class="row-title pa"
            :text="$t('row3Title')"
            :component-name="'Row Title'"
          ></wiz-text>
          <wiz-bg-container
            id="cirle7"
            class="circle circle2 circle-blue pa"
            :component-name="'Circle'"
          >
            &nbsp;
          </wiz-bg-container>
          <wiz-bg-container
            id="cirle8"
            class="circle circle3 circle-blue pa"
            :component-name="'Circle'"
          >
            &nbsp;
          </wiz-bg-container>
          <wiz-bg-container
            id="cirle9"
            class="circle circle4 circle-blue pa"
            :component-name="'Circle'"
          >
            &nbsp;
          </wiz-bg-container>
          <wiz-bg-container
            id="cirle10"
            class="circle circle6 circle-blue pa"
            :component-name="'Circle'"
          >
            &nbsp;
          </wiz-bg-container>
          <wiz-bg-container
            id="arrowContainer3"
            class="arrow-container3 pa"
            :component-name="'Arrow Container'"
          >
            <wiz-image
              id="arrow"
              class="pa arrow"
              :src="'./media/images/arrow3.png'"
              :component-name="'Content image'"
            ></wiz-image>
            <wiz-text
              id="row3Text"
              class="row-text row3-text pa"
              :text="$t('row3Text')"
              :component-name="'Row Text'"
            ></wiz-text>
          </wiz-bg-container>
        </wiz-bg-container>

        <wiz-bg-container
          id="line3"
          class="line line3 pa"
          :component-name="'Line'"
        >
          &nbsp;
        </wiz-bg-container>

        <wiz-bg-container
          id="row4"
          class="row row4 pa"
          :component-name="'Content row'"
        >
          <wiz-text
            id="row4Title"
            class="row-title pa"
            :text="$t('row4Title')"
            :component-name="'Row Title'"
          ></wiz-text>
          <wiz-bg-container
            id="arrowContainer4"
            class="arrow-container4 pa"
            :component-name="'Arrow Container'"
          >
            <wiz-bg-container
              id="cirle11"
              class="circle circle-gray pa"
              :component-name="'Circle'"
            >
              &nbsp;
            </wiz-bg-container>
            <wiz-image
              id="arrow"
              class="pa arrow4"
              :src="'./media/images/arrow4.png'"
              :component-name="'Content image'"
            ></wiz-image>
            <wiz-text
              id="row4Text"
              class="row-text row4-text pa"
              :text="$t('row4Text')"
              :component-name="'Row Text'"
            ></wiz-text>
          </wiz-bg-container>
        </wiz-bg-container>

        <wiz-bg-container
          id="bottomWrapper"
          class="bottom-wrapper pa"
          :component-name="'Bottom wrapper'"
        >
          <wiz-image
            id="trend"
            class="pa trend"
            :src="'./media/images/trend.png'"
            :component-name="'Trend image'"
          ></wiz-image>
          <wiz-text
            id="lineX1"
            class="line-x line-x1 pa"
            :text="$t('lineX1')"
            :component-name="'Line text'"
          ></wiz-text>
          <wiz-text
            id="lineX2"
            class="line-x line-x2 pa"
            :text="$t('lineX2')"
            :component-name="'Line text'"
          ></wiz-text>
          <wiz-text
            id="lineX3"
            class="line-x line-x3 pa"
            :text="$t('lineX3')"
            :component-name="'Line text'"
          ></wiz-text>
          <wiz-text
            id="lineX4"
            class="line-x line-x4 pa"
            :text="$t('lineX4')"
            :component-name="'Line text'"
          ></wiz-text>
          <wiz-text
            id="lineX5"
            class="line-x line-x5 pa"
            :text="$t('lineX5')"
            :component-name="'Line text'"
          ></wiz-text>
          <wiz-text
            id="lineX6"
            class="line-x line-x6 pa"
            :text="$t('lineX6')"
            :component-name="'Line text'"
          ></wiz-text>
          <wiz-text
            id="bottomTitle"
            class="bottom-title pa"
            :text="$t('bottomTitle')"
            :component-name="'Bottom text'"
          ></wiz-text>
        </wiz-bg-container>

        <wiz-bg-container
          id="rectangle1"
          class="rectangle rectangle1 pa"
          :component-name="'rectangle'"
        >
          &nbsp;
        </wiz-bg-container>
        <wiz-bg-container
          id="rectangle2"
          class="rectangle rectangle2 pa"
          :component-name="'rectangle'"
        >
          &nbsp;
        </wiz-bg-container>
      </wiz-bg-container>
      <wiz-bg-ribbon
        id="ribbonMain"
        class="pa ribbon-main"
        :index="1"
        v-bind="ribbonOptions"
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
          id="footnote1"
          class="footnote-text footnote-text1 pa"
          :text="$t('footnote1')"
          :component-name="'footnote text'"
        ></wiz-text>
        <wiz-text
          id="footnote2"
          class="footnote-text footnote-text2 pa"
          :text="$t('footnote2')"
          :component-name="'footnote text'"
        ></wiz-text>
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
.content-wrapper {
  width: 981px;
  height: 655px;
  transform: matrix(1, 0, 0, 1, -42, -66);
}

.content-wrapper .slide-title {
  width: 330px;
  font-size: 18px;
  font-family: 'DinPro', sans-serif;
  line-height: 1.2;
  transform: matrix(1, 0, 0, 1, 321, 85);
}

.row {
  width: 970px;
  height: 62px;
}

.row1 {
  transform: matrix(1, 0, 0, 1, 0, 116);
}

.row2 {
  transform: matrix(1, 0, 0, 1, 0, 185);
}

.row3 {
  transform: matrix(1, 0, 0, 1, 0, 255);
}

.row4 {
  transform: matrix(1, 0, 0, 1, 0, 327);
}

.row .row-title {
  width: 242px;
  font-size: 18px;
  font-family: 'DinPro', sans-serif;
  line-height: 1.1;
  text-align: right;
}

.row .row1-title {
  line-height: 1.15;
}

.row.row2 .row-title {
  transform: matrix(1, 0, 0, 1, 0, 10);
}

.row.row3 .row-title {
  transform: matrix(1, 0, 0, 1, 0, 22);
}

.row.row4 .row-title {
  transform: matrix(1, 0, 0, 1, 0, 14);
}

.circle {
  width: 25px;
  height: 25px;
  border-radius: 50%;
}

.circle-green {
  background-color: #78be20;
  transform: matrix(1, 0, 0, 1, 277, 18);
}

.circle-violet {
  background-color: #80276c;
}

.circle-blue {
  background-color: #00a3e0;
}

.circle.circle-gray {
  z-index: 1;
  width: 23px;
  height: 23px;
  border: 1px solid #fff;
  background-color: #5b6770;
  transform: matrix(1, 0, 0, 1, 0, 16);
}

.circle2 {
  transform: matrix(1, 0, 0, 1, 323, 18);
}

.circle3 {
  transform: matrix(1, 0, 0, 1, 416, 18);
}

.circle4 {
  transform: matrix(1, 0, 0, 1, 507, 18);
}

.circle5 {
  transform: matrix(1, 0, 0, 1, 599, 18);
}

.circle6 {
  transform: matrix(1, 0, 0, 1, 691, 18);
}

.arrow-container1 {
  width: 564px;
  height: 56px;
  transform: matrix(1, 0, 0, 1, 336, 2);
}

.arrow-container2,
.arrow-container3 {
  width: 168px;
  height: 56px;
  transform: matrix(1, 0, 0, 1, 729, 3);
}

.arrow-container4 {
  width: 600px;
  height: 56px;
  transform: matrix(1, 0, 0, 1, 323, 2);
}

.row .arrow {
  width: 100%;
  height: 100%;
}

.row .arrow4 {
  width: 564px;
  height: 56px;
  transform: matrix(1, 0, 0, 1, 12, 0);
}

.row .row-text {
  font-size: 12px;
  font-family: 'DinPro', sans-serif;
  line-height: 1.1;
}

.row .row-text.row1-text {
  width: 322px;
  transform: matrix(1, 0, 0, 1, 105, 21);
}

.row .row-text.row2-text {
  width: 140px;
  font-size: 12px;
  transform: matrix(1, 0, 0, 1, 20, 20);
}

.row .row-text.row3-text {
  width: 140px;
  font-size: 12px;
  transform: matrix(1, 0, 0, 1, 6, 14);
}

.row .row-text.row4-text {
  width: 140px;
  font-size: 12px;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 201, 21);
}

.line {
  width: 460px;
  height: 1px;
  background: #acb2b7;
}

.line1 {
  transform: matrix(1, 0, 0, 1, 243, 180);
}

.line2 {
  transform: matrix(1, 0, 0, 1, 243, 250);
}

.line3 {
  transform: matrix(1, 0, 0, 1, 243, 320);
}

.bottom-wrapper {
  width: 500px;
  height: 70px;
  transform: matrix(1, 0, 0, 1, 237, 424);
}

.bottom-wrapper .trend {
  display: flex;
  width: 461px;
  height: 8px;
  transform: matrix(1, 0, 0, 1, 6, 0);
}

.bottom-wrapper .line-x {
  width: 20px;
  font-size: 14px;
  font-family: 'DinPro', sans-serif;
  line-height: 1.1;
}

.line-x1 {
  transform: matrix(1, 0, 0, 1, 0, 16);
}

.line-x2 {
  transform: matrix(1, 0, 0, 1, 95, 16);
}

.line-x3 {
  transform: matrix(1, 0, 0, 1, 187, 16);
}

.line-x4 {
  transform: matrix(1, 0, 0, 1, 279, 16);
}

.line-x5 {
  transform: matrix(1, 0, 0, 1, 371, 16);
}

.line-x6 {
  transform: matrix(1, 0, 0, 1, 459, 16);
}

.bottom-wrapper .bottom-title {
  width: 250px;
  font-size: 18px;
  font-family: 'DinProCondensed', sans-serif;
  line-height: 1.2;
  transform: matrix(1, 0, 0, 1, 117, 37);
}

.rectangle {
  width: 18px;
  height: 8px;
  border: 1px solid #7c878e;
}

.rectangle.rectangle1 {
  border-color: #00a3e0;
  background-color: #00a3e0;
  transform: matrix(1, 0, 0, 1, 444, 584);
}

.rectangle.rectangle2 {
  transform: matrix(1, 0, 0, 1, 476, 584);
}

.footnote-wrapper .footnote-text {
  width: 510px;
  font-size: 10px;
  font-family: 'DinPro', sans-serif;
  line-height: 1.2;
}

.footnote-text1 {
  transform: matrix(1, 0, 0, 1, -24, 114);
}

.footnote-text2 {
  transform: matrix(1, 0, 0, 1, -24, 148);
}

.ribbon-main {
  z-index: 2;
}
</style>
