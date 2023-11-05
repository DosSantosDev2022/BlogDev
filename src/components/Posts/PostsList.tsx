'use client'

import { BlogContext } from "@/context/blogContext";
import React, { useContext } from 'react';
import { CardPosts } from "../Cards/Card";

export  function PostsList() {
   const {posts} = useContext(BlogContext)
  

  return ( 
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-4">
      {posts.map((post)=> (
         <CardPosts key={post.id} post={post} />
      ))}
      
    </div>
  )
}