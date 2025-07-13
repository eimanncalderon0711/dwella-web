import { createFileRoute } from '@tanstack/react-router'
import SubmitRequest from '../../../pages/resident/SubmitRequest'

export const Route = createFileRoute('/_protected/resident/submit-request')({
  component: RouteComponent,
})

function RouteComponent() {
  return <SubmitRequest/>
}
