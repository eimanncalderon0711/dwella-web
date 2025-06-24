import { createFileRoute } from '@tanstack/react-router'
import NoticeReceivedTable from '../../../../../components/admin/tables/resident-profile/category-history/NoticeReceivedTable'

export const Route = createFileRoute(
  '/admin/resident/$residentId/_view/notice-received',
)({
  component: RouteComponent,
})

function RouteComponent() {
  const {residentId} = Route.useParams()
  return <NoticeReceivedTable/>
}
