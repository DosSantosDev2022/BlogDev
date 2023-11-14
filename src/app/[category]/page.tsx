'use client'

import { useRouter } from 'next/router';
import { useContext } from 'react';
import { BlogContext } from '@/context/blogContext';
import { CardPosts } from '@/components/Cards/Card';


export default function Category() {
  const router = useRouter()
  const {category } = router.query
  const {posts} = useContext(BlogContext)

  const filterPosts = posts.filter(post => post.tag === category)

  return (
    <div>
      <h1 className='text-3xl font-bold text-slate-900'>{category} Posts </h1>
      <ul>
        {filterPosts.map((post) => (
          <CardPosts key={post.id} post={post} />
        ))}
      </ul>
    </div>
  )
}