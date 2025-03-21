'use client' // Garante que rode apenas no cliente

import { useTheme } from '../../hooks/useTheme'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="rounded-lg bg-gray-200 p-2 text-gray-800 transition-all duration-300 dark:bg-gray-800 dark:text-gray-200"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
