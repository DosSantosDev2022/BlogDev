export interface AuthorLink {
  id: string
  link: string
  linkIcon: string
}

export interface author {
  id: string
  name: string
  career: string
  photo: {
    url: string
  }
  bio: {
    text: string
  }
  authorlink: AuthorLink[]
}

export interface AllAuthors {
  authors: author[]
}
