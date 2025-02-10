"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import SearchModal from "./SearchModal";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log(`Searching for: ${searchQuery}`);
      setIsModalOpen(false); // Close the modal after searching
      // Add search functionality here
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {/* Search Input for Larger Screens */}
      <div className="hidden lg:flex items-center flex-grow mx-4">
        <input
          type="text"
          placeholder="Search for products"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border rounded-l-md focus:outline-none text-black"
        />
        <button
          onClick={handleSearch}
          className="flex items-center justify-center bg-blue-500 p-2 rounded-r-md text-white h-10 w-10"
        >
          <FaSearch />
        </button>
      </div>

      {/* Search Icon for Smaller Screens */}
      <div className="flex lg:hidden items-center">
        <button
          onClick={toggleModal}
          className="flex items-center justify-center bg-transparent rounded-full text-blue-500 h-10 w-10"
        >
          <FaSearch className="text-2xl" />
        </button>
      </div>

      {/* Render SearchModal */}
      <SearchModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={handleSearch}
      />
    </>
  );
}
