import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/resident/notices')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/resident/notices"!</div>
}
