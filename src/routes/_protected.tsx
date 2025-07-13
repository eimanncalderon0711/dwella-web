import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected')({
  beforeLoad: async ({ context }) => {
    const { isLoading, token } = context.auth;

    // If the context is still loading, we don't allow routing yet
    if (isLoading) {
      return <h1>Loading......</h1>; // Do nothing and allow React Router to continue waiting
    }

    // If the user is not authenticated, redirect them to login
    if (!token) {
      return redirect({ to: '/login' });
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet/>
}
