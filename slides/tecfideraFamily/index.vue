<i18n>
  {
    "eng": {
      "headline": "<span style='color: #80276c;'><b>Control and flexibility to help meet your patient’s family planning<br> needs<sup>1-9</sup></b></span>",
      "hiddenReferences": "<sup refs='ref66 ref36 ref37 ref38 ref39 ref40 ref41 ref43 ref44 ref45 ref46 ref47 ref42 ref5'></span>",
      "subtitle": "<span style='color: #5b6770;'>TECFIDERA should only be used during pregnancy if clearly needed and if the potential benefit<br>outweighs the potential risk to the foetus.<sup>1</sup></span>",
      "list1": "<span style='color: #5b6770;'><b><span style='color: #78be20;'>Stabilizing her disease</span></b> with an <b><span style='color: #78be20;'>effective DMT</span></b> before<br>conceiving may reduce the risk of postpartum relapse.<sup>2,3</sup></span>",
      "list2": "<span style='color: #5b6770;'><b><span style='color: #78be20;'>TECFIDERA demonstrated significantly reduced<br>measures of disease activity</span></b> vs placebo in newly<br>diagnosed patients with RRMS (p<0.0001 for ARR,<br>risk of relapse and disability progression).<sup>4</sup></span>",
      "list3": "<span style='color: #5b6770;'>No evidence of interaction with oral contraceptives.<sup>1*</sup></span>",
      "list4": "<span style='color: #5b6770;'>There are no clinical data on the effects of<br>TECFIDERA on human fertility.<sup>1</sup></span>",
      "list5": "<span style='color: #5b6770;'>TECFIDERA is currently the <b><span style='color: #78be20;'>only oral DMT in RRMS<br>that is not contraindicated during pregnancy.<sup>1,10-12</sup></span></b></span>",
      "list6": "<span style='color: #5b6770;'>Whether pregnancy was planned or unplanned, <b><span style='color: #78be20;'>no<br>extended washout</b></span> period is needed with TECFIDERA.<sup>1,5</sup></span>",
      "list7": "<span style='color: #5b6770;'>The half-life of TECFIDERA is short (approximately 1 hour)<br> and<b><span style='color: #78be20;'> no circulating DMF is present after 24 hours</span></b> in the<br>majority of individuals.<sup>1</sup></span>",
      "list8": "<span style='color: #5b6770;'><b><span style='color: #78be20;'>No additional safety signals</span></b> were observed to date for<br>TECFIDERA exposure <b><span style='color: #78be20;'>in relation to pregnancy outcomes,</span></b><br>consistent with previous reports.<sup>6-9</sup></span>",
      "list9": "<span style='color: #5b6770;'>The <b><span style='color: #78be20;'>pregnancy outcome frequencies</span></b> from the interim<br>analysis of an international registry with 263 patients<br>did not exceed those observed in the MS and general<br>populations.<sup>9</sup></span>",
      "list10": "<span style='color: #5b6770;'>Reinitiating an effective DMT may be a priority after<br>giving birth to <b><span style='color: #78be20;'>reduce risk of postpartum relapse.<sup>13</sup></span></b></span>",
      "list11": "<span style='color: #5b6770;'>TECFIDERA delivers sustained efficacy <b><span style='color: #78be20;'>over 9 years<br>of treatment<sup>14</sup></span></b> allowing her to focus on what really<br>matters.</span>",
      "list12": "<span style='color: #5b6770;'>It is unknown whether TECFIDERA or its metabolites<br>are excreted in human milk. <b><span style='color: #78be20;'>The benefit of breast-<br>feeding for the child and the benefit of therapy for the<br>woman should be taken into account.<sup>1</sup></span></b></span>",
      "footnote": "<span style='color: #5b6770;'>* Norgestimate and ethinyl estradiol.</span>",
      "tab1": "<b>Before pregnancy</b>",
      "tab2": "<b>During pregnancy</b>",
      "tab3": "<b>After pregnancy</b>"
    }
  }
</i18n>

<template>
  <wiz-slide
    @slideswipe.native.stop
  >
    <layouts :layouts="[{name: 'logo'},{name: 'top-image' }]"></layouts>
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
        <wiz-text
          id="subtitle"
          class="pa subtitle"
          :text="$t('subtitle')"
        ></wiz-text>
      </wiz-bg-container>
    </wiz-bg-grid-container>

    <wiz-bg-grid-container
      id="contentArea"
      class="content-area"
      :component-name="'Content area'"
    >
      <wiz-bg-sliding-content
        class="pa sliding-content-area"
        v-bind="optionsContent"
        :component-name="'Sliding Content Area'"
      >
        <wiz-bg-container
          id="contentWrapper1"
          slot="0"
          class="pa content-wrapper"
          :component-name="'Content Wrapper'"
        >
          <wiz-image
            id="bg1"
            class="pa bg-1"
            :src="'./media/images/bg1.jpg'"
            :component-name="'Background image'"
          ></wiz-image>
          <wiz-text
            id="list1"
            class="pa lists list-1"
            :text="$t('list1')"
            :component-name="'List wrapper'"
          ></wiz-text>
          <wiz-text
            id="list2"
            class="pa lists list-2"
            :text="$t('list2')"
            :component-name="'List wrapper'"
          ></wiz-text>
          <wiz-text
            id="list3"
            class="pa lists list-3"
            :text="$t('list3')"
            :component-name="'List wrapper'"
          ></wiz-text>
          <wiz-text
            id="list4"
            class="pa lists list-4"
            :text="$t('list4')"
            :component-name="'List wrapper'"
          ></wiz-text>
        </wiz-bg-container>
        <wiz-bg-container
          id="contentWrapper2"
          slot="1"
          class="pa content-wrapper"
          :component-name="'Content Wrapper'"
        >
          <wiz-image
            id="bg2"
            class="pa bg-2"
            :src="'./media/images/bg2.jpg'"
            :component-name="'Background image'"
          ></wiz-image>
          <wiz-text
            id="list5"
            class="pa lists list-5"
            :text="$t('list5')"
            :component-name="'List wrapper'"
          ></wiz-text>
          <wiz-text
            id="list6"
            class="pa lists list-6"
            :text="$t('list6')"
            :component-name="'List wrapper'"
          ></wiz-text>
          <wiz-text
            id="list7"
            class="pa lists list-7"
            :text="$t('list7')"
            :component-name="'List wrapper'"
          ></wiz-text>
          <wiz-text
            id="list8"
            class="pa lists list-8"
            :text="$t('list8')"
            :component-name="'List wrapper'"
          ></wiz-text>
          <wiz-text
            id="list9"
            class="pa lists list-9"
            :text="$t('list9')"
            :component-name="'List wrapper'"
          ></wiz-text>
        </wiz-bg-container>
        <wiz-bg-container
          id="contentWrapper3"
          slot="2"
          class="pa content-wrapper"
          :component-name="'Content Wrapper'"
        >
          <wiz-image
            id="bg3"
            class="pa bg-3"
            :src="'./media/images/bg3.jpg'"
            :component-name="'Background image'"
          ></wiz-image>
          <wiz-text
            id="list10"
            class="pa lists list-10"
            :text="$t('list10')"
            :component-name="'List wrapper'"
          ></wiz-text>
          <wiz-text
            id="list11"
            class="pa lists list-11"
            :text="$t('list11')"
            :component-name="'List wrapper'"
          ></wiz-text>
          <wiz-text
            id="list12"
            class="pa lists list-12"
            :text="$t('list12')"
            :component-name="'List wrapper'"
          ></wiz-text>
        </wiz-bg-container>
      </wiz-bg-sliding-content>
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
        slide: 'tecfideraFlexibility',
        chapter: 'flexibility',
      },
      optionsContent: {
        activeState: 0,
        states: [
          {
            stateTitle: this.$t('tab1'),
            showImage: false,
          },
          {
            stateTitle: this.$t('tab2'),
            showImage: false,
          },
          {
            stateTitle: this.$t('tab3'),
            showImage: false,
          },
        ],
      },
    };
  },
};
</script>
<style scoped>
.wiz-bg-close-popup-button.close-popup.close-popup-slide {
  transform: matrix(1, 0, 0, 1, 950, -306);
}

.wiz-slide .wiz-bg-sliding-content {
  overflow: visible;
}

#headerArea {
  z-index: 2;
}

.headline {
  font-size: 35px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}

.subtitle {
  font-size: 20px;
  line-height: 1.1;
  transform: matrix(1, 0, 0, 1, 1, 78);
}

.sliding-content-area {
  z-index: 5;
}

.footnote-area {
  z-index: 2;
}

.wiz-bg-container {
  width: 1024px;
  height: 350px;
}

.wiz-image.bg-1 {
  width: 980px;
  height: 546px;
  transform: matrix(1, 0, 0, 1, -40, -90);
}

.wiz-image.bg-2 {
  width: 980px;
  height: 546px;
  transform: matrix(1, 0, 0, 1, -40, -90);
}

.wiz-image.bg-3 {
  width: 980px;
  height: 546px;
  transform: matrix(1, 0, 0, 1, -40, -90);
}

.wiz-image.icon {
  width: 40px;
  height: 33px;
}

.lists {
  display: flex;
  flex-direction: row;
  width: 530px;
  font-size: 20px;
  line-height: 1.1;
}

.lists::before {
  content: '•';
  width: 7px;
  height: 7px;
  margin-top: 1px;
  margin-right: 9px;
  color: #3ca4df;
}

.list-1 {
  transform: matrix(1, 0, 0, 1, 349, 90);
}

.list-2 {
  transform: matrix(1, 0, 0, 1, 349, 149);
}

.list-3 {
  transform: matrix(1, 0, 0, 1, 349, 255);
}

.list-4 {
  transform: matrix(1, 0, 0, 1, 349, 291);
}

.list-5 {
  transform: matrix(1, 0, 0, 1, 349, 26);
}

.list-6 {
  transform: matrix(1, 0, 0, 1, 349, 85);
}

.list-7 {
  transform: matrix(1, 0, 0, 1, 349, 145);
}

.list-8 {
  transform: matrix(1, 0, 0, 1, 349, 226);
}

.list-9 {
  transform: matrix(1, 0, 0, 1, 349, 308);
}

.list-10 {
  transform: matrix(1, 0, 0, 1, 350, 99);
}

.list-11 {
  transform: matrix(1, 0, 0, 1, 350, 157);
}

.list-12 {
  transform: matrix(1, 0, 0, 1, 350, 240);
}

.footnote {
  transform: matrix(1, 0, 0, 1, -24, 149);
}

.wiz-slide .wiz-bg-sliding-content::v-deep .nav-wrapper:before {
  top: -60px;
  height: 60px;
}
.wiz-slide .wiz-bg-sliding-content::v-deep .nav-wrapper {
  width: 700px;
  transform: matrix(1, 0, 0, 1, -68, 0);
}

.wiz-bg-grid-container.footnote-area {
  z-index: 0;
}

</style>
