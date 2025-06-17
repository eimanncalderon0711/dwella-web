import { createLazyFileRoute } from '@tanstack/react-router'
import PayNow from '../../pages/resident/PayNow'

export const Route = createLazyFileRoute('/resident/paynow')({
  component: RouteComponent,
})

function RouteComponent() {
  return <PayNow/>
}
