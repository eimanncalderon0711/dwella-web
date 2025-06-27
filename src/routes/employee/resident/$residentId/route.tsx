import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/employee/resident/$residentId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet/>
}
