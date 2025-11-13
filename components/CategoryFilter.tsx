import { useTranslations } from 'next-intl'

type CategoryFilterProps = {
  categories: string[]
  selectedCategory: string | null
  onSelectCategory: (category: string | null) => void
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  const t = useTranslations('Categories')

  return (
    <div className="my-6">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => onSelectCategory(null)}
          className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
            selectedCategory === null
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50 dark:bg-blue-500'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
          }`}
        >
          {t('all')}
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50 dark:bg-blue-500'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}
