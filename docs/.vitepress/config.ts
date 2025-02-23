import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Toledo Codes",
  description: "Toledo Codes",
  cleanUrls: true,
  themeConfig: {
    logo: {
      light: './images/toledocodes-logo.png',
      dark: './images/toledocodes-logo-dark.png',
      alt: 'Toledo Codes'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/toledocodes' },
      { icon: 'youtube', link: 'https://www.youtube.com/@ToledoCodes' }
    ],
    nav: [
      { text: "Organizers", link: "/organizers/" },
      { text: "Partners", link: "/partners/" },
      { text: "Code of Conduct", link: "/code-of-conduct/" },
      { text: "News", link: "/news/"},
      { text: "Submit a Talk", link: "https://toledo.codes/submit-talk/", target: '_self' },
    ],
  },
  // head: [],
  vite: {
    server: process.env.NODE_ENV === 'development' ? {
      proxy: {
        '/survey': {
          target: 'https://docs.google.com/forms/d/e/1FAIpQLSff3SkO92jTEirw2z8uhGvSsXM2hMz9QmaRYjS6sobzKkrAFw/viewform?usp=sharing',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/survey/, '')
        },
        '/submit-talk': {
          target: 'https://docs.google.com/forms/d/e/1FAIpQLSdmtoPEoZJ-V300oVOFj5twtTZBcLcDmr-sKHlD6WUrxsSZ0g/viewform?usp=sharing',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/submit-talk/, '')
        }
      }
    } : undefined
  }
})
