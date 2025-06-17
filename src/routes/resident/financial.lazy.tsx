import { createLazyFileRoute } from '@tanstack/react-router'
import Financials from '../../pages/resident/Financials'

export const Route = createLazyFileRoute('/resident/financial')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Financials/>
}
