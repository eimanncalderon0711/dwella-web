import { createFileRoute, Outlet } from '@tanstack/react-router'
export const Route = createFileRoute('/admin/financial')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet/>
}
