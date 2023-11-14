import { BlogContext } from "@/context/blogContext";
import React, { useContext } from "react";
import Link from "next/link";
import { Author } from "../Cards/author";



export  function Carousel(): JSX.Element {
  const { posts } = useContext(BlogContext);
  const firstPost = posts.slice(0,1)
  return (
    <>
      {firstPost.map((post) => (
        <Link key={post.id} href={post.link} >
            <div
            className="flex flex-col items-start justify-end px-3 py-4 gap-5 lg:w-[690px] w-full lg:h-[396px] bg-no-repeat bg-cover rounded-md "
            style={{ backgroundImage: `url(${post.coverImage})` }}
          >
            <span className="bg-slate-50 text-slate-900 font-bold text-[0.625rem] p-[0.375rem] rounded-lg">
              {post.tag}
            </span>
            <h2 className="text-slate-50 font-bold text-2xl lg:text-3xl">
              {post.title}
            </h2>
            <Author post={post} 
             showDate showImage
             titleSize="text-sm" 
             titleColor="text-slate-50"
             dateColor="text-slate-50"
             dateSize="text-sm"
             imageSize={32}/>
          </div>
        </Link>
      ))}
    </>
  );
}