import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/employee/notices')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet/>
}
