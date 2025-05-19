import { useState, useEffect } from 'react'

const themes = ['default', 'red']

export default function ThemePage() {
  const [theme, setTheme] = useState('default')

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'default'
    setTheme(storedTheme)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    themes.forEach(t => root.classList.remove(`theme-${t}`))
    if (theme !== 'default') {
      root.classList.add(`theme-${theme}`)
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="bg-background text-text min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Cambiar Tema</h1>
      <button
        className="bg-primary text-white py-2 px-6 rounded hover:opacity-90 transition"
        onClick={() => setTheme(prev => (prev === 'red' ? 'default' : 'red'))}
      >
        Cambiar a tema {theme === 'red' ? 'Azul' : 'Rojo'}
      </button>
      <div className="border border-muted p-4 rounded bg-surface">
        <p className="text-muted">Este texto y fondo cambian con el tema.</p>
      </div>
    </div>
  )
}
