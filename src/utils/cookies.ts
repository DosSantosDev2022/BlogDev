import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const useCookie = (name: string) => {
  const [cookie, setCookie] = useState<string | undefined>(undefined)

  useEffect(() => {
    const value = `;${document.cookie}`
    const part = value.split(`;${name}`)
    if (part.length === 2) setCookie(part.pop()?.split(';').shift())
  }, [name])

  const setCookieValue = (value: string, days: number) => {
    const expires = new Date()
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`
  }

  return { cookie, setCookieValue }
}

export const GetOrSetUserId = (): string => {
  const { cookie, setCookieValue } = useCookie('userId')
  let userId = cookie
  if (!userId) {
    userId = uuidv4()
    setCookieValue(userId, 365)
  }
  return userId
}
