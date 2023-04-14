<i18n>
  {
    "eng": {
      "headline": "<span style='color: #80276c;'><b>Comparative evidence shows consistent results for TECFIDERA<br>across multiple real-world studies<sup>1-5</sup></b></span>",
      "caption1": "<span style='color: #78be20;'><b>Significant reduction<br>in time to first relapse<br>relative to:</b></span>",
      "list1Item": "<span style='color: #5b6770;'>IFNs<sup>1</sup></span>",
      "list2Item": "<span style='color: #5b6770;'>Glatiramer acetate<sup>1</sup></span>",
      "list3Item": "<span style='color: #5b6770;'>Teriflunomide<sup>1</sup></span>",
      "caption2": "<span style='color: #00a3e0;'><b>Similar effectiveness;<br>relative to fingolimod<br>regarding:</b></span>",
      "list4Item": "<span style='color: #5b6770;'>Relapses<sup>2</sup></span>",
      "list5Item": "<span style='color: #5b6770;'>Disability progression<sup>2</sup></span>",
      "list6Item": "<span style='color: #5b6770;'>MRI and neuroperformance<br>outcomes<sup>3,4</sup></span>",
      "list7Item": "<span style='color: #80276c;'><b>Robust network meta-analysis of real-world data shows<br>consistent results for TECFIDERA<sup>5</sup></b></span>",
      "footnote1": "<span style='color: #5b6770;'>This data comes from retrospective studies. The analyses does not reach the level of evidence of randomised blinded studies.<br>Real-world comparative effectiveness studies have all the caveats and limitations of observational studies. No head-to-head, randomized, controlled trials comparing the<br>effectiveness of TECFIDERA with these comparators in patients with RRMS have yet been conducted (exception GA – but not powered for statistical significance).</span>",
      "footnote2": "<span style='color: #5b6770;'><b>GA:</b> Glatiramer Acetate; <b>IFNs:</b> Interferons; <b>MRI:</b> Magnetic Resonance Imaging; <b>RRMS:</b> Relapsing Remitting Multiple Sclerosis.<b></span>",
      "ribbonText1": "<b style='color: #ffffff;'>Real-world<br>evidence</b>",
      "ribbonText2": "<b style='color: #ffffff;'>IFN beta</b>",
      "ribbonText3": "<b style='color: #ffffff;'>Glatiramer Acetate</b>",
      "ribbonText4": "<b style='color: #ffffff;'>Teriflunomide</b>",
      "ribbonText5": "<b style='color: #ffffff;'>Relapses vs<br>fingolimod</b>",
      "ribbonText6": "<b style='color: #ffffff;'>Disability progression<br>vs fingolimod</b>",
      "ribbonText7": "<b style='color: #ffffff;'>MRI & neuroperformance<br>vs fingolimod</b>",
      "ribbonText8": "<b style='color: #ffffff;'>Network<br>meta-analysis</b>",
      "hiddenReferences": "<sup refs='ref86 ref87 ref88 ref89 ref90'></sup>"
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
        <wiz-image
          id="map"
          class="map-image pa"
          src="./media/images/map.png"
          :component-name="'Map Image'"
        ></wiz-image>
        <wiz-bg-container
          id="wrap1"
          class="wrap1 pa"
          :component-name="'Wrap 1'"
        >
          <wiz-text
            id="caption1"
            class="caption1 caption pa"
            :text="$t('caption1')"
            :component-name="'Caption 1'"
          ></wiz-text>
          <wiz-bg-container
            id="listWrap1"
            v-goto="toSlide1"
            class="list-wrap1 pa"
            :component-name="'List Wrap 1'"
          >
            <wiz-image
              id="icon1"
              class="icon pa"
              src="./media/images/icon.png"
              :component-name="'Icon 1'"
            ></wiz-image>
            <wiz-text
              id="list1Item1"
              class="list-item pa"
              :text="$t('list1Item')"
              :component-name="'List 1 Item'"
            ></wiz-text>
          </wiz-bg-container>
          <wiz-bg-container
            id="listWrap2"
            v-goto="toSlide2"
            class="list-wrap2 pa"
            :component-name="'List Wrap 2'"
          >
            <wiz-image
              id="icon2"
              class="icon pa"
              src="./media/images/icon.png"
              :component-name="'Icon 2'"
            ></wiz-image>
            <wiz-text
              id="list2Item1"
              class="list-item pa"
              :text="$t('list2Item')"
              :component-name="'List 2 Item'"
            ></wiz-text>
          </wiz-bg-container>
          <wiz-bg-container
            id="listWrap3"
            v-goto="toSlide3"
            class="list-wrap3 pa"
            :component-name="'List Wrap 3'"
          >
            <wiz-image
              id="icon3"
              class="icon pa"
              src="./media/images/icon.png"
              :component-name="'Icon 3'"
            ></wiz-image>
            <wiz-text
              id="list3Item1"
              class="list-item pa"
              :text="$t('list3Item')"
              :component-name="'List 3 Item'"
            ></wiz-text>
          </wiz-bg-container>
        </wiz-bg-container>
        <wiz-bg-container
          id="wrap2"
          class="wrap2 pa"
          :component-name="'Wrap 2'"
        >
          <wiz-text
            id="caption2"
            class="caption2 caption pa"
            :text="$t('caption2')"
            :component-name="'Caption 2'"
          ></wiz-text>
          <wiz-bg-container
            id="listWrap4"
            v-goto="toSlide4"
            class="list-wrap1 pa"
            :component-name="'List Wrap 4'"
          >
            <wiz-image
              id="icon4"
              class="icon pa"
              src="./media/images/icon.png"
              :component-name="'Icon 4'"
            ></wiz-image>
            <wiz-text
              id="list4Item1"
              class="list-item pa"
              :text="$t('list4Item')"
              :component-name="'List 4 Item'"
            ></wiz-text>
          </wiz-bg-container>
          <wiz-bg-container
            id="listWrap5"
            v-goto="toSlide5"
            class="list-wrap5 pa"
            :component-name="'List Wrap 5'"
          >
            <wiz-image
              id="icon5"
              class="icon pa"
              src="./media/images/icon.png"
              :component-name="'Icon 5'"
            ></wiz-image>
            <wiz-text
              id="list5Item1"
              class="list-item pa"
              :text="$t('list5Item')"
              :component-name="'List 5 Item'"
            ></wiz-text>
          </wiz-bg-container>
          <wiz-bg-container
            id="listWrap6"
            v-goto="toSlide6"
            class="list-wrap6 pa"
            :component-name="'List Wrap 6'"
          >
            <wiz-image
              id="icon6"
              class="icon icon6 pa"
              src="./media/images/icon.png"
              :component-name="'Icon 6'"
            ></wiz-image>
            <wiz-text
              id="list6Item1"
              class="list-item list-item6 pa"
              :text="$t('list6Item')"
              :component-name="'List 6 Item'"
            ></wiz-text>
          </wiz-bg-container>
        </wiz-bg-container>
        <wiz-bg-container
          id="listWrap7"
          v-goto="toSlide7"
          class="list-wrap7 pa"
          :component-name="'List Wrap 7'"
        >
          <wiz-image
            id="icon7"
            class="icon icon7 pa"
            src="./media/images/icon.png"
            :component-name="'Icon 7'"
          ></wiz-image>
          <wiz-text
            id="list7Item1"
            class="list-item7 pa"
            :text="$t('list7Item')"
            :component-name="'List 7 Item'"
          ></wiz-text>
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
        slide: 'tecfideraEfficacy',
        chapter: 'efficacy',
      },
      toSlide1: {
        slide: 'tecfideraTecRWE2',
        chapter: 'slidesPopup',
      },
      toSlide2: {
        slide: 'tecfideraTecRWE3',
        chapter: 'slidesPopup',
      },
      toSlide3: {
        slide: 'tecfideraTecRWE4',
        chapter: 'slidesPopup',
      },
      toSlide4: {
        slide: 'tecfideraTecRWE5',
        chapter: 'slidesPopup',
      },
      toSlide5: {
        slide: 'tecfideraTecRWE6',
        chapter: 'slidesPopup',
      },
      toSlide6: {
        slide: 'tecfideraTecRWE7',
        chapter: 'slidesPopup',
      },
      toSlide7: {
        slide: 'tecfideraTecRWE8',
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
.wiz-bg-grid-container.content-area{
  z-index: 2;
}
.wiz-slide .content-wrapper1 {
  width: 874px;
  height: 457px;
  transform: matrix(1, 0, 0, 1, 8, 26);
}
.wiz-slide .map-image {
  width: 842px;
  height: 400px;
}
.wiz-slide .wrap1 {
  width: 326px;
  height: 319px;
  transform: matrix(1, 0, 0, 1, 77, 26);
}
.wiz-slide .caption {
  font-size: 30px;
  line-height: 1.1;
}
.wiz-slide .list-wrap1 {
  width: 139px;
  height: 42px;
  transform: matrix(1, 0, 0, 1, 0, 152);
}
.wiz-slide .icon {
  width: 24px;
  height: 22px;
  transform: matrix(1, 0, 0, 1, 0, 6);
}
.wiz-slide .list-item {
  width: 283px;
  font-weight: 700;
  font-size: 30px;
  font-family: 'DinProCondensed', sans-serif;
  line-height: 1;
  transform: matrix(1, 0, 0, 1, 35, 0);
}
.wiz-slide .list-wrap2 {
  width: 239px;
  height: 42px;
  transform: matrix(1, 0, 0, 1, 0, 208);
}
.wiz-slide .list-wrap3 {
  width: 219px;
  height: 42px;
  transform: matrix(1, 0, 0, 1, 0, 264);
}
.wiz-slide .wrap2 {
  width: 326px;
  height: 330px;
  transform: matrix(1, 0, 0, 1, 499, 26);
}
.wiz-slide .list-wrap5 {
  width: 290px;
  height: 42px;
  transform: matrix(1, 0, 0, 1, 0, 208);
}
.wiz-slide .list-wrap6 {
  width: 314px;
  height: 74px;
  transform: matrix(1, 0, 0, 1, 0, 261);
}
.wiz-slide .icon6 {
  transform: matrix(1, 0, 0, 1, 0, 9);
}
.wiz-slide .list-item6 {
  line-height: 1.2;
}
.wiz-slide .list-wrap7 {
  width: 689px;
  height: 57px;
  transform: matrix(1, 0, 0, 1, 77, 386);
}
.wiz-slide .list-item7 {
  width: 637px;
  font-size: 25px;
  line-height: 1;
  transform: matrix(1, 0, 0, 1, 37, 0);
}
.wiz-slide .icon7 {
  transform: matrix(1, 0, 0, 1, 0, 2);
}
.wiz-slide .footnote1 {
  transform: matrix(1, 0, 0, 1, -25, 102);
}

.wiz-slide .footnote2 {
  transform: matrix(1, 0, 0, 1, -25, 114);
}
.ribbon-main {
  z-index: 2;
}
.wiz-slide .wiz-bg-ribbon ::v-deep .list-item:nth-child(6) .item-text,
.wiz-slide .wiz-bg-ribbon ::v-deep .list-item:nth-child(7) .item-text{
  padding-top: 2px;
  font-size: 13px;
}
</style>
