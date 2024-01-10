import type { RichTextContent } from '@graphcms/rich-text-types'

interface Author {
  name: string
  photo: {
    url: string
  }
}

interface Content {
  raw: RichTextContent
}

interface CoverImage {
  url: string
}

interface Tag {
  tagName: string
  coverTag: {
    url: string
  }
}

interface featuredPost {
  destaque: boolean
}

export interface Post {
  id: string
  slug: string
  subtitle: string
  title: string
  description: string
  createdAt: string
  coverImage: CoverImage
  author: Author
  content: Content
  tag: Tag
  destaque: featuredPost[]
}

export interface PostsTypes {
  posts: Post[]
}
