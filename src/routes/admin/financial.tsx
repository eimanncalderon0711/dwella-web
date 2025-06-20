import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/financial')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/financial"!</div>
}
