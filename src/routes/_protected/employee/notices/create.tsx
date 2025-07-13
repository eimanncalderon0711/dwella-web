import { createFileRoute } from '@tanstack/react-router'
import CreateNotice from '../../../../pages/employee/CreateNotice'

export const Route = createFileRoute('/_protected/employee/notices/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return <CreateNotice/>
}
