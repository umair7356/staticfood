import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import AboutPage from './pages/AboutPage';
import BlogDetailPage from './pages/BlogDetailPage';
import { categories, recipes, blogs } from './data';

type Page = 'home' | 'category' | 'recipe' | 'about' | 'blog';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  // const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  // const [selectedRecipeId, setSelectedRecipeId] = useState<string | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
const [selectedRecipeId, setSelectedRecipeId] = useState<number | null>(null);
const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);
const selectedBlog = selectedBlogId ? blogs.find(b => b.id === selectedBlogId) : null;


const handleBlogClick = (blogId: number) => {
  console.log("clicked");
  setSelectedBlogId(blogId);
  setCurrentPage('blog');
  window.scrollTo(0, 0);
};


  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    setCurrentPage('category');
    window.scrollTo(0, 0);
  };

  // const handleRecipeClick = (recipeId: string) => {
  //   setSelectedRecipeId(recipeId);
  //   setCurrentPage('recipe');
  //   window.scrollTo(0, 0);
  // };
  const handleRecipeClick = (recipeId: string) => {
  const recipe = recipes.find(r => r.id === recipeId);
  if (recipe) {
    setSelectedRecipeId(recipeId);
    setSelectedCategoryId(recipe.category_id ?? null); // keep category if available
  }
  setCurrentPage('recipe');
  window.scrollTo(0, 0);
};


  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedCategoryId(null);
    setSelectedRecipeId(null);
    window.scrollTo(0, 0);
  };

  const handleBackToCategory = () => {
    setCurrentPage('category');
    setSelectedRecipeId(null);
    window.scrollTo(0, 0);
  };

  const handleAboutClick = () => {
    setCurrentPage('about');
    window.scrollTo(0, 0);
  };

  const selectedCategory = selectedCategoryId
    ? categories.find(c => c.id === selectedCategoryId)
    : null;

  const categoryRecipes = selectedCategoryId
    ? recipes.filter(r => r.category_id === selectedCategoryId)
    : [];

  const selectedRecipe = selectedRecipeId
    ? recipes.find(r => r.id === selectedRecipeId)
    : null;

  return (
    <>
    <div className="min-h-screen bg-gray-50">
      <Navbar
        onHomeClick={handleBackToHome}
        onAboutClick={handleAboutClick}
        onCategoryClick={handleCategoryClick}
        categories={categories}
      />

      {currentPage === 'home' && (
        <HomePage
          categories={categories}
          recipes={recipes}
          blogs={blogs}
          onCategoryClick={handleCategoryClick}
          onRecipeClick={handleRecipeClick}
          onAboutClick={handleAboutClick}
           onBlogClick={handleBlogClick} 
        />
      )}

      {currentPage === 'category' && selectedCategory && (
        <CategoryPage
          category={selectedCategory}
          recipes={categoryRecipes}
          onBackClick={handleBackToHome}
          onRecipeClick={handleRecipeClick}
        />
      )}
{currentPage === 'recipe' && selectedRecipe && (
  <RecipeDetailPage
    recipe={selectedRecipe}
    category={selectedCategory ?? undefined} // optional
    onBackClick={selectedCategory ? handleBackToCategory : handleBackToHome}
  />
)}

{currentPage === 'blog' && selectedBlog && (
  <BlogDetailPage
    blog={selectedBlog}
    onBackClick={handleBackToHome}
  />
)}
      {currentPage === 'about' && (
        <AboutPage onBackClick={handleBackToHome} />
      )}
    </div>
    </>
  );
}

export default App;
