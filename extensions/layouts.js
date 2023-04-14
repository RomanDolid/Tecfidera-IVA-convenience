import layouts from '../common/components/layouts/index.vue';
import logo from '../common/layouts/logo.vue';
import topImage from '../common/layouts/topImage.vue';

export default (Vue) => {
  Vue.component('layouts', layouts);
  Vue.component('logo', logo);
  Vue.component('top-image', topImage);
};
