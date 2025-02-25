'use client'
import { GET_POSTS_LIKED } from '@/services/get-posts-liked'
import { GetOrSetUserId } from '@/utils/cookies'
import {
	type ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface LikesContextProps {
	likes: Record<string, number>
	hasLiked: (postId: string) => boolean
	likePost: (postId: string) => void
	feedback: string
}

const LikesContext = createContext<LikesContextProps | undefined>(
	undefined,
)

export const LikesProvider = ({ children }: { children: ReactNode }) => {
	const userId = GetOrSetUserId()
	const [likes, setLikes] = useState<Record<string, number>>({})
	const [likedPosts, setLikedPosts] = useState<string[]>([])
	const [feedback, setFeedback] = useState<string>('')

	useEffect(() => {
		const loadLikedPosts = async () => {
			try {
				const response = await GET_POSTS_LIKED(userId)
				if (response) {
					const likedPostIds = response.posts.map(
						(post: { id: string }) => post.id,
					)
					setLikedPosts(likedPostIds)
					localStorage.setItem('likedPosts', JSON.stringify(likedPostIds))
				} else {
					console.error('Failed loading liked posts')
				}
			} catch (error) {
				console.error('Failed to fetch liked posts:', error)
			}
		}

		loadLikedPosts()
	}, [userId])

	useEffect(() => {
		const storedLikedPosts = localStorage.getItem('likedPosts')
		if (storedLikedPosts) {
			setLikedPosts(JSON.parse(storedLikedPosts))
		}
	}, [])

	const hasLiked = (postId: string) => {
		return likedPosts.includes(postId)
	}

	const fetchLikes = async (postId: string) => {
		try {
			const response = await GET_POSTS_LIKED(postId)
			const post = response.posts.find((p) => p.id === postId)

			if (post) {
				setLikes((prevLikes) => ({
					...prevLikes,
					[postId]: post.likes,
				}))
			} else {
				console.error('Failed to fetch likes')
			}
		} catch (error) {
			console.error('Failed to fetch likes:', error)
		}
	}

	const likePost = async (postId: string) => {
		if (hasLiked(postId)) return

		try {
			const response = await fetch('/api/likes', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ postId, userId }),
			})

			if (response.ok) {
				const data = await response.json()
				setLikes((prevLikes) => ({
					...prevLikes,
					[postId]: data.likes,
				}))
				setLikedPosts((prevLikedPosts) => {
					const updatedLikedPosts = [...prevLikedPosts, postId]
					localStorage.setItem(
						'likedPosts',
						JSON.stringify(updatedLikedPosts),
					)
					return updatedLikedPosts
				})
				await fetchLikes(postId)
				setFeedback('Post curtido com sucesso!')
				toast.success('Post curtido com sucesso!')
			} else {
				console.error('Failed to increment likes')
				setFeedback('Falha ao curtir o post')
				toast.error('Falha ao curtir o post')
			}
		} catch (error) {
			console.error('Failed to increment likes:', error)
			setFeedback('Falha ao curtir o post')
			toast.error('Falha ao curtir o post')
		}
	}

	return (
		<LikesContext.Provider value={{ likes, hasLiked, likePost, feedback }}>
			{children}
			<ToastContainer />
		</LikesContext.Provider>
	)
}

export const useLikes = () => {
	const context = useContext(LikesContext)
	if (!context) {
		throw new Error('useLikes must be used within a LikesProvider')
	}
	return context
}
