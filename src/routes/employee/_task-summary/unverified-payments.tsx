import { createFileRoute } from '@tanstack/react-router'
import UnverifiedPayments from '../../../pages/employee/UnverifiedPayments'

export const Route = createFileRoute(
  '/employee/_task-summary/unverified-payments',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <UnverifiedPayments/>
}
