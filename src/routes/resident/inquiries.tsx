import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/resident/inquiries')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/resident/inquiries"!</div>
}
