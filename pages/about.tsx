import Head from 'next/head';
import Layout from '../components/Layout';
import Logo from '../components/Logo';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Us - MindShift</title>
        <meta
          name="description"
          content="Learn about MindShift, your source for tech insights, AI trends, and developer resources."
        />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Logo />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            About MindShift
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Illuminating the path to tech excellence through insights, tutorials, and the latest trends.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Our Mission
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              At MindShift, we believe in the transformative power of technology and knowledge sharing. 
              Our mission is to empower developers, tech enthusiasts, and innovators with cutting-edge 
              insights, practical tutorials, and in-depth analysis of the latest trends shaping our digital future.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              We&apos;re more than just a tech blog – we&apos;re a community of learners, builders, and forward-thinkers 
              who are passionate about making complex technology accessible to everyone.
            </p>
          </div>
        </section>

        {/* What We Cover */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            What We Cover
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-700">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Artificial Intelligence</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Exploring the latest in AI, machine learning, and how these technologies are reshaping industries.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-700">
              <div className="text-3xl mb-3">🛠️</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Developer Tools</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Reviews and guides on the best tools to boost your productivity and streamline your workflow.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 p-6 rounded-2xl border border-pink-200 dark:border-pink-700">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Tech Trends</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Stay ahead with analysis of emerging technologies and trends defining the future of tech.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-2xl border border-green-200 dark:border-green-700">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Tutorials & Reviews</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Step-by-step guides, honest reviews, and breaking news from the tech world.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Our Values
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Quality Content</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We prioritize depth over breadth, ensuring every article is well-researched, accurate, and valuable.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Accessibility</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Complex topics explained clearly, making advanced technology accessible to learners at all levels.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Community First</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Building a supportive community where knowledge sharing and collaboration are at the heart of everything we do.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Innovation</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Staying at the forefront of technology, constantly exploring and sharing the latest innovations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team/Contact CTA */}
        <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-lg mb-6 opacity-90">
            Have questions, suggestions, or want to contribute? We&apos;d love to hear from you!
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </section>
      </div>
    </Layout>
  );
}
