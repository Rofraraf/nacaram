'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Lang = 'es' | 'en'

interface LangContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (es: string, en: string) => string
}

const LangContext = createContext<LangContextType>({
  lang: 'es',
  setLang: () => {},
  t: (es) => es,
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('es')

  useEffect(() => {
    const saved = localStorage.getItem('nacaram-lang') as Lang | null
    if (saved === 'en' || saved === 'es') {
      setLangState(saved)
      document.documentElement.setAttribute('data-lang', saved)
    }
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('nacaram-lang', l)
    document.documentElement.setAttribute('data-lang', l)
  }

  const t = (es: string, en: string) => (lang === 'es' ? es : en)

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
