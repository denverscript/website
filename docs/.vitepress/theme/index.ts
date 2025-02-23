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
  },
  transformIndexHtml(html) {
    return html.replace(
      /<\/body>/,
      `
<script async src="https://www.googletagmanager.com/gtag/js?id=G-726E4NX7W9"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-726E4NX7W9');
</script>
</body>
`
    )
  }
} 