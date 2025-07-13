import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { AuthProvider, useAuth } from './contexts/auth/AuthContext';

const router = createRouter({
  routeTree,
  context:{
    auth: undefined!,
  }
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
export const InnerApp = () => {
  const auth = useAuth();
  
  return <RouterProvider router={router} context={{auth}} key={auth.token}/>
}

function App() {

  return (
    <>
      <AuthProvider>
        <InnerApp/>
      </AuthProvider>
    </>
  )
}

export default App
