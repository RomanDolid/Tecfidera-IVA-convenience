<i18n>
  {
    "eng": {
      "headline": "<span style='color: #5b6770;'>FOR THE TREATMENT OF ADULT<br>PATIENTS WITH RRMS<sup>1</sup></span>",
      "subtitle": "<span style='color: #80276c;'>TECFIDERA effectively impacts disease<br> activity in the long term.<sup>3-5</sup></span>",
      "sup1": "<span style='color: #80276c;'><sup><b><i>2</i></b></sup></span>",
      "sup2": "<span style='color: #80276c;'><sup><b><i>3</i></b></sup></span>",
      "bottomLeft": "<span style='color: #5b6770;'>Lead with TECFIDERA<span style='color: #80276c;'><b><br>to reduce disease activity<br> long-term,</b></span> and with<br> effectiveness you can expect<br>in the real-world<sup>2-13</sup></span>",
      "bottomCenter": "<span style='color: #5b6770;'>TECFIDERA is a <span style='color: #80276c;'><b>flexible option<br>for your patients</b></span> due to its<br>reversible immunological<br>effects* and timely elimination<sup>†</sup>,<br>minimising risk of infection and<br>allowing subsequent treatment<br>after discontinuation<sup>1,2,14,15</sup></span>",
      "bottomRight": "<span style='color: #5b6770;'>TECFIDERA is a <span style='color: #80276c;'><b>convenient<br> option</b><span style='color: #5b6770;'> – easy to initiate with<br> favourable</span> <span style='color: #80276c;'><b>long-term safety<br> you can trust<sup>1,7,16-19</sup></b></span<</span></span>",
      "footnote1": "<span style='color: #5b6770;'>* Restoration of absolute lymphocyte counts in >4 weeks after discontinuation in RRMS patients without severe lymphopenia.<sup>2</sup></span>",
      "footnote2": "<span style='color: #5b6770;'><sup>†</sup> Within 24 hours in the majority of individuals.<sup>1</sup></span>",
      "footnote3": "<span style='color: #5b6770;'>©2020 Biogen | Biogen-61941 | July 2020</span>",
      "hiddenReferences": "<sup refs='ref66 ref106 ref113 ref4 ref5 ref6 ref7 ref8 ref9 ref10 ref11 ref108 ref13 ref14 ref15 ref16 ref17 ref18 ref19'></sup>"
    }
  }
</i18n>

<template>
  <wiz-slide>
    <wiz-image
      id="background"
      class="pa bg"
      :src="'./media/images/bg.png'"
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
      <wiz-image
        id="slogan"
        class="pa slogan"
        :src="'./media/images/slogan.png'"
        :component-name="'Slogan image'"
      ></wiz-image>
      <wiz-text
        id="subtitle"
        class="pa subtitle"
        :text="$t('subtitle')"
        :component-name="'Paragraph'"
      ></wiz-text>
      <wiz-text
        id="sup1"
        class="pa sups sup-1"
        :text="$t('sup1')"
        :component-name="'Supperscript'"
      ></wiz-text>
      <wiz-text
        id="sup2"
        class="pa sups sup-2"
        :text="$t('sup2')"
        :component-name="'Supperscript'"
      ></wiz-text>
      <wiz-text
        id="bottomLeft"
        class="pa bottom-text bottom-left"
        :text="$t('bottomLeft')"
        :component-name="'Note'"
      ></wiz-text>
      <div
        id="midLine1"
        class="pa mid-lines mid-line-1"
        :component-name="'Line'"
      ></div>
      <wiz-text
        id="bottomCenter"
        class="pa bottom-text bottom-center"
        :text="$t('bottomCenter')"
        :component-name="'Note'"
      ></wiz-text>
      <div
        id="midLine2"
        class="pa mid-lines mid-line-2"
        :component-name="'Line'"
      ></div>
      <wiz-text
        id="bottomRight"
        class="pa bottom-text bottom-right"
        :text="$t('bottomRight')"
        :component-name="'Note'"
      ></wiz-text>
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
        <wiz-image
          id="biogenLogo"
          class="pa biogen-logo"
          :src="'./media/images/footer-logo.png'"
          :component-name="'Logo'"
        ></wiz-image>
        <wiz-text
          id="hidden"
          class="hidden"
          :text="$t('hiddenReferences')"
          :component-name="'Hidden Refs'"
        ></wiz-text>
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
        <wiz-image
          id="tecfideraLogo"
          class="pa tecfidera-logo"
          :src="'./media/images/logo-tecfidera.png'"
          :component-name="'Logo'"
        ></wiz-image>
      </wiz-bg-container>
    </wiz-bg-grid-container>
  </wiz-slide>
</template>
<script>
export default {};
</script>
<style scoped>
.wiz-image.bg {
  width: 980px;
  height: 586px;
  transform: matrix(1, 0, 0, 1, 44, 0);
}

.headline {
  font-size: 26px;
  font-family: 'DinPro', sans-serif;
  line-height: 1.2;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 228, 85);
}

.wiz-image.slogan {
  width: 530px;
  max-width: none;
  height: 118px;
  transform: matrix(1, 0, 0, 1, 370, 27);
}

.subtitle {
  font: 26px/30px 'DinPro', sans-serif;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 430, 155);
}

.sups {
  font-size: 30px;
}

.sup-1 {
  transform: matrix(1, 0, 0, 1, 831, 36);
}

.sup-2 {
  transform: matrix(1, 0, 0, 1, 884, 84);
}

.bottom-text {
  font: 19px/22px 'DinPro', sans-serif;
}

.mid-lines {
  width: 1px;
  height: 107px;
  background-color: #9ca5aa;
}

.mid-line-1 {
  transform: matrix(1, 0, 0, 1, 271, 352);
}

.mid-line-2 {
  transform: matrix(1, 0, 0, 1, 583, 352);
}

.bottom-left {
  transform: matrix(1, 0, 0, 1, -14, 349);
}

.bottom-center {
  transform: matrix(1, 0, 0, 1, 298, 349);
}

.bottom-right {
  transform: matrix(1, 0, 0, 1, 610, 349);
}

.wiz-image.biogen-logo {
  width: 117px;
  height: 44px;
  transform: matrix(1, 0, 0, 1, -34, 94);
}

.wiz-image.tecfidera-logo {
  width: 151px;
  height: 35px;
  transform: matrix(1, 0, 0, 1, 750, 107);
}

.footnote {
  font-size: 11px;
}

.footnote-1 {
  transform: matrix(1, 0, 0, 1, 98, 98);
}

.footnote-2 {
  transform: matrix(1, 0, 0, 1, 98, 111);
}

.footnote-3 {
  transform: matrix(1, 0, 0, 1, 98, 124);
}
</style>
