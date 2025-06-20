import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/unpaid-accounts')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/unpaid-accounts"!</div>
}
