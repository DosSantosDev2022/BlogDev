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
  coverTag?: {
    url: string
  }
}

interface FeaturedPost {
  destaque: boolean
}

export interface postsConnection {
  aggregate: {
    count: number
  }
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
  destaque: FeaturedPost[]
}

export interface PostsTypes {
  posts: Post[]

  postsConnection: postsConnection
}

export interface relatedPost {
  id: string
  title: string
  author: Author
  coverImage: {
    url: string
  }
  tag: Tag
  createdAt: string
  slug: string
}

export interface RelatedPostTypes {
  relatedPost: relatedPost[]
}
