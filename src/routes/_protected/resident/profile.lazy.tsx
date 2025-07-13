import { createLazyFileRoute } from '@tanstack/react-router'
import Profile from '../../../pages/resident/Profile'

export const Route = createLazyFileRoute('/_protected/resident/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Profile/>
}
