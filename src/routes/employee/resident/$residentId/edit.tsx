import { createFileRoute } from '@tanstack/react-router'
import EditProfile from '../../../../pages/resident/EditProfile'

export const Route = createFileRoute('/employee/resident/$residentId/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  return <EditProfile/>
}
