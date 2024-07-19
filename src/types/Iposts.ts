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
  backgroundTag: {
    url: string
  }
}

interface FeaturedPost {
  destaque: boolean
}

interface postsConnection {
  aggregate: {
    count: number
  }
}

interface Post {
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

interface relatedPost {
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

export interface DetailsPostsType {
  post: Post
  posts: relatedPost[]
}

export interface PostsGlobalTypes {
  posts: Post[]
  postsConnection: postsConnection
}
