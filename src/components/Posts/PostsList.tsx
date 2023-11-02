import { CardPosts } from "../Cards/Card";

export  function PostsList() {
  return ( 
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-5">
       <CardPosts/>
       <CardPosts/>
       <CardPosts/>
       <CardPosts/>
    </div>
  )
}