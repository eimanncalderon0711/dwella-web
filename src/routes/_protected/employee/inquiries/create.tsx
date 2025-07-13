import { createFileRoute } from '@tanstack/react-router'
import CreateInquiry from '../../../../pages/employee/CreateInquiry'

export const Route = createFileRoute('/_protected/employee/inquiries/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return <CreateInquiry />
}
