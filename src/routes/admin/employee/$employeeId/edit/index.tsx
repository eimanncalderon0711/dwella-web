import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/employee/$employeeId/edit/')({
  component: RouteComponent,
})

function RouteComponent() {
  const {employeeId} = Route.useParams();
  return <div>Hello "/admin/employee/$employeeId/edit/" {employeeId}!</div>
}
