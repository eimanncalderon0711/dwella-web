import { createFileRoute } from '@tanstack/react-router'
import Notices from '../../pages/resident/Notices'

export const Route = createFileRoute('/resident/notices')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Notices/>
}
