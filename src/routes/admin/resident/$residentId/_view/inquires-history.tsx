import { createFileRoute } from '@tanstack/react-router'
import InquiresHistoryTable from '../../../../../components/admin/tables/resident-profile/category-history/InquiresHistoryTable'

export const Route = createFileRoute(
  '/admin/resident/$residentId/_view/inquires-history',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <InquiresHistoryTable/>
}
