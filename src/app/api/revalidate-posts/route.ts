import { NextResponse } from "next/server";
import {revalidateTag} from 'next/cache'


export async function POST(request:Request) {

  const secret = request.headers.get('secret')

  if(secret !== process.env.REVALIDADE_SECRET) {
    return NextResponse.json({revalidated: false}, {status: 401})
  }

  revalidateTag('all-posts') // revalida a tag all-posts
  return NextResponse.json({revalidated: true})
  
}