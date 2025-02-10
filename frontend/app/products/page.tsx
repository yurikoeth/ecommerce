"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import{Phones, Computers, Keyboards, Mice} from "@/data"; 
import {
  Breadcrumb,
  Sidebar,
  HeroBanner,
  ProductGrid,
  ProductInfo,
} from "../../components/products/index";

export default function ProductPage() {
  const categories = {
    Phones, Computers, Keyboards, Mice
  };
  
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") || "Phones";
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);

  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);
   
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <Breadcrumb breadcrumb="Home > Products" />
      <div className="flex w-full">
        <aside className="hidden md:block w-1/5 p-4">
          <Sidebar
            categories={Object.keys(categories)}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </aside>
        <main className="flex-1">
          <HeroBanner />
          <div className="container mx-auto">
            <ProductInfo selectedCategory={selectedCategory} />
            <ProductGrid products={categories[selectedCategory] || []} />
          </div>
        </main>
      </div>
    </div>
  );
}
