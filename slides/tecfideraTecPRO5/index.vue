<i18n>
  {
    "eng": {
      "headline": "<b style='color: #80276c;'>Patients’ ability to continue with their daily activities remained<br>stable over 4 years on TECFIDERA<sup refs='ref68'></sup></b>",
      "ribbon1": "<b style='color: #ffffff;'>Impact of MS on QoL</b>",
      "ribbon2": "<b style='color: #ffffff;'>PROs at 1 year</b>",
      "ribbon3": "<b style='color: #ffffff;'>PROs stable long-term</b>",
      "ribbon4": "<b style='color: #ffffff;'>Patient support</b>",
      "ribbon5": "<b style='color: #ffffff;'>≥55 age group</b>",
      "subtitle": "<span style='color: #5b6770;'>From baseline, patients<br>on TECFIDERA reported*:</span>",
      "caption1": "<span style='color: #78be20;'>(MFIS-5)</span>",
      "caption2": "<span style='color: #78be20;'>(WPAI-MS)</span>",
      "caption3": "<span style='color: #78be20;'>(EQ-5D-5L/VAS)</span>",
      "description1": "<b style='color: #80276c;'>No worsening of fatigue<br>levels, allowing patients to<br>continue with their lives<sup refs='ref68'></sup></b>",
      "description2": "<span style='color: #80276c;'><b>No declines in work productivity</b><br>(including ability to go to work<br>and work hours missed)<br><b>No additional problems in<br>performing daily activities<sup refs='ref68'></sup></b></span>",
      "description3": "<b style='color: #80276c;'>No decline in overall QoL outcomes<br>over 4 years, including mobility, self-<br>care, usual activities<sup refs='ref68'></sup></b>",
      "footnote1": "<span style='color: #5b6770;'>* Results are from real-world observational studies (ESTEEM).<sup refs='ref68'></sup></span>",
      "footnote2": "<span style='color: #5b6770;'>The above conditions are not licensed indications for Tecfidera. Tecfidera is licensed for the treatment of adult patients with relapsing remitting multiple sclerosis.</span>",
      "footnote3": "<span style='color: #5b6770;'><b style='color: #80276c;'>EQ-5D-5L:</b> EuroQol-5D 5-level version; <b style='color: #80276c;'>MFIS-5:</b> Modified Fatigue Impact Scale 5-item version; <b style='color: #80276c;'>QoL:</b> Quality of Life;<br> <b style='color: #80276c;'>WPAI-MS:</b> Work Productivity and Activity Impairment for Multiple Sclerosis.</span>"
    }
  }
</i18n>

<template>
  <wiz-slide
    class="slide-popup"
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
        id="contentWrapper"
        class="pa"
        :component-name="'Content Wrapper'"
      >
        <wiz-image
          id="bg"
          class="pa"
          :src="'./media/images/bg.png'"
          :component-name="'Background'"
        ></wiz-image>

        <wiz-container
          id="container"
          v-goto="gotoPopup"
          class="pa"
          :component-name="'Container'"
        >
          <wiz-image
            id="icon"
            class="pa"
            :src="'./media/images/icon.png'"
            :component-name="'Icon'"
          ></wiz-image>
          <wiz-text
            id="subtitle"
            class="pa"
            :text="$t('subtitle')"
            :component-name="'Subtitle'"
          ></wiz-text>
        </wiz-container>

        <wiz-container
          id="wrapper1"
          class="pa wrapper"
          :component-name="'Wrapper'"
        >
          <wiz-image
            id="icon1"
            class="pa icon"
            :src="'./media/images/first-icon.png'"
            :component-name="'Icon'"
          ></wiz-image>
          <wiz-text
            id="caption1"
            class="pa caption"
            :text="$t('caption1')"
            :component-name="'Caption'"
          ></wiz-text>
          <wiz-text
            id="description1"
            class="pa description"
            :text="$t('description1')"
            :component-name="'Description'"
          ></wiz-text>
        </wiz-container>

        <wiz-container
          id="wrapper2"
          class="pa wrapper"
          :component-name="'Wrapper'"
        >
          <wiz-image
            id="icon2"
            class="pa icon"
            :src="'./media/images/second-icon.png'"
            :component-name="'Icon'"
          ></wiz-image>
          <wiz-text
            id="caption2"
            class="pa caption"
            :text="$t('caption2')"
            :component-name="'Caption'"
          ></wiz-text>
          <wiz-text
            id="description2"
            class="pa description"
            :text="$t('description2')"
            :component-name="'Description'"
          ></wiz-text>
        </wiz-container>

        <wiz-container
          id="wrapper3"
          class="pa wrapper"
          :component-name="'Wrapper'"
        >
          <wiz-image
            id="icon3"
            class="pa icon"
            :src="'./media/images/third-icon.png'"
            :component-name="'Icon'"
          ></wiz-image>
          <wiz-text
            id="caption3"
            class="pa caption"
            :text="$t('caption3')"
            :component-name="'Caption'"
          ></wiz-text>
          <wiz-text
            id="description3"
            class="pa description"
            :text="$t('description3')"
            :component-name="'Description'"
          ></wiz-text>
        </wiz-container>
      </wiz-bg-container>
      <wiz-bg-ribbon
        id="ribbonMain"
        class="pa ribbon-main"
        v-bind="ribbonOptions"
        :index="2"
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
          id="footnote1"
          class="pa footnote"
          :text="$t('footnote1')"
          :component-name="'Footnote'"
        ></wiz-text>
        <wiz-text
          id="footnote2"
          class="pa footnote"
          :text="$t('footnote2')"
          :component-name="'Footnote'"
        ></wiz-text>
        <wiz-text
          id="footnote3"
          class="pa footnote"
          :text="$t('footnote3')"
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
      gotoPopup: {
        slide: 'tecfideraTecPROPopup2',
        chapter: 'slidesPopup',
      },
    };
  },
};
</script>
<style scoped>
.ribbon-main {
  z-index: 2;
}

#contentWrapper {
  width: 1024px;
  height: 456px;
}

#bg {
  width: 761px;
  height: 508px;
  transform: matrix(1, 0, 0, 1, -218, -52);
}

#container {
  width: 360px;
  height: 110px;
  transform: matrix(1, 0, 0, 1, 431, -35);
}

#icon {
  width: 24px;
  height: 19px;
  transform: matrix(1, 0, 0, 1, 3, 5);
}

#subtitle {
  width: 353px;
  font-size: 20px;
  font-family: 'DinPro', sans-serif;
  line-height: 24px;
  transform: matrix(1, 0, 0, 1, 4, 33);
}

.wrapper {
  width: 400px;
  height: 101px;
  transform: matrix(1, 0, 0, 1, 423, 80);
}
#wrapper2 {
  height: 112px;
  transform: matrix(1, 0, 0, 1, 423, 190);
}
#wrapper3 {
  transform: matrix(1, 0, 0, 1, 423, 323);
}

.icon {
  width: 72px;
  height: 72px;
}
#icon1 {
  transform: matrix(1, 0, 0, 1, 11, 6);
}
#icon2 {
  transform: matrix(1, 0, 0, 1, 11, 17);
}
#icon3 {
  transform: matrix(1, 0, 0, 1, 12, 4);
}

.caption {
  width: 95px;
  font-size: 13px;
  font-family: 'DinPro', sans-serif;
  line-height: 24px;
}
#caption1 {
  transform: matrix(1, 0, 0, 1, 23, 80);
}
#caption2 {
  transform: matrix(1, 0, 0, 1, 17, 90);
}
#caption3 {
  transform: matrix(1, 0, 0, 1, 3, 76);
}

.description {
  width: 302px;
  font-size: 18px;
  font-family: 'DinPro', sans-serif;
  line-height: 20px;
}
#description1 {
  transform: matrix(1, 0, 0, 1, 96, 12);
}
#description2 {
  transform: matrix(1, 0, 0, 1, 96, 2);
}
#description3 {
  transform: matrix(1, 0, 0, 1, 96, 10);
}

#footnote1 {
  width: 715px;
  transform: matrix(1, 0, 0, 1, -26, 90);
}
#footnote2 {
  transform: matrix(1, 0, 0, 1, -26, 114);
}
#footnote3 {
  width: 508px;
  transform: matrix(1, 0, 0, 1, -26, 138);
}

#ribbonMain::v-deep .placeholder-wrap span {
  width: 100px;
}
</style>
