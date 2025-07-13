import { createFileRoute } from '@tanstack/react-router'
import Notifications from '../../../../pages/admin/Notifications'

export const Route = createFileRoute('/_protected/admin/notifications/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Notifications/>
}
