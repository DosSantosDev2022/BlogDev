import { fetchHygraphQuery } from '@/app/api/fetchHygraph'
import { PostsTypes } from '@/types/Iposts'

import { gql } from '@apollo/client'

export const GET_ALL_POST = async (): Promise<PostsTypes> => {
  const query = `
  query GetAllPosts {
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
      }
      destaque
    }
  }
`
  return fetchHygraphQuery(query)
}

export const GET_POSTS_BY_CATEGORY = async (): Promise<PostsTypes> => {
  const query = `
  query GetAllPosts {
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

/* export const GET_POSTS_BY_CATEGORY = gql`
  query GetAllPosts {
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
` */

export const GET_POSTS_BY_SEARCH = gql`
  query SearchPosts($slug: String!) {
    posts(where: { _search: $slug }) {
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
      description
    }
  }
`
