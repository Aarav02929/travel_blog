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
            <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent">
              Thailand
            </h1>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-sm">Land of Smiles</span>
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
                src="/thailandpic.jpg"
                alt="Thailand Landscape"
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">About Thailand</h2>
                <p className="text-gray-600">
                  Thailand, often called the Land of Smiles, is a Southeast
                  Asian country known for its tropical beaches, opulent royal
                  palaces, ancient ruins, and ornate temples. The country offers
                  a perfect blend of traditional culture, modern cities, exotic
                  cuisine, and warm hospitality, making it one of the world's
                  most popular tourist destinations.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">
                  Popular Attractions
                </h2>
                <ul className="space-y-3 text-gray-600">
                  <li>• Grand Palace, Bangkok</li>
                  <li>• Phi Phi Islands</li>
                  <li>• Wat Arun Temple</li>
                  <li>• Khao San Road</li>
                  <li>• Ayutthaya Ruins</li>
                  <li>• Chiang Mai Temples</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Local Cuisine</h2>
                <ul className="space-y-3 text-gray-600">
                  <li>• Pad Thai</li>
                  <li>• Tom Yum Goong</li>
                  <li>• Green Curry</li>
                  <li>• Mango Sticky Rice</li>
                  <li>• Som Tam (Papaya Salad)</li>
                  <li>• Street Food Delicacies</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Best Time to Visit</h2>
              <p className="text-gray-600">
                The best time to visit Thailand is between November and early
                April, during the cool and dry season. The weather is perfect
                for sightseeing and beach activities during these months.
                However, be aware that March to May can be extremely hot, and
                the rainy season runs from June to October, though this brings
                lush landscapes and fewer tourists.
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
