import { createFileRoute } from '@tanstack/react-router'
import Resident from '../../../pages/employee/Resident'

export const Route = createFileRoute('/employee/resident/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Resident/>
}
