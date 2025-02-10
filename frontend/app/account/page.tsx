"use client";

import { useState, useEffect } from "react";
import { useUser } from "../../context/UserContext";
import { useRouter } from "next/navigation";

export default function AccountPage() {
  const { user, handleLogout } = useUser(); // Access the logged-in user and logout function from context
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState("accountDetails");

  // Check if the user is logged in
  useEffect(() => {
    if (!user) {
      router.push("/signin"); // Redirect to login if the user is not logged in
    }
  }, [user, router]);

  // Render a loading state if user data is not yet available
  if (!user) {
    return <div>Loading...</div>; // Optionally replace with a spinner
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-white shadow-lg">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            My Account
          </h2>
          <nav className="space-y-4">
            <button
              className={`block w-full text-left px-4 py-2 rounded-md ${
                selectedTab === "accountDetails"
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedTab("accountDetails")}
            >
              Account Details
            </button>
            <button
              className={`block w-full text-left px-4 py-2 rounded-md ${
                selectedTab === "orderHistory"
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              onClick={() => setSelectedTab("orderHistory")}
            >
              Order History
            </button>
            <button
              className={`block w-full text-left px-4 py-2 rounded-md ${
                selectedTab === "wishlist"
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              onClick={() => setSelectedTab("wishlist")}
            >
              Wishlist
            </button>
            {/* Logout Button */}
            <button
              className="block w-full text-left px-4 py-2 rounded-md text-red-500 hover:bg-red-100 dark:hover:bg-red-700"
              onClick={() => {
                handleLogout(); // Clear user context
                router.push("/sign-in"); // Redirect to login page
              }}
            >
              Logout
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-white dark:bg-gray-900">
        {selectedTab === "accountDetails" && <AccountDetails user={user} />}
        {selectedTab === "orderHistory" && <OrderHistory />}
        {selectedTab === "wishlist" && <Wishlist />}
      </main>
    </div>
  );
}

function AccountDetails({ user }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Account Details</h2>
      <p className="text-gray-700 dark:text-gray-300">
        Name: {user.firstName} {user.lastName}
        <br />
        Email: {user.email}
      </p>
    </div>
  );
}

function OrderHistory() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Order History</h2>
      <p className="text-gray-700 dark:text-gray-300">You have no orders yet.</p>
    </div>
  );
}

function Wishlist() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Wishlist</h2>
      <p className="text-gray-700 dark:text-gray-300">Your wishlist is empty.</p>
    </div>
  );
}
