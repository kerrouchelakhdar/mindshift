import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3 transition-all duration-300">
      {/* Animated Logo Icon */}
      <div className="relative flex h-12 w-12 items-center justify-center">
        {/* Outer glow ring */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-md transition-all duration-300 group-hover:opacity-40 group-hover:blur-lg"></div>
        
        {/* Main logo container */}
        <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-purple-500/50">
          {/* Brain/Idea icon */}
          <svg
            className="h-7 w-7 text-white transition-transform duration-300 group-hover:rotate-12"
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
          
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-30"></div>
        </div>
      </div>
      
      {/* Site Name */}
      <div className="flex flex-col">
        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-2xl font-bold leading-tight text-transparent transition-all duration-300 group-hover:from-blue-500 group-hover:via-purple-500 group-hover:to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
          MindShift
        </span>
        <span className="text-[10px] font-medium uppercase tracking-wider text-gray-500 transition-colors duration-300 group-hover:text-gray-600 dark:text-gray-400 dark:group-hover:text-gray-300">
          Tech Insights
        </span>
      </div>
    </Link>
  )
}
