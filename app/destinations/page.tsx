import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
const page = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div className="max-w-7xl mx-auto bg-gray-200 p-2 rounded-lg ml-2 mr-2 mt-5">
          <div className="flex justify-between items-center border-b border-gray-300 pb-4">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Popular Destinations
            </h1>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-sm">Explore amazing places</span>
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

          <div className="mt-5 grid grid-cols-1 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/banglore.jpg"
                alt="Bangalore"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 ">
                <h2 className="text-xl font-semibold">Bangalore, India</h2>
                <p className="text-gray-600 mt-2">
                  Experience the Silicon Valley of India with its perfect blend
                  of tradition and technology.
                </p>
                <a
                  href="/destinations/bangalore"
                  className="text-blue-600 hover:underline mt-2 inline-block"
                >
                  Learn more →
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/ireland.jpg"
                alt="Ireland"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">Ireland</h2>
                <p className="text-gray-600 mt-2">
                  Discover the emerald isle's stunning landscapes and rich
                  cultural heritage.
                </p>
                <a
                  href="/destinations/ireland"
                  className="text-blue-600 hover:underline mt-2 inline-block"
                >
                  Learn more →
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/thailandpic.jpg"
                alt="Thailand"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">Thailand</h2>
                <p className="text-gray-600 mt-2">
                  Explore tropical beaches, ancient temples, and vibrant street
                  life.
                </p>
                <a
                  href="/destinations/thailand"
                  className="text-blue-600 hover:underline mt-2 inline-block"
                >
                  Learn more →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
