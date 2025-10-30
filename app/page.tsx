"use client"

import Link from "next/link"
import Hero from "@/components/Hero"

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Main Hero Section with rounded container */}
      <div className="relative overflow-hidden">
        {/* Background Image */}
        <img
          src="https://images.pexels.com/photos/128867/coins-currency-investment-insurance-128867.jpeg"
          alt="Background"
          // className="absolute inset-0 bg-fill bg-center"
          className="fixed inset-0 w-full h-full object-cover bg-fill bg-center"
        />

        {/* Dark overlay */}
        <div className="fixed inset-0 w-full h-full bg-black/40" />

        {/* Content */}
        <div className="relative z-10 flex flex-col">
          {/* Main Content Area */}
          <Hero />
          {/* Bottom Section */}
          <div className="px-6">
            <div className="max-w-[1024px] mx-auto">
              <div className="flex flex-wrap items-end justify-between gap-6 lg:gap-8">
                {/* Financial Images */}
                <div className="flex items-center gap-4">
                  <div className="flex gap-2.5">
                    <div className="relative w-14 h-14 lg:w-20 lg:h-20 rounded-sm overflow-hidden shadow-lg">
                      <img
                        src="https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg"
                        className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                    </div>
                    <div className="relative w-14 h-14 lg:w-20 lg:h-20 rounded-sm overflow-hidden shadow-lg">
                      <img
                        src="https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg"
                        className="w-full h-full bg-gradient-to-br from-green-600 to-green-800"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                    </div>
                    <div className="relative w-14 h-14 lg:w-20 lg:h-20 rounded-sm overflow-hidden shadow-lg">
                      <img
                        src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg"
                        className="w-full h-full bg-gradient-to-br from-orange-300 to-orange-500"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                    </div>
                    <div className="relative w-14 h-14 lg:w-20 lg:h-20 rounded-sm overflow-hidden shadow-lg">
                      <img
                        src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg"
                        className="w-full h-full bg-gradient-to-br from-green-700 to-green-900"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                    </div>
                  </div>
                  <div className="text-white text-sm">
                    <p className="font-bold">+30 Exclusive</p>
                    <p className="text-white/90">Quality Courts</p>
                  </div>
                </div>

                {/* Elite Savings */}
                <div className="flex items-center gap-3.5 text-white">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <div className="leading-tight">
                    <p className="text-xl lg:text-2xl font-bold">
                      Get the Edge with
                    </p>
                    <p className="text-xl lg:text-2xl font-bold">
                      Elite Savings
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6 lg:mt-8 pt-5 lg:pt-6 border-t border-white/20 text-white/90 text-sm">
                <div className="flex items-center gap-4">
                  <span className="font-medium">Contact us</span>
                  <div className="flex gap-2">
                    <Link
                      href="/"
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </Link>
                    <Link
                      href="/"
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </Link>
                    <Link
                      href="/"
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-white/80">Email:</span>
                  <span className="text-white font-medium">
                    ekimina@info.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
