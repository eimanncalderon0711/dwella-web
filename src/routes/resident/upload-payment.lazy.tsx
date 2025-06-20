import { createLazyFileRoute } from '@tanstack/react-router'
import UploadPayment from '../../pages/resident/UploadPayment'

export const Route = createLazyFileRoute('/resident/upload-payment')({
  component: RouteComponent,
})

function RouteComponent() {
  return <UploadPayment/>
}
