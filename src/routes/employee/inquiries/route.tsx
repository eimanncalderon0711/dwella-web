import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/employee/inquiries')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet/>
}
