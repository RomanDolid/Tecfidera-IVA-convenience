import wizText from 'wiz-text';
import wizImage from 'wiz-image';
import wizButton from 'wiz-button';
import wizContainer from 'wiz-container';

import wizBgButton from 'wiz-bg-button';
import wizBgClosePopupButton from 'wiz-bg-close-popup-button';
import wizBgContainer from 'wiz-bg-container';
import wizBgGridContainer from 'wiz-bg-grid-container';
import wizBgPopup from 'wiz-bg-popup';
import wizBgReferences from 'wiz-bg-references';
import wizBgSidebar from 'wiz-bg-sidebar';
import wizBgSitemap from 'wiz-bg-sitemap';
import wizBgSmpc from 'wiz-bg-smpc';
import wizBgStudyDesign from 'wiz-bg-study-design';

import wizBgRibbon from 'wiz-bg-ribbon';
import wizBgBubble from 'wiz-bg-bubble';
import wizBgSlidingContent from 'wiz-bg-sliding-content';

export default (Vue) => {
  Vue.component('wiz-text', wizText);
  Vue.component('wiz-image', wizImage);
  Vue.component('wiz-button', wizButton);
  Vue.component('wiz-container', wizContainer);

  Vue.component('wiz-bg-button', wizBgButton);
  Vue.component('wiz-bg-close-popup-button', wizBgClosePopupButton);
  Vue.component('wiz-bg-container', wizBgContainer);
  Vue.component('wiz-bg-grid-container', wizBgGridContainer);
  Vue.component('wiz-bg-popup', wizBgPopup);
  Vue.component('wiz-bg-references', wizBgReferences);
  Vue.component('wiz-bg-sidebar', wizBgSidebar);
  Vue.component('wiz-bg-sitemap', wizBgSitemap);
  Vue.component('wiz-bg-smpc', wizBgSmpc);
  Vue.component('wiz-bg-study-design', wizBgStudyDesign);

  Vue.component('wiz-bg-ribbon', wizBgRibbon);
  Vue.component('wiz-bg-bubble', wizBgBubble);
  Vue.component('wiz-bg-sliding-content', wizBgSlidingContent);
};
