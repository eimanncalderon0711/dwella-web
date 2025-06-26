import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/unpaid-accounts')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet/>
}
