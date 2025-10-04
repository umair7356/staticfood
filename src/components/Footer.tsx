import { ChefHat, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

interface FooterProps {
  onHomeClick: () => void;
  onAboutClick: () => void;
  onCategoryClick: (categoryId: string) => void;
  categories: { id: string; name: string }[];
}

export default function Footer({ onHomeClick, onAboutClick, onCategoryClick, categories }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <button
              onClick={onHomeClick}
              className="flex items-center space-x-2 text-2xl font-bold text-white hover:text-emerald-400 transition mb-4"
            >
              <ChefHat className="w-8 h-8" />
              <span>FlavorFusion</span>
            </button>
            <p className="text-gray-400 mb-4">
              Discover amazing recipes from around the world. From comfort food to exotic cuisines, find your next favorite dish.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={onHomeClick}
                  className="hover:text-emerald-400 transition"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={onAboutClick}
                  className="hover:text-emerald-400 transition"
                >
                  About Us
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.slice(0, 5).map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => onCategoryClick(category.id)}
                    className="hover:text-emerald-400 transition"
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get weekly recipes and cooking tips delivered to your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-emerald-500"
              />
              <button className="px-4 py-2 bg-emerald-600 text-white rounded-r-lg hover:bg-emerald-700 transition font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 FlavorFusion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
