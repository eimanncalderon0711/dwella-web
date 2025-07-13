import { createLazyFileRoute } from '@tanstack/react-router'
import AccountSetting from '../../../pages/resident/AccountSetting'

export const Route = createLazyFileRoute('/_protected/resident/account')({
  component: RouteComponent,
})

function RouteComponent() {
  return <AccountSetting/>
}
