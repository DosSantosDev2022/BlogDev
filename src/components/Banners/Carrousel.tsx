'use client'
import * as React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'
import { TagsPost } from '@/components/globals/Cards/tags'
import { Author } from '@/components/Authors/author'
import { Post } from '@/types/Iposts'

interface BannerCarrouselProps {
  featuredPosts: Post[]
}

export function BannerCarrousel({ featuredPosts }: BannerCarrouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  )
  return (
    <Carousel plugins={[plugin.current]} className="w-full">
      <CarouselContent>
        {featuredPosts.map((post, index) => (
          <CarouselItem key={index}>
            <Link
              href={{
                pathname: `/Post/${post.slug}`,
              }}
            >
              <div className="w-full  lg:h-[550px] h-[250px]  rounded-md  shadow-md ">
                <div
                  className="flex flex-col items-center justify-center h-full p-4 gap-3 rounded-md bg-center  bg-cover  bg-no-repeat "
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(24, 59, 86, 0.00) 0%, rgba(22, 49, 70, 0.45) 45.38%, #152532 100%), url(${post.coverImage.url})`,
                  }}
                >
                  <div className="flex flex-col items-start gap-3 lg:w-9/12">
                    <TagsPost tagName={post.tag.tagName} />
                    <h2 className="lg:text-6xl font-bold text-slate-50 ">
                      {post.title}
                    </h2>
                    <Author.Root>
                      <Author.Avatar
                        className="w-14 h-14"
                        ImageProfile={post.author.photo.url}
                        name={post.author.name}
                      />
                      <div className="flex flex-col gap-1">
                        <Author.Name
                          nome={post.author.name}
                          className="text-lg"
                        />
                        <Author.CreateAd
                          CreateAd={post.createdAt}
                          className="text-md"
                        />
                      </div>
                    </Author.Root>
                  </div>
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
