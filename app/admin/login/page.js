"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (username === 'admin' && password === 'shukla@123') {
      localStorage.setItem('isLoggedIn', 'true');
      router.push('/admin/parcha');
    } else {
      setError('गलत यूज़रनेम या पासवर्ड!');
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-[#006680] text-center mb-6">
          एडमिन लॉगिन
        </h1>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              यूज़रनेम
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#006680]"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              पासवर्ड
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#006680]"
              required
            />
          </div>
          
          {error && (
            <p className="text-red-600 text-center font-bold">{error}</p>
          )}
          
          <button
            type="submit"
            className="w-full bg-[#006680] text-white font-bold py-3 rounded-lg hover:bg-[#004d61] transition-colors"
          >
            लॉगिन करें
          </button>
        </form>
      </div>
    </div>
  );
}