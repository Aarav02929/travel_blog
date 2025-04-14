import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
const page = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="max-w-7xl mx-auto bg-gray-200 p-2 rounded-lg ml-2 mr-2 mt-5 mb-3">
          <div className="flex justify-between items-center border-b border-gray-300 pb-4">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Bangalore
            </h1>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-sm">Silicon Valley of India</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
          </div>

          <div className="mt-5 space-y-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/banglore.jpg"
                alt="Bangalore City"
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">About Bangalore</h2>
                <p className="text-gray-600">
                  Bangalore, officially known as Bengaluru, is the capital of
                  Karnataka state in southern India. Known as the Silicon Valley
                  of India, it's a major tech hub with a perfect blend of
                  modernity and tradition. The city is famous for its pleasant
                  climate, beautiful parks, vibrant nightlife, and diverse food
                  culture.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">
                  Popular Attractions
                </h2>
                <ul className="space-y-3 text-gray-600">
                  <li>• Lalbagh Botanical Garden</li>
                  <li>• Cubbon Park</li>
                  <li>• Bangalore Palace</li>
                  <li>• ISKCON Temple</li>
                  <li>• UB City</li>
                  <li>• Vidhana Soudha</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Local Cuisine</h2>
                <ul className="space-y-3 text-gray-600">
                  <li>• Masala Dosa</li>
                  <li>• Filter Coffee</li>
                  <li>• Idli Vada</li>
                  <li>• Biryani</li>
                  <li>• Street Food at VV Puram</li>
                  <li>• Traditional Thali</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Best Time to Visit</h2>
              <p className="text-gray-600">
                The best time to visit Bangalore is from October to February
                when the weather is pleasant and cool. The city experiences a
                moderate climate throughout the year, making it a year-round
                destination. However, summers (March to May) can be quite warm,
                and the monsoon season (June to September) brings regular
                rainfall.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
