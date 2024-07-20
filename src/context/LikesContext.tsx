'use client'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

interface LikesContextProps {
  likes: Record<string, number>
  hasLiked: (postId: string) => boolean
  likePost: (postId: string) => void
}

const likesContext = createContext<LikesContextProps | undefined>(undefined)

export const LikesProvider = ({ children }: { children: ReactNode }) => {
  const [likes, setLikes] = useState<Record<string, number>>({})
  const [likedPosts, setLikedPosts] = useState<string[]>([])

  useEffect(() => {
    const storedLikes = localStorage.getItem('likes')
    const storedLikedPosts = localStorage.getItem('likedPosts')
    if (storedLikes) setLikes(JSON.parse(storedLikes))
    if (storedLikedPosts) setLikedPosts(JSON.parse(storedLikedPosts))
  }, [])

  const hasLiked = (postId: string) => {
    return likedPosts.includes(postId)
  }

  const likePost = async (postId: string) => {
    if (hasLiked(postId)) return

    const response = await fetch('/api/likes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ postId }),
    })

    if (response.ok) {
      const data = await response.json()
      setLikes((prevLikes) => ({ ...prevLikes, [postId]: data.like }))

      setLikedPosts((prevLikedPosts) => [...prevLikedPosts, postId])
      localStorage.setItem(
        'like',
        JSON.stringify({
          ...likes,
          [postId]: data.like,
        }),
      )
      localStorage.setItem(
        'likedPosts',
        JSON.stringify([...likedPosts, postId]),
      )
    } else {
      console.error('Failed to increment likes')
    }
  }
  return (
    <likesContext.Provider value={{ likes, hasLiked, likePost }}>
      {children}
    </likesContext.Provider>
  )
}

export const useLikes = () => {
  const context = useContext(likesContext)
  if (!context) {
    throw new Error('useLikes must be used within a LikesProvider')
  }
  return context
}
