import React, { useState } from 'react';
import { useAuth } from '../../hooks/content/AuthContext';

const Authentication: React.FC = () => {
  const { validate2FA } = useAuth();
  const [code, setCode] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await validate2FA(code);
    } catch (error) {
      console.error('Erro ao validar 2FA:', error);
      alert('Erro na validação do código.');
    }
  };

  return (
    <div>
      <h1>Autenticação de 2 Fatores</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Código 2FA"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button type="submit">Validar</button>
      </form>
    </div>
  );
};

export default Authentication;
