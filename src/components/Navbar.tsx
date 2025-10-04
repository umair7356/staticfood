import { useState } from 'react';
import { ChefHat, ChevronDown } from 'lucide-react';
import { Category } from '../types';

interface NavbarProps {
  onHomeClick: () => void;
  onAboutClick: () => void;
  onCategoryClick: (categoryId: string) => void;
  categories: Category[];
}

export default function Navbar({ onHomeClick, onAboutClick, onCategoryClick, categories }: NavbarProps) {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={onHomeClick}
            className="flex items-center space-x-2 text-2xl font-bold text-emerald-600 hover:text-emerald-700 transition"
          >
            <ChefHat className="w-8 h-8" />
            <span>FlavorFusion</span>
          </button>
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={onHomeClick}
              className="text-gray-700 hover:text-emerald-600 transition font-medium"
            >
              Home
            </button>
            <div className="relative">
              <button
                onMouseEnter={() => setShowCategories(true)}
                onMouseLeave={() => setShowCategories(false)}
                className="flex items-center space-x-1 text-gray-700 hover:text-emerald-600 transition font-medium"
              >
                <span>Categories</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {showCategories && (
                <div
                  onMouseEnter={() => setShowCategories(true)}
                  onMouseLeave={() => setShowCategories(false)}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 z-50"
                >
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        onCategoryClick(category.id);
                        setShowCategories(false);
                      }}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition"
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={onAboutClick}
              className="text-gray-700 hover:text-emerald-600 transition font-medium"
            >
              About
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-gray-700 hover:text-emerald-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
