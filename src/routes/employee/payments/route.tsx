import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/employee/payments')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet/>
}
