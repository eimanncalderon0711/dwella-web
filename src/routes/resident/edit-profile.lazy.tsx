import { createLazyFileRoute } from '@tanstack/react-router'
import EditProfile from '../../pages/resident/EditProfile'

export const Route = createLazyFileRoute('/resident/edit-profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return <EditProfile/>
}
