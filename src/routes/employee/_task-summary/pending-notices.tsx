import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/employee/_task-summary/pending-notices')(
  {
    component: RouteComponent,
  },
)

function RouteComponent() {
  return <div>Hello "/employee/_task-summary/pending-notices"!</div>
}
