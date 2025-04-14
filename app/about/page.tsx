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
              About Us
            </h1>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-sm">Your Travel Guide</span>
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
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
            </div>
          </div>

          <div className="mt-5 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                We are passionate about helping travelers discover the world's
                most amazing destinations. Our mission is to provide
                comprehensive, accurate, and inspiring travel information that
                helps you plan unforgettable journeys. Whether you're a seasoned
                globetrotter or planning your first adventure, we're here to
                guide you every step of the way.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">What We Offer</h2>
                <ul className="space-y-3 text-gray-600">
                  <li>• Detailed destination guides</li>
                  <li>• Travel tips and advice</li>
                  <li>• Cultural insights</li>
                  <li>• Local cuisine recommendations</li>
                  <li>• Photography and stories</li>
                  <li>• Trip planning resources</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Our Values</h2>
                <ul className="space-y-3 text-gray-600">
                  <li>• Authentic experiences</li>
                  <li>• Responsible tourism</li>
                  <li>• Cultural respect</li>
                  <li>• Environmental awareness</li>
                  <li>• Community support</li>
                  <li>• Honest recommendations</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Meet the Team</h2>
              <p className="text-gray-600 mb-4">
                Our team consists of passionate travelers, writers, and
                photographers who have explored countless destinations across
                the globe. We combine our firsthand experiences with thorough
                research to bring you the most reliable and engaging travel
                content.
              </p>
              <p className="text-gray-600">
                Have questions or suggestions? We'd love to hear from you!
                Connect with us through our social media channels.
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
