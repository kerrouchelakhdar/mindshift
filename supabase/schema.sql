-- MindShift Articles Table Schema
-- Run this in your Supabase SQL Editor to create the articles table

-- Create articles table
CREATE TABLE IF NOT EXISTS articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  image_url TEXT NOT NULL,
  content TEXT,
  author TEXT,
  published_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index on slug for faster lookups
CREATE INDEX IF NOT EXISTS idx_articles_slug ON articles(slug);

-- Create index on category for filtering
CREATE INDEX IF NOT EXISTS idx_articles_category ON articles(category);

-- Create index on published_at for sorting
CREATE INDEX IF NOT EXISTS idx_articles_published_at ON articles(published_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access"
  ON articles
  FOR SELECT
  TO public
  USING (true);

-- Optional: Create policy for authenticated insert/update
-- Uncomment if you want to allow authenticated users to create/edit articles
-- CREATE POLICY "Allow authenticated insert"
--   ON articles
--   FOR INSERT
--   TO authenticated
--   WITH CHECK (true);

-- CREATE POLICY "Allow authenticated update"
--   ON articles
--   FOR UPDATE
--   TO authenticated
--   USING (true);

COMMENT ON TABLE articles IS 'Blog articles for MindShift website';
