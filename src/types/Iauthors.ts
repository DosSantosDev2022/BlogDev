interface AuthorLink {
  id: string;
  link: string;
  linkIcon: string;
}

interface author {
  id: string
  name: string
  photo: {
    url: string
  }
  bio: {
    text: string
  }
  authorlink : AuthorLink[]
}

export interface AllAuthors {
  authors: author[]
}
