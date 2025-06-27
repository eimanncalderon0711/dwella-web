import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/employee/resident/add-resident')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/employee/resident/$residentId/edit"!</div>
}
