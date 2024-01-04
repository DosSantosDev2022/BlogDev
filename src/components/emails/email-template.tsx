import * as React from 'react'

interface EmailTemplateProps {
  firstName: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div className="rounded-md bg-slate-50 border w-full p-4 flex flex-col items-center justify-center gap-6">
    <h1>Olá, meu nome é {firstName}!</h1>
  </div>
)
