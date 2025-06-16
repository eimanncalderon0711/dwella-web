import { createFileRoute } from '@tanstack/react-router'
import Inquiries from '../../pages/resident/Inquiries'

export const Route = createFileRoute('/resident/inquiries')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Inquiries/>
}
