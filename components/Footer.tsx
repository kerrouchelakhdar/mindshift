import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('Footer')

  return (
    <footer className="mt-10 border-t bg-gray-50/50 py-8 text-sm dark:bg-zinc-900/50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Logo and Copyright */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text font-bold text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                MindShift
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} MindShift. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-4 sm:gap-6">
            <Link 
              href="/about" 
              className="text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
            >
              {t('about')}
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
            >
              {t('contact')}
            </Link>
            <Link 
              href="/privacy" 
              className="text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
            >
              {t('privacy')}
            </Link>
            <Link 
              href="/terms" 
              className="text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
            >
              {t('terms')}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
