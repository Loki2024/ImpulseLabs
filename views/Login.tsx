import React, { useState } from 'react';

interface Props {
  onLogin: () => void;
  onSignup: () => void;
}

const Login: React.FC<Props> = ({ onLogin, onSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      onLogin();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-[#F2F9F6] to-emerald-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo/Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-emerald-600 mb-2">💰</h1>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">BuyBye</h2>
          <p className="text-gray-600">Smart spending companion</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-emerald-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Welcome back</h3>

          {/* Email Input */}
          <div className="mb-6">
            <label className="text-sm font-bold text-gray-700 block mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-4 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="mb-8">
            <label className="text-sm font-bold text-gray-700 block mb-2">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full p-4 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            disabled={!email || !password}
            className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-lg mb-4 transition-colors shadow-lg"
          >
            Login
          </button>

          {/* Forgot Password Link */}
          <p className="text-center text-gray-600 text-sm mb-6">
            <a href="#" className="text-emerald-600 hover:text-emerald-700 font-semibold">Forgot password?</a>
          </p>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>

          {/* Signup Link */}
          <button
            onClick={onSignup}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-4 rounded-xl font-bold text-lg transition-colors border border-gray-200"
          >
            Create new account
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-xs mt-8">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Login;
