import { ArrowLeft } from 'lucide-react';
import { Category, Recipe } from '../types';
import RecipeCard from '../components/RecipeCard';

interface CategoryPageProps {
  category: Category;
  recipes: Recipe[];
  onBackClick: () => void;
  onRecipeClick: (recipeId: string) => void;
}

export default function CategoryPage({ category, recipes, onBackClick, onRecipeClick }: CategoryPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={category.image_url}
          alt={category.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-7xl mx-auto">
          <button
            onClick={onBackClick}
            className="flex items-center space-x-2 text-white hover:text-emerald-300 transition mb-4 w-fit"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Categories</span>
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {category.name}
          </h1>
          <p className="text-lg text-gray-200">
            {category.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {recipes.length} Recipes
          </h2>
          <p className="text-gray-600">
            Discover delicious {category.name.toLowerCase()} recipes to try at home
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onClick={() => onRecipeClick(recipe.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
