import { createFileRoute } from '@tanstack/react-router'
import Inquiries from '../../../pages/employee/Inquiries'

export const Route = createFileRoute('/employee/inquiries/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Inquiries/>
}
