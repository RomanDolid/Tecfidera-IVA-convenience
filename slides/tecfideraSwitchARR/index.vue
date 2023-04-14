<i18n>
  {
    "eng": {
      "headline": "<span style='color: #80276c;'><b>Patients switching to TECFIDERA experienced significantly reduced <br>relapse rates at 1 year compared to 1 year before initiation<sup>1</sup></b></span>",
      "ribbonText1": "<b style='color: #ffffff;'>ARR</b>",
      "paragraph": "<span style='color: #5b6770;'>How could switching to TECFIDERA help your RRMS patients feel in control<br>of their disease and continue with their daily activities?</span>",
      "bblText": "<span style='color: #80276c;'><b>1 year after SWITCHING<br>from GA to TECFIDERA, ARR<br>was reduced by<sup>1</sup></b></span>",
      "bblNumber": "<span style='color: #80276c;'><b>78</b></span>",
      "percentage": "<span style='color: #80276c;'><b>%</b></span>",
      "bblDescription": "<span style='color: #78be20;'><b>Compared to the 1 year before<br>starting TECFIDERA. All patients<br>were as likely to respond regardless<br>of reason for switching.<sup>1</sup></b></span><br><span style='color: #5b6770;'>ARR (95% CI) 1 year before starting<br>TEC: 0.49 (0.42–0.57)<br>ARR (95% CI) 1 year after switching to<br>TEC: 0.11 (0.07–0.17)<br>RR (95% CI) 0.22 (0.14–0.34) p<0.0001</span>",
      "footnote1": "<span style='color: #5b6770;'>* Patients who experienced a suboptimal response to GA, defined as perceived suboptimal efficacy, intolerance, or poor adherence to GA.</span>",
      "footnote2": "<span style='color: #5b6770;'><b>ARR:</b>  Annualised Relapse Rate; <b>CI:</b>  Confidence Interval; <b>GA:</b> Glatiramer Acetate; <b>RR:</b> Relative Risk; <b>RRMS:</b>  Relapsing Remitting Multiple Sclerosis.</span>",
      "hiddenReferences": "<sup refs='ref55'></sup>"
    }
  }
</i18n>

<template>
  <wiz-slide @slideswipe.native.stop>
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
      <wiz-bg-container id="headlineWrapper" class="headline-wrapper">
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
      <wiz-bg-container id="contentWrapper1" class="content-wrapper1 pa">
        <wiz-text
          id="paragraph"
          class="paragraph pa"
          :text="$t('paragraph')"
          :component-name="'paragraph'"
        ></wiz-text>
        <wiz-image
          id="patient"
          class="patient pa"
          src="./media/images/patient.png"
          :component-name="'Patient'"
        ></wiz-image>
        <wiz-bg-container
          id="bubbleWrap"
          v-goto="toPopup"
          class="bubble-wrapper pa"
          :component-name="'Bubble Wrap'"
        >
          <wiz-image
            id="icon"
            class="icon pa"
            src="./media/images/icon.png"
            :component-name="'Icon'"
          ></wiz-image>
          <wiz-bg-bubble
            id="bubble1"
            class="bubbles"
            :arrow="''"
            :before-text="$t('bblText')"
            :show-after-text="false"
            :number="$t('bblNumber')"
            :percentage="$t('percentage')"
            :description="$t('bblDescription')"
            :component-name="'Bubble'"
          ></wiz-bg-bubble>
        </wiz-bg-container>
      </wiz-bg-container>
      <wiz-bg-ribbon
        id="ribbonMain"
        class="pa ribbon-main"
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
      <wiz-bg-container id="footnoteWrapper" class="footnote-wrapper">
        <wiz-text
          id="footnote1"
          class="footnote footnote1"
          :text="$t('footnote1')"
          :component-name="'Footnote 1'"
        ></wiz-text>
        <wiz-text
          id="footnote2"
          class="footnote footnote2"
          :text="$t('footnote2')"
          :component-name="'Footnote 2'"
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
import wizBgBubble from 'wiz-bg-bubble';

export default {
  components: {
    wizBgBubble,
  },
  data() {
    return {
      closeBtnNavigation: {
        slide: 'tecfideraEfficacy',
        chapter: 'efficacy',
      },
      toPopup: {
        slide: 'tecfideraSwitchARRPopup',
        chapter: 'slidesPopup',
      },
      ribbonOptions: {
        openIconImage: './common/media/images/indicator-active.png',
        closeIconImage: './common/media/images/indicator.png',
        items: [
          {
            name: this.$t('ribbonText1'),
            slide: {
              slide: 'tecfideraSwitchARR',
              chapter: 'slidesPopup',
            },
          },
        ],
      },
    };
  },
};
</script>
<style scoped>
.wiz-slide .content-wrapper1 {
  width: 938px;
  height: 516px;
  transform: matrix(1, 0, 0, 1, -43, -53);
}
.wiz-slide .paragraph {
  font-size: 20px;
  line-height: 1.3;
  transform: matrix(1, 0, 0, 1, 44, 0);
}
.wiz-slide .patient {
  width: 888px;
  height: 460px;
  transform: matrix(1, 0, 0, 1, 1, 51);
}
.wiz-slide .bubble-wrapper {
  width: 268px;
  height: 404px;
  transform: matrix(1, 0, 0, 1, 531, 81);
}
.wiz-slide .icon {
  width: 24px;
  height: 22px;
  transform: matrix(1, 0, 0, 1, 7, 4);
}

.wiz-slide .bubbles {
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  overflow: visible;
  width: 274px;
  min-width: 274px;
  height: 360px;
  min-height: 360px;
  background: transparent;
  transform: matrix(1, 0, 0, 1, 6, 30);
}

.wiz-slide .bubbles::v-deep .arrow {
  width: 48px;
  height: 27px;
  background: url("../../common/media/images/arrow-tecfidera.png")
    center/contain no-repeat;
  transform: matrix(1, 0, 0, 1, -53, -20);
}

.wiz-slide .bubbles::v-deep .arrow img {
  display: none;
}

.wiz-slide .bubbles::v-deep .before-text {
  font-size: 18px;
  line-height: 20px;
  text-align: left;
  transform: matrix(1, 0, 0, 1, -1, -38);
}

.wiz-slide .bubbles::v-deep .background {
  display: none;
}

.wiz-slide .bubbles::v-deep .number {
  font-size: 149px;
  font-family: "DinProCondensed", sans-serif;
  transform: matrix(1, 0, 0, 1, -28, -52);
}
.wiz-slide .bubbles::v-deep .percentage {
  font-size: 88px;
  font-family: "DinProCondensed", sans-serif;
  transform: matrix(1, 0, 0, 1, -69, -40);
}

.wiz-slide .bubbles::v-deep .description {
  top: 52%;
  font-size: 15px;
  line-height: 1.2;
  text-align: left;
}
.wiz-slide .footnote::v-deep b {
  color: #80276c;
}
.wiz-slide .footnote1 {
  transform: matrix(1, 0, 0, 1, -25, 125);
}

.wiz-slide .footnote2 {
  transform: matrix(1, 0, 0, 1, -25, 137);
}
</style>
