import { createFileRoute } from '@tanstack/react-router'
import SubmitRequest from '../../pages/resident/SubmitRequest'

export const Route = createFileRoute('/resident/submit-request')({
  component: RouteComponent,
})

function RouteComponent() {
  return <SubmitRequest/>
}
