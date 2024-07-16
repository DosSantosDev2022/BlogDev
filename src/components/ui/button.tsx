import { Slot } from '@radix-ui/react-slot'
import { ForwardedRef } from 'react'
import { twMerge } from 'tailwind-merge'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?:
    | 'mycolor'
    | 'secundary'
    | 'outline'
    | 'highlight'
    | 'disabled'
    | 'link'
  ref?: ForwardedRef<HTMLButtonElement>
}

export function Button({
  className,
  variant = 'mycolor',
  asChild = false,
  ref,
  ...props
}: ButtonProps) {
  const variantClasses = {
    mycolor: `bg-mycolor-700 text-mycolor-50 hover:bg-mycolor-900  `,
    secundary: 'bg-mycolor-50 text-mycolor-950  hover:text-mycolor-900',
    outline: `bg-transparent border border-blumine-100 text-mycolor-800 hover:bg-mycolor-700 hover:text-mycolor-50`,
    highlight: `text-zinc-50 hover:bg-violet-800 duration-300 bg-violet-900 `,
    disabled: 'bg-mycolor-900 border border-mycolor-900 text-mycolor-50 ',
    link: `bg-transparent border-none underline`,
  }

  const _className = twMerge(
    variantClasses[variant],
    `appearance-none rounded-md px-2 py-3 text-sm  shadow transition-all duration-500 `,
    className,
  )
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp ref={ref} className={_className} {...props}>
      {props.children}
    </Comp>
  )
}
