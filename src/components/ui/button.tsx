import { Slot } from '@radix-ui/react-slot'
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
}

export function Button({
  className,
  variant = 'primary',
  asChild = false,
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary: `bg-primary text-light hover:primary_hover  `,
    secundary: 'bg-slate-50 text-slate-900 hover:bg-slate-200',
    outline: `bg-transparent border border-secunday text-light hover:bg-secundary_hover`,
    highlight: `text-zinc-50 hover:bg-violet-800 duration-300 bg-violet-900 `,
    disabled: 'bg-black border border-zinc-800 text-light ',
    link: `bg-transparent border-none underline`,
  }

  const _className = twMerge(
    variantClasses[variant],
    `appearance-none rounded-md p-1 text-sm font-bold shadow transition-all duration-500 `,
    className,
  )
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp className={_className} {...props}>
      {props.children}
    </Comp>
  )
}
