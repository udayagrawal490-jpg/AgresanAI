import React, { useState } from 'react';

const Navigation = () => {
  const [activeLink, setActiveLink] = useState('dashboard');

  const navLinks = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'portfolio', label: 'Portfolio', icon: '💼' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'research', label: 'Research', icon: '🔬' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🎯</span>
            <h1 className="text-2xl font-bold">AgresanAI</h1>
            <span className="text-xs bg-blue-400 px-2 py-1 rounded">Beta</span>
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => setActiveLink(link.id)}
                  className={`px-4 py-2 rounded transition ${
                    activeLink === link.id
                      ? 'bg-white text-blue-600 font-medium'
                      : 'hover:bg-blue-700'
                  }`}
                >
                  <span className="mr-1">{link.icon}</span>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* User Profile */}
          <div className="flex items-center space-x-4">
            <button className="relative">
              <span className="text-xl">🔔</span>
              <span className="absolute top-0 right-0 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </button>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="font-bold text-blue-600">U</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;