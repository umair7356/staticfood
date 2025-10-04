import { ArrowLeft, Heart, Users, BookOpen, Award } from 'lucide-react';
import Footer from '../components/Footer';
interface AboutPageProps {
  onBackClick: () => void;
 
}

export default function AboutPage({ onBackClick }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-64 md:h-80 bg-gradient-to-r from-emerald-500 to-teal-600">
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-7xl mx-auto w-full">
          <button
            onClick={onBackClick}
            className="flex items-center space-x-2 text-white hover:text-emerald-100 transition mb-4 w-fit"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            About FlavorFusion
          </h1>
          <p className="text-lg text-emerald-50 max-w-2xl">
            Your trusted source for delicious recipes and culinary inspiration
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-md p-8 md:p-12 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
            <p>
              FlavorFusion was born from a simple love of good food and the joy of sharing recipes with others.
              Founded in 2020, we've grown from a small blog into a thriving community of food enthusiasts,
              home cooks, and professional chefs who share a passion for creating delicious meals.
            </p>
            <p>
              Our mission is to make cooking accessible and enjoyable for everyone, regardless of skill level.
              Whether you're a beginner looking for simple weeknight dinners or an experienced cook seeking
              new culinary challenges, we're here to inspire and guide you on your cooking journey.
            </p>
            <p>
              We believe that food brings people together, tells stories, and creates memories. That's why we
              carefully curate recipes from around the world, ensuring each one is tested, photographed, and
              explained in detail so you can recreate these dishes with confidence in your own kitchen.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">1000+</h3>
            <p className="text-gray-600">Recipes</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">50K+</h3>
            <p className="text-gray-600">Community Members</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">200K+</h3>
            <p className="text-gray-600">Recipe Saves</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">15+</h3>
            <p className="text-gray-600">Awards Won</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 md:p-12 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Tested Recipes</h3>
              <p className="text-gray-600">
                Every recipe is thoroughly tested multiple times to ensure perfect results.
                We provide detailed instructions, cooking tips, and helpful notes to guide you through each step.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Global Cuisines</h3>
              <p className="text-gray-600">
                Explore recipes from around the world, from Italian classics to Asian delicacies,
                Mexican favorites to Middle Eastern specialties, and everything in between.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Cooking Tips & Tricks</h3>
              <p className="text-gray-600">
                Learn essential cooking techniques, ingredient substitutions, and time-saving hacks
                that will make you a more confident and efficient cook.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Community Support</h3>
              <p className="text-gray-600">
                Join our vibrant community of food lovers. Share your cooking experiences, ask questions,
                and connect with fellow home cooks who share your passion.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl shadow-md p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg text-emerald-50 mb-6 max-w-2xl mx-auto">
            Be part of our growing community and receive weekly recipes, cooking tips, and exclusive content
            delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
            <button className="px-8 py-3 bg-white text-emerald-600 rounded-lg hover:bg-emerald-50 transition font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
     
    </div>
  );
}
