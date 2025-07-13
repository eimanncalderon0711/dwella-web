// src/auth/AuthContext.tsx
import { redirect, useNavigate, type ReactNode } from '@tanstack/react-router';
import { createContext, useContext, useEffect, useState} from 'react';
import AuthService from '../../services/auth.service';

type AuthContextType = {
  token: string | null;
  refreshToken: string | null;
  login: (username: string, password: string) => void;
  logout: () => void;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => { 
  
  const [token, setToken] = useState<string | null>(localStorage.getItem('access_token'));
  const [refreshToken, setRefreshToken] = useState<string | null>(localStorage.getItem('refresh_token'));
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  useEffect(() => {
    const storedAccess = localStorage.getItem('access_token');
    const storedRefresh = localStorage.getItem('refresh_token');
    if (storedAccess) setToken(storedAccess);
    if (storedRefresh) setRefreshToken(storedRefresh);
    setIsLoading(false); // done loading auth
  }, []);


  
  const login = async (username: string, password: string) => {
    
    const {login} = AuthService();

    try {
      const data = await login(username, password);
      console.log(data)
      localStorage.setItem('access_token', data.access);
      localStorage.setItem('refresh_token', data.refresh);
      setToken(data.access);
      setRefreshToken(data.refresh);
      
    } catch (error: any) {
      console.log('invalid password ka boy!!', error.status)
    }
  }

  
  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setToken(null);
    setRefreshToken(null);
  }

  return (
    <AuthContext.Provider value={{token, refreshToken, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
