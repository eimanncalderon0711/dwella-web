import { createFileRoute } from '@tanstack/react-router'
import Employees from '../../pages/admin/Employees'

export const Route = createFileRoute('/admin/employees')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Employees/>
}
