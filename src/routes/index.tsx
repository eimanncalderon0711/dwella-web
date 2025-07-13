import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  beforeLoad: ({context}) => {
      const {token} = context.auth;
      console.log(token);
      if (!token) {
      return redirect({ to: '/login' });
    }
    return redirect({ to: `/employee` });
  },
  component: () => null,
})