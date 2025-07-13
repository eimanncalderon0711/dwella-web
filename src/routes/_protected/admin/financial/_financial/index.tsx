import { createFileRoute } from '@tanstack/react-router'
import PaymentRecordsTable from '../../../../../components/admin/tables/PaymentRecordsTable'

export const Route = createFileRoute('/_protected/admin/financial/_financial/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <PaymentRecordsTable/>
}
