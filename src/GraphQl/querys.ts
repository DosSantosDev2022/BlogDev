import { fetchHygraphQuery } from '@/app/api/fetchHygraph'
import { PostsTypes } from '@/types/Iposts'

export const GET_ALL_POST = async (): Promise<PostsTypes> => {
  const query = `
  query GET_ALL_POST {
    posts(first : 50) {
      id
      slug
      subtitle
      title
      createdAt
      coverImage {
        url
      }
      author {
        name
        photo {
          url
        }
      }
      tag {
        tagName
      }
      destaque
    }
  }
`
  return fetchHygraphQuery(query)
}

export const GET_POSTS_BY_CATEGORY = async (): Promise<PostsTypes> => {
  const query = `
  query GET_POSTS_BY_CATEGORY {
    posts {
      id
      slug
      subtitle
      title
      createdAt
      coverImage {
        url
      }
      author {
        name
        photo {
          url
        }
      }
      tag {
        tagName
        coverTag {
          url
        }
      }
    }
  }
  `
  return fetchHygraphQuery(query)
}

export const GET_DETAILS_POST = async (): Promise<PostsTypes> => {
  const query = `
   query GetAllPosts {
    posts(first : 100) {
      id
      slug
      subtitle
      title
      createdAt
      coverImage {
        url
      }
      author {
        name
        photo {
          url
        }
      }
      content {
        raw
      }
      tag {
        tagName
      }
    }
  }
   `
  return fetchHygraphQuery(query)
}

export const GET_POSTS_BY_SEARCH = async (): Promise<PostsTypes> => {
  const query = `
  query SearchPosts {
    posts {
      id
      slug
      title
      coverImage {
        url
      }
      tag {
        tagName
      }
      description
    }
  }
`
  return fetchHygraphQuery(query)
}
