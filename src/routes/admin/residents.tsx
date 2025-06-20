import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/residents')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/residents"!</div>
}
