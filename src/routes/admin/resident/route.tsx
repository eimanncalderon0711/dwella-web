import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/resident')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet/>
}
