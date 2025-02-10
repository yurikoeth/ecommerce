"use client";

import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load the theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "#1a202c"; // Set dark background
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "#ffffff"; // Set light background
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    document.body.style.backgroundColor = newTheme ? "#1a202c" : "#ffffff"; // Dynamically update background color
    localStorage.setItem("theme", newTheme ? "dark" : "light"); // Save theme preference
  };

  return (
    <button onClick={toggleTheme} className="focus:outline-none">
      {isDarkMode ? <FaSun className="text-2xl" /> : <FaMoon className="text-2xl" />}
    </button>
  );
}
