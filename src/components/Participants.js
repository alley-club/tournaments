import React, { useState, useEffect } from 'react';
import { Sun, Moon, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from './favicon.ico';

const Participants = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const participants = [
    { name: 'Слава', username: 'mrshrimp58' },
    { name: 'Рокер', username: 'rocker7003' },
    { name: 'Пат', username: 'patraim2' },
    { name: 'Фред', username: 'terrence_dreamurr', banned: true, unbanDate: '7 января' },
    { name: 'Алекс', username: 'alexx_lkenori' },
    { name: 'Дали', username: '.lanceissocool' },
    { name: 'Снопик', username: 'mini_sno_0pik' },
    { name: 'Крео', username: 'kreygen' },
    { name: 'Изум', username: 'izum.f' },
    { name: 'Чайка', username: 'chayka8299' },
  ];

  return (
    <div
      className={`min-h-screen ${
        darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'
      } transition-colors duration-300`}
    >
      <header
        className={`relative ${
          darkMode ? 'bg-gray-800' : 'bg-blue-900'
        } text-white py-4 text-center transition-colors duration-300`}
      >
        <Link
          to="/"
          className="absolute top-4 left-4 p-2 rounded-full bg-opacity-20 bg-white hover:bg-opacity-30 transition-all duration-300"
          aria-label="Вернуться на главную"
        >
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <div className="text-4xl font-bold mb-2">Участники клуба</div>
        <button
          onClick={toggleTheme}
          className="fixed top-4 right-4 p-2 rounded-full bg-opacity-20 bg-white hover:bg-opacity-30 transition-all duration-300"
          aria-label={darkMode ? 'Включить светлую тему' : 'Включить тёмную тему'}
        >
          {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </header>

      <section className="py-16 px-4">
        <h3
          className={`text-center text-3xl font-bold mb-8 ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}
        >
          Список участников
        </h3>
        <ul className="max-w-3xl mx-auto space-y-4">
          {participants.map(({ name, username, banned, unbanDate }) => (
            <li
              key={username}
              className={`p-4 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1 ${
                darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-bold">{name}</span> ({username})
                </div>
                {banned && (
                  <span className="text-red-500 text-sm">
                    Заблокирован до {unbanDate}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <footer
        className={`${
          darkMode ? 'bg-gray-800' : 'bg-blue-900'
        } text-white py-4 text-center`}
      ></footer>
    </div>
  );
};

export default Participants;
