<i18n>
  {
    "eng": {
      "description1": "<span style='color: #ffffff;'><b>Patients have been treated worldwide with TECFIDERA</b></span>",
      "description2": "<span style='color: #ffffff;'>Equivalent to 1 Million patient years of exposure<sup>20</sup>*</span>",
      "number": "<span style='color: #ffffff;'><b>>500,000</b></span>",
      "caption1": "<span style='color: #5b6770;'>FOR THE TREATMENT OF RRMS<sup>1</sup></span>",
      "extraSup1": "<span style='color: #80276c;'><b>2</b></span>",
      "extraSup2": "<span style='color: #80276c;'><b>3</b></span>",
      "caption2": "<span style='color: #80276c;'>TECFIDERA effectively impacts disease activity in the long term.<sup>3-5</sup></span>",
      "paragraph1": "<span style='color: #5b6770;'>Lead with TECFIDERA <br><b>to reduce disease activity long-term,</b> and with <br>effectiveness you can expect in the real-world<sup>2-13</sup></span>",
      "paragraph2": "<span style='color: #5b6770;'>TECFIDERA is a <b>flexible option for your patients</b> due to its <br>reversible immunological effects** and timely elimination<sup>†</sup>, minimising risk of infection and allowing subsequent treatment after discontinuation<sup>1,2,14,15</sup></span>",
      "paragraph3": "<span style='color: #5b6770;'>TECFIDERA is a <b>convenient option –</b> easy to initiate with favourable <b>long-term safety you can trust<sup>1,7,16-19</sup></b></span>",
      "footnote1": "<span style='color: #5b6770;'>* Of these, 6,335 patients (14,241 patient-years) were from clinical trials.</span>",
      "footnote2": "<span style='color: #5b6770;'>** Restoration of absolute lymphocyte counts in > 4 weeks after discontinuation in RRMS patients without severe lymphopenia.<sup>2</sup></span>",
      "footnote3": "<span style='color: #5b6770;'><sup>†</sup> Within 24 hours in the majority of individuals.<sup>1</sup></span>",
      "hiddenReferences": "<sup refs='ref66 ref106 ref113 ref4 ref5 ref2 ref7 ref8 ref9 ref10 ref11 ref117 ref13 ref14 ref15 ref16 ref17 ref18 ref19 ref114'></sup>"
    }
  }
</i18n>

<template>
  <wiz-slide>
    <layouts :layouts="[{ name: 'logo' }]"></layouts>
    <wiz-image
      id="mainBackground"
      class="pa main-background"
      :src="'./media/images/background.png'"
      :component-name="'Background'"
    ></wiz-image>
    <wiz-bg-grid-container
      id="headerArea"
      class="header-area"
      :component-name="'Headline &amp; Subhead container'"
    >
      <wiz-bg-container
        id="headlineWrapper"
        class="headline-wrapper"
        :component-name="'Headline wrapper'"
      >
        <wiz-image
          id="ribbonBlue"
          class="pa header-image"
          :src="'./media/images/ribbon.png'"
          :component-name="'Image'"
        ></wiz-image>
        <wiz-text
          id="number"
          class="pa number"
          :text="$t('number')"
          :component-name="'Number'"
        ></wiz-text>
        <wiz-bg-container
          id="divider"
          class="pa divider"
          :component-name="'Divider'"
        >
          &nbsp;
        </wiz-bg-container>
        <wiz-text
          id="headline"
          class="pa header-text"
          :text="$t('description1')"
          :component-name="'Headline'"
        ></wiz-text>
        <wiz-text
          id="subHeadline"
          class="pa header-text-sub"
          :text="$t('description2')"
          :component-name="'Sub-header'"
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
        class="content-wrapper pa"
        :component-name="'Content 1'"
      >
        <wiz-text
          id="caption"
          class="pa caption caption-one"
          :text="$t('caption1')"
          :component-name="'Caption'"
        ></wiz-text>
        <wiz-image
          id="imageCentral"
          class="pa image-central"
          :src="'./media/images/slogan.png'"
          :component-name="'Image'"
        ></wiz-image>
        <wiz-text
          id="extraSup1"
          class="pa extra-sup"
          :text="$t('extraSup1')"
          :component-name="'Superscript'"
        ></wiz-text>
        <wiz-text
          id="extraSup2"
          class="pa extra-sup"
          :text="$t('extraSup2')"
          :component-name="'Superscript'"
        ></wiz-text>
        <wiz-text
          id="captionSecond"
          class="pa caption caption-bottom"
          :text="$t('caption2')"
          :component-name="'Caption'"
        ></wiz-text>
      </wiz-bg-container>
      <wiz-bg-container
        id="contentWrapper2"
        class="content-wrapper-bottom pa"
        :component-name="'Content 2'"
      >
        <wiz-text
          id="descriptionTextOne"
          class="pa paragraph paragraph-left"
          :text="$t('paragraph1')"
          :component-name="'Main text'"
        ></wiz-text>
        <wiz-bg-container
          id="lineOne"
          class="pa line line-one"
          :component-name="'Divider'"
        >
          &nbsp;
        </wiz-bg-container>
        <wiz-text
          id="descriptionTextTwo"
          class="pa paragraph paragraph-center"
          :text="$t('paragraph2')"
          :component-name="'Main text'"
        ></wiz-text>
        <wiz-bg-container
          id="lineTwo"
          class="pa line line-two"
          :component-name="'Divider'"
        >
          &nbsp;
        </wiz-bg-container>
        <wiz-text
          id="descriptionTextThree"
          class="pa paragraph paragraph-right"
          :text="$t('paragraph3')"
          :component-name="'Main text'"
        ></wiz-text>
      </wiz-bg-container>
    </wiz-bg-grid-container>

    <wiz-bg-grid-container
      id="footnoteArea"
      class="footnote-area"
      :component-name="'Footnote area'"
    >
      <wiz-bg-container
        id="footnoteWrapper"
        class="pa footnote-wrapper"
        :component-name="'Footnotes wrapper'"
      >
        <wiz-text
          id="footnoteOne"
          class="pa footnote footnote-one"
          :text="$t('footnote1')"
          :component-name="'Footnote'"
        ></wiz-text>
        <wiz-text
          id="footnoteTwo"
          class="pa footnote footnote-two"
          :text="$t('footnote2')"
          :component-name="'Footnote'"
        ></wiz-text>
        <wiz-text
          id="footnoteThree"
          class="pa footnote footnote-three"
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
export default {};
</script>
<style scoped>
.wiz-image.main-background {
  width: 982px;
  height: 586px;
  transform: matrix(1, 0, 0, 1, 42, 0);
}
.wiz-image.header-image {
  width: 537px;
  height: auto;
  transform: matrix(1, 0, 0, 1, 403, -37);
}
.number {
  width: 177px;
  font: 55px 'DinProCondensed', sans-serif;
  transform: matrix(1, 0, 0, 1, 436, -9);
}
.divider {
  width: 1px;
  height: 45px;
  background: #ffffff;
  transform: matrix(1, 0, 0, 1, 613, 2);
}
.wiz-text.header-text {
  width: 230px;
  font-size: 18px;
  line-height: 1.2;
  transform: matrix(1, 0, 0, 1, 627, -5);
}
.wiz-text.header-text-sub {
  width: 285px;
  font-size: 12px;
  transform: matrix(1, 0, 0, 1, 627, 37);
}
.content-wrapper {
  width: 650px;
  height: 283px;
  transform: matrix(1, 0, 0, 1, 119, 0);
}
.wiz-text.caption-one {
  width: 419px;
  transform: matrix(1, 0, 0, 1, 133, 28);
}
.wiz-image.image-central {
  width: 489px;
  height: auto;
  transform: matrix(1, 0, 0, 1, 81, 69);
}
.extra-sup {
  font-size: 18px;
  transform: matrix(1, 0, 0, 1, 502, 80);
}
#extraSup2{
  transform: matrix(1, 0, 0, 1, 554, 127);
}
.wiz-text.caption-bottom {
  width: 454px;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 96, 198);
}
.content-wrapper-bottom {
  width: 917px;
  height: 191px;
  transform: matrix(1, 0, 0, 1, -35, 314);
}
.paragraph-left {
  width: 250px;
  transform: matrix(1, 0, 0, 1, 23, 24);
}
.line {
  width: 1px;
  height: 109px;
  background: #7c878e;
  transform: matrix(1, 0, 0, 1, 315, 30);
}
.paragraph-center {
  width: 285px;
  transform: matrix(1, 0, 0, 1, 334, 24);
}
.line-two {
  transform: matrix(1, 0, 0, 1, 626, 30);
}
.paragraph-right {
  width: 267px;
  transform: matrix(1, 0, 0, 1, 645, 24);
}
.slide .paragraph::v-deep b {
  color: #80276c;
}
.footnote-wrapper {
  width: 710px;
  height: 61px;
  transform: matrix(1, 0, 0, 1, -36, 105);
}
.footnote-one {
  width: 363px;
  transform: matrix(1, 0, 0, 1, 11, 18);
}
.footnote-two {
  width: 582px;
  transform: matrix(1, 0, 0, 1, 11, 31);
}
.footnote-three {
  width: 283px;
  transform: matrix(1, 0, 0, 1, 11, 43);
}
</style>
