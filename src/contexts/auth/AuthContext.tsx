// src/auth/AuthContext.tsx
import type { ReactNode } from '@tanstack/react-router';
import { createContext, useContext, useState} from 'react';
import AuthService from '../../services/auth.service';

type AuthContextType = {
  token: string | null;
  refreshToken: string | null;
  login: (username: string, password: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => { 

  const has_token = localStorage.getItem('token');
  
  const [token, setToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  
  
  if (has_token){
    setToken(has_token);
  }

  const login = async (username: string, password: string) => {
    
    const {login, refreshToken} = AuthService();

    try {
      const data = await login(username, password)
      setToken(data.access);
      setRefreshToken(data.refresh);

    } catch (error) {
      console.log(error)
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken('')
    setRefreshToken('')
  }

  return (
    <AuthContext.Provider value={{token, refreshToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
