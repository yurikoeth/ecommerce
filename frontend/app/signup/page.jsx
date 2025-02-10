"use client";

import { useState } from "react";
import { useUser } from "../../context/UserContext"
import { useRouter } from "next/navigation";

export default function Signup() {
  const { onUserSignIn } = useUser(); // Access the context's onUserSignIn function
  const router = useRouter(); // Initialize Next.js router
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Example validation for password length
    if (name === "password" && value.length < 8) {
      console.log("Password too short");
    }

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData); // Debugging log for form data

    try {
      const response = await fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json(); // Parse response data
        alert("Account created successfully!");
        console.log("API Response:", data);

        onUserSignIn({ firstName: formData.firstName, lastName: formData.lastName });
        localStorage.setItem("user", JSON.stringify({ firstName: data.firstName, lastName: data.lastName }));

        // Redirect to homepage
        router.push("/");
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message || "Something went wrong."}`);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Error: Unable to connect to the server.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 dark:text-black">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md dark:bg-gray-700">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="/newegg-logo.png" // Replace with your logo path
            alt="Newegg Logo"
            className="h-8"
          />
        </div>
        <h2 className="text-2xl font-semibold text-center mb-6">
          Create Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              First and Last Name
            </label>
            <div className="flex justify-between w-full space-x-2">
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.name}
                onChange={handleChange}
                className="w-5/6 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.name}
                onChange={handleChange}
                className="w-5/6 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Email Address"
              required
            />
          </div>
          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Password"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Including 3 of the following: <b>ABC</b>, <b>abc</b>, <b>123</b>,
              <b>@#$</b>. Must contain 8-30 characters.
            </p>
          </div>
          {/* Subscribe */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="subscribe"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="subscribe" className="text-sm">
              Subscribe for exclusive e-mail offers and discounts
            </label>
          </div>
          {/* Terms */}
          <p className="text-xs text-gray-500">
            By creating an account, you agree to Newegg&apos;s{" "}
            <a
              href="#"
              className="text-blue-500 underline hover:text-blue-600"
            >
              Privacy Notice
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-500 underline hover:text-blue-600">
              Terms of Use
            </a>
            .
          </p>
          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition"
          >
            SIGN UP
          </button>
        </form>
        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-sm">
            Have an account?{" "}
            <a
              href="/signin"
              className="text-blue-500 underline hover:text-blue-600"
            >
              Sign In
            </a>
          </p>
        </div>
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
