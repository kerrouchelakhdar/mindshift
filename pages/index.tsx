import Head from 'next/head'
import { GetStaticProps } from 'next'
import { useTranslations } from 'next-intl'
import { useState, useMemo } from 'react'
import { fetchArticles, type Article } from '@/lib/articles'
import ArticleCard from '@/components/ArticleCard'
import Sidebar from '@/components/Sidebar'
import AdSlot from '@/components/ads/AdSlot'
import SearchBar from '@/components/SearchBar'
import CategoryFilter from '@/components/CategoryFilter'

export default function Home({ articles }: { articles: Article[] }) {
  const t = useTranslations('Home')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(articles.map((a) => a.category))
    return Array.from(cats).sort()
  }, [articles])

  // Filter articles by category and search
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory = selectedCategory === null || article.category === selectedCategory
      const matchesSearch =
        searchQuery === '' ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [articles, selectedCategory, searchQuery])

  return (
    <>
      <Head>
        <title>MindShift — Fresh tech perspectives</title>
        <meta name="description" content={t('description')} />
        <meta property="og:title" content="MindShift" />
        <meta property="og:description" content={t('description')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <section className="my-8">
        {/* Search Bar - Centered */}
        <div className="mx-auto mb-6 max-w-2xl">
          <SearchBar
            placeholder={t('searchPlaceholder')}
            onSearch={setSearchQuery}
          />
        </div>

        {/* Category Filter */}
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <h1 className="mb-6 text-2xl font-bold">{t('latest')}</h1>
        <div className="grid gap-6 md:grid-cols-[1fr,280px] lg:grid-cols-[1fr,320px]">
          <div className="space-y-6">
            {filteredArticles.length === 0 ? (
              <p className="text-center text-gray-500 dark:text-gray-400">
                {t('noResults')}
              </p>
            ) : (
              <>
                {/* Interleave ads between cards in a UX-friendly way */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredArticles.slice(0, 3).map((a) => (
                    <ArticleCard key={a.id} article={a} />
                  ))}
                </div>
                {filteredArticles.length > 3 && (
                  <>
                    <AdSlot slotId="between-1" format="leaderboard" />
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {filteredArticles.slice(3).map((a) => (
                        <ArticleCard key={a.id} article={a} />
                      ))}
                    </div>
                  </>
                )}
              </>
            )}
          </div>
          <Sidebar />
        </div>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const articles = await fetchArticles()
  return {
    props: { articles },
    revalidate: 60,
  }
}
 
