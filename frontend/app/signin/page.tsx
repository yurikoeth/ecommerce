"use client";

import { useState } from "react";
import { useUser } from "../../context/UserContext"
import { useRouter } from "next/navigation";

export default function SignIn() {
  const { onUserSignIn } = useUser(); // Access the onUserSignIn function from context
  const [isEmailSignIn, setIsEmailSignIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsEmailSignIn(true);
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("API Response:", data);

        // Call onUserSignIn with user data
        if (data.firstName && data.lastName) {
          onUserSignIn({ firstName: data.firstName, lastName: data.lastName });

          // Redirect to account or dashboard page
          router.push("/");
        } else {
          throw new Error("Invalid API response: Missing firstName or lastName");
        }
      } else {
        const error = await response.json();
        alert(error.message || "Invalid email or password.");
      }
    } catch (err) {
      console.error("Error during sign-in:", err);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md dark:bg-gray-700">
        <div className="flex justify-center mb-4">
          <img
            src="/newegg-logo.png" // Replace with your actual logo path
            alt="Newegg Logo"
            className="h-8"
          />
        </div>
        <h2 className="text-xl font-semibold text-center mb-6">Sign In</h2>

        {isEmailSignIn ? (
          // Email and Password View
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <p className="text-sm text-gray-500">Email: {email}</p>
            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:text-black"
                placeholder="Password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition"
            >
              SIGN IN
            </button>
          </form>
        ) : (
          
          // Default Sign-In Options
          <div>
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:text-black "
                  placeholder="Email Address"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition"
              >
                SIGN IN
              </button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-sm">
                New to Newegg?{" "}
                <a
                  href="/signup"
                  className="text-blue-500 underline hover:text-blue-600"
                >
                  Sign Up
                </a>
              </p>
            </div>
            <div className="relative flex items-center justify-center mt-6">
              <hr className="absolute w-full border-gray-300" />
              <span className="bg-white px-4 text-gray-500 text-sm dark:bg-gray-700 dark:text-white">OR</span>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-6 text-center text-xs text-gray-500">
          <p>
            <a href="#" className="underline hover:text-gray-600">
              Terms & Conditions
            </a>{" "}
            |{" "}
            <a href="#" className="underline hover:text-gray-600">
              Privacy Policy
            </a>
          </p>
          <p>&copy; 2000-2024 Newegg Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
