import { createLazyFileRoute } from '@tanstack/react-router'
import Notices from '../../pages/resident/Notices'

export const Route = createLazyFileRoute('/resident/notices')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Notices/>
}
