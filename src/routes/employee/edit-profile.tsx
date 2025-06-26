import { createFileRoute } from '@tanstack/react-router'
import EditProfile from '../../pages/employee/EditProfile'

export const Route = createFileRoute('/employee/edit-profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return <EditProfile/>
}
