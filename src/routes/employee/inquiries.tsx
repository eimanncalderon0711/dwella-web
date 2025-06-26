import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/employee/inquiries')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/employee/inquiries"!</div>
}
