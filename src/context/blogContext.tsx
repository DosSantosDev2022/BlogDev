'use client'

import { BlogApi } from '@/lib/axios';

import { createContext, ReactNode, useEffect, useState } from 'react';

export interface Post {
  id: number,
  title: string,
  content: string,
  description: string,
  authorImage: string,
  coverImage : string
  tag: string,
  author: string,
  date: string,
  className?: string,
  variant?: string,
  link: string
}

interface BlogContextType {
  posts: Post[]
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const BlogContext = createContext<BlogContextType>({
  posts: [],
  setPosts: () => {},
});

const BlogProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]); 
  useEffect(() => {
      const fetchPosts = async() => {
        try {
          const response = await BlogApi.get('/posts')
          
          setPosts(response.data)
        }catch(error){
          console.error('Erro ao buscar posts')
        }
      }

      fetchPosts()
  },[])

  return (
    <BlogContext.Provider value={{ posts, setPosts }}>
      {children}
    </BlogContext.Provider>
  );
}

export { BlogContext, BlogProvider };
 