import { createFileRoute } from '@tanstack/react-router'
import UnitInformation from '../pages/authentication/UnitInformation'

export const Route = createFileRoute('/unit-information')({
  component: RouteComponent,
})

function RouteComponent() {
  return <UnitInformation />
}
