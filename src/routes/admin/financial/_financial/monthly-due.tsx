import { createFileRoute } from '@tanstack/react-router'
import MonthlyDuesTable from '../../../../components/admin/tables/MonthlyDuesTable'

export const Route = createFileRoute('/admin/financial/_financial/monthly-due')({
  component: RouteComponent,
})

function RouteComponent() {
  return <MonthlyDuesTable/>

}
