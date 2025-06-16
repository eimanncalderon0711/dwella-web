import { createFileRoute } from '@tanstack/react-router'
import PayNow from '../../pages/resident/PayNow'

export const Route = createFileRoute('/resident/paynow')({
  component: RouteComponent,
})

function RouteComponent() {
  return <PayNow/>
}
