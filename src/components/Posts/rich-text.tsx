import { RichText as CmsRichText } from '@graphcms/rich-text-react-renderer'
import { ComponentProps } from 'react'

type RichTextProps = ComponentProps<typeof CmsRichText>

export function RichText({ ...props }: RichTextProps) {
  return (
    <CmsRichText
      {...props}
      renderers={{
        bold: ({ children }) => (
          <b className="text-slate-950 font-bold text-2xl">{children} </b>
        ),
        p: ({ children }) => (
          <p className="font-light text-slate-700">{children}</p>
        ),
      }}
    />
  )
}
