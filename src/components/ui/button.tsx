import { Slot } from '@radix-ui/react-slot'
import { ForwardedRef } from 'react'
import { twMerge } from 'tailwind-merge'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?:
    | 'primary'
    | 'secundary'
    | 'outline'
    | 'highlight'
    | 'disabled'
    | 'link'
  ref?: ForwardedRef<HTMLButtonElement>
}

export function Button({
  className,
  variant = 'primary',
  asChild = false,
  ref,
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary: `bg-blumine-700 text-blumine-50 hover:bg-blumine-900  `,
    secundary:
      'bg-blumine-50 text-blumine-900 hover:bg-blumine-900 hover:text-blumine-50',
    outline: `bg-transparent border border-blumine-100 text-blumine-800 hover:bg-blumine-700 hover:text-blumine-50`,
    highlight: `text-zinc-50 hover:bg-violet-800 duration-300 bg-violet-900 `,
    disabled: 'bg-blumine-900 border border-blumine-900 text-blumine-50 ',
    link: `bg-transparent border-none underline`,
  }

  const _className = twMerge(
    variantClasses[variant],
    `appearance-none rounded-md p-1 text-sm font-bold shadow transition-all duration-500 `,
    className,
  )
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp ref={ref} className={_className} {...props}>
      {props.children}
    </Comp>
  )
}
