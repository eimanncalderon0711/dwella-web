import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/edit-profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/edit-profile"!</div>
}
