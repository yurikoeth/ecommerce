export default function Sidebar({
    categories,
    selectedCategory,
    onSelectCategory,
  }) {
    return (
      <aside className="w-full p-4 rounded">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
          Browse by
        </h3>
        <hr className="border-t border-gray-300 mb-4" />
        <div className="mb-4">
          <select
            value={selectedCategory}
            onChange={(e) => onSelectCategory(e.target.value)}
            className="w-full bg-white dark:bg-gray-900 dark:text-white bg-gray-100 hover:cursor-pointer"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </aside>
    );
  }
  