import { createFileRoute } from '@tanstack/react-router'
import EmployeeProfile from '../../../../../pages/admin/EmployeeProfile';

export const Route = createFileRoute('/admin/employee/$employeeId/_view/')({
  component: RouteComponent,
})

function RouteComponent() {
    const {employeeId} = Route.useParams();
    return <EmployeeProfile employeeId={employeeId}/>
}
