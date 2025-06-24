import { createFileRoute } from '@tanstack/react-router'
import AddResident from '../../../pages/admin/AddResident'

export const Route = createFileRoute('/admin/resident/add-resident')({
  component: RouteComponent,
})

function RouteComponent() {
  return <AddResident/>
}
