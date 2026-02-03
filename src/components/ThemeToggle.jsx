import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  // 1. Инициализируем состояние: берем из памяти или ставим 'dark' по умолчанию
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const root = window.document.documentElement; // Это тег <html>
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Сохраняем выбор пользователя
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 ml-4 rounded-full border border-kae-green/30 hover:bg-kae-green/10 transition-all duration-300 flex items-center justify-center w-10 h-10 cursor-pointer group"
      aria-label="Сменить тему"
    >
      {/* Иконка меняется в зависимости от темы */}
      {theme === 'dark' ? (
        <span className="text-lg group-hover:scale-110 transition-transform">☀️</span>
      ) : (
        <span className="text-lg group-hover:scale-110 transition-transform">🌙</span>
      )}
    </button>
  );
};

export default ThemeToggle;