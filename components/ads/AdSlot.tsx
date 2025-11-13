import { useEffect, useRef } from 'react'

// Flexible ad placeholder for future integration with Google Ads, Monetag, etc.
// Usage: <AdSlot format="rectangle" network="google" slotId="sidebar-1" />

type Props = {
  slotId: string
  className?: string
  network?: 'google' | 'monetag' | 'other'
  format?: 'rectangle' | 'leaderboard' | 'skyscraper' | 'responsive'
}

export default function AdSlot({ slotId, className = '', network = 'other', format = 'responsive' }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Here we could dynamically inject scripts based on `network`.
    // For now, we just log to show readiness.
    if (process.env.NODE_ENV !== 'production') {
      console.debug(`[AdSlot] Ready: ${slotId}, network=${network}, format=${format}`)
    }
  }, [slotId, network, format])

  const sizeStyles: Record<string, string> = {
    rectangle: 'h-60 w-full',
    leaderboard: 'h-24 w-full',
    skyscraper: 'h-96 w-full',
    responsive: 'h-40 w-full',
  }

  return (
    <div
      ref={ref}
      id={slotId}
      role="complementary"
      aria-label="Advertisement"
      className={`grid place-items-center rounded-md border bg-gray-50 text-gray-500 dark:bg-zinc-900 dark:border-zinc-800 ${
        sizeStyles[format]
      } ${className}`}
    >
      <span>Ad placeholder ({format})</span>
    </div>
  )
}
