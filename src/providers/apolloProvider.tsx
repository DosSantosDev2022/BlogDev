'use client'

import { client } from '@/lib/apollo'
import { ApolloProvider as Provider } from '@apollo/client'
import { ReactNode } from 'react'

interface ApolloProvider {
  children: ReactNode
}

export function ApolloProvider({ children }: ApolloProvider) {
  return <Provider client={client}>{children}</Provider>
}
