<i18n>
  {
    "eng": {
      "headline": "<span style='color: #80276c;'><b>TECFIDERA is a convenient option for you and your patients – easy to<br>initiate with well-established long-term safety profile you can trust<sup>1-7</sup></b></span>",
      "dropdown1Header": "<span style='color: #ffffff;'>Monitoring and dosing that’s <b>convenient <br>for you and your patients<sup>1,2</sup></b></span>",
      "dropdown1Text1": "<span style='color: #5b6770;'><b style='color: #78be20;'>Convenience</b> of an oral treatment<sup>1</sup></span>",
      "dropdown1Text2": "<span style='color: #5b6770;'><b style='color: #78be20;'>Monitoring</b>  you can schedule alongside your patients’ <br>regular appointments<sup>1</sup></span>",
      "dropdown1Text3": "<span style='color: #5b6770;'>A <b style='color: #78be20;'>well-characterised pattern of ALC decline<sup>2</sup></b> with<br>no impairment of <b style='color: #78be20;'>protective humoral immunity<sup>3-7</sup></b></span>",
      "dropdown2Header": "<span style='color: #ffffff;'><b>Easy to initiate</b> in a range of patients<sup>1</sup></span>",
      "dropdown2Text1": "<span style='color: #5b6770;'>No evidence of interaction with oral <b style='color: #78be20;'>contraceptives<sup>1</sup></b></span>",
      "dropdown2Text2": "<span style='color: #5b6770;'><b style='color: #78be20;'>No extended washout period<sup>†</sup></b>  is needed when planning <br>to conceive or in the event of pregnancy*<sup>1</sup></span>",
      "dropdown2Text3": "<span style='color: #5b6770;'>Exhalation of CO<sub>2</sub> is the primary route of elimination, <br>without involvement of the liver (CYP450), <b style='color: #78be20;'>reducing the <br>risk of drug interactions<sup>1</sup></b></span>",
      "dropdown3Header": "<span style='color: #ffffff;'>A well-established <b>long-term <br>safety profile<sup>1,3-7</sup></b></span>",
      "dropdown3Text1": "<span style='color: #5b6770;'>Well-established <b style='color: #78be20;'>safety and tolerability profile</b> shown <br>in phase III trials<sup>1,8,9</sup> and through >10 years of treatment<sup>2</sup></span>",
      "dropdown3Text2": "<span style='color: #5b6770;'><b style='color: #78be20;'>Well-established profile of GI events</b> and incidence <br>in the real-world<sup>1,10,11</sup></span>",
      "dropdown3Text3": "<span style='color: #5b6770;'><b style='color: #78be20;'>Low incidence of infections and malignancies</b> with no <br>unexpected safety signals emerging in up to 10 years of <br>treatment<sup>3</sup></span>",
      "footnote1": "<span style='color: #5b6770;'>* Tecfidera should only be used during pregnancy if clearly needed and if the potential benefit outweighs the potential risk to the foetus. Tecfidera is not recommended during<br>pregnancy and in women of childbearing potential not using appropriate contraception.<sup>1</sup><br><sup>†</sup> Elimination within 24 hours in the majority of individuals.<sup>1</sup></span>",
      "hiddenReferences": "<sup refs='ref66 ref85 ref54 ref95 ref96 ref97 ref98 ref99 ref100 ref18 ref19'></sup>"
    }
  }
</i18n>

<template>
  <wiz-slide>
    <layouts :layouts="[{ name: 'logo' }, { name: 'top-image' }]"></layouts>
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
        class="content-wrapper"
        :component-name="'Content wrapper'"
      >
        <wiz-image
          id="background"
          class="pa background"
          :src="'./media/images/patients.png'"
          :component-name="'Content image'"
        ></wiz-image>

        <wiz-accordion
          id="accordion"
          ref="accordion"
          class="accordion pa"
          :current-index="index"
          :orientation="orientation"
          :component-name="'Accordion'"
        >
          <wiz-accordion-tab
            id="dropdown1Header"
            class="dropdown-header"
            :tab-title="$t('dropdown1Header')"
            :component-name="'Accordion Tab'"
          >
            <div slot="tab-body">
              <wiz-bg-container
                id="dropDown1Container1"
                v-goto="toDosing"
                class="dropdown-container"
                :component-name="'Dropdown container'"
              >
                <wiz-text
                  id="dropdown1Text1"
                  class="dropdown-text has-image"
                  :text="$t('dropdown1Text1')"
                  :component-name="'Dropdown Text'"
                ></wiz-text>
              </wiz-bg-container>
              <wiz-bg-container
                id="dropDown1Container2"
                v-goto="toMonitoring"
                class="dropdown-container"
                :component-name="'Dropdown container'"
              >
                <wiz-text
                  id="dropdown1Text2"
                  class="dropdown-text has-image"
                  :text="$t('dropdown1Text2')"
                  :component-name="'Dropdown Text'"
                ></wiz-text>
              </wiz-bg-container>
              <wiz-bg-container
                id="dropDown1Container3"
                v-goto="toImmunity"
                class="dropdown-container dropdown-container3"
                :component-name="'Dropdown container'"
              >
                <wiz-text
                  id="dropdown1Text3"
                  class="dropdown-text has-image"
                  :text="$t('dropdown1Text3')"
                  :component-name="'Dropdown Text'"
                ></wiz-text>
              </wiz-bg-container>
            </div>
          </wiz-accordion-tab>

          <wiz-accordion-tab
            id="dropdown2Header"
            class="dropdown-header dropdown-header2"
            :tab-title="$t('dropdown2Header')"
            :component-name="'Accordion Tab'"
          >
            <div slot="tab-body">
              <wiz-bg-container
                id="dropDown2Container1"
                class="dropdown-container"
                :component-name="'Dropdown container'"
              >
                <wiz-text
                  id="dropdown2Text1"
                  class="dropdown-text has-dot"
                  :text="$t('dropdown2Text1')"
                  :component-name="'Dropdown Text'"
                ></wiz-text>
              </wiz-bg-container>
              <wiz-bg-container
                id="dropDown2Container2"
                class="dropdown-container"
                :component-name="'Dropdown container'"
              >
                <wiz-text
                  id="dropdown1Text2"
                  class="dropdown-text has-dot"
                  :text="$t('dropdown2Text2')"
                  :component-name="'Dropdown Text'"
                ></wiz-text>
              </wiz-bg-container>
              <wiz-bg-container
                id="dropDown2Container3"
                class="dropdown-container"
                :component-name="'Dropdown container'"
              >
                <wiz-text
                  id="dropdown2Text3"
                  class="dropdown-text has-dot"
                  :text="$t('dropdown2Text3')"
                  :component-name="'Dropdown Text'"
                ></wiz-text>
              </wiz-bg-container>
            </div>
          </wiz-accordion-tab>

          <wiz-accordion-tab
            id="dropdown3Header"
            class="dropdown-header dropdown-header3"
            :tab-title="$t('dropdown3Header')"
            :component-name="'Accordion Tab'"
          >
            <div slot="tab-body">
              <wiz-bg-container
                id="dropDown3Container1"
                v-goto="toProfile"
                class="dropdown-container"
                :component-name="'Dropdown container'"
              >
                <wiz-text
                  id="dropdown3Text1"
                  class="dropdown-text has-image"
                  :text="$t('dropdown3Text1')"
                  :component-name="'Dropdown Text'"
                ></wiz-text>
              </wiz-bg-container>
              <wiz-bg-container
                id="dropDown3Container2"
                v-goto="toEvents"
                class="dropdown-container"
                :component-name="'Dropdown container'"
              >
                <wiz-text
                  id="dropdown3Text2"
                  class="dropdown-text has-image"
                  :text="$t('dropdown3Text2')"
                  :component-name="'Dropdown Text'"
                ></wiz-text>
              </wiz-bg-container>
              <wiz-bg-container
                id="dropDown3Container3"
                v-goto="toInfections"
                class="dropdown-container"
                :component-name="'Dropdown container'"
              >
                <wiz-text
                  id="dropdown3Text3"
                  class="dropdown-text has-image"
                  :text="$t('dropdown3Text3')"
                  :component-name="'Dropdown Text'"
                ></wiz-text>
              </wiz-bg-container>
            </div>
          </wiz-accordion-tab>
        </wiz-accordion>
      </wiz-bg-container>
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
          id="footnoteText1"
          class="footnote-text footnote-text1"
          :text="$t('footnote1')"
          :component-name="'Footnote Text'"
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
import { wizAccordion, wizAccordionTab } from 'wiz-accordion';

export default {
  components: {
    wizAccordion,
    wizAccordionTab,
  },
  data() {
    return {
      orientation: 'vertical',
      index: 0,
      toDosing: {
        chapter: 'slidesPopup',
        slide: 'tecfideraDosing',
      },
      toMonitoring: {
        chapter: 'slidesPopup',
        slide: 'tecfideraMonitoring',
      },
      toProfile: {
        chapter: 'slidesPopup',
        slide: 'tecfideraAEProfile',
      },
      toEvents: {
        chapter: 'slidesPopup',
        slide: 'tecfideraGIEvents',
      },
      toInfections: {
        chapter: 'slidesPopup',
        slide: 'tecfideraInfectionsMalignancies',
      },
      toImmunity: {
        chapter: 'slidesPopup',
        slide: 'tecfideraImmunity',
      },
    };
  },
};
</script>
<style scoped>
.content-wrapper {
  width: 981px;
  height: 600px;
  transform: matrix(1, 0, 0, 1, -41, -50);
}

.content-wrapper .background {
  width: 945px;
  height: 560px;
  transform: matrix(1, 0, 0, 1, -43, 8);
}

.accordion.vertical {
  z-index: 10;
  width: 872px;
  margin: 0;
  transform: matrix(1, 0, 0, 1, 413, 16);
}

.vertical.accordion .wiz-accordion-tab {
  position: relative;
  display: block;
  overflow: hidden;
  width: 568px;
  height: 120px;
}

.vertical .wiz-accordion-tab.active {
  height: auto;
}

.vertical .wiz-accordion-tab::v-deep .tab-header,
.vertical .wiz-accordion-tab.active::v-deep .tab-header {
  position: relative;
  display: block;
  height: 120px;
  background-color: transparent;
  background-image: url('./media/images/tab.png');
  background-size: 568px 120px;
  background-repeat: no-repeat;
}

.wiz-accordion-tab::v-deep .tab-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 7px;
  height: 7px;
  border: 1px solid #ffffff;
  border-radius: 50%;
  transform: matrix(1, 0, 0, 1, 534, 44);
}

.wiz-accordion-tab.active::v-deep .tab-header::before {
  right: 0;
  bottom: 0;
  width: 10px;
  height: 2px;
  margin: auto;
  border: none;
  border-radius: 0;
  background-color: #fff;
  transform: rotate(-45deg) matrix(1, 0, 0, 1, 188, 172);
}

.wiz-accordion-tab.active::v-deep .tab-header::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 10px;
  height: 2px;
  margin: auto;
  background-color: #fff;
  transform: rotate(45deg) matrix(1, 0, 0, 1, 172, -188);
}

.wiz-accordion-tab::v-deep .tab-header .tab-title {
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  font-size: 22px;
  line-height: 25px;
  font-family: 'DinPro', sans-serif;
  transform: matrix(1, 0, 0, 1, 73, 47);
}

.wiz-accordion-tab.dropdown-header2::v-deep .tab-header .tab-title {
  transform: matrix(1, 0, 0, 1, 73, 57);
}

.vertical .tab-body > div {
  display: flex;
  flex-direction: row;
  justify-content: left;
}

.vertical.wiz-accordion .wiz-accordion-tab::v-deep .tab-body {
  height: auto;
  padding-top: 2px;
  background: transparent;
}

.vertical.wiz-accordion .wiz-accordion-tab.dropdown-header2::v-deep .tab-body {
  padding-top: 7px;
}

.vertical.wiz-accordion .wiz-accordion-tab.dropdown-header3::v-deep .tab-body {
  padding-top: 1px;
}

.vertical.wiz-accordion .dropdown-container {
  width: 100%;
  height: auto;
  margin-left: 32px;
  padding-bottom: 11px;
}

.vertical.wiz-accordion .dropdown-container3 {
  padding-bottom: 9px;
}

.vertical.wiz-accordion .dropdown-header2 .dropdown-container {
  margin-left: 22px;
  padding-bottom: 11px;
}

.vertical.wiz-accordion .dropdown-header3 .dropdown-container {
  padding-bottom: 8px;
}

.vertical.wiz-accordion .dropdown-text {
  position: relative;
  width: 535px;
  font-weight: 400;
  font-size: 20px;
  font-family: 'DinPro', sans-serif;
  line-height: 1.2;
}

.dropdown-text.has-image::before {
  content: '';
  position: absolute;
  top: 3px;
  left: -32px;
  width: 23px;
  height: 19px;
  background-image: url('./media/images/listbullet.png');
  background-size: contain;
  background-repeat: no-repeat;
}

.dropdown-text.has-dot::before {
  content: '';
  position: absolute;
  top: 8px;
  left: -10px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #00a3e0;
}

.wiz-bg-grid-container.footnote-area {
  z-index: 0;
}

.footnote-area .footnote-text {
  width: 700px;
  font-weight: 400;
  font-size: 10px;
  font-family: 'DinPro', sans-serif;
  line-height: 1.2;
  transform: matrix(1, 0, 0, 1, -24, 136);
}

.footnote-area .footnote-text1 {
  transform: matrix(1, 0, 0, 1, -24, 124);
  width: 800px;
}
</style>
