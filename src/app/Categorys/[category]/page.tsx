'use client'

import { useContext} from 'react';
import { BlogContext } from '@/context/blogContext';
import { CardPosts } from '@/components/Cards/Card';


export default function Category({params} : {params : {category : string}}) {


  const {posts} = useContext(BlogContext)
  const filteredPosts = posts.filter((post) => post.category === params.category);
  

  return (
    <div className='flex flex-col items-center justify-center py-6 gap-4'>
      <h1 className="text-3xl font-bold text-slate-900">{params.category} Posts </h1>
      <ul className=' flex items-center justify-center flex-wrap gap-4'>
        {filteredPosts.map((post) => (
          <CardPosts key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}
