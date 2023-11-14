'use client'
import  { Carousel } from "@/components/Banners/Banner";

import { CardPosts } from "@/components/Cards/Card";
import SmallCard from "@/components/Cards/SmallCard";
import { BlogContext } from "@/context/blogContext";
import { useSearch } from "@/context/searchContext";
import { useContext } from "react";



export default function Home() {
  const { searchTerm } = useSearch();

  const {posts} = useContext(BlogContext)

  const filterPosts = posts.filter((post) => 

    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  return (
      <main className="grid  lg:grid-cols-12 gap-1 items-start justify-center mt-12 mb-12 ">
        <section className="flex flex-col items-center justify-start lg:col-span-8 ">
          {!searchTerm && <Carousel />}
          
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 items-center justify-center gap-4">
              {filterPosts.map((post)=> (
                <CardPosts key={post.id} post={post} />
              ))}
            </div>
          
        </section>
        <section className=" lg:col-span-4 flex flex-col items-start justify-center gap-5 mt-5 lg:mt-0 ">
          <div className="w-[22.5rem] h-12 rounded-[10px] py-3 px-[6.375rem] bg-slate-900 flex items-center justify-center">
            <h3 className=" text-slate-50 ">Posts Populares</h3>
          </div>

          <div className="flex flex-col items-center justify-center space-y-5">
            {posts.map((post) =>(
               <SmallCard key={post.id} post={post} />
            ))}
          </div>
            
          <div className="w-[22.5rem] h-12 rounded-[10px] py-3 px-[6.375rem] bg-slate-900 flex items-center justify-center">
            <h3 className=" text-slate-50 ">Posts Populares</h3>
          </div>
          <div className="flex flex-col items-center justify-center space-y-5">
            {posts.map((post) => (
              <SmallCard post={post} key={post.id} />
            ))}
          </div>
        </section>
      </main>    
  )
}
