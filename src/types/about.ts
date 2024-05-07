import { RichTextContent } from '@graphcms/rich-text-types'
import { AuthorLink } from './Iauthors'

export interface ABOUT_ME {
  about: {
    id: string
    slug: string
    title: string
    carrer: string
    biograph: {
      raw: RichTextContent
    }
    authorImage: {
      url: string
    }
    socialLinks: AuthorLink[]
  }
}
