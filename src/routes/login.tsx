// routes/login.tsx
import { createFileRoute, redirect } from '@tanstack/react-router'
import Login from '../pages/authentication/Login'

export const Route = createFileRoute('/login')({
  beforeLoad: ({context}) => {
    const {token} = context.auth;
    if(token) return redirect({to:'/employee'})
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <Login/>
}
