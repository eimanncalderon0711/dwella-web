// routes/login.tsx
import { createFileRoute, redirect } from '@tanstack/react-router'
import { useAuth } from '../contexts/auth/AuthContext'
import Login from '../pages/authentication/Login'

export const Route = createFileRoute('/login')({
  beforeLoad: ({context}) => {
    const {user} = context.auth;
    console.log(user);
    if(user) return redirect({to:'/dashboard'}) 
  },
  component: Login,
})

// function Login() {
//   const { login } = useAuth()
//   const navigate = useNavigate()

//   const handleLogin = () => {
//     login('User123')
//     navigate({ to: '/dashboard' })
//   }

//   return (
//     <>
//       <Login/>
//     </>
//   )
// }
