import { createFileRoute } from '@tanstack/react-router'
import Profile from '../../pages/employee/Profile'

export const Route = createFileRoute('/employee/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Profile/>
}
