import { defineConfig } from 'vitepress'
import { createContentLoader } from 'vitepress'

// Load all posts to generate the sidebar
const postsPromise = createContentLoader('news/posts/*.md', {
  transform(raw) {
    return raw
      .map(({ url, frontmatter }) => ({
        text: frontmatter.title,
        link: url,
        date: frontmatter.date
      }))
      .sort((a, b) => b.date.getTime() - a.date.getTime())
  }
})

// Get the posts synchronously
const posts = await postsPromise.load()

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
      { text: "Submit a Talk", link: "https://forms.gle/NXUCdorAAG2d2un47" },
    ],
    sidebar: {
      '/news/posts/': [
        {
          text: 'Recent Posts',
          items: posts
        }
      ]
    }
  }
})
