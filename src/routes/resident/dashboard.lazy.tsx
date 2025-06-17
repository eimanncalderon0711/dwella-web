import { createLazyFileRoute } from '@tanstack/react-router'
import Dashboard from '../../pages/resident/Dashboard'

export const Route = createLazyFileRoute('/resident/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Dashboard/>
}
