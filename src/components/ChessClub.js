import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import logo from './favicon.ico';

const ChessClub = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Пытаемся получить сохраненную тему из localStorage
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  <img src={logo} alt="Logo" />;

  // Эффект для сохранения темы при её изменении
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
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
      <header className={`${darkMode ? 'bg-gray-800' : 'bg-blue-900'} text-white py-4 text-center transition-colors duration-300`}>
        <div className="text-4xl font-bold mb-2">ШКВ</div>
        <p>Шахматный клуб ВА</p>
        <button
          onClick={toggleTheme}
          className="fixed top-4 right-4 p-2 rounded-full bg-opacity-20 bg-white hover:bg-opacity-30 transition-all duration-300"
          aria-label={darkMode ? 'Включить светлую тему' : 'Включить тёмную тему'}
        >
          {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </header>

      <nav className={`${darkMode ? 'bg-gray-700' : 'bg-blue-800'} py-4 transition-colors duration-300`}>
        <ul className="flex justify-center gap-8 flex-wrap">
          {[
            { name: 'О клубе', link: '/about' },
            { name: 'Турниры', link: '/tournaments' },
            { name: 'Расписание', link: '/schedule' },
            { name: 'Участники', link: '/participants' }
          ].map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="text-white hover:text-red-400 transition-colors duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section className="relative h-[60vh] flex items-center justify-center text-white text-center px-4">
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Добро пожаловать в Шахматный клуб ВА
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Дегенерируйте играя шахматы
          </p>
        </div>
      </section>

      <section className="py-16 px-4" id="about">
        <h3 className={`text-center text-3xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          О нашем клубе
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: 'НЕ опытные тренеры',
              description: 'У нас тренеров вообще нету так что, сосали?'
            },
            {
              title: 'Современное оборудование',
              description: 'У нас оборудование очень много и мы играем на lichess.org'
            },
            {
              title: 'Регулярные турниры',
              description: 'Турниров пока нету'
            }
          ].map((feature) => (
            <div
              key={feature.title}
              className={`${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } p-8 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1`}
            >
              <h4 className="text-red-500 text-xl font-bold mb-4">{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className={`${darkMode ? 'bg-gray-800' : 'bg-blue-900'} text-white py-8 px-4 text-center`}>
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Контакты</h3>
          <p>Адрес: ул. Идинахуй, д. 1</p>
          <p>Телефон: +7 (999) 123-45-67</p>
          <p>Email: idinahuihuesos@gmail.com</p>
          <p>Время работы: круглосуточно</p>
        </div>
      </footer>
    </div>
  );
};

export default ChessClub;
