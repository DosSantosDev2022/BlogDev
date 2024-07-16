import Link from 'next/link'

export function Logo() {
  return (
    <>
      <Link href={'/'}>
        <h1 className="text-mycolor-50 font-bold text-4xl">Blog Dev</h1>
      </Link>
    </>
  )
}
