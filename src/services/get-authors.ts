import { fetchHygraphQuery } from '@/app/api/fetchHygraph'

interface AuthorLink {
	id: string
	link: string
	linkIcon: string
}

interface author {
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

interface AllAuthors {
	authors: author[]
}

export const GET_AUTHORS = async (): Promise<AllAuthors> => {
	const query = `
  query GET_AUTHORS {
    authors(stage: PUBLISHED) {
      id
      name
      career
      bio {
        text
      }
      photo {
        url
      }
      authorlink {
        id
        link
        linkIcon
      }
    }
  }
  `
	return fetchHygraphQuery(query, {cache: 'force-cache', revalidate: 60 * 60 * 24 * 7 })
}
