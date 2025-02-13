import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Toledo Codes",
  description: "Toledo Codes",
  cleanUrls: true,
  themeConfig: {
    logo: {
      light: '/images/toledocodes-logo.png',
      dark: '/images/toledocodes-logo-dark.png',
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
      { text: "Submit a Talk", link: "https://forms.gle/NXUCdorAAG2d2un47" },
    ],
  }
})
