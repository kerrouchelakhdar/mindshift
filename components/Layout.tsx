import Navbar from './Navbar'
import Footer from './Footer'
import ThemeProvider from './ThemeProvider'
import { NextIntlClientProvider } from 'next-intl'
import { useEffect, useState } from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  // Simple client-side locale detection using next-intl provider.
  const [messages, setMessages] = useState<Record<string, unknown> | null>(null)
  const [locale, setLocale] = useState<string>('en')

  useEffect(() => {
    const lang = typeof navigator !== 'undefined' ? navigator.language : 'en'
    const base = (lang?.split('-')[0] || 'en') as string
    setLocale(base)
    import(`@/messages/${base}.json`)
      .then((mod) => setMessages(mod.default as Record<string, unknown>))
      .catch(async () => {
        const fallback = await import('@/messages/en.json')
        setLocale('en')
        setMessages(fallback.default as Record<string, unknown>)
      })
  }, [])

  if (!messages) {
    // Prevent flash of untranslated content
    return null
  }

  return (
    <ThemeProvider>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Navbar />
        <main className="mx-auto max-w-7xl px-4">{children}</main>
        <Footer />
      </NextIntlClientProvider>
    </ThemeProvider>
  )
}
