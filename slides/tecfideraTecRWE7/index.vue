<i18n>
  {
    "eng": {
      "headline": "<span style='color: #80276c;'><b>Similar to fingolimod, the majority of TECFIDERA patients<br>remained free of disease activity on MRI<sup>1</sup></b></span>",
      "caption": "<span style='color: #5b6770;'>No differences were seen between TECFIDERA and fingolimod in clinical or<br> radiographic effectiveness outcomes, over 3 years<sup>1</sup></span>",
      "bbl1Number": "<span style='color: #80276c;'><b>67.9</b></span>",
      "percentage1": "<span style='color: #80276c;'><b>%</b></span>",
      "bblDescription1": "<span style='color: #5b6770;'><b>TECFIDERA patients<br>were</b> <b style='color: #80276c;'>free from disease<br>activity</b> <b>on MRI<br>(vs </b> <b style='color: #78be20;'>68.1</b> <b>with fingolimod)</b><br>[OR=1.27, 95% CI (0.90–1.79),<br>p=0.171]<sup>1</sup></span>",
      "bbl2Number": "<span style='color: #80276c;'><b>86.9</b></span>",
      "percentage2": "<span style='color: #80276c;'><b>%</b></span>",
      "bblDescription2": "<span style='color: #5b6770;'><b>TECFIDERA patients were</b><br><b style='color: #80276c;'>free from Gd+ lesions</b><br> <b>(vs </b> <b style='color: #78be20;'>86.1</b> <b>with fingolimod)</b><br>[OR=0.99, 95% CI (0.74–1.32),<br>p=0.932]<sup>1</sup></span>",
      "bbl3Number": "<span style='color: #80276c;'><b>69.3</b></span>",
      "percentage3": "<span style='color: #80276c;'><b>%</b></span>",
      "bblDescription3": "<span style='color: #5b6770;'><b>TECFIDERA patients<br>were</b> <b style='color: #80276c;'>free from T2<br>hyperintense lesions</b><br> <b>(vs </b> <b style='color: #78be20;'>68.3</b> <b>with fingolimod)</b><br>[OR=0.99, 95% CI (0.74–1.31),<br>p=0.935]<sup>1</sup></span>",
      "caption2": "<span style='color: #5b6770;'>Tecfidera patients also showed overall <b style='color: #78be20;'>similar neuroperformance outcomes vs fingolimod,</b><br>including <b>walking speed</b>, <b>manual dexterity</b>, and <b>visual contrast sensitivity<sup>2</sup></b></span>",
      "footnote1": "<span style='color: #5b6770;'>Outcomes were assessed using propensity score weighting.<br>Real-world comparative effectiveness studies have all the caveats and limitations of observational studies. No head-to-head, randomized, controlled trials comparing the<br>effectiveness of TECFIDERA with these comparators in patients with RRMS have yet been conducted (exception GA – but not powered for statistical significance).</span>",
      "footnote2": "<span style='color: #5b6770;'><b>CI:</b> Confidence Interval; <b>GA:</b> Glatiramer Acetate; <b>Gd+:</b> Gadolinium-enhancing; <b>HR:</b> Hazard Ratio; <b>MRI:</b> Magnetic Resonance Imaging; <b>OR:</b> Odds Ratio;<br><b>RRMS:</b> Relapsing Remitting Multiple Sclerosis.</span>",
      "ribbonText1": "<b style='color: #ffffff;'>Real-world<br>evidence</b>",
      "ribbonText2": "<b style='color: #ffffff;'>IFN beta</b>",
      "ribbonText3": "<b style='color: #ffffff;'>Glatiramer Acetate</b>",
      "ribbonText4": "<b style='color: #ffffff;'>Teriflunomide</b>",
      "ribbonText5": "<b style='color: #ffffff;'>Relapses vs<br>fingolimod</b>",
      "ribbonText6": "<b style='color: #ffffff;'>Disability progression<br>vs fingolimod</b>",
      "ribbonText7": "<b style='color: #ffffff;'>MRI & neuroperformance<br>vs fingolimod</b>",
      "ribbonText8": "<b style='color: #ffffff;'>Network<br>meta-analysis</b>",
      "hiddenReferences": "<sup refs='ref88 ref89'></sup>"
    }
  }
</i18n>

<template>
  <wiz-slide
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
      <wiz-bg-container
        id="contentWrapper1"
        class="content-wrapper1"
      >
        <wiz-text
          id="caption"
          class="caption pa"
          :text="$t('caption')"
          :component-name="'caption'"
        ></wiz-text>
        <wiz-bg-container
          id="bubbleWrap1"
          class="bubble-wrapper pa"
          :component-name="'Bubble Wrap 1'"
        >
          <wiz-image
            id="icon"
            class="icon pa"
            src="./media/images/icon1.png"
            :component-name="'Icon'"
          ></wiz-image>
          <wiz-bg-bubble
            id="bubble1"
            class="bubbles"
            :arrow="''"
            :show-before-text="false"
            :show-after-text="false"
            :number="$t('bbl1Number')"
            :percentage="$t('percentage1')"
            :description="$t('bblDescription1')"
            :component-name="'Bubble 1'"
          ></wiz-bg-bubble>
        </wiz-bg-container>
        <wiz-bg-container
          id="bubbleWrap2"
          class="bubble-wrapper bubble-wrapper2 pa"
          :component-name="'Bubble Wrap 2'"
        >
          <wiz-image
            id="icon2"
            class="icon pa"
            src="./media/images/icon2.png"
            :component-name="'Icon 2'"
          ></wiz-image>
          <wiz-bg-bubble
            id="bubble2"
            class="bubbles"
            :arrow="''"
            :show-before-text="false"
            :show-after-text="false"
            :number="$t('bbl2Number')"
            :percentage="$t('percentage2')"
            :description="$t('bblDescription2')"
            :component-name="'Bubble 2'"
          ></wiz-bg-bubble>
        </wiz-bg-container>
        <wiz-bg-container
          id="bubbleWrap3"
          class="bubble-wrapper bubble-wrapper3 pa"
          :component-name="'Bubble Wrap 3'"
        >
          <wiz-image
            id="icon3"
            class="icon pa"
            src="./media/images/icon3.png"
            :component-name="'Icon 3'"
          ></wiz-image>
          <wiz-bg-bubble
            id="bubble3"
            class="bubbles"
            :arrow="''"
            :show-before-text="false"
            :show-after-text="false"
            :number="$t('bbl3Number')"
            :percentage="$t('percentage3')"
            :description="$t('bblDescription3')"
            :component-name="'Bubble 3'"
          ></wiz-bg-bubble>
        </wiz-bg-container>
        <wiz-text
          id="caption2"
          class="caption2 pa"
          :text="$t('caption2')"
          :component-name="'Caption 2'"
        ></wiz-text>
      </wiz-bg-container>
      <wiz-bg-ribbon
        id="ribbonMain"
        class="pa ribbon-main"
        v-bind="ribbonOptions"
        :index="6"
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
.wiz-slide .content-wrapper1 {
  width: 938px;
  height: 516px;
  transform: matrix(1, 0, 0, 1, -43, -53);
}
.wiz-slide .caption {
  font-size: 20px;
  line-height: 1.3;
  transform: matrix(1, 0, 0, 1, 44, 0);
}
.wiz-slide .bubble-wrapper {
  width: 268px;
  height: 351px;
  transform: matrix(1, 0, 0, 1, 49, 91);
}
.wiz-slide .icon {
  width: 83px;
  height: 83px;
  transform: matrix(1, 0, 0, 1, 85, 0);
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
  transform: matrix(1, 0, 0, 1, 6, 9);
}

.wiz-slide .bubbles::v-deep .arrow {
  display: none;
}

.wiz-slide .bubbles::v-deep .background {
  display: none;
}

.wiz-slide .bubbles::v-deep .number {
  width: 190px;
  font-size: 122px;
  font-family: 'DinProCondensed', sans-serif;
  letter-spacing: 3px;
  transform: matrix(1, 0, 0, 1, -19, -3);
}
.wiz-slide .bubbles::v-deep .percentage {
  font-size: 75px;
  font-family: 'DinProCondensed', sans-serif;
  transform: matrix(1, 0, 0, 1, -2, 5);
}

.wiz-slide .bubbles::v-deep .description {
  top: 57%;
  left: -1px;
  font-size: 15px;
  line-height: 19px;
  text-align: left;
}
.wiz-slide .bubbles::v-deep .description b {
  font-size: 18px;
}
.wiz-slide .bubble-wrapper2 {
  transform: matrix(1, 0, 0, 1, 345, 91);
}
.wiz-slide .bubble-wrapper3 {
  transform: matrix(1, 0, 0, 1, 640, 91);
}
.wiz-slide .caption2 {
  font-size: 18px;
  line-height: 1.3;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 109, 459);
}
.wiz-slide .footnote1 {
  transform: matrix(1, 0, 0, 1, -25, 89);
}

.wiz-slide .footnote2 {
  transform: matrix(1, 0, 0, 1, -25, 101);
}
.ribbon-main {
  z-index: 2;
}
.wiz-slide .ribbon-main::v-deep .wiz-text.placeholder {
  font-size: 15px;
}
.wiz-slide .wiz-bg-ribbon ::v-deep .list-item:nth-child(6) .item-text,
.wiz-slide .wiz-bg-ribbon ::v-deep .list-item:nth-child(7) .item-text{
  padding-top: 2px;
  font-size: 13px;
}
</style>
