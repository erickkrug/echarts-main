import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApi } from '../useApi';

interface AuthContextType {
  isAuthenticated: boolean;
  is2FAValidated: boolean;
  routes: string[];
  login: (email: string, password: string) => Promise<void>;
  validate2FA: (code: string) => Promise<void>;
}

interface Dashboard {
  caminho: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [is2FAValidated, setIs2FAValidated] = useState(false);
  const [routes, setRoutes] = useState<string[]>(() => {
    // Carrega as rotas salvas do localStorage
    const savedRoutes = localStorage.getItem('routes');
    return savedRoutes ? JSON.parse(savedRoutes) : [];
  });
  const navigate = useNavigate();
  const { api } = useApi();

  const saveRoutes = (newRoutes: string[]) => {
    setRoutes((prevRoutes) => {
      const updatedRoutes = [...prevRoutes, ...newRoutes];
      // Salva as rotas no localStorage
      localStorage.setItem('routes', JSON.stringify(updatedRoutes));
      return updatedRoutes;
    });
  };

  const login = async (email: string, password: string) => {
    try {
      await api.post('login', { email, password });

      setIsAuthenticated(true);
      navigate('/login/authentication');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      throw error;
    }
  };

  const validate2FA = async (TokenDoisFatores: string) => {
    try {
      const response = await api.post('login/Autenticacao', { TokenDoisFatores }, { withCredentials: true });
      const { dashboards } = response.data;

      // Atualiza as rotas e persiste no localStorage
      const newRoutes = dashboards.map((item: Dashboard) => item.caminho);
      saveRoutes(newRoutes);

      setIs2FAValidated(true);
      navigate('/dashboards/geral');
    } catch (error) {
      console.error('Erro na validação do 2FA:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, is2FAValidated, routes, login, validate2FA }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
