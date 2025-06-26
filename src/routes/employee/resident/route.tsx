import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/employee/resident')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet/>
}
