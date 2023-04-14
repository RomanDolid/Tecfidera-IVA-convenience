<i18n>
  {
    "eng": {
      "headline": "<span style='color: #80276c;'><b>Fatigue and cognitive dysfunction directly impact RRMS patients’<br>quality of life even when no physical disability is present<sup>1,2</sup></b></span>",
      "ribbon1": "<b style='color: #ffffff;'>Impact of MS on QoL</b>",
      "ribbon2": "<b style='color: #ffffff;'>PROs at 1 year</b>",
      "ribbon3": "<b style='color: #ffffff;'>PROs stable long-term</b>",
      "ribbon4": "<b style='color: #ffffff;'>Patient support</b>",
      "ribbon5": "<b style='color: #ffffff;'>≥55 age group</b>",
      "caption": "<span style='color: #5b6770;'>RRMS patients themselves,<br>reported that fatigue and cognitive<br>impairment* are closely linked with:</span>",
      "list1": "<span style='color: #80276c;'><b>Quality of life<sup>2</sup></b></span>",
      "list2": "<span style='color: #80276c;'><b>Employment<sup>1</sup></b></span>",
      "list3": "<span style='color: #80276c;'><b>Productivity<sup>1,2</sup></b></span>",
      "list4": "<span style='color: #80276c;'><b>Number of hours worked regularly<sup>1,2</sup></b></span>",
      "list5": "<span style='color: #80276c;'><b>Number of days sick leave<sup>1,2</sup></b></span>",
      "description": "<span style='color: #5b6770;'><b><mark>Fatigue and cognitive impairment<br>can also impact healthcare resource<br>utilization,</mark> such as visits to the doctor<br>and cost of family assistance.<sup>2</sup></b></span>",
      "footnote1": "<span style='color: #5b6770;'>* Self-assessed on a visual analogue scale.</span>",
      "footnote2": "<span style='color: #5b6770;'>The above conditions are not licensed indications for Tecfidera. Tecfidera is licensed for the treatment of adult patients with relapsing remitting multiple sclerosis.</span>",
      "footnote3": "<span style='color: #5b6770;'><b>RRMS:</b> Relapsing Remitting Multiple Sclerosis; <b>QoL:</b> Quality of Life.</span>",
      "hiddenReferences": "<sup refs='ref72 ref73'></span>"
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
          class="headline"
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
          id="bg"
          class="pa bg"
          :src="'./media/images/bg.jpg'"
          :component-name="'Background'"
        ></wiz-image>
        <wiz-text
          id="caption"
          class="pa caption"
          :text="$t('caption')"
          :component-name="'Caption'"
        ></wiz-text>
        <wiz-text
          id="list1"
          class="pa list list-1"
          :text="$t('list1')"
          :component-name="'List Item'"
        ></wiz-text>
        <wiz-text
          id="list2"
          class="pa list list-2"
          :text="$t('list2')"
          :component-name="'List Item'"
        ></wiz-text>
        <wiz-text
          id="list3"
          class="pa list list-3"
          :text="$t('list3')"
          :component-name="'List Item'"
        ></wiz-text>
        <wiz-text
          id="list4"
          class="pa list list-4"
          :text="$t('list4')"
          :component-name="'List Item'"
        ></wiz-text>
        <wiz-text
          id="list5"
          class="pa list list-5"
          :text="$t('list5')"
          :component-name="'List Item'"
        ></wiz-text>
        <wiz-text
          id="description"
          class="pa description"
          :text="$t('description')"
          :component-name="'Description'"
        ></wiz-text>
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
      >
        <wiz-text
          id="footnote1"
          class="pa footnote footnote-1"
          :text="$t('footnote1')"
          :component-name="'Footnote'"
        ></wiz-text>
        <wiz-text
          id="footnote2"
          class="pa footnote footnote-2"
          :text="$t('footnote2')"
          :component-name="'Footnote'"
        ></wiz-text>
        <wiz-text
          id="footnote3"
          class="pa footnote footnote-3"
          :text="$t('footnote3')"
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
        // where to go when closing popup
        slide: 'tecfideraEfficacy',
        chapter: 'efficacy',
      },
      ribbonOptions: {
        openIconImage: './common/media/images/indicator-active.png',
        closeIconImage: './common/media/images/indicator.png',
        items: [
          {
            name: this.$t('ribbon1'),
            slide: {
              slide: 'tecfideraTecPRO3',
              chapter: 'slidesPopup',
            },
          },
          {
            name: this.$t('ribbon2'),
            slide: {
              slide: 'tecfideraTecPRO4',
              chapter: 'slidesPopup',
            },
            animation: true,
          },
          {
            name: this.$t('ribbon3'),
            slide: {
              slide: 'tecfideraTecPRO5',
              chapter: 'slidesPopup',
            },
            animation: true,
          },
          {
            name: this.$t('ribbon4'),
            slide: {
              slide: 'tecfideraTecPRO6',
              chapter: 'slidesPopup',
            },
            animation: true,
          },
          {
            name: this.$t('ribbon5'),
            slide: {
              slide: 'tecfideraTecPRO7',
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
.ribbon-main {
  z-index: 2;
}
.ribbon-main::v-deep .wiz-text.placeholder {
  width: 129px;
}
.content-wrapper {
  width: 1024px;
  height: 456px;
}
.bg {
  width: 628px;
  height: 456px;
  transform: matrix(1, 0, 0, 1, -42, 2);
}

.caption {
  width: 320px;
  font-size: 20px;
  line-height: 23px;
  transform: matrix(1, 0, 0, 1, 434, 38);
}

.list {
  display: flex;
  width: 320px;
  color: #80276c;
  font-size: 18px;
  line-height: 20px;
}
.list::before {
  content: '•';
  width: 7px;
  height: 7px;
  margin-top: 0;
  margin-right: 8px;
  color: #80276c;
  font-size: 19px;
}
.list-1 {
  transform: matrix(1, 0, 0, 1, 434, 140);
}
.list-2 {
  transform: matrix(1, 0, 0, 1, 434, 160);
}
.list-3 {
  transform: matrix(1, 0, 0, 1, 434, 180);
}
.list-4 {
  transform: matrix(1, 0, 0, 1, 434, 200);
}
.list-5 {
  transform: matrix(1, 0, 0, 1, 434, 220);
}

.description {
  width: 320px;
  font-size: 18px;
  line-height: 20px;
  transform: matrix(1, 0, 0, 1, 434, 280);
}
.description::v-deep mark {
  background: transparent;
  color: #78be20;
}

.footnote-1 {
  width: 195px;
  transform: matrix(1, 0, 0, 1, -25, 101);
}

.footnote-2 {
  width: 715px;
  transform: matrix(1, 0, 0, 1, -25, 125);
}

.footnote-3 {
  width: 300px;
  transform: matrix(1, 0, 0, 1, -25, 149);
}
</style>
