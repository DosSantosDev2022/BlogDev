export const fetchHygraphQuery = async (query: string) => {
  const response = await fetch(
    'https://api-sa-east-1.hygraph.com/v2/clpsquqiv0hjn01t93xcg9vtl/master',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query }),
      cache: 'no-store',
    },
  )

  const { data } = await response.json()
  return data
}
