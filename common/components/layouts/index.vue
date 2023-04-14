<i18n>
    {
      "eng": {}
    }
</i18n>

<template>
  <wiz-bg-container class="common-layouts">
    <template v-for="layout in layouts">
      <wiz-bg-container
        :id="layout.name"
        :key="layout.name"
      >
        <component
          :is="layout.name"
          :ref="layout.name"
          :key="layout.name"
          v-bind="layout.props"
        ></component>
      </wiz-bg-container>
    </template>
  </wiz-bg-container>
</template>

<script>

export default {
  name: 'layouts',
  components: {},
  props: {
    layouts: {
      type: Array,
      default: () => { return []; },
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>
