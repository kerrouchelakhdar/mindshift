-- MindShift Sample Articles Data
-- Run this AFTER creating the schema to populate the articles table with sample data

INSERT INTO articles (slug, title, description, category, image_url, content, author, published_at)
VALUES
  (
    'ai-and-the-future-of-work',
    'AI and the Future of Work',
    'Exploring how AI reshapes roles, skills, and productivity.',
    'AI',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop',
    E'Artificial Intelligence is transforming the workplace by automating routine tasks and augmenting human decision-making. From chatbots handling customer service to machine learning models predicting market trends, AI is becoming an integral part of modern business operations.\n\nThe impact on employment is nuanced. While some jobs are being automated, new roles are emerging that require skills in AI management, data science, and human-AI collaboration. Organizations are investing in upskilling programs to prepare their workforce for this transition.\n\nKey areas of transformation include:\n\n1. **Automation of Repetitive Tasks**: AI excels at handling routine, rule-based work, freeing humans to focus on creative and strategic initiatives.\n\n2. **Enhanced Decision Making**: Machine learning models can analyze vast amounts of data to provide insights that would be impossible for humans to derive manually.\n\n3. **Personalization at Scale**: AI enables businesses to deliver personalized experiences to millions of customers simultaneously.\n\n4. **New Job Categories**: Roles like AI ethicist, prompt engineer, and AI trainer are becoming increasingly important.\n\nThe future of work will likely involve closer collaboration between humans and AI systems, with each playing to their strengths. Success will depend on our ability to adapt, learn continuously, and maintain the human touch in an increasingly automated world.',
    'Jane Doe',
    '2024-11-01T10:00:00Z'
  ),
  (
    'microfrontends-in-practice',
    'Microfrontends in Practice',
    'A practical guide to scaling frontend teams and codebases.',
    'Engineering',
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    E'Microfrontends enable teams to ship independently by splitting the UI into vertical slices. This architecture pattern extends the microservices concept to the frontend, allowing different teams to own different features end-to-end.\n\n**Why Microfrontends?**\n\nAs applications grow, monolithic frontends become increasingly difficult to maintain. Coordination overhead increases, deployment risks grow, and teams step on each other''s toes. Microfrontends address these challenges by creating clear boundaries between features.\n\n**Implementation Strategies:**\n\n1. **Build-time Integration**: Publish components as npm packages and compose them at build time. Simple but creates coupling.\n\n2. **Runtime Integration via iframes**: Maximum isolation but performance overhead and UX limitations.\n\n3. **JavaScript Runtime Integration**: Load different applications dynamically using Module Federation or similar tools.\n\n4. **Edge-side Composition**: Compose HTML fragments at the CDN/edge level for optimal performance.\n\n**Best Practices:**\n\n- Establish clear contracts between microfrontends\n- Share common dependencies carefully to avoid version conflicts\n- Implement consistent design systems\n- Monitor performance impact of loading multiple bundles\n- Use a unified authentication/authorization strategy\n\n**Challenges:**\n\nMicrofrontends introduce complexity. You need robust deployment pipelines, monitoring across multiple apps, and careful dependency management. The organizational benefits often outweigh these technical costs for large teams, but smaller teams might find the overhead not worth it.\n\nThe key is matching your architecture to your team structure and business needs.',
    'John Smith',
    '2025-01-15T09:00:00Z'
  ),
  (
    'designing-for-dark-mode',
    'Designing for Dark Mode',
    'Tips to build beautiful, accessible dark UIs.',
    'Design',
    'https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?q=80&w=1200&auto=format&fit=crop',
    E'Dark mode offers comfort in low-light settings but requires careful contrast and color choices. It''s not just about inverting colors—it''s about creating a cohesive experience that works in both light and dark environments.\n\n**Why Dark Mode Matters:**\n\n- Reduces eye strain in low-light conditions\n- Saves battery on OLED screens\n- Provides user choice and accessibility\n- Modern aesthetic that many users prefer\n\n**Design Principles:**\n\n1. **Contrast is King**: Ensure sufficient contrast ratios (WCAG AAA recommends 7:1 for normal text). Use tools like WebAIM''s contrast checker.\n\n2. **Avoid Pure Black**: Use dark grays (#0a0a0a, #121212) instead of pure black (#000000) to reduce eye strain and allow for depth through elevation.\n\n3. **Elevation Through Brightness**: In dark mode, lighter shades indicate higher elevation. Components closer to the user should be slightly lighter.\n\n4. **Desaturate Colors**: Colors appear more vibrant on dark backgrounds. Reduce saturation by 10-20% for balance.\n\n5. **Test in Real Conditions**: What looks good in a bright office might be too harsh at night. Test in various lighting conditions.\n\n**Implementation Tips:**\n\n- Use CSS custom properties (variables) for theming\n- Respect user preferences via prefers-color-scheme\n- Provide a manual toggle for user control\n- Maintain brand colors while adapting to the theme\n- Consider different surfaces: cards, modals, backgrounds\n\n**Common Mistakes:**\n\n- Using pure white text on dark backgrounds (too harsh)\n- Not adjusting images/photos for dark mode\n- Forgetting to update shadows and borders\n- Inconsistent application across the interface\n\nDark mode done well enhances the user experience. Done poorly, it can make your interface harder to use than no dark mode at all.',
    'Ava Martinez',
    '2025-03-03T12:30:00Z'
  ),
  (
    'performance-optimizations-nextjs',
    'Performance Optimizations for Next.js',
    'Make your Next.js app fast with code-splitting, caching, and images.',
    'Performance',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop',
    E'From React Server Components to image optimization, there are many levers for performance in Next.js. Understanding and applying these techniques can dramatically improve your application''s speed and user experience.\n\n**Core Web Vitals:**\n\nNext.js is optimized for Google''s Core Web Vitals out of the box:\n- Largest Contentful Paint (LCP)\n- First Input Delay (FID) / Interaction to Next Paint (INP)\n- Cumulative Layout Shift (CLS)\n\n**Key Optimization Strategies:**\n\n1. **Image Optimization**\n   - Use next/image for automatic optimization\n   - Implement lazy loading with loading="lazy"\n   - Use modern formats (WebP, AVIF) with fallbacks\n   - Define width and height to prevent layout shift\n\n2. **Code Splitting**\n   - Leverage automatic code splitting by Next.js\n   - Use dynamic imports for heavy components\n   - Implement route-based splitting (built-in)\n\n3. **Static Generation (SSG)**\n   - Pre-render pages at build time when possible\n   - Use ISR (Incremental Static Regeneration) for dynamic content\n   - Combine with client-side data fetching for real-time updates\n\n4. **Caching Strategies**\n   - Implement proper Cache-Control headers\n   - Use SWR or React Query for data caching\n   - Leverage CDN caching for static assets\n\n5. **Font Optimization**\n   - Use next/font for automatic font optimization\n   - Subset fonts to include only needed characters\n   - Preload critical fonts\n\n6. **Bundle Analysis**\n   - Use @next/bundle-analyzer to identify large dependencies\n   - Remove unused dependencies\n   - Consider lighter alternatives for heavy libraries\n\n**Monitoring:**\n\nUse tools like Lighthouse, WebPageTest, and Vercel Analytics to continuously monitor performance. Set performance budgets and make them part of your CI/CD pipeline.\n\n**Pro Tips:**\n\n- Prioritize above-the-fold content\n- Minimize JavaScript execution time\n- Use React.memo() and useMemo() wisely\n- Implement pagination/virtualization for long lists\n- Optimize third-party scripts with next/script\n\nPerformance is a feature, not an afterthought.',
    'Noah Lee',
    '2025-07-20T08:15:00Z'
  ),
  (
    'human-centered-ml',
    'Human-Centered Machine Learning',
    'Build ML systems that center on people and ethics.',
    'ML',
    'https://images.unsplash.com/photo-1497493292307-31c376b6e479?q=80&w=1200&auto=format&fit=crop',
    E'Human-centered ML prioritizes fairness, transparency, and usability throughout the lifecycle. As machine learning systems become more prevalent in our daily lives, ensuring they serve humanity ethically and effectively is paramount.\n\n**Core Principles:**\n\n1. **Fairness and Bias Mitigation**\n   - Audit training data for historical biases\n   - Test models across different demographic groups\n   - Implement fairness metrics alongside accuracy\n   - Use techniques like adversarial debiasing\n\n2. **Transparency and Explainability**\n   - Provide clear explanations for model decisions\n   - Use interpretable models when high stakes are involved\n   - Document model limitations and assumptions\n   - Implement model cards for transparency\n\n3. **Privacy and Security**\n   - Apply differential privacy techniques\n   - Minimize data collection to what''s necessary\n   - Implement secure model deployment\n   - Regular security audits and updates\n\n4. **User Agency and Control**\n   - Allow users to understand and contest decisions\n   - Provide opt-out mechanisms\n   - Design for human-in-the-loop workflows\n   - Respect user preferences and consent\n\n**Practical Implementation:**\n\n**Data Collection Phase:**\n- Ensure diverse and representative datasets\n- Document data sources and collection methods\n- Obtain proper consent and respect privacy\n- Consider edge cases and minority groups\n\n**Model Development:**\n- Choose appropriate model complexity\n- Balance accuracy with interpretability\n- Test for unintended correlations\n- Validate with diverse test sets\n\n**Deployment and Monitoring:**\n- Implement continuous monitoring for bias drift\n- Provide feedback mechanisms for users\n- Regular audits by ethics committees\n- Plan for graceful degradation and fallbacks\n\n**Real-World Considerations:**\n\n- Healthcare: Ensure models work across different populations and don''t perpetuate healthcare disparities\n- Finance: Guard against discriminatory lending or pricing practices\n- Criminal Justice: Extreme caution with predictive policing and sentencing\n- Hiring: Avoid perpetuating historical biases in recruitment\n\n**The Path Forward:**\n\nBuilding human-centered ML systems requires interdisciplinary collaboration—data scientists, ethicists, domain experts, and affected communities must all have a voice. It''s not just about technical excellence; it''s about ensuring our systems amplify human potential while respecting human dignity.\n\nAs ML practitioners, we have a responsibility to build systems that are not just powerful, but also fair, transparent, and beneficial to all of society.',
    'Maya Patel',
    '2025-09-11T18:45:00Z'
  )
ON CONFLICT (slug) DO NOTHING;

-- Verify the data was inserted
SELECT COUNT(*) as total_articles FROM articles;
SELECT slug, title, category FROM articles ORDER BY published_at DESC;
