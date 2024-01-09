export default function invitation({ params }: { params: { id: string } }) {
  return <div>My invitation: {params.id}</div>
}