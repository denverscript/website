import { createContentLoader } from 'vitepress'

interface Slide {
  title: string
  url: string
  author: string
}

interface Event {
  title: string
  url: string
  date: string
  description: string
  slides: Slide[]
}

declare const data: Event[]
export { data }

export default createContentLoader('presentations/events/*.md', {
  transform(raw): Event[] {
    return raw
      .map(({ url, frontmatter }) => ({
        title: frontmatter.title || '',
        url,
        date: frontmatter.date || '',
        description: frontmatter.description || '',
        slides: frontmatter.slides || []
      }))
      .sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      })
  }
}) 