interface Author {
  name: string
  photo: {
    url: string
  }
}

interface Content {
  html: string
}

interface CoverImage {
  url: string
}

interface Tag {
  tagName: string
}

interface Post {
  id: string
  slug: string
  subtitle: string
  title: string
  createdAt: string
  coverImage: CoverImage
  author: Author
  content: Content
  tag: Tag
}

export interface GetAllPostsTypes {
  posts: Post[]
}
