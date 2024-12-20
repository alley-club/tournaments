import React, { useState, useEffect } from 'react';
import { Sun, Moon, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
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
        <div className="text-4xl font-bold">О Клубе</div>
        <button
          onClick={toggleTheme}
          className="fixed top-4 right-4 p-2 rounded-full bg-opacity-20 bg-white hover:bg-opacity-30 transition-all duration-300"
          aria-label={darkMode ? 'Включить светлую тему' : 'Включить тёмную тему'}
        >
          {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </header>

      <main className="flex justify-center items-center min-h-[80vh]">
        <h1 className="text-6xl font-bold">Хз</h1>
      </main>

      <footer
        className={`${
          darkMode ? 'bg-gray-800' : 'bg-blue-900'
        } text-white py-4 text-center`}
      ></footer>
    </div>
  );
};

export default About;
