import './login.css';
import React, { useState } from 'react';
import { useAuth } from '../../hooks/content/AuthContext';

const Login: React.FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao fazer login. Verifique suas credenciais.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-teal-800">
      <div className="w-full max-w-md p-6 bg-teal-700 rounded-lg shadow-md">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="src/images-auster/logo_auster.png" // Substitua pelo caminho do logo
            className="w-32 h-32"
          />
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit}>
          {/* Campo Email */}
          <div className="mb-4">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 text-white placeholder-gray-300 bg-teal-600 border border-teal-500 rounded focus:outline-none focus:ring-2 focus:ring-teal-300"
              />
              <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-300">
                <i className="fas fa-envelope"></i> {/* Ícone */}
              </span>
            </div>
          </div>

          {/* Campo Senha */}
          <div className="mb-6">
            <label htmlFor="password" className="sr-only">
              Senha
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 text-white placeholder-gray-300 bg-teal-600 border border-teal-500 rounded focus:outline-none focus:ring-2 focus:ring-teal-300"
              />
              <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-300">
                <i className="fas fa-lock"></i> {/* Ícone */}
              </span>
            </div>
          </div>

          {/* Botão Acessar */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-lg font-semibold text-white bg-teal-500 rounded hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-300"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
