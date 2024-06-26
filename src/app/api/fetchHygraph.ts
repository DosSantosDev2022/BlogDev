export const fetchHygraphQuery = async <T>(
  query: string,
  variables?: Record<string, any>,
): Promise<T> => {
  const response = await fetch(process.env.HYGRAPH_API_KEY || '', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ query, variables }),
    next: {
      revalidate: 60 * 60 * 24, // revalidate once a day
    },
  })

  const { data } = await response.json()
  return data
}
