// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import Link from '../../components/demo/Link.vue';
import 'newtil-css';

import './style.css';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    //vitepress.dev/guide/extending-default-theme#registering-global-components
    https: app.component('Link', Link);
  }
} satisfies Theme;
