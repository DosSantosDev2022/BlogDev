import { RichText as CmsRichText } from '@graphcms/rich-text-react-renderer'
import { ComponentProps } from 'react'

type RichTextProps = ComponentProps<typeof CmsRichText>

export function RichText({ ...props }: RichTextProps) {
  return (
    <CmsRichText
      {...props}
      renderers={{
        bold: ({ children }) => (
          <b className="text-primary font-bold text-2xl">{children} </b>
        ),
        p: ({ children }) => (
          <p className="font-light text-slate-700">{children}</p>
        ),
        code_block: ({ children }) => (
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto w-full">
            <code className="text-primary">{children}</code>
          </pre>
        ),
        ul: ({ children }) => (
          <ul className="list-disc list-inside">{children}</ul>
        ),
      }}
    />
  )
}
