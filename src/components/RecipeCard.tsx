import { Clock, Users, ChefHat } from 'lucide-react';
import { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: () => void;
}

export default function RecipeCard({ recipe, onClick }: RecipeCardProps) {
  const totalTime = recipe.prep_time + recipe.cook_time;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // console.log(recipe);

  return (
    <button
      onClick={onClick}
      className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={recipe.image_url}
          alt={recipe.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(recipe.difficulty)}`}>
            {recipe.difficulty}
          </span>
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1 text-left">
          {recipe.title}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 text-left">
          {recipe.description}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{totalTime} min</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{recipe.servings} servings</span>
          </div>
          <div className="flex items-center space-x-1">
            <ChefHat className="w-4 h-4" />
          </div>
        </div>
      </div>
    </button>
  );
}
