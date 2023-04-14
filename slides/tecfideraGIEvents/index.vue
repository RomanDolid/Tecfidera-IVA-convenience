<i18n>
  {
    "eng": {
      "headline": "<span style='color: #80276c;'><b>Incidence of gastrointestinal events in the real world<sup>1</sup></b></span>",
      "ribbonTxt1": "<b style='color: #ffffff;'>Dosing</b>",
      "ribbonTxt2": "<b style='color: #ffffff;'>Monitoring</b>",
      "ribbonTxt3": "<b style='color: #ffffff;'>Immunity</b>",
      "ribbonTxt4": "<b style='color: #ffffff;'>Vaccinations</b>",
      "ribbonTxt5": "<b style='color: #ffffff;'>AE Profile</b>",
      "ribbonTxt6": "<b style='color: #ffffff;'>GI Events</b>",
      "ribbonTxt7": "<b style='color: #ffffff;'>Infections & malignancies</b>",
      "ribbonTxt8": "<b style='color: #ffffff;'>Flushing</b>",
      "caption": "<span style='color: #5b6770;'><b>Incidence of gastrointestinal adverse events over time<sup>1</sup></b><br>(n=809 patients from 65 sites)</span>",
      "verticalLegend": "<span style='color: #5b6770;'><b>Proportion of patients (%)</b></span>",
      "horizontalLegend": "<span style='color: #5b6770;'><b>Weeks after DMF initiation</b></span>",
      "vScale1": "<span style='color: #5b6770;'>40</span>",
      "vScale2": "<span style='color: #5b6770;'>30</span>",
      "vScale3": "<span style='color: #5b6770;'>20</span>",
      "vScale4": "<span style='color: #5b6770;'>10</span>",
      "vScale5": "<span style='color: #5b6770;'>0</span>",
      "bar1": "<span style='color: #5b6770;'>1</span>",
      "bar2": "<span style='color: #5b6770;'>2</span>",
      "bar3": "<span style='color: #5b6770;'>3</span>",
      "bar4": "<span style='color: #5b6770;'>4</span>",
      "bar5": "<span style='color: #5b6770;'>5</span>",
      "bar6": "<span style='color: #5b6770;'>6</span>",
      "bar7": "<span style='color: #5b6770;'>7</span>",
      "bar8": "<span style='color: #5b6770;'>8</span>",
      "bar9": "<span style='color: #5b6770;'>9</span>",
      "bar10": "<span style='color: #5b6770;'>10</span>",
      "bar11": "<span style='color: #5b6770;'>11</span>",
      "bar12": "<span style='color: #5b6770;'>12</span>",
      "barValue1": "<span style='color: #5b6770;'><b>38</b></span>",
      "barValue2": "<span style='color: #5b6770;'><b>15</b></span>",
      "barValue3": "<span style='color: #5b6770;'><b>13</b></span>",
      "barValue4": "<span style='color: #5b6770;'><b>8</b></span>",
      "barValue5": "<span style='color: #5b6770;'><b>7</b></span>",
      "barValue6": "<span style='color: #5b6770;'><b><1</b></span>",
      "barValue7": "<span style='color: #5b6770;'><b><1</b></span>",
      "barValue8": "<span style='color: #5b6770;'><b>2</b></span>",
      "barValue9": "<span style='color: #5b6770;'><b>2</b></span>",
      "barValue11": "<span style='color: #5b6770;'><b><1</b></span>",
      "note1": "<span style='color: #5b6770;'>Adapted from Min J <i>et al.</i> Neurol Ther. 2019;8(1):109-119.</span>",
      "note2": "<span style='color: #5b6770;'>Adapted from Min J <i>et al.</i> 2018.<sup>4</sup></span>",
      "listItem1": "<span style='color: #5b6770;'>The majority of GI AEs tend to begin early and usually <mark><b>within the first month</b></mark> (or 5 weeks) of treatment<sup>2</sup></span>",
      "listItem2": "<span style='color: #5b6770;'>Therefore, it is important <mark><b>GI counselling of patients occurs at or before treatment initiation<sup>1,3,4</sup></b></mark></span>",
      "listItem3": "<span style='color: #5b6770;'><mark><b>Patient counselling contributes to overcoming GI issues</b></mark> and leads to a decrease of therapy discontinuations<sup>1,3,4</sup></span>",
      "footnote": "<span style='color: #5b6770;'><b>GI:</b> Gastrointestinal; <b>AEs:</b> Adverse Events.</span>",
      "hiddenReferences": "<sup refs='ref18 ref66 ref116 ref52'></sup>"
    }
  }
</i18n>

<template>
  <wiz-slide
    @slideswipe.native="lockSwipe"
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
        class="pa content-wrapper"
        :component-name="'Content Wrapper'"
      >
        <wiz-image
          id="graph"
          class="pa graph"
          :src="'./media/images/graph.png'"
          :component-name="'Graph'"
        ></wiz-image>
        <wiz-text
          id="caption"
          class="pa caption"
          :text="$t('caption')"
          :component-name="'Graph caption'"
        ></wiz-text>
        <wiz-text
          id="verticalLegend"
          class="pa vertical-legend"
          :text="$t('verticalLegend')"
          :component-name="'Vertical Legend'"
        ></wiz-text>
        <wiz-bg-container
          id="vScaleWrapper"
          class="pa vertical-scale-wrapper"
          :component-name="'Vertical Scale Wrapper'"
        >
          <wiz-text
            id="vScale1"
            class="pa v-scale v-scale-1"
            :text="$t('vScale1')"
            :component-name="'Vertical Scale'"
          ></wiz-text>
          <wiz-text
            id="vScale2"
            class="pa v-scale v-scale-2"
            :text="$t('vScale2')"
            :component-name="'Vertical Scale'"
          ></wiz-text>
          <wiz-text
            id="vScale3"
            class="pa v-scale v-scale-3"
            :text="$t('vScale3')"
            :component-name="'Vertical Scale'"
          ></wiz-text>
          <wiz-text
            id="vScale4"
            class="pa v-scale v-scale-4"
            :text="$t('vScale4')"
            :component-name="'Vertical Scale'"
          ></wiz-text>
          <wiz-text
            id="vScale5"
            class="pa v-scale v-scale-5"
            :text="$t('vScale5')"
            :component-name="'Vertical Scale'"
          ></wiz-text>
        </wiz-bg-container>
        <wiz-bg-container
          id="barValueWrapper"
          class="pa bar-value-wrapper"
          :component-name="'Bar Value Wrapper'"
        >
          <wiz-text
            id="barValue1"
            class="pa bar-value bar-value-1"
            :text="$t('barValue1')"
            :component-name="'Bar Value'"
          ></wiz-text>
          <wiz-text
            id="barValue2"
            class="pa bar-value bar-value-2"
            :text="$t('barValue2')"
            :component-name="'Bar Value'"
          ></wiz-text>
          <wiz-text
            id="barValue3"
            class="pa bar-value bar-value-3"
            :text="$t('barValue3')"
            :component-name="'Bar Value'"
          ></wiz-text>
          <wiz-text
            id="barValue4"
            class="pa bar-value bar-value-4"
            :text="$t('barValue4')"
            :component-name="'Bar Value'"
          ></wiz-text>
          <wiz-text
            id="barValue5"
            class="pa bar-value bar-value-5"
            :text="$t('barValue5')"
            :component-name="'Bar Value'"
          ></wiz-text>
          <wiz-text
            id="barValue6"
            class="pa bar-value bar-value-6"
            :text="$t('barValue6')"
            :component-name="'Bar Value'"
          ></wiz-text>
          <wiz-text
            id="barValue7"
            class="pa bar-value bar-value-7"
            :text="$t('barValue7')"
            :component-name="'Bar Value'"
          ></wiz-text>
          <wiz-text
            id="barValue8"
            class="pa bar-value bar-value-8"
            :text="$t('barValue8')"
            :component-name="'Bar Value'"
          ></wiz-text>
          <wiz-text
            id="barValue9"
            class="pa bar-value bar-value-9"
            :text="$t('barValue9')"
            :component-name="'Bar Value'"
          ></wiz-text>
          <wiz-text
            id="barValue11"
            class="pa bar-value bar-value-11"
            :text="$t('barValue11')"
            :component-name="'Bar Value'"
          ></wiz-text>
        </wiz-bg-container>
        <wiz-text
          id="horizontalLegend"
          class="pa horizontal-legend"
          :text="$t('horizontalLegend')"
          :component-name="'Horizontal Legend'"
        ></wiz-text>
        <wiz-bg-container
          id="barWrapper"
          class="pa bar-wrapper"
          :component-name="'Bar Wrapper'"
        >
          <wiz-text
            id="bar1"
            class="pa bar bar-1"
            :text="$t('bar1')"
            :component-name="'Bar'"
          ></wiz-text>
          <wiz-text
            id="bar2"
            class="pa bar bar-2"
            :text="$t('bar2')"
            :component-name="'Bar'"
          ></wiz-text>
          <wiz-text
            id="bar3"
            class="pa bar bar-3"
            :text="$t('bar3')"
            :component-name="'Bar'"
          ></wiz-text>
          <wiz-text
            id="bar4"
            class="pa bar bar-4"
            :text="$t('bar4')"
            :component-name="'Bar'"
          ></wiz-text>
          <wiz-text
            id="bar5"
            class="pa bar bar-5"
            :text="$t('bar5')"
            :component-name="'Bar'"
          ></wiz-text>
          <wiz-text
            id="bar6"
            class="pa bar bar-6"
            :text="$t('bar6')"
            :component-name="'Bar'"
          ></wiz-text>
          <wiz-text
            id="bar7"
            class="pa bar bar-7"
            :text="$t('bar7')"
            :component-name="'Bar'"
          ></wiz-text>
          <wiz-text
            id="bar8"
            class="pa bar bar-8"
            :text="$t('bar8')"
            :component-name="'Bar'"
          ></wiz-text>
          <wiz-text
            id="bar9"
            class="pa bar bar-9"
            :text="$t('bar9')"
            :component-name="'Bar'"
          ></wiz-text>
          <wiz-text
            id="bar10"
            class="pa bar bar-10"
            :text="$t('bar10')"
            :component-name="'Bar'"
          ></wiz-text>
          <wiz-text
            id="bar11"
            class="pa bar bar-11"
            :text="$t('bar11')"
            :component-name="'Bar'"
          ></wiz-text>
          <wiz-text
            id="bar12"
            class="pa bar bar-12"
            :text="$t('bar12')"
            :component-name="'Bar'"
          ></wiz-text>
        </wiz-bg-container>
        <wiz-text
          id="listItem1"
          class="pa list-item list-item-1"
          :text="$t('listItem1')"
          :component-name="'List Item'"
        ></wiz-text>
        <wiz-text
          id="listItem2"
          class="pa list-item list-item-2"
          :text="$t('listItem2')"
          :component-name="'List Item'"
        ></wiz-text>
        <wiz-text
          id="listItem3"
          class="pa list-item list-item-3"
          :text="$t('listItem3')"
          :component-name="'List Item'"
        ></wiz-text>

        <wiz-text
          id="note1"
          class="pa note"
          :text="$t('note1')"
          :component-name="'Graph Note'"
        ></wiz-text>
        <wiz-text
          id="note2"
          class="pa note"
          :text="$t('note2')"
          :component-name="'Graph Note'"
        ></wiz-text>

        <wiz-container
          id="stateWrapper"
          class="pa state-wrapper"
          :component-name="'State Wrapper'"
        >
          <wiz-container
            id="state1Block"
            class="pa state-block state-1-block active"
            :component-name="'State'"
          ></wiz-container>
          <wiz-container
            id="state2Block"
            class="pa state-block state-2-block"
            :component-name="'State'"
          ></wiz-container>
        </wiz-container>
      </wiz-bg-container>
      <wiz-bg-ribbon
        id="ribbonMain"
        class="pa ribbon-main"
        v-bind="ribbonOptions"
        :index="5"
        :component-name="'Dropdown Menu'"
      >
      </wiz-bg-ribbon>
    </wiz-bg-grid-container>

    <wiz-bg-grid-container
      id="footnoteArea"
      class="footnote-area"
      :component-name="'Footnote Area'"
    >
      <wiz-bg-container
        id="footnoteWrapper"
        class="footnote-wrapper"
        :component-name="'Footnote Wrapper'"
      >
        <wiz-text
          id="footnote"
          class="pa footnote"
          :text="$t('footnote')"
          :component-name="'Footnote'"
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
  width: 630px;
  transform: matrix(1, 0, 0, 1, 0, 37);
}
.content-wrapper {
  width: 786px;
  height: 271px;
}
.caption {
  width: 451px;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 202, 0);
}

.wiz-slide .graph {
  width: 676px;
  height: 273px;
  transform: matrix(1, 0, 0, 1, 87, 35);
}

.vertical-legend {
  width: 164px;
  font-size: 14px;
  transform: matrix(0, -1, 1, 0, -42, 164);
}
.vertical-scale-wrapper {
  width: 17px;
  height: 300px;
  transform: matrix(1, 0, 0, 1, 64, 26);
}
.v-scale {
  width: 17px;
  font-size: 14px;
}
.v-scale-1 {
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.v-scale-2 {
  transform: matrix(1, 0, 0, 1, 0, 68);
}
.v-scale-3 {
  transform: matrix(1, 0, 0, 1, 0, 136);
}
.v-scale-4 {
  transform: matrix(1, 0, 0, 1, 0, 204);
}
.v-scale-5 {
  transform: matrix(1, 0, 0, 1, 7, 272);
}
.bar-value-wrapper {
  width: 658px;
  height: 284px;
  transform: matrix(1, 0, 0, 1, 106, 13);
}
.bar-value {
  width: 48px;
  font-size: 28px;
  font-family: 'DinProCondensed', sans-serif;
  text-align: center;
}
.bar-value-1 {
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.bar-value-2 {
  transform: matrix(1, 0, 0, 1, 55, 155);
}
.bar-value-3 {
  transform: matrix(1, 0, 0, 1, 109, 169);
}
.bar-value-4 {
  transform: matrix(1, 0, 0, 1, 163, 203);
}
.bar-value-5 {
  transform: matrix(1, 0, 0, 1, 217, 210);
}
.bar-value-6 {
  transform: matrix(1, 0, 0, 1, 272, 250);
}
.bar-value-7 {
  transform: matrix(1, 0, 0, 1, 326, 250);
}
.bar-value-8 {
  transform: matrix(1, 0, 0, 1, 380, 243);
}
.bar-value-9 {
  transform: matrix(1, 0, 0, 1, 435, 243);
}
.bar-value-11 {
  transform: matrix(1, 0, 0, 1, 543, 250);
}

.horizontal-legend {
  width: 168px;
  font-size: 14px;
  transform: matrix(1, 0, 0, 1, 344, 337);
}

.bar-wrapper {
  width: 658px;
  height: 15px;
  transform: matrix(1, 0, 0, 1, 106, 310);
}
.bar {
  width: 48px;
  font-size: 13px;
  text-align: center;
}
.bar-1 {
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.bar-2 {
  transform: matrix(1, 0, 0, 1, 55, 0);
}
.bar-3 {
  transform: matrix(1, 0, 0, 1, 109, 0);
}
.bar-4 {
  transform: matrix(1, 0, 0, 1, 163, 0);
}
.bar-5 {
  transform: matrix(1, 0, 0, 1, 217, 0);
}
.bar-6 {
  transform: matrix(1, 0, 0, 1, 272, 0);
}
.bar-7 {
  transform: matrix(1, 0, 0, 1, 326, 0);
}
.bar-8 {
  transform: matrix(1, 0, 0, 1, 380, 0);
}
.bar-9 {
  transform: matrix(1, 0, 0, 1, 435, 0);
}
.bar-10 {
  transform: matrix(1, 0, 0, 1, 489, 0);
}
.bar-11 {
  transform: matrix(1, 0, 0, 1, 543, 0);
}
.bar-12 {
  transform: matrix(1, 0, 0, 1, 597, 0);
}

.list-item {
  width: 850px;
  font-size: 20px;
  line-height: 1.1;
  transform: matrix(1, 0, 0, 1, 16, 378);
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
.list-item::v-deep mark {
  background: transparent;
  color: #78be20;
}
.list-item-2 {
  transform: matrix(1, 0, 0, 1, 16, 432);
}
.list-item-3 {
  transform: matrix(1, 0, 0, 1, 16, 464);
}

.note {
  width: 252px;
  font-size: 10px;
}
#note1 {
  transform: matrix(1, 0, 0, 1, 4, 350);
}
#note2 {
  transform: matrix(1, 0, 0, 1, -25, 546);
}

.state-wrapper {
  width: 52px;
  height: 8px;
  transform: matrix(1, 0, 0, 1, 402, 548);
}

.state-block {
  width: 18px;
  height: 8px;
  border: 1px solid #7c878e;
  background-color: #fff;
}

.state-block.active {
  border-color: #00a3e0;
  background-color: #00a3e0;
}

.state-1-block {
  transform: matrix(1, 0, 0, 1, 0, 0);
}

.state-2-block {
  transform: matrix(1, 0, 0, 1, 32, 0);
}

.footnote {
  width: 185px;
  transform: matrix(1, 0, 0, 1, -25, 149);
}
</style>
