import { createFileRoute } from '@tanstack/react-router'
import Financials from '../../pages/resident/Financials'

export const Route = createFileRoute('/resident/financial')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Financials/>
}
