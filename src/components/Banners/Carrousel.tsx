'use client'
import * as React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'
import { TagsPost } from '../Cards/tags'
import { Author } from '../Posts/author'
import { Post } from '@/types/Iposts'

interface BannerCarrouselProps {
  featuredPosts: Post[]
}

export function BannerCarrousel({ featuredPosts }: BannerCarrouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  )
  return (
    <Carousel
      opts={{
        align: 'start',
        plugin,
      }}
      className="lg:w-[43.75rem] "
    >
      <CarouselContent>
        {featuredPosts.map((post, index) => (
          <CarouselItem key={index}>
            <Link
              href={{
                pathname: `/Posts/${post.slug}`,
              }}
            >
              <div className=" lg:w-[43.75rem] w-full h-[320px]  rounded-md  shadow-md ">
                <div
                  className="flex flex-col justify-end h-full p-4 gap-3 rounded-md bg-center  bg-cover  bg-no-repeat "
                  style={{ backgroundImage: `url(${post.coverImage.url})` }}
                >
                  <div className="flex flex-col items-start gap-1">
                    <TagsPost tagName={post.tag.tagName} />
                    <h2 className="text-base font-bold text-slate-50">
                      {post.title}
                    </h2>
                  </div>
                  <Author
                    CreateAd={post.createdAt}
                    ImageProfile={post.author.photo.url}
                    Name={post.author.name}
                    nameStyles="text-slate-50 text-sm"
                    dataStyles="text-slate-50 text-sm font-"
                  />
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
