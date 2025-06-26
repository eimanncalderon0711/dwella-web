import { createFileRoute, useNavigate } from '@tanstack/react-router'
import EditProfile from '../../../../pages/employee/EditProfile';

export const Route = createFileRoute('/admin/employee/$employeeId/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  const {employeeId} = Route.useParams();
      const navigate = useNavigate();

  if(!Number(employeeId)){
    return navigate({to:'/admin/employee'})  
  }
      
  return <EditProfile/>
}
