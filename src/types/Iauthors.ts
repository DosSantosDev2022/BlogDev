import { ReactNode } from 'react'

interface author {
  id: string
  name: string
  photo: {
    url: string
  }
  bio: {
    text: ReactNode
  }
}

export interface AllAuthors {
  authors: author[]
}
