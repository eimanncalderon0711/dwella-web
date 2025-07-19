// src/auth/AuthContext.tsx
import { type ReactNode } from '@tanstack/react-router';
import { createContext, useContext, useEffect, useState} from 'react';
import AuthService from '../../services/auth.service';
import type { IServiceError } from '../../interfaces/error-handlers/IServiceError';
import { useFetchUser } from '../../hooks/user/useFethUser';
import type { User } from '../../models/User.model';
import { jwtDecode } from 'jwt-decode';
import type { ITokenPayload } from '../../interfaces/payloads/ITokenPayload';

// Token type
export type TokenType = {
  refresh: string;
  access: string;
} | null;

// Enum Role
export const UserRole = {
  Admin: 'admin',
  Employee: 'employee',
  Resident: 'resident',
} as const;

export type UserRole = typeof UserRole[keyof typeof UserRole];


// Context type
type AuthContextType = {
  token: TokenType;
  setToken: (value: React.SetStateAction<TokenType>) => void;
  login: (username: string, password: string) => void;
  logout: () => void;
  isLoading: boolean;
  setUser: (value: React.SetStateAction<User | undefined>) => void;
  user: User | undefined;
  role: UserRole | undefined;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth provider
export const AuthProvider = ({ children }: { children: ReactNode }) => { 

  //Check if there are saved token in localstorage
  const getInitialToken = () : TokenType => {
  const saved = localStorage.getItem('token');
  return saved ? JSON.parse(saved) : null;
  };
  
  //Global states/variable 
  const [token, setToken] = useState<TokenType>(getInitialToken);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | undefined>()
  const [role, setRole] = useState<UserRole | undefined>();
  

  useEffect(() => {
    setIsLoading(false); // done loading auth
  }, []);

  //Check user if it has validated token it will fetch the user details
  useEffect(()=>{
     const initUser = async() => {
      if(token){
        try{
          const userData: User = await useFetchUser(token);
          const decode = jwtDecode<ITokenPayload>(token.access)
          setRole(decode.role as UserRole)
          setUser(userData)
        }
        catch(err){
          console.log(err)
        }
      }
    }
    initUser();
  },[token])

  //Login function for authentication
  const login = async (username: string, password: string) => {
    const {login} = AuthService();
    try {
      const data = await login(username, password);
      localStorage.setItem('token', JSON.stringify(data))
      setToken(data);
      setIsLoading(false)
      
    } catch (error) {
      const err = error as IServiceError;
      console.log(err)
    }

  }

  // Logout function and clear token the stored in localstorage
  const logout = () => {
    localStorage.clear();
    setToken(null);
  }

  return (
    <AuthContext.Provider value={{token, user, role,  setUser,  setToken, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

//export useAuth to make the context accessible accross components and avoid prop drilling
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
