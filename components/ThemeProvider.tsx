import { createContext, useContext, useEffect, useMemo, useState } from 'react'

// Simple theme context to toggle Tailwind's `dark` class on <html> element.

type Theme = 'light' | 'dark'

type ThemeContextValue = {
  theme: Theme
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  const stored = localStorage.getItem('theme') as Theme | null
  return stored === 'dark' || stored === 'light' ? stored : 'light'
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  // Apply class to <html> and save to localStorage
  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const value = useMemo(
    () => ({ 
      theme, 
      toggle: () => {
        setTheme((current) => {
          const next = current === 'dark' ? 'light' : 'dark'
          console.log('Theme toggle:', current, '->', next) // Debug log
          return next
        })
      }
    }),
    [theme]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
