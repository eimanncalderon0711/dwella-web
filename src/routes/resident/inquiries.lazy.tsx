import { createLazyFileRoute } from '@tanstack/react-router'
import Inquiries from '../../pages/resident/Inquiries'

export const Route = createLazyFileRoute('/resident/inquiries')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Inquiries/>
}
