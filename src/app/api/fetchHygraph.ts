export const fetchHygraphQuery = async <T>(
	query: string,
	variables?: Record<string, unknown>,
): Promise<T> => {
	const response = await fetch(process.env.HYGRAPH_API_KEY || '', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
		},
		body: JSON.stringify({ query, variables }),
	})

	const { data } = await response.json()
	return data
}
