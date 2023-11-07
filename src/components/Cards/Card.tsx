
import { Author } from "./author";


interface Post {
  id: number,
  title: string,
  content: string,
  description: string,
  authorImage: string,
  coverImage : string
  tag: string,
  author: string,
  date: string,
  className: string,
  variant: string
}

export  function CardPosts({post} : {post : Post}){
 
  return (
    <div className=" w-[21rem] h-[24.75rem]  rounded-md  shadow-md">
      <div className="flex flex-col justify-end h-full p-4 gap-3 rounded-md bg-center bg-auto  bg-no-repeat" style={{ backgroundImage: `url(${post.coverImage})` }}>
        <div className="flex flex-col items-start gap-1">
          <span className="bg-slate-900 text-slate-50 text-[0.625rem] p-[0.375rem] rounded-lg" >{post.tag}</span>
          <h2 className="text-base font-bold text-slate-50">{post.title}</h2>
          <p className="text-sm text-slate-100 font-normal">{post.description} </p>
        </div>
        <Author variant="authorCard"  post={post}/>
      </div>
    </div>
  )
}