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
import { TagsPost } from '../globals/Cards/tags'
import { Author } from '../globals/author'
import { Post } from '@/types/Iposts'

interface BannerCarrouselProps {
  featuredPosts: Post[]
}

export function BannerCarrousel({ featuredPosts }: BannerCarrouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  )
  return (
    <Carousel plugins={[plugin.current]} className="lg:w-[43.75rem] w-[336px] ">
      <CarouselContent>
        {featuredPosts.map((post, index) => (
          <CarouselItem key={index}>
            <Link
              href={{
                pathname: `/Posts/${post.slug}`,
              }}
            >
              <div className=" lg:w-[43.75rem] w-[336px]  lg:h-[320px] h-[250px]  rounded-md  shadow-md ">
                <div
                  className="flex flex-col justify-end h-full p-4 gap-3 rounded-md bg-center  bg-cover  bg-no-repeat "
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(24, 59, 86, 0.00) 0%, rgba(22, 49, 70, 0.45) 45.38%, #152532 100%), url(${post.coverImage.url})`,
                  }}
                >
                  <div className="flex flex-col items-start gap-1">
                    <TagsPost tagName={post.tag.tagName} />
                    <h2 className="text-base font-bold text-slate-50">
                      {post.title}
                    </h2>
                  </div>
                  <Author.Root>
                    <Author.Avatar
                      ImageProfile={post.author.photo.url}
                      name={post.author.name}
                    />
                    <Author.Name nome={post.author.name} />
                    <Author.CreateAd CreateAd={post.createdAt} />
                  </Author.Root>
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="sm: hidden lg:flex" />
      <CarouselNext className="sm: hidden lg:flex" />
    </Carousel>
  )
}
