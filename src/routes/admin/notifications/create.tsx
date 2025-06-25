import { createFileRoute } from '@tanstack/react-router'
import CreateNotice from '../../../pages/admin/CreateNotice'

export const Route = createFileRoute('/admin/notifications/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return <CreateNotice/>
}
