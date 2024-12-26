import { createContentLoader } from 'vitepress'

interface Post {
  title: string
  url: string
  date: string
  excerpt: string
}

declare const data: Post[]
export { data }

export default createContentLoader('news/posts/*.md', {
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter }) => ({
        title: frontmatter.title || '',
        url,
        date: frontmatter.date || '',
        excerpt: frontmatter.excerpt || ''
      }))
      .sort((a, b) => {
        return b.date.getTime() - a.date.getTime();
      })
  }
}) 