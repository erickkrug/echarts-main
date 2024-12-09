import { Routes, Route } from 'react-router-dom';
import { useAuth } from './hooks/content/AuthContext';
import { useEffect } from 'react';
import Geral from './pages/dashboards/geral';

// Componente que carrega as rotas dinamicamente
const DynamicRoutes = () => {
  const { routes } = useAuth();

  useEffect(() => {
    console.log(routes); // Verifique se as rotas estão sendo atualizadas
  }, [routes]);

  // Verifica se routes não está vazio antes de tentar mapear
  if (routes.length === 0) {
    return <div>Carregando...</div>; // Exibe uma mensagem enquanto as rotas são carregadas
  }

  // Mapeia as rotas dinâmicas
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route} element={<Geral />} />
      ))}
    </Routes>
  );
};


export default DynamicRoutes;
