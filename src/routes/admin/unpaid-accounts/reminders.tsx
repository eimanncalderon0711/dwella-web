import { createFileRoute } from '@tanstack/react-router'
import SendReminder from '../../../pages/admin/SendReminder'

export const Route = createFileRoute('/admin/unpaid-accounts/reminders')({
  component: RouteComponent,
})

function RouteComponent() {
  return <SendReminder/>
}
