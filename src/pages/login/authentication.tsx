import React, { useState } from 'react';
import { useAuth } from '../../hooks/content/AuthContext';

import logoAuster from '../../images-auster/logo_auster.png';

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
    <div className="flex items-center justify-center min-h-screen bg-teal-800">
      <div className="w-full max-w-md p-6 bg-teal-700 rounded-lg shadow-lg">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={logoAuster} // Substitua pelo caminho do logo
            className="w-32 h-32"
          />
          <h2 className="mt-4 text-lg font-semibold text-white">
            Autenticação de dois fatores
          </h2>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="2fa-code" className="sr-only">
              Código de autenticação
            </label>
            <div className="relative">
              <input
                type="text"
                id="2fa-code"
                placeholder="Código de 6 dígitos"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full px-4 py-2 text-white placeholder-gray-300 bg-teal-600 border border-teal-500 rounded focus:outline-none focus:ring-2 focus:ring-teal-300"
              />
              <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-300">
                <i className="fas fa-envelope"></i> {/* Ícone */}
              </span>
            </div>
          </div>

          {/* Botão Validar */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-lg font-semibold text-white bg-teal-500 rounded hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-300"
          >
            Validar
          </button>
        </form>

        {/* Mensagem e Reenvio */}
        <p id='msg-reenvio' className="mt-4 text-sm text-center text-white">
          O código de autenticação foi enviado para seu e-mail.
        </p>
        {/* <button
          type="button"
          onClick={handleResendCode}
          className="mt-4 text-sm text-teal-300 underline hover:text-teal-400"
        >
          Reenviar código
        </button> */}
      </div>
    </div>
  );
};

export default Authentication;
