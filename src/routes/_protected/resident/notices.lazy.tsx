import { createLazyFileRoute } from '@tanstack/react-router'
import Notices from '../../../pages/resident/Notices'

export const Route = createLazyFileRoute('/_protected/resident/notices')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Notices/>
}
