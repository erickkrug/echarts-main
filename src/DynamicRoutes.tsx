import { Routes, Route } from 'react-router-dom';
import { useAuth } from './hooks/content/AuthContext';
import { useEffect } from 'react';
import Geral from './pages/dashboards/geral';

// Mapeia os nomes para os componentes correspondentes
const ComponentMap: Record<string, React.FC> = {
  Geral, // Exemplo: "Geral" mapeia para o componente Geral
};

const DynamicRoutes = () => {
  const { routes } = useAuth();

  useEffect(() => {
    console.log(routes); // Verifique se as rotas estão sendo atualizadas corretamente
  }, [routes]);

  if (routes.length === 0) {
    return <div>Carregando...</div>;
  }

  return (
    <Routes>
      {routes.map((route, index) => {
        const Component = ComponentMap[route.name]; // Busca o componente correspondente pelo nome
        if (!Component) {
          console.warn(`Componente para "${route.name}" não encontrado.`);
          return null;
        }

        return <Route key={index} path={route.path} element={<Component />} />;
      })}
    </Routes>
  );
};

export default DynamicRoutes;
