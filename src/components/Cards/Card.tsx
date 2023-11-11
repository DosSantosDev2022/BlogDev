
import Link from "next/link";
import { Author } from "./author";
import { useContext } from "react";
import { BlogContext, Post } from "@/context/blogContext";



export  function CardPosts({post} : {post : Post}){
  const { posts } = useContext(BlogContext);
  return (
    <Link href={post.link} >
      <div className=" w-[21rem] h-[24.75rem]  rounded-md  shadow-md">
        <div className="flex flex-col justify-end h-full p-4 gap-3 rounded-md bg-center bg-auto  bg-no-repeat" style={{ backgroundImage: `url(${post.coverImage})` }}>
          <div className="flex flex-col items-start gap-1">
            <span className="bg-slate-900 text-slate-50 text-[0.625rem] p-[0.375rem] rounded-lg" >{post.tag}</span>
            <h2 className="text-base font-bold text-slate-50">{post.title}</h2>
            <p className="text-sm text-slate-100 font-normal">{post.description} </p>
          </div>
          <Author 
            showImage 
            showDate 
            titleColor="text-slate-50" 
            titleSize="text-sm" 
            dateSize="text-sm" 
            dateColor="text-slate-50"  
            post={post}
            imageSize={28}
          />
        </div>
      </div>
    </Link>
    
  )
}