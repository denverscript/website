import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import CustomHome from './CustomHome.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('CustomHome', CustomHome)
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-features-before': () => h(CustomHome)
    })
  }
} 