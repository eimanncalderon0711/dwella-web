import { createFileRoute } from '@tanstack/react-router'
import { useAuth } from '../../contexts/auth/AuthContext'

export const Route = createFileRoute('/_auth/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  const {user} = useAuth();
  console.log(user);
  return <div>Dashboard: Authenticated Content</div>
}
