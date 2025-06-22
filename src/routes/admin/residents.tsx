import { createFileRoute } from '@tanstack/react-router'
import Resident from '../../pages/admin/Resident'

export const Route = createFileRoute('/admin/residents')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Resident/>
}
