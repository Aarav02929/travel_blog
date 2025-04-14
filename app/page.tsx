import Slider from "@/components/slider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
const page = () => {
  return (
    <div>
      <Navbar />
      <div className="mb-20">
        <div className="max-w-7xl mx-auto bg-gray-200 p-2 rounded-lg ml-2 mr-2 mt-5">
          <h1 className="text-2xl font-bold">Welcome to our travel blog</h1>
          <h1 className="mt-2 text-gray-600">
            Here you can find the best travel destinations and tips
          </h1>
          <p className="mt-4 text-gray-600">
            Discover amazing places around the world, get expert travel advice,
            and find inspiration for your next adventure.
          </p>
        </div>
        <div className="max-w-7xl mx-auto bg-gray-200 p-2 rounded-lg ml-2 mr-2 mt-5">
          <h1 className="text-2xl font-bold">Where to next?</h1>
          <div className="mt-5 p-2">
            <Slider />
          </div>
        </div>
        <div className="max-w-7xl  grid grid-cols-1 md:grid-cols-3 gap-6 mt-5 mx-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold">Travel Guides</h2>
            <p className="mt-2 text-gray-600">
              Comprehensive guides to help you plan the perfect trip.
            </p>
            <a
              href="/guides"
              className="text-blue-600 hover:underline mt-4 inline-block"
            >
              Browse guides →
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold">Travel Tips</h2>
            <p className="mt-2 text-gray-600">
              Expert advice on making your travels smoother and more enjoyable.
            </p>
            <a
              href="/guides"
              className="text-blue-600 hover:underline mt-4 inline-block"
            >
              View tips →
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold">Popular Destinations</h2>
            <p className="mt-2 text-gray-600">
              Explore our curated list of must-visit destinations.
            </p>
            <a
              href="/destinations"
              className="text-blue-600 hover:underline mt-4 inline-block"
            >
              See destinations →
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
