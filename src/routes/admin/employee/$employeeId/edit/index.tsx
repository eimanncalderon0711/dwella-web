import { createFileRoute } from '@tanstack/react-router'
import EditProfile from '../../../../../pages/employee/EditProfile';

export const Route = createFileRoute('/admin/employee/$employeeId/edit/')({
  component: RouteComponent,
})

function RouteComponent() {
  const {employeeId} = Route.useParams();
  return <EditProfile/>
}
