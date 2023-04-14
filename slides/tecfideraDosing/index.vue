<i18n>
  {
    "eng": {
      "headline": "<span style='color: #80276c;'><b>Convenience of a twice daily oral treatment</b></span>",
      "ribbonTxt1": "<b style='color: #ffffff;'>Dosing</b>",
      "ribbonTxt2": "<b style='color: #ffffff;'>Monitoring</b>",
      "ribbonTxt3": "<b style='color: #ffffff;'>Immunity</b>",
      "ribbonTxt4": "<b style='color: #ffffff;'>Vaccinations</b>",
      "ribbonTxt5": "<b style='color: #ffffff;'>AE Profile</b>",
      "ribbonTxt6": "<b style='color: #ffffff;'>GI Events</b>",
      "ribbonTxt7": "<b style='color: #ffffff;'>Infections & malignancies</b>",
      "ribbonTxt8": "<b style='color: #ffffff;'>Flushing</b>",
      "timeConvention1": "<span style='color: #80276c;'><b>AM</b></span>",
      "timeConvention2": "<span style='color: #80276c;'><b>PM</b></span>",
      "caption1": "<span style='color: #78be20;'><b>START</b></span>",
      "caption2": "<span style='color: #78be20;'><b>CONTINUE</b></span>",
      "note1": "<span style='color: #5b6770;'><b><mark>7 days</mark> with <mark>120 mg</mark><br>Twice-daily</b></span>",
      "note2": "<span style='color: #5b6770;'><b>with <mark>240 mg</mark><br>Twice-daily</b></span>",
      "capsule1Txt1": "<span style='color: #ffffff;'><b>120</b></span>",
      "capsule1Txt2": "<span style='color: #78be20;'><b>mg BID</b></span>",
      "capsule2Txt1": "<span style='color: #ffffff;'><b>120</b></span>",
      "capsule2Txt2": "<span style='color: #78be20;'><b>mg BID</b></span>",
      "capsule3Txt1": "<span style='color: #ffffff;'><b>240</b></span>",
      "capsule3Txt2": "<span style='color: #ffffff;'><b>mg BID</b></span>",
      "capsule4Txt1": "<span style='color: #ffffff;'><b>240</b></span>",
      "capsule4Txt2": "<span style='color: #ffffff;'><b>mg BID</b></span>",
      "hiddenReferences": "<sup refs='ref66'></sup>"
    }
  }
</i18n>

<template>
  <wiz-slide
    @slideswipe.native.stop
  >
    <layouts :layouts="[{ name: 'logo' }, { name: 'top-image' }]">
      &nbsp;
    </layouts>
    <wiz-bg-close-popup-button
      id="closePopup"
      class="close-popup close-popup-slide"
      :slide="closeBtnNavigation"
      :component-name="'Close Popup'"
    ></wiz-bg-close-popup-button>
    <wiz-bg-grid-container
      id="headerArea"
      class="header-area"
      :component-name="'Headline &amp; Subhead Container'"
    >
      <wiz-bg-container
        id="headlineWrapper"
        class="headline-wrapper"
        :component-name="'Headline Wrapper'"
      >
        <wiz-text
          id="headline"
          class="pa headline"
          :text="$t('headline')"
          :component-name="'Headline'"
        ></wiz-text>
      </wiz-bg-container>
    </wiz-bg-grid-container>

    <wiz-bg-grid-container
      id="contentArea"
      class="content-area"
      :component-name="'Content Area'"
    >
      <wiz-bg-container
        id="contentWrapper1"
        class="content-wrapper"
        :component-name="'Content Wrapper'"
      >
        <wiz-text
          id="timeConvention1"
          class="pa time-convention time-convention-1"
          :text="$t('timeConvention1')"
          :component-name="'Time convention'"
        ></wiz-text>
        <wiz-image
          id="image1"
          class="pa img image-1"
          :src="'./media/images/img1.png'"
          :component-name="'Image'"
        ></wiz-image>
        <wiz-text
          id="timeConvention2"
          class="pa time-convention time-convention-2"
          :text="$t('timeConvention2')"
          :component-name="'Time convention'"
        ></wiz-text>
        <wiz-image
          id="image2"
          class="pa img image-2"
          :src="'./media/images/img2.png'"
          :component-name="'Image'"
        ></wiz-image>

        <wiz-text
          id="caption1"
          class="pa caption caption-1"
          :text="$t('caption1')"
          :component-name="'Caption'"
        ></wiz-text>
        <wiz-text
          id="note1"
          class="pa note note-1"
          :text="$t('note1')"
          :component-name="'Note'"
        ></wiz-text>
        <wiz-container
          id="schemeWrapper1"
          class="pa scheme-wrapper scheme-wrapper-1"
          :component-name="'Scheme wrapper'"
        >
          <wiz-image
            id="capsuleIcon1"
            class="pa capsule-icon capsule-icon-1"
            :src="'./media/images/capsule1.png'"
            :component-name="'Capsule icon'"
          ></wiz-image>
          <wiz-text
            id="capsule1Txt1"
            class="pa capsule-txt-1 capsule-1-txt-1"
            :text="$t('capsule1Txt1')"
            :component-name="'Capsule text'"
          ></wiz-text>
          <wiz-text
            id="capsule1Txt2"
            class="pa capsule-txt-2 capsule-1-txt-2"
            :text="$t('capsule1Txt2')"
            :component-name="'Capsule text'"
          ></wiz-text>

          <wiz-image
            id="capsuleIcon2"
            class="pa capsule-icon capsule-icon-2"
            :src="'./media/images/capsule2.png'"
            :component-name="'Capsule icon'"
          ></wiz-image>
          <wiz-text
            id="capsule2Txt1"
            class="pa capsule-txt-1 capsule-2-txt-1"
            :text="$t('capsule2Txt1')"
            :component-name="'Capsule text'"
          ></wiz-text>
          <wiz-text
            id="capsule2Txt2"
            class="pa capsule-txt-2 capsule-2-txt-2"
            :text="$t('capsule2Txt2')"
            :component-name="'Capsule text'"
          ></wiz-text>
        </wiz-container>

        <wiz-text
          id="caption2"
          class="pa caption caption-2"
          :text="$t('caption2')"
          :component-name="'Caption'"
        ></wiz-text>
        <wiz-text
          id="note2"
          class="pa note note-2"
          :text="$t('note2')"
          :component-name="'Note'"
        ></wiz-text>
        <wiz-container
          id="schemeWrapper2"
          class="pa scheme-wrapper scheme-wrapper-2"
          :component-name="'Scheme wrapper'"
        >
          <wiz-image
            id="capsuleIcon3"
            class="pa capsule-icon capsule-icon-3"
            :src="'./media/images/capsule3.png'"
            :component-name="'Capsule icon'"
          ></wiz-image>
          <wiz-text
            id="capsule3Txt1"
            class="pa capsule-txt-1 capsule-3-txt-1"
            :text="$t('capsule3Txt1')"
            :component-name="'Capsule text'"
          ></wiz-text>
          <wiz-text
            id="capsule3Txt2"
            class="pa capsule-txt-2 capsule-3-txt-2"
            :text="$t('capsule3Txt2')"
            :component-name="'Capsule text'"
          ></wiz-text>

          <wiz-image
            id="capsuleIcon4"
            class="pa capsule-icon capsule-icon-4"
            :src="'./media/images/capsule4.png'"
            :component-name="'Capsule icon'"
          ></wiz-image>
          <wiz-text
            id="capsule4Txt1"
            class="pa capsule-txt-1 capsule-4-txt-1"
            :text="$t('capsule4Txt1')"
            :component-name="'Capsule text'"
          ></wiz-text>
          <wiz-text
            id="capsule4Txt2"
            class="pa capsule-txt-2 capsule-4-txt-2"
            :text="$t('capsule4Txt2')"
            :component-name="'Capsule text'"
          ></wiz-text>
        </wiz-container>
      </wiz-bg-container>
      <wiz-bg-ribbon
        id="ribbonMain"
        class="pa ribbon-main"
        v-bind="ribbonOptions"
        :index="0"
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
        :component-name="'Footnote Wrapper'"
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
      closeBtnNavigation: {
        // where to go when closing popup
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
};
</script>
<style scoped>
.headline {
  width: 509px;
  transform: matrix(1, 0, 0, 1, 0, 38);
}
.time-convention {
  position: absolute;
  top: 0;
  left: 0;
  width: 43px;
  font-size: 29px;
  transform: matrix(1, 0, 0, 1, 19, 39);
}
.time-convention-1 {
  transform: matrix(1, 0, 0, 1, 51, 191);
}
.time-convention-2 {
  transform: matrix(1, 0, 0, 1, 51, 294);
}
.wiz-slide .img {
  position: absolute;
  top: 0;
  left: 0;
  width: 43px;
  height: 99px;
}
.image-1 {
  transform: matrix(1, 0, 0, 1, 127, 151);
}
.image-2 {
  transform: matrix(1, 0, 0, 1, 127, 277);
}
.caption {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 25px;
}
.caption-1 {
  width: 74px;
  transform: matrix(1, 0, 0, 1, 332, 21);
}
.caption-2 {
  width: 121px;
  transform: matrix(1, 0, 0, 1, 618, 21);
}
.note {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 18px;
  font-family: 'DinProCondensed', sans-serif;
  line-height: 1.2;
  text-align: center;
}
.note-1 {
  width: 116px;
  transform: matrix(1, 0, 0, 1, 311, 49);
}
.note-2 {
  width: 74px;
  transform: matrix(1, 0, 0, 1, 642, 49);
}
.note::v-deep mark {
  background: transparent;
  color: #80276c;
}
.scheme-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 314px;
  border-left: 3px solid #80276c;
}
.scheme-wrapper-1 {
  transform: matrix(1, 0, 0, 1, 216, 86);
}
.scheme-wrapper-2 {
  transform: matrix(1, 0, 0, 1, 518, 86);
}
.wiz-slide .capsule-icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 184px;
  height: 74px;
}
.capsule-icon-1 {
  transform: matrix(1, 0, 0, 1, 57, 53);
}
.capsule-icon-2 {
  transform: matrix(1, 0, 0, 1, 57, 199);
}
.capsule-icon-3 {
  transform: matrix(1, 0, 0, 1, 66, 53);
}
.capsule-icon-4 {
  transform: matrix(1, 0, 0, 1, 66, 199);
}
.capsule-txt1,
.capsule-txt2 {
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
}
.capsule-txt-1 {
  width: 48px;
  font-size: 29px;
}
.capsule-txt-2 {
  width: 79px;
  font-size: 24px;
}
.capsule-1-txt-1 {
  transform: matrix(1, 0, 0, 1, 85, 68);
}
.capsule-1-txt-2 {
  transform: matrix(1, 0, 0, 1, 141, 71);
}
.capsule-2-txt-1 {
  transform: matrix(1, 0, 0, 1, 85, 215);
}
.capsule-2-txt-2 {
  transform: matrix(1, 0, 0, 1, 140, 218);
}
.capsule-3-txt-1 {
  transform: matrix(1, 0, 0, 1, 91, 68);
}
.capsule-3-txt-2 {
  transform: matrix(1, 0, 0, 1, 149, 71);
}
.capsule-4-txt-1 {
  transform: matrix(1, 0, 0, 1, 91, 215);
}
.capsule-4-txt-2 {
  transform: matrix(1, 0, 0, 1, 149, 218);
}
</style>
