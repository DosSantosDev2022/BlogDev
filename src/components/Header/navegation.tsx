import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

export function Navigation() {
  const categorys: { title: string; href: string }[] = [
    {
      title: 'Carreira',
      href: `/Categorys/Carreira`,
    },
    {
      title: 'JavaScript',
      href: '/Categorys/JavaScript',
    },
    {
      title: 'Next Js',
      href: '/Categorys/Next-Js',
    },
    {
      title: 'Front-end',
      href: '/Categorys/Front-End',
    },
    {
      title: 'Back-end',
      href: '/Categorys/Back-end',
    },
    {
      title: 'React Js',
      href: '/Categorys/React-Js',
    },
    {
      title: 'HTML 5',
      href: '/Categorys/HTML',
    },
  ]

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categorias</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid bg-white gap-3 p-4 w-[310px] md:w-[400px] md:grid-cols-1 lg:w-[220px] ">
              {categorys.map((category) => (
                <ListItem
                  key={category.title}
                  title={category.title}
                  href={category.href}
                ></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/Contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contato
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <Link
        href={''}
        ref={ref}
        className={cn(
          'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blumine-200  focus:bg-blumine-200 focus:text-blumine-800',
          className,
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-blumine-50">
          {children}
        </p>
      </Link>
    </li>
  )
})
ListItem.displayName = 'ListItem'
