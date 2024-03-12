interface AuthorBioProps {
  text: string
}

export function AuthorBio({ text }: AuthorBioProps) {
  return <p className="text-sm font-normal">{text}</p>
}
