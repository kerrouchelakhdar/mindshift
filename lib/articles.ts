// lib/articles.ts
// Article data access: fetches from Supabase with a safe local fallback.

import supabase from './supabaseClient'

export type Article = {
  id: string
  slug: string
  title: string
  description: string
  category: string
  image_url: string
  content?: string
  author?: string
  published_at?: string // ISO string
}

const mockArticles: Article[] = [
  {
    id: '1',
    slug: 'ai-and-the-future-of-work',
    title: 'AI and the Future of Work',
    description: 'Exploring how AI reshapes roles, skills, and productivity.',
    category: 'AI',
    image_url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop',
    content:
      'Artificial Intelligence is transforming the workplace by automating routine tasks and augmenting human decision-making... ',
    author: 'Jane Doe',
    published_at: '2024-11-01T10:00:00.000Z',
  },
  {
    id: '2',
    slug: 'top-ai-tools-2025',
    title: 'Top AI Tools for Developers in 2025',
    description: 'A curated list of the best AI tools that boost productivity.',
    category: 'Tools',
    image_url: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    content: 'From code assistants to design generators, discover the AI tools every developer needs... ',
    author: 'John Smith',
    published_at: '2025-01-15T09:00:00.000Z',
  },
  {
    id: '3',
    slug: 'latest-tech-trends',
    title: 'Latest Tech Trends Shaping 2025',
    description: 'The emerging technologies you need to watch this year.',
    category: 'Trends',
    image_url: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?q=80&w=1200&auto=format&fit=crop',
    content: 'From quantum computing to edge AI, explore the trends defining the tech landscape... ',
    author: 'Ava Martinez',
    published_at: '2025-03-03T12:30:00.000Z',
  },
  {
    id: '4',
    slug: 'nextjs-tutorial-beginners',
    title: 'Next.js Tutorial for Beginners',
    description: 'Learn Next.js from scratch with this comprehensive guide.',
    category: 'Tutorials',
    image_url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop',
    content: 'Step-by-step tutorial covering React Server Components, routing, and deployment... ',
    author: 'Noah Lee',
    published_at: '2025-07-20T08:15:00.000Z',
  },
  {
    id: '5',
    slug: 'claude-ai-review',
    title: 'Claude AI: In-Depth Review',
    description: 'An honest review of Anthropic Claude AI capabilities.',
    category: 'Reviews',
    image_url: 'https://images.unsplash.com/photo-1497493292307-31c376b6e479?q=80&w=1200&auto=format&fit=crop',
    content: 'We test Claude AI across various tasks to see how it performs against competitors... ',
    author: 'Maya Patel',
    published_at: '2025-09-11T18:45:00.000Z',
  },
  {
    id: '6',
    slug: 'openai-releases-gpt5',
    title: 'OpenAI Releases GPT-5: What You Need to Know',
    description: 'Breaking news about the latest GPT model and its capabilities.',
    category: 'News',
    image_url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop',
    content: 'OpenAI announces GPT-5 with unprecedented reasoning abilities and multimodal features... ',
    author: 'Sarah Johnson',
    published_at: '2025-10-01T14:20:00.000Z',
  },
]

export async function fetchArticles(): Promise<Article[]> {
  try {
    // Attempt Supabase fetch if env vars are provided.
    if (
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ) {
      console.log('[fetchArticles] Attempting Supabase fetch...')
      const { data, error } = await supabase
        .from('articles')
        .select('id, slug, title, description, category, image_url, content, author, published_at')
        .order('published_date', { ascending: false })

      if (error) {
        console.error('[fetchArticles] Supabase error:', error)
        throw error
      }
      if (data && data.length > 0) {
        console.log(`[fetchArticles] ✅ Fetched ${data.length} real articles from Supabase`)
        return data as Article[]
      }
      console.warn('[fetchArticles] Supabase returned empty data')
    } else {
      console.warn('[fetchArticles] Missing env vars, using mock articles')
    }
  } catch (e) {
    console.error('[fetchArticles] Exception caught, falling back to mock articles:', e)
  }

  console.log('[fetchArticles] ⚠️ Returning mock articles')
  return mockArticles
}

export async function fetchArticleBySlug(slug: string): Promise<Article | null> {
  try {
    if (
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ) {
      const { data, error } = await supabase
        .from('articles')
        .select('id, slug, title, description, category, image_url, content, author, published_at')
        .eq('slug', slug)
        .maybeSingle()

      if (error) throw error
      if (data) return data as Article
    }
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('[fetchArticleBySlug] Using mock article. Reason:', e)
    }
  }

  return mockArticles.find((a) => a.slug === slug) || null
}

export async function fetchArticleSlugs(): Promise<string[]> {
  try {
    if (
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ) {
      const { data, error } = await supabase
        .from('articles')
        .select('slug')

      if (error) throw error
      if (data && data.length > 0) return data.map((d) => d.slug!)
    }
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('[fetchArticleSlugs] Falling back to mock slugs. Reason:', e)
    }
  }

  return mockArticles.map((a) => a.slug)
}
