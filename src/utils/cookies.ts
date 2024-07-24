import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const useCookie = (name: string) => {
  const [cookie, setCookie] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const value = `;${document.cookie}`
      const part = value.split(`;${name}`)
      if (part.length === 2) setCookie(part.pop()?.split(';').shift())
    }
  }, [name])

  const setCookieValue = (value: string, days: number) => {
    if (typeof document !== 'undefined') {
      const expires = new Date()
      expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
      document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`
    }
  }

  return { cookie, setCookieValue }
}

export const GetOrSetUserId = (): string => {
  const { cookie, setCookieValue } = useCookie('userId')
  const [userId, setUserId] = useState<string>(() => cookie ?? uuidv4())

  useEffect(() => {
    if (!cookie) {
      const newUserId = uuidv4()
      setCookieValue(newUserId, 365)
      setUserId(newUserId)
    }
  }, [cookie, setCookieValue])

  return userId
}
