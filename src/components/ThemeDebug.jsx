// client/src/components/ThemeDebug.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeDebug = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <p className="text-sm text-gray-900 dark:text-white">
        Dark Mode: {darkMode ? 'ON' : 'OFF'}
      </p>
      <button
        onClick={toggleDarkMode}
        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded text-sm"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeDebug;
