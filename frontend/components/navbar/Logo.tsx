"use client";
import Link from "next/link";
import { useState } from "react";
import DeliveryModal from "./DeliveryModal";
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function Logo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [location, setLocation] = useState(""); // State to hold the chosen location

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Callback to update the location from the modal
  const handleLocationSubmit = (newLocation) => {
    setLocation(newLocation); // Set the location based on user input
    setIsModalOpen(false); // Close the modal after submitting
  };

  return (
    <div className="flex items-center space-x-4 lg:space-x-10 justify-between">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold text-black dark:text-white pb-1 pl-1">
        <img src="#" alt="Newegg Logo" className="h-4 text-sm" />
      </Link>

      {/* Modal Toggle Button */}
      <button
        onClick={toggleModal}
        className="flex flex-col items-center text-gray-600 dark:text-gray-400 w-auto lg:w-36 cursor-pointer focus:outline-none"
      >
        {location ? (
            <span className="text-xs md:text-sm hidden">Hello</span>
          ) : (
            <span className="hidden md:flex text-sm">Hello</span>
          )}
        <div className="inline-flex items-center space-x-1">
          <FaMapMarkerAlt className="text-2xl lg:text-xl text-blue-500" /> {/* Location Pin Icon */}
          {location ? (
            <span className="hidden lg:flex text-sm text-black dark:text-white font-bold">
              Deliver to {location}
            </span>
          ) : (
            <span className="hidden md:flex text-xs md:text-sm text-blue-500 font-bold">
              Select address
            </span>
          )}
        </div>
      </button>


      {/* Render DeliveryModal and pass the callback */}
      {isModalOpen && (
        <DeliveryModal onClose={toggleModal} onLocationSubmit={handleLocationSubmit} />
      )}
    </div>
  );
}
