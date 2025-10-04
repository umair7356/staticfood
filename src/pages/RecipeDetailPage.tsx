import { ArrowLeft, Clock, Users, ChefHat } from 'lucide-react';
import { Recipe, Category } from '../types';

interface RecipeDetailPageProps {
  recipe: Recipe;
  category: Category;
  onBackClick: () => void;
}

export default function RecipeDetailPage({ recipe, category, onBackClick }: RecipeDetailPageProps) {
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img
          src={recipe.image_url}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-7xl mx-auto w-full">
          <button
            onClick={onBackClick}
            className="flex items-center space-x-2 text-white hover:text-emerald-300 transition mb-4 w-fit"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to {category.name}</span>
          </button>
          <div className="flex items-center space-x-3 mb-3">
            <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${getDifficultyColor(recipe.difficulty)}`}>
              {recipe.difficulty}
            </span>
            <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-white/90 text-gray-800">
              {category.name}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
            {recipe.title}
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl">
            {recipe.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <ChefHat className="w-6 h-6 mr-3 text-emerald-600" />
                Ingredients
              </h2>
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Instructions
              </h2>
              <ol className="space-y-6">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex">
                    <span className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      {index + 1}
                    </span>
                    <p className="text-gray-700 text-lg pt-1">{instruction}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Recipe Info
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Total Time</p>
                    <p className="text-xl font-bold text-gray-800">{totalTime} minutes</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Prep Time</p>
                    <p className="text-xl font-bold text-gray-800">{recipe.prep_time} minutes</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Cook Time</p>
                    <p className="text-xl font-bold text-gray-800">{recipe.cook_time} minutes</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Servings</p>
                    <p className="text-xl font-bold text-gray-800">{recipe.servings} people</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="bg-rose-100 p-3 rounded-lg">
                    <ChefHat className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Difficulty</p>
                    <p className="text-xl font-bold text-gray-800">{recipe.difficulty}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
