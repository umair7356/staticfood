import { Category, Recipe, BlogPost } from '../types';
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import RecipeCard from '../components/RecipeCard';
import BlogCard from '../components/BlogCard';
import Footer from '../components/Footer';

interface HomePageProps {
  categories: Category[];
  recipes: Recipe[];
  blogs: BlogPost[];
  onCategoryClick: (categoryId: string) => void;
  onRecipeClick: (recipeId: string) => void;
  onAboutClick: () => void;
   onBlogClick: (blogId: number) => void; 
}

export default function HomePage({
  categories,
  recipes,
  blogs,
  onCategoryClick,
  onRecipeClick,
  onAboutClick,
  onBlogClick
  
}: HomePageProps) {
  const featuredRecipes = recipes.slice(0, 8);
// console.log("ssadasdas",featuredRecipes);
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Explore Recipe Categories
          </h2>
          <p className="text-lg text-gray-600">
            Browse through our carefully curated collection of recipes from around the world
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onClick={() => onCategoryClick(category.id)}
            />
          ))}
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured Recipes
            </h2>
            <p className="text-lg text-gray-600">
              Try these popular recipes loved by our community
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onClick={() => onRecipeClick(recipe.id)}
              />
            ))}
            
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-lg text-gray-600">
              Cooking tips, techniques, and culinary inspiration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} onClick={() => onBlogClick(blog.id)}/>
            ))}
          </div>
        </div>
      </div>

      <Footer
        onHomeClick={() => window.scrollTo(0, 0)}
        onAboutClick={onAboutClick}
        onCategoryClick={onCategoryClick}
        categories={categories}
      />
    </div>
  );
}
