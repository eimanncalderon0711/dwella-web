// routes/login.tsx
import { createFileRoute, redirect } from '@tanstack/react-router'
import Login from '../pages/authentication/Login'

export const Route = createFileRoute('/login')({
  beforeLoad: ({context}) => {
    const {token} = context.auth;
    console.log('token: ', token);
    if(token) return redirect({to:'/dashboard'})
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <Login/>
}
