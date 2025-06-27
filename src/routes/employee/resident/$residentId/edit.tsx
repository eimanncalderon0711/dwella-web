import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/employee/resident/$residentId/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/employee/resident/$residentId/edit"!</div>
}
