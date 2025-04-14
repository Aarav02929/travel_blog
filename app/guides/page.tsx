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
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Travel Guides
            </h1>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-sm">Expert Tips & Recommendations</span>
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
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
            </div>
          </div>

          <div className="mt-5 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">
                Essential Travel Tips
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-800">
                    Before You Go
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Research your destination thoroughly</li>
                    <li>• Check visa requirements and travel documents</li>
                    <li>• Get travel insurance</li>
                    <li>• Make copies of important documents</li>
                    <li>• Check travel advisories</li>
                    <li>• Get necessary vaccinations</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-800">
                    Packing Tips
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Pack light and versatile clothing</li>
                    <li>• Bring essential medications</li>
                    <li>• Pack a basic first-aid kit</li>
                    <li>• Don't forget chargers and adapters</li>
                    <li>• Carry important items in hand luggage</li>
                    <li>• Include comfortable walking shoes</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">Money Saving Tips</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-800">
                    Accommodation
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Book in advance for better rates</li>
                    <li>• Consider hostels or guesthouses</li>
                    <li>• Use hotel comparison websites</li>
                    <li>• Look for package deals</li>
                    <li>• Stay in less touristy areas</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-800">
                    Transportation
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Use public transportation</li>
                    <li>• Book flights in advance</li>
                    <li>• Consider overnight trains/buses</li>
                    <li>• Walk or bike when possible</li>
                    <li>• Get local transport passes</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">Safety Guidelines</h2>
              <div className="space-y-4 text-gray-600">
                <p>• Keep emergency contacts handy</p>
                <p>• Stay aware of your surroundings</p>
                <p>• Keep valuables in a safe place</p>
                <p>• Learn basic local phrases</p>
                <p>• Know local emergency numbers</p>
                <p>• Follow local customs and dress codes</p>
                <p>• Stay connected with family/friends</p>
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
