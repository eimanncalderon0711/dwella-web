import { createFileRoute } from '@tanstack/react-router'
import Dashboard from '../../pages/employee/Dashboard'

export const Route = createFileRoute('/employee/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Dashboard/>
}
