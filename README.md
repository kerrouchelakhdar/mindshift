# 🧠 MindShift - Tech Insights Blog

A modern, multilingual tech blog built with Next.js 16, featuring beautiful dark mode, real-time search, and smart category filtering.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwindcss)

## ✨ Features

- 🌓 **Dark/Light Mode** - Beautiful toggle switch with smooth transitions and localStorage persistence
- 🔍 **Real-time Search** - Instant article filtering as you type
- 🏷️ **Smart Categories** - Filter by AI, Tools, Trends, Tutorials, Reviews, News
- 🌍 **Multilingual** - English and Spanish support with `next-intl`
- 🎨 **Modern UI** - Gradient designs, animated logo, responsive layout
- ⚡ **Performance** - Built with Next.js 16, Turbopack, and optimized images
- 🎯 **TypeScript** - Full type safety throughout the codebase
- 💅 **Tailwind CSS v4** - Modern styling with CSS custom properties
- 📱 **Responsive** - Works perfectly on all devices
- 🗄️ **Supabase Ready** - Optional database integration with mock data fallback

## 📦 Installation

1. **Clone the repository:**
```bash
git clone https://github.com/YOUR_USERNAME/mindshift.git
cd mindshift
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create environment file:**
```bash
# Windows PowerShell
Copy-Item .env.local.example .env.local

# Mac/Linux
cp .env.local.example .env.local
```

4. **Add your Supabase credentials** (optional - uses mock data if not configured):
```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

5. **Run the development server:**
```bash
npm run dev
```

6. **Open your browser:**
Visit [http://localhost:3000](http://localhost:3000) 🚀

## Supabase Setup

### Quick Start

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Run the SQL files in order:
   - `supabase/schema.sql` - Creates the articles table
   - `supabase/seed.sql` - Adds 5 sample articles
3. Get your API keys from Settings > API
4. Add them to `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

For detailed instructions in Arabic, see `supabase/SETUP.md`.

### Database Schema

Table: `articles`
- id: UUID (primary key, auto-generated)
- slug: TEXT (unique, indexed)
- title: TEXT
- description: TEXT
- category: TEXT (indexed)
- image_url: TEXT
- content: TEXT
- author: TEXT
- published_at: TIMESTAMPTZ (indexed)
- created_at: TIMESTAMPTZ (auto)
- updated_at: TIMESTAMPTZ (auto)

**Fallback**: If env vars are missing or the table is empty, the app uses 5 mocked articles so you can develop UI without a DB.

## 🏗️ Project Structure

```
mindshift/
├── components/              # React components
│   ├── ArticleCard.tsx     # Article preview card with animations
│   ├── CategoryFilter.tsx  # Category filtering pills
│   ├── Footer.tsx          # Site footer with gradient branding
│   ├── Logo.tsx            # Animated logo with lightbulb icon
│   ├── Navbar.tsx          # Navigation with theme toggle
│   ├── SearchBar.tsx       # Real-time search input
│   └── ThemeProvider.tsx   # Dark mode context provider
├── lib/                     # Utilities and data
│   ├── articles.ts         # Article data (mock/Supabase)
│   └── supabase.ts         # Supabase client configuration
├── messages/                # i18n translations
│   ├── en.json             # English translations
│   └── es.json             # Spanish translations
├── pages/                   # Next.js pages
│   ├── [locale]/           # Localized routes
│   │   ├── index.tsx       # Homepage with search & filters
│   │   └── article/[slug].tsx # Article detail page
│   ├── _app.tsx            # App wrapper with providers
│   └── _document.tsx       # HTML document structure
├── public/                  # Static assets
├── styles/                  # Global styles
│   └── globals.css         # Tailwind + theme CSS variables
└── supabase/               # Database setup
    ├── schema.sql          # Database schema
    ├── seed.sql            # Sample data
    └── SETUP.md            # Setup instructions
```

## 🎨 Key Features

### 🌓 Theme System
- Beautiful toggle switch with sun/moon icons
- Smooth CSS transitions
- Persists preference in `localStorage`
- CSS custom properties for dynamic theming
- Works across all pages and components

### 🔍 Search & Filter
- **Real-time search**: Filters articles as you type
- **Category filtering**: Browse by specific categories
- **Combined filtering**: Search + category work together
- **Smart UI**: Shows "No results" message when needed
- **Centered design**: Clean, modern search bar above categories

### 🏷️ Categories
- **AI** - Artificial Intelligence and Machine Learning
- **Tools** - Developer tools and productivity apps
- **Trends** - Latest technology trends and innovations
- **Tutorials** - Step-by-step guides and how-tos
- **Reviews** - In-depth product and service reviews
- **News** - Breaking tech news and announcements

### 🌍 Internationalization
- English (en) and Spanish (es) built-in
- Easy to add more languages
- Automatic client-side language detection
- URL-based locale switching (`/en/` or `/es/`)
- Fully translated UI and categories

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Add environment variables in project settings:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Click "Deploy" 🎉

### Other Platforms
Works on any platform supporting Next.js:
- **Netlify** - Import from GitHub and add env vars
- **Railway** - One-click deploy with database
- **DigitalOcean App Platform** - Docker or buildpack deploy
- **AWS Amplify** - Connect repo and configure build

## 📝 Adding New Articles

### Using Mock Data (Development)
Edit `lib/articles.ts` and add to the `mockArticles` array:

```typescript
{
  id: '7',
  slug: 'your-article-slug',
  title: 'Your Article Title',
  description: 'Brief description for preview',
  category: 'AI', // AI, Tools, Trends, Tutorials, Reviews, News
  image_url: 'https://images.unsplash.com/photo-...',
  content: 'Full article content in markdown or HTML...',
  author: 'Author Name',
  published_at: '2025-11-13T10:00:00.000Z',
}
```

### Using Supabase (Production)
1. Set up your Supabase project (see Supabase Setup below)
2. Insert articles via Supabase Dashboard or SQL
3. Articles automatically appear on the site

## 🗄️ Supabase Setup

The project supports both mock data and Supabase database.

### Quick Setup
1. Create a project at [supabase.com](https://supabase.com)
2. Run `supabase/schema.sql` in SQL Editor to create tables
3. Run `supabase/seed.sql` to add sample articles
4. Copy your API keys from Settings > API
5. Add to `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx...
   ```

### Database Schema
**Table: `articles`**
- `id` - UUID (auto-generated)
- `slug` - TEXT (unique, for URLs)
- `title` - TEXT
- `description` - TEXT
- `category` - TEXT (AI, Tools, Trends, etc.)
- `image_url` - TEXT
- `content` - TEXT (supports markdown/HTML)
- `author` - TEXT
- `published_at` - TIMESTAMPTZ
- `created_at` - TIMESTAMPTZ (auto)
- `updated_at` - TIMESTAMPTZ (auto)

**Note**: If Supabase is not configured, the app automatically uses mock data for development.

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run dev server (with Turbopack)
npm run dev

# Run dev on specific port
npm run dev -- -p 3000

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🤝 Contributing

Contributions are welcome! Feel free to:
- 🐛 Report bugs
- 💡 Suggest new features
- 🔧 Submit pull requests
- 📝 Improve documentation

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons and images from [Unsplash](https://unsplash.com/)
- Database powered by [Supabase](https://supabase.com/)

---

**Made with 💜 for the tech community**
