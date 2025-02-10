"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaShoppingCart, FaUser, FaBell } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export default function Icons({ user }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [cartCount, setCartCount] = useState(0); // Dynamic cart count

  // Fetch notifications dynamically (mocked here)
  useEffect(() => {
    const fetchNotifications = async () => {
      const mockNotifications = [
        { id: 1, message: "Your order has shipped!" },
        { id: 2, message: "New promotional offers are available!" },
      ];
      setNotifications(mockNotifications);
    };

    fetchNotifications();
  }, []);

  // Fetch cart count dynamically (mocked here)
  useEffect(() => {
    const fetchCartCount = async () => {
      const mockCartCount = 3;
      setCartCount(mockCartCount);
    };

    fetchCartCount();
  }, []);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div className="flex items-center justify-end space-x-6 text-gray-600 dark:text-gray-400">
      {/* Notification Icon with Dropdown */}
      <div className="relative">
        <button onClick={toggleNotifications}>
          <FaBell className="text-2xl" />
        </button>
        {showNotifications && (
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md p-4">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <p key={notification.id} className="text-gray-700 dark:text-gray-300">
                  {notification.message}
                </p>
              ))
            ) : (
              <p className="text-gray-700 dark:text-gray-300">No new notifications</p>
            )}
          </div>
        )}
      </div>
      {/* User and Cart Links */}
      {user ? (
        <Link href="/account" className="flex items-center space-x-2">
          <FaUser className="text-2xl" />
          <div className="hidden md:flex flex-col items-center">
            <span className="text-sm">Welcome</span>
            <span className="text-sm text-black dark:text-white font-bold">
              {user.firstName} {user.lastName}
            </span>
          </div>
        </Link>
      ) : (
        <Link href="/signin" className="flex items-center space-x-2">
          <FaUser className="text-2xl" />
          <div className="hidden md:flex flex-col items-center">
            <span className="text-sm">Welcome</span>
            <span className="text-sm text-black dark:text-white font-bold">
              Sign In / Register
            </span>
          </div>
        </Link>
      )}

      <Link href="/cart" className="hidden md:flex items-center text-2xl">
        <FaShoppingCart />
        <span className="ml-1 text-sm bg-red-500 text-white rounded-full px-2">
          {cartCount}
        </span>
      </Link>
    </div>
  );
}
