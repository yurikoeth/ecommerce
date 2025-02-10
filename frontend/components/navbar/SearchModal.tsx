"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function SearchModal({
  isOpen,
  onClose,
  searchQuery,
  setSearchQuery,
  onSearch,
}) {
  useEffect(() => {
    // Ensure the portal root exists in the DOM
    let portalRoot = document.getElementById("portal-root");
    if (!portalRoot) {
      portalRoot = document.createElement("div");
      portalRoot.id = "portal-root";
      document.body.appendChild(portalRoot);
    }
  }, []);

  if (!isOpen) return null;

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onSearch();
      onClose(); // Close modal after search
    }
  };

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 dark:text-white p-4 rounded-lg w-4/5 max-w-md shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Search</h2>
        <input
          type="text"
          placeholder="Search for products"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border rounded-md focus:outline-none text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 mb-4"
        />
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Search
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal-root") // Portal root for rendering
  );
}
