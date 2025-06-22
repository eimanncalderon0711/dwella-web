import { createFileRoute } from '@tanstack/react-router'
import PaymentRecordsTable from '../../../components/admin/tables/PaymentRecordsTable'

export const Route = createFileRoute('/admin/financial/_financial/records')({
  component: RouteComponent,
})

function RouteComponent() {
  return <PaymentRecordsTable/>
}
