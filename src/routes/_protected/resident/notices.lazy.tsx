import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_protected/resident/notices')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_protected/resident/notices"!</div>
}
