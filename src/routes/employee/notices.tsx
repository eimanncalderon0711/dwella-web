import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/employee/notices')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/employee/notices"!</div>
}
