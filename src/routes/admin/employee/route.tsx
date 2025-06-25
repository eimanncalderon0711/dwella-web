import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/employee')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet/>
}
