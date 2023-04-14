<i18n>
  {
    "eng": {
      "headline": "<span style='color: #80276c;'><b>Management of gastrointestinal events<sup>1,2</sup></b></span>",
      "ribbonTxt1": "<b style='color: #ffffff;'>Dosing</b>",
      "ribbonTxt2": "<b style='color: #ffffff;'>Monitoring</b>",
      "ribbonTxt3": "<b style='color: #ffffff;'>Immunity</b>",
      "ribbonTxt4": "<b style='color: #ffffff;'>Vaccinations</b>",
      "ribbonTxt5": "<b style='color: #ffffff;'>AE Profile</b>",
      "ribbonTxt6": "<b style='color: #ffffff;'>GI Events</b>",
      "ribbonTxt7": "<b style='color: #ffffff;'>Infections & malignancies</b>",
      "ribbonTxt8": "<b style='color: #ffffff;'>Flushing</b>",
      "list1Item1": "<span style='color: #5b6770;'>For patients who may experience flushing or GI adverse reactions, taking<br>TECFIDERA with food (particularly high-protein, low-starch, and high-fat<br>food) may improve tolerability<sup>2,4</sup></span>",
      "list2Item1": "<span style='color: #5b6770;'>Temporary dose reductions to 120 mg twice daily or applying a longer<br>titration period before reaching the maintenance dose may help reduce the<br>occurrence of GI events<sup>2,4</sup></span>",
      "list2Item2": "<span style='color: #5b6770;'>Resume the recommended 240 mg twice a day within 1 month<sup>2</sup></span>",
      "list3Item1": "<span style='color: #5b6770;'>Patient counselling contributes to overcoming GI issues and<br>leads to a decrease of therapy discontinuations<sup>1,3,4</sup></span>",
      "list3Item2": "<span style='color: #5b6770;'>Another HCP* counselling, in addition to prescriber counselling, providing<br>specific details about GI events and recommendations about how to mitigate<br>them appears to reduce the burden<sup>1,4</sup></span>",
      "footnote": "<span style='color: #5b6770;'>* Another HCP in addition to the prescriber could include a registered nurse, physician, nurse practitioner, physician assistant, or pharmacist.<br><b>GI:</b> Gastrointestinal; <b>HCP:</b> Health Care Professional; <b>MS:</b> Multiple Sclerosis.</span>",
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
          id="img1"
          class="pa img img-1"
          :src="'./media/images/img1.png'"
          :component-name="'Image'"
        ></wiz-image>
        <wiz-text
          id="list1Item1"
          class="pa list-item list-1-item-1"
          :text="$t('list1Item1')"
          :component-name="'List Item'"
        ></wiz-text>
        <wiz-image
          id="img2"
          class="pa img img-2"
          :src="'./media/images/img2.png'"
          :component-name="'Image'"
        ></wiz-image>
        <wiz-text
          id="list2Item1"
          class="pa list-item list-2-item-1"
          :text="$t('list2Item1')"
          :component-name="'List Item'"
        ></wiz-text>
        <wiz-text
          id="list2Item2"
          class="pa list-item list-2-item-2"
          :text="$t('list2Item2')"
          :component-name="'List Item'"
        ></wiz-text>
        <wiz-image
          id="img3"
          class="pa img img-3"
          :src="'./media/images/img3.png'"
          :component-name="'Image'"
        ></wiz-image>
        <wiz-text
          id="list3Item1"
          class="pa list-item list-3-item-1"
          :text="$t('list3Item1')"
          :component-name="'List Item'"
        ></wiz-text>
        <wiz-text
          id="list3Item2"
          class="pa list-item list-3-item-2"
          :text="$t('list3Item2')"
          :component-name="'List Item'"
        ></wiz-text>
        <wiz-container
          id="stateWrapper"
          class="pa state-wrapper"
          :component-name="'State Wrapper'"
        >
          <wiz-container
            id="state1Block"
            class="pa state-block state-1-block"
            :component-name="'State'"
          ></wiz-container>
          <wiz-container
            id="state2Block"
            class="pa state-block state-2-block active"
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
              slide: 'tecfideraGIEvents2',
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
  width: 630px;
  transform: matrix(1, 0, 0, 1, 0, 37);
}
.content-wrapper {
  width: 786px;
  height: 271px;
}
.list-item {
  width: 680px;
  font-size: 20px;
  line-height: 1.1;
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
.list-1-item-1 {
  transform: matrix(1, 0, 0, 1, 184, 38);
}
.list-2-item-1 {
  transform: matrix(1, 0, 0, 1, 184, 163);
}
.list-2-item-2 {
  transform: matrix(1, 0, 0, 1, 184, 244);
}
.list-3-item-1 {
  transform: matrix(1, 0, 0, 1, 184, 347);
}
.list-3-item-2 {
  transform: matrix(1, 0, 0, 1, 184, 406);
}
.img{
  position: absolute;
  top: 0;
  left: 0;
}
#img1{
  width: 48px;
  height: 92px;
  transform: matrix(1, 0, 0, 1, 67, 25);
}
#img2{
  width: 68px;
  height: 68px;
  transform: matrix(1, 0, 0, 1, 57, 180);
}
#img3{
  width: 85px;
  height: 96px;
  transform: matrix(1, 0, 0, 1, 48, 361);
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
  width: 640px;
  transform: matrix(1, 0, 0, 1, -25, 138);
}
</style>
