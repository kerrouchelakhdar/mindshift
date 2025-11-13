import { useState } from 'react'

type SearchBarProps = {
  placeholder?: string
  onSearch?: (query: string) => void
}

export default function SearchBar({ placeholder = 'Search...', onSearch }: SearchBarProps) {
  const [q, setQ] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQ(value)
    // Real-time search
    if (onSearch) {
      onSearch(value)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Trigger search on submit if needed
    if (onSearch) {
      onSearch(q)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative">
        <input
          value={q}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full rounded-full border-2 border-gray-300 bg-white px-6 py-3 text-sm shadow-sm outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-zinc-900 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-blue-400"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 p-2 text-white transition-all hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </form>
  )
}
