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

interface PostsConnection {
  aggregate: {
    count: number
  }
}

interface BasePost {
  id: string
  slug: string
  title: string
  createdAt: string
  author: Author
  coverImage: CoverImage
  tag: Tag
}

interface Post extends BasePost {
  subtitle: string
  description: string
  content: Content
  destaque: FeaturedPost[]
}

interface RelatedPost extends BasePost {}

export interface DetailsPostsType {
  post: Post
}

export interface RelatedPostsType {
  posts: RelatedPost[]
}

export interface PostsGlobalTypes {
  posts: Post[]
  postsConnection: PostsConnection
}
