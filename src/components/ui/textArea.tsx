import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>
const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    return (
      <textarea
        {...props}
        ref={ref}
        className={twMerge(
          'rounded  bg-mycolor-800  px-3   py-4 font-light text-mycolor-200 outline-none focus:ring-2 focus:ring-mycolor-900',
          props.className,
        )}
      />
    )
  },
)
TextArea.displayName = 'textArea'

export default TextArea
