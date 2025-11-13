import type { NextConfig } from "next";

// Dynamically allow images from Unsplash and your Supabase project host (for Storage public images)
const remotePatterns: NonNullable<NextConfig["images"]>["remotePatterns"] = [
  {
    protocol: 'https',
    hostname: 'images.unsplash.com',
  },
]

try {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  if (supabaseUrl) {
    const { hostname, protocol } = new URL(supabaseUrl)
    // Add the Supabase project host to allow next/image to optimize Storage files
    remotePatterns.push({ protocol: (protocol.replace(':','') as 'http' | 'https'), hostname })
  }
} catch {
  // ignore malformed env URL
}

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  images: {
    remotePatterns,
  },
};

export default nextConfig;
