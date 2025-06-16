import { createFileRoute, Outlet, redirect, useNavigate } from '@tanstack/react-router'
import { useAuth } from '../../contexts/auth/AuthContext';

export const Route = createFileRoute('/_auth')({
  component: RouteComponent,
  beforeLoad: ({context}) => {
    const {user} = context.auth;
    if(!user){
        throw redirect({to: '/login'});
    }
  }
})

function RouteComponent() {
  const { logout } = useAuth()
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
    navigate({ to: '/login' })
  }

  return (
    <div>
      <header>
        <h1>Protected Area</h1>
        <button onClick={handleLogout}>Logout</button>
      </header>
      <Outlet />
    </div>
  )
}
