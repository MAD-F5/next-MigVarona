
const INVITATIONS = [1,2,3,4,5,6]
import Link from 'next/link'

export default function invitations() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Invitaciones</h1>
      <ul>
        {INVITATIONS.map((i) => (
          <li key={i}>
            <Link href={`/invitation/${i}`}>Invitación {i}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
