import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '@/components/Sidebar'
import { fetchArticleBySlug, fetchArticleSlugs, type Article } from '@/lib/articles'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { useTranslations } from 'next-intl'

export default function ArticlePage({ article }: { article: Article }) {
  const t = useTranslations('Article')

  return (
    <>
      <Head>
        <title>{article.title} | MindShift</title>
        <meta name="description" content={article.description} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={article.image_url} />
      </Head>
      <div className="my-8 grid gap-8 md:grid-cols-[1fr,280px] lg:grid-cols-[1fr,320px]">
        <article className="space-y-4">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md border dark:border-zinc-800">
            <Image src={article.image_url} alt={article.title} fill className="object-cover" />
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <span className="rounded bg-blue-50 px-2 py-1 text-xs text-blue-700 dark:bg-blue-950 dark:text-blue-300">
              {article.category}
            </span>
            <span>•</span>
            <span>
              {t('by')} {article.author || 'MindShift Team'}
            </span>
            {article.published_at && (
              <>
                <span>•</span>
                <time dateTime={article.published_at}>
                  {new Date(article.published_at).toLocaleDateString()}
                </time>
              </>
            )}
          </div>
          <h1 className="text-3xl font-bold">{article.title}</h1>
          <p className="text-lg text-gray-700 dark:text-gray-200">{article.description}</p>
          <div className="prose max-w-none dark:prose-invert">
            <p>{article.content}</p>
          </div>

          <section className="mt-10 rounded-md border p-4 text-gray-600 dark:border-zinc-800 dark:text-gray-300">
            <h2 className="mb-2 text-lg font-semibold">{t('commentsComingSoon')}</h2>
            {/* Placeholder for future comment system integration */}
          </section>
        </article>

        <Sidebar />
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await fetchArticleSlugs()
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  const article = await fetchArticleBySlug(slug)

  if (!article) {
    return { notFound: true, revalidate: 60 }
  }

  return {
    props: { article },
    revalidate: 60,
  }
}
