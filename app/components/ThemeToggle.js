'use client';
import { useTheme } from 'next-themes';
import {Sun,Moon} from 'lucide-react'; // Assuming you have lucide-react installed

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="border rounded-lg p-2 shadow hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {theme === 'dark' ? '☀️':'🌙'}
    </button>
  );
}