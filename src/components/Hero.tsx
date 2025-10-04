export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Discover Amazing Recipes
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-emerald-50">
            From classic comfort food to exotic cuisines, find your next favorite dish
          </p>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-2 max-w-2xl w-full">
              <input
                type="text"
                placeholder="Search for recipes..."
                className="w-full px-4 py-3 text-gray-800 focus:outline-none rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
