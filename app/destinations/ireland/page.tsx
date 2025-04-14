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
            <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Ireland
            </h1>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-sm">The Emerald Isle</span>
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
                src="/ireland.jpg"
                alt="Ireland Landscape"
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">About Ireland</h2>
                <p className="text-gray-600">
                  Ireland, known as the Emerald Isle, is a country rich in
                  history, culture, and natural beauty. From its rolling green
                  hills and dramatic coastal cliffs to its vibrant cities and
                  warm-hearted people, Ireland offers visitors an unforgettable
                  experience filled with music, mythology, and memorable
                  landscapes.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">
                  Popular Attractions
                </h2>
                <ul className="space-y-3 text-gray-600">
                  <li>• Cliffs of Moher</li>
                  <li>• Ring of Kerry</li>
                  <li>• Dublin Castle</li>
                  <li>• Giant's Causeway</li>
                  <li>• Blarney Castle</li>
                  <li>• Trinity College</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Local Cuisine</h2>
                <ul className="space-y-3 text-gray-600">
                  <li>• Irish Stew</li>
                  <li>• Soda Bread</li>
                  <li>• Boxty</li>
                  <li>• Colcannon</li>
                  <li>• Fresh Seafood</li>
                  <li>• Guinness Beer</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Best Time to Visit</h2>
              <p className="text-gray-600">
                The best time to visit Ireland is between March and May or
                September to November. These shoulder seasons offer mild weather
                and fewer crowds. Summer (June to August) brings the warmest
                weather and longest daylight hours but also the most tourists.
                Winter (December to February) can be cold and wet but offers
                unique charm with festive celebrations and cozy pub atmospheres.
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
