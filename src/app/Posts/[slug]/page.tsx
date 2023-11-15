'use client'
import SmallCard from "@/components/Cards/SmallCard";
import { Author } from "@/components/Cards/author";
import { BlogContext } from "@/context/blogContext";
import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PagePost({ params }: { params: { slug: string } }) {
  
  const {posts} = useContext(BlogContext)
  const post = posts.find((p) => p.slug === params.slug);
  
  if (!post) { 
    // Tratar o caso em que o post não é encontrado
    return <div className="w-full h-full p-4">
          <h1 className="text-3xl font-semibold ">Post não encontrado ! </h1>
    </div> 
  }

  const relatedPosts = 
  posts.filter(
    (p) => p.id !== post.id && p.tag === post.tag
    );
    

   const postPath = (
    <span>
      {post.tag && (
        <Link className="hover:text-slate-400 transition-all" href={`/Categorys/${post.category}`}>
            {`${post.category}`}
        </Link>
      )}

      <Link className="hover:text-slate-400 transition-all" href={`/Posts/${post.slug}`}>
      {post.tag ? ` > ${post.title}` : post.title}
      </Link>
    </span>
   ) 


  return (
    <main className="grid  lg:grid-cols-12 gap-1 items-start justify-center mt-12 mb-12 ">
     <section className="flex flex-col items-center justify-start lg:col-span-8 ">
        <div className="w-full h-12 rounded-[10px] py-3 px-4 bg-slate-900 text-start">
          <p className="text-slate-50">
            {postPath} {/* Renderiza o caminho do post */}
          </p>
        </div>
        <article className="mt-12 flex flex-col items-center justify-start w-full gap-10 p-2">
          <div className="flex flex-col items-start justify-center w-full gap-5">
            <h1 className="text-slate-900 text-5xl font-bold mb-3">{post.title} </h1>
            <Author 
              titleSize="text-lg"
              titleColor="text-slate-900"
              dateColor="text-slate-700"
              dateSize="text-lg"
              post={post}
              showDate
              showImage
              imageSize={38}
            />
          </div>
          <div className="w-full border">
            <Image width={500} height={200}  alt={post.title} src={post.coverImage} />
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
            {relatedPosts.map((post) =>(
               <SmallCard key={post.id} post={post} />
            ))}
          </div>
      </section>
    </main>
  );
}

