import { createFileRoute } from '@tanstack/react-router'
import Notices from '../../pages/employee/Notices'

export const Route = createFileRoute('/employee/notices')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Notices/>
}
