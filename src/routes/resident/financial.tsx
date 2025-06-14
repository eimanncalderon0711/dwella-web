import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/resident/financial')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/resident/financial"!</div>
}
