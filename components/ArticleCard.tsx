import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Article } from '@/lib/articles'

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 16 }}
      className="group overflow-hidden rounded-lg border bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
    >
      <Link href={`/article/${article.slug}`}>
        <div className="relative h-48 w-full">
          <Image
            src={article.image_url}
            alt={article.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div className="space-y-2 p-4">
          <span className="inline-block rounded bg-blue-50 px-2 py-1 text-xs text-blue-700 dark:bg-blue-950 dark:text-blue-300">
            {article.category}
          </span>
          <h3 className="text-lg font-semibold group-hover:underline">{article.title}</h3>
          <p className="line-clamp-3 text-sm text-gray-600 dark:text-gray-300">{article.description}</p>
        </div>
      </Link>
    </motion.article>
  )
}
