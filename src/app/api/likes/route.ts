import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { postId } = await req.json()

  // Buscar o post atual
  const fetchPostResponse = await fetch(`${process.env.HYGRAPH_API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
    body: JSON.stringify({
      query: `
        query GetPost($id: ID!) {
          post(where: { id: $id }) {
            id
            likes
          }
        }
      `,
      variables: { id: postId },
    }),
  })

  const fetchPostResult = await fetchPostResponse.json()
  if (fetchPostResult.errors) {
    console.error(fetchPostResult.errors)
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 })
  }

  const currentLikes = fetchPostResult.data.post.likes

  // Atualizar o post com o novo número de likes
  const mutation = `
    mutation UpdatePost($id: ID!, $likes: Int!) {
      updatePost(
        where: { id: $id }
        data: { likes: $likes }
      ) {
        id
        likes
      }
      publishPost(where: { id: $id }) {
        id
        likes
      }
    }
  `

  const variables = { id: postId, likes: currentLikes + 1 }

  try {
    const response = await fetch(process.env.HYGRAPH_API_KEY || '', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
      },
      body: JSON.stringify({ query: mutation, variables }),
    })

    const result = await response.json()

    if (result.errors) {
      console.error(result.errors)
      return NextResponse.json(
        { error: 'Failed to increment likes' },
        { status: 500 },
      )
    } else {
      return NextResponse.json({ likes: result.data.updatePost.likes })
    }
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Failed to increment likes' },
      { status: 500 },
    )
  }
}
