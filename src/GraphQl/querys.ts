import { fetchHygraphQuery } from '@/app/api/fetchHygraph'
import { PostsTypes } from '@/types/Iposts'

import { gql } from '@apollo/client'

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

/* Querys utilizando Apollo Client */

export const GET_POSTS_BY_SEARCH = gql`
  query SearchPosts($slug: String!) {
    posts(where: { _search: $slug }) {
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
export const GET_ALL_POST_PAGINATION = gql`
  query GET_ALL_POST {
    posts(first: 100) {
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
