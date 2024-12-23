import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Toledo Codes",
  description: "Toledo Codes",
  cleanUrls: true,
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/toledocodes' },
      { icon: 'youtube', link: 'https://www.youtube.com/@ToledoCodes' }
    ],
    nav: [
      { text: "Organizers", link: "/organizers/" },
      { text: "Partners", link: "/partners/" },
      { text: "Code of Conduct", link: "/code-of-conduct/" },
      { text: "News", link: "/news/"},
      { text: "Activities", link: "/activities/"},
      { text: "Submit a Talk", link: "https://forms.gle/NXUCdorAAG2d2un47" },
    ],
    sidebar: {
      '/news/': [{
        text: 'News Archive',
        items: [{
          text: 'December 2024',
          link: '/news/2024-12.md',
        }]
      }]
    }
  }
})
