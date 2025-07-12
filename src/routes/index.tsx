import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  beforeLoad: ({context}) => {
      const {token} = context.auth;
      console.log(token);
      if(!token) return redirect({to:'/login'}) 
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet/>
}
