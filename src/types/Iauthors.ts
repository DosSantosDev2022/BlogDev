interface author {
  id: string
  name: string
  photo: {
    url: string
  }
  bio: {
    text: string
  }
}

export interface AllAuthors {
  authors: author[]
}
