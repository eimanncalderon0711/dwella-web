import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/employee/payments')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/employee/payments"!</div>
}
