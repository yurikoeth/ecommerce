export default function Breadcrumb({ breadcrumb }) {
    return (
      <header className="p-4">
        <div className="container">
          <p className="text-sm text-gray-500 dark:text-gray-400">{breadcrumb}</p>
        </div>
      </header>
    );
  }
  