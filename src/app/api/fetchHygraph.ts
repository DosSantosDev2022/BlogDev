export const fetchHygraphQuery = async (query: string) => {
  const response = await fetch(process.env.HYGRAPH_API_KEY || '', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ query }),
    cache: 'no-store',
  })

  const { data } = await response.json()
  return data
}
