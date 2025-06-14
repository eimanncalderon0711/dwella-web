import { createFileRoute } from '@tanstack/react-router'
import Dashboard from '../../pages/resident/Dashboard'

export const Route = createFileRoute('/resident/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Dashboard/>
}
