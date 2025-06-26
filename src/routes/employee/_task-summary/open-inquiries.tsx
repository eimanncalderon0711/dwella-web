import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/employee/_task-summary/open-inquiries')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/employee/_task-summary/open-inquiries"!</div>
}
