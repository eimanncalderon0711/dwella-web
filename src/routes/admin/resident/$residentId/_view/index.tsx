import { createFileRoute } from '@tanstack/react-router'
import PaymentHistoryTable from '../../../../../components/admin/tables/resident-profile/category-history/PaymentHistoryTable'

export const Route = createFileRoute(
  '/admin/resident/$residentId/_view/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  const {residentId} = Route.useParams()
  return <PaymentHistoryTable/>
}
