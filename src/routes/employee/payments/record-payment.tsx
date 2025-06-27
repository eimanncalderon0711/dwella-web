import { createFileRoute } from '@tanstack/react-router'
import RecordPayment from '../../../pages/employee/RecordPayment'

export const Route = createFileRoute('/employee/payments/record-payment')({
  component: RouteComponent,
})

function RouteComponent() {
  return <RecordPayment/>
}
