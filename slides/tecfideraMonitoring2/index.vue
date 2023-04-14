<i18n>
  {
    "eng": {
      "headline": "<span style='color: #80276c;'><b>Lymphocyte monitoring you can schedule alongside<br>your patients’ regular appointments<sup refs='ref66'></sup></b></span>",
      "graphCaption": "<span style='color: #5b6770;'><b>Recommended lymphocyte monitoring</b></span>",
      "info": "<span style='color: #5b6770;'>Complete blood count<br>including lymphocytes</span>",
      "arrowText": "<span style='color: #ffffff;'><b>Every 3 months</b></span>",
      "scaleX1": "<span style='color: #5b6770;'>0</span>",
      "scaleX2": "<span style='color: #5b6770;'>3</span>",
      "scaleX3": "<span style='color: #5b6770;'>6</span>",
      "scaleX4": "<span style='color: #5b6770;'>9</span>",
      "scaleX5": "<span style='color: #5b6770;'>12</span>",
      "scaleCaption": "<span style='color: #5b6770;'><b>Months pre- ⁄ post-treatment initiation</b></span>",
      "paragraph1": "<span style='color: #5b6770;'><b style='color: #78be20;'>Prior to initiating treatmen</b> with Tecfidera, a current complete blood count, including lymphocytes, must be performed.</span>",
      "paragraph2": "<span style='color: ##5b6770;'>If lymphocyte count is found to be below the normal range, thorough assessment of possible causes should be completed prior to initiation of treatment with Tecfidera and caution should be exercised when treating these patients. Tecfidera should not be initiated in patients with severe lymphopenia (lymphocyte counts <0.5 x 10<sup>9</sup>/L).<sup refs='ref66'></sup></span>",
      "paragraph3": "<span style='color: #5b6770;'><b style='color: #78be20;'>After starting therapy,</b> complete blood counts, including lymphocytes, must be performed every 3 months.</span>",
      "listItem1": "<span style='color: #5b6770;'>Tecfidera should be discontinued in patients with prolonged severe lymphopenia (lymphocyte counts <0.5 x 10<sup>9</sup>/L) persisting for more than 6 months.</span>",
      "listItem2": "<span style='color: #5b6770;'>In patients with sustained moderate reductions of absolute lymphocyte counts ≥0.5 x 10<sup>9</sup>/L and <0.8 x 10<sup>9</sup></span>/L for more than six months, the benefit/risk of Tecfidera treatment should be re-assessed.</span>",
      "listItem3": "<span style='color: #5b6770;'>In patients with lymphocyte counts below lower limit of normal (LLN) as defined by local laboratory reference range, regular monitoring of absolute lymphocyte counts is recommended. Additional factors that might further augment the individual PML* risk should be considered.<sup refs='ref66'></sup></span>",
      "ribbonTxt1": "<b style='color: #ffffff;'>Dosing</b>",
      "ribbonTxt2": "<b style='color: #ffffff;'>Monitoring</b>",
      "ribbonTxt3": "<b style='color: #ffffff;'>Immunity</b>",
      "ribbonTxt4": "<b style='color: #ffffff;'>Vaccinations</b>",
      "ribbonTxt5": "<b style='color: #ffffff;'>AE Profile</b>",
      "ribbonTxt6": "<b style='color: #ffffff;'>GI Events</b>",
      "ribbonTxt7": "<b style='color: #ffffff;'>Infections & malignancies</b>",
      "ribbonTxt8": "<b style='color: #ffffff;'>Flushing</b>",
      "footnote": "<span style='color: #5b6770;'>* Progressive multifocal leukoencephalopathy (PML) cases have occurred with dimethyl fumarate and other fumarates in the setting of lymphopenia (lymphocyte counts below<br>LLN). Prolonged moderate to severe lymphopenia appears to increase the risk of PML with Tecfidera, however, risk cannot be excluded in patients with mild lymphopenia.<sup>1</sup></span>"
    }
  }
</i18n>

<template>
  <wiz-slide
    class="slide-popup"
    @slideswipe.native="lockSwipe"
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
      <wiz-bg-container
        id="contentWrapper1"
        class="pa"
        :component-name="'Content wrapper'"
      >
        <wiz-text
          id="graphCaption"
          class="pa"
          :text="$t('graphCaption')"
          :component-name="'Graph caption'"
        ></wiz-text>
        <wiz-bg-container
          id="graphWrapper"
          class="pa"
          :component-name="'Graph wrapper'"
        >
          <wiz-text
            id="info"
            class="pa"
            :text="$t('info')"
            :component-name="'Graph info'"
          ></wiz-text>
          <wiz-bg-container
            id="circle1"
            class="pa circle"
            :component-name="'Circle'"
          >
            &nbsp;
          </wiz-bg-container>
          <wiz-bg-container
            id="circle2"
            class="pa circle"
            :component-name="'Circle'"
          >
            &nbsp;
          </wiz-bg-container>
          <wiz-bg-container
            id="circle3"
            class="pa circle"
            :component-name="'Circle'"
          >
            &nbsp;
          </wiz-bg-container>
          <wiz-bg-container
            id="circle4"
            class="pa circle"
            :component-name="'Circle'"
          >
            &nbsp;
          </wiz-bg-container>
          <wiz-bg-container
            id="circle5"
            class="pa circle"
            :component-name="'Circle'"
          >
            &nbsp;
          </wiz-bg-container>
          <wiz-bg-container
            id="arrowWrapper"
            class="pa"
            :component-name="'Arrow wrapper'"
          >
            <wiz-image
              id="arrowIcon"
              class="pa"
              :component-name="'Arrow icon'"
              src="./media/images/arrow.png"
            ></wiz-image>
            <wiz-text
              id="arrowText"
              class="pa"
              :text="$t('arrowText')"
              :component-name="'Arrow text'"
            ></wiz-text>
          </wiz-bg-container>
          <wiz-bg-container
            id="scaleWrapper"
            class="pa"
            :component-name="'Scale wrapper'"
          >
            <wiz-image
              id="scaleIcon"
              class="pa"
              :component-name="'Scale icon'"
              src="./media/images/scale.png"
            ></wiz-image>
            <wiz-text
              id="scaleX1"
              :text="$t('scaleX1')"
              class="pa scale-x"
              :component-name="'Scale X item'"
            ></wiz-text>
            <wiz-text
              id="scaleX2"
              :text="$t('scaleX2')"
              class="pa scale-x"
              :component-name="'Scale X item'"
            ></wiz-text>
            <wiz-text
              id="scaleX3"
              :text="$t('scaleX3')"
              class="pa scale-x"
              :component-name="'Scale X item'"
            ></wiz-text>
            <wiz-text
              id="scaleX4"
              :text="$t('scaleX4')"
              class="pa scale-x"
              :component-name="'Scale X item'"
            ></wiz-text>
            <wiz-text
              id="scaleX5"
              :text="$t('scaleX5')"
              class="pa scale-x"
              :component-name="'Scale X item'"
            ></wiz-text>
            <wiz-text
              id="scaleCaption"
              :text="$t('scaleCaption')"
              class="pa"
              :component-name="'Scale caption'"
            ></wiz-text>
          </wiz-bg-container>
        </wiz-bg-container>
      </wiz-bg-container>
      <wiz-bg-container
        id="contentWrapper2"
        class="pa"
        :component-name="'Content wrapper'"
      >
        <wiz-text
          id="paragraph1"
          class="pa paragraph"
          :text="$t('paragraph1')"
          :component-name="'Paragraph'"
        ></wiz-text>
        <wiz-text
          id="paragraph2"
          class="pa paragraph"
          :text="$t('paragraph2')"
          :component-name="'Paragraph'"
        ></wiz-text>
        <wiz-text
          id="paragraph3"
          class="pa paragraph"
          :text="$t('paragraph3')"
          :component-name="'Paragraph'"
        ></wiz-text>
        <wiz-text
          id="listItem1"
          class="pa list-item"
          :text="$t('listItem1')"
          :component-name="'List item'"
        ></wiz-text>
        <wiz-text
          id="listItem2"
          class="pa list-item"
          :text="$t('listItem2')"
          :component-name="'List item'"
        ></wiz-text>
        <wiz-text
          id="listItem3"
          class="pa list-item"
          :text="$t('listItem3')"
          :component-name="'List item'"
        ></wiz-text>
      </wiz-bg-container>
      <wiz-bg-container
        id="rectangle1"
        class="rectangle rectangle1 pa"
        :component-name="'Rectangle 1'"
      >
        &nbsp;
      </wiz-bg-container>
      <wiz-bg-container
        id="rectangle2"
        class="rectangle rectangle2 pa"
        :component-name="'Rectangle 2'"
      >
        &nbsp;
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
          id="footnote"
          class="footnote"
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
              slide: 'tecfideraMonitoring2',
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
      if (swipeDirection === 2) {
        event.stopImmediatePropagation();
      }
    },
  },
};
</script>

<style scoped>
#contentWrapper1 {
  width: 860px;
  height: 181px;
  transform: matrix(1, 0, 0, 1, -1, -6);
}

#graphCaption {
  width: 314px;
  font-size: 18px;
  line-height: 1.3;
  transform: matrix(1, 0, 0, 1, 273, 0);
}

#graphWrapper {
  width: 837px;
  height: 127px;
  transform: matrix(1, 0, 0, 1, 21, 27);
}

#info {
  width: 180px;
  font-size: 18px;
  line-height: 20px;
  text-align: right;
  transform: matrix(1, 0, 0, 1, 0, 10);
}

.circle {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #80276c;
}
#circle1 {
  transform: matrix(1, 0, 0, 1, 235, 16);
}
#circle2 {
  transform: matrix(1, 0, 0, 1, 328, 16);
}
#circle3 {
  transform: matrix(1, 0, 0, 1, 421, 16);
}
#circle4 {
  transform: matrix(1, 0, 0, 1, 515, 16);
}
#circle5 {
  transform: matrix(1, 0, 0, 1, 608, 16);
}

#arrowWrapper {
  width: 172px;
  height: 60px;
  transform: matrix(1, 0, 0, 1, 667, 0);
}

#arrowIcon {
  width: 168px;
  height: 56px;
  transform: matrix(1, 0, 0, 1, 1, 2);
}

#arrowText {
  width: 85px;
  font-size: 12px;
  line-height: 1.3;
  transform: matrix(1, 0, 0, 1, 22, 22);
}

#scaleWrapper {
  width: 375px;
  height: 80px;
  transform: matrix(1, 0, 0, 1, 247, 65);
}

#scaleIcon {
  width: 375px;
  height: 13px;
}

.scale-x {
  width: 20px;
  font-size: 14px;
  line-height: 1;
}
#scaleX1 {
  transform: matrix(1, 0, 0, 1, -3, 21);
}
#scaleX2 {
  transform: matrix(1, 0, 0, 1, 90, 21);
}
#scaleX3 {
  transform: matrix(1, 0, 0, 1, 183, 21);
}
#scaleX4 {
  transform: matrix(1, 0, 0, 1, 276, 21);
}
#scaleX5 {
  transform: matrix(1, 0, 0, 1, 366, 21);
}

#scaleCaption {
  width: 244px;
  font-size: 18px;
  font-family: 'DinProCondensed', sans-serif;
  line-height: 1;
  transform: matrix(1, 0, 0, 1, 64, 38);
}

#contentWrapper2 {
  width: 884px;
  height: 328px;
  transform: matrix(1, 0, 0, 1, 6, 166);
}

.paragraph {
  font-size: 18px;
  line-height: 20px;
}
#paragraph1 {
  width: 418px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#paragraph2 {
  width: 410px;
  transform: matrix(1, 0, 0, 1, 0, 76);
}
#paragraph3 {
  width: 450px;
  transform: matrix(1, 0, 0, 1, 434, 0);
}

.list-item {
  width: 452px;
  font-size: 18px;
  line-height: 20px;
}
.list-item::before {
  content: '';
  position: absolute;
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #00a3e0;
  transform: matrix(1, 0, 0, 1, -14, 9);
}
#listItem1 {
  transform: matrix(1, 0, 0, 1, 442, 56);
}
#listItem2 {
  transform: matrix(1, 0, 0, 1, 442, 130);
}
#listItem3 {
  transform: matrix(1, 0, 0, 1, 442, 226);
}

.rectangle {
  width: 18px;
  height: 8px;
  border: 1px solid #7c878e;
}
.rectangle.rectangle2 {
  border-color: #00a3e0;
  background-color: #00a3e0;
  transform: matrix(1, 0, 0, 1, 434, 518);
}
.rectangle.rectangle1 {
  transform: matrix(1, 0, 0, 1, 402, 518);
}

#footnote {
  width: 784px;
  transform: matrix(1, 0, 0, 1, -24, 138);
}
</style>
