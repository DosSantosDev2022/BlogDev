
'use client'

import SmallCard from "@/components/Cards/SmallCard";
import { Author } from "@/components/Cards/author";
import { BlogContext } from "@/context/blogContext";
import { useContext } from "react";

export default function PagePost() {
 const { posts } = useContext(BlogContext)
 const post = posts[1]
  return (
    <main className="grid  lg:grid-cols-12 gap-1 items-start justify-center mt-12 mb-12 ">
     <section className="flex flex-col items-center justify-start lg:col-span-8 ">
        <div className="w-full h-12 rounded-[10px] py-3 px-[6.375rem] bg-slate-900 flex items-center justify-center">
          
        </div>
        <article className="mt-12 flex flex-col items-center justify-start w-full gap-10 p-2">
          <div className="flex flex-col items-start justify-center w-full gap-5">
            <h1 className="text-slate-900 text-5xl font-bold mb-3">{post.title} </h1>
            <Author variant="authorSmallCard" post={post}/>
          </div>
          <div className="w-full p-2"> {/* Conteudo do post */}
            {post.content}
          </div>
          
        </article>
     </section>
     <section className="lg:col-span-4 flex flex-col items-start justify-center gap-5 mt-5 lg:mt-0 ">
           <div className="w-[22.5rem] h-12 rounded-[10px] py-3   bg-slate-900 flex items-center justify-center">
             <h3 className="text-slate-50 font">Posts Relacionados</h3>
           </div>
           <div className="flex flex-col items-center justify-center space-y-5">
            {posts.map((post) =>(
               <SmallCard key={post.id} post={post} />
            ))}
          </div>
      </section>
    </main>
  );
}
