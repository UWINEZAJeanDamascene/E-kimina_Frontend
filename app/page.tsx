import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Bell,
  ChevronDown,
  Home,
  Menu,
  Search,
  Store,
  Users,
} from "lucide-react"
import Link from "next/link"

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Main Hero Section with rounded container */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <img
          src="https://images.pexels.com/photos/128867/coins-currency-investment-insurance-128867.jpeg"
          alt="Background"
          className="absolute inset-0 bg-fill bg-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Navigation */}
          <nav className="flex items-center justify-between px-6 md:px-10 lg:px-12 py-6">
            <div className="flex items-center gap-8 lg:gap-12">
              <Link
                href="/"
                className="text-xl md:text-2xl font-bold text-white tracking-tight"
              >
                E-Kimina
              </Link>

              <div className="hidden lg:flex items-center gap-6 text-white/90 text-sm font-medium">
                <Link
                  href="/"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Home className="w-4 h-4" />
                  Home
                </Link>
                <Link
                  href="/"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Store className="w-4 h-4" />
                  Store
                  <ChevronDown className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Users className="w-4 h-4" />
                  Members
                </Link>
                <Link
                  href="/"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                  </svg>
                  Resources
                  <ChevronDown className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-2 md:gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 rounded-full h-10 w-10"
              >
                <Menu className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 rounded-full h-10 w-10 relative"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full border border-white" />
              </Button>
              <Link
                href="/signup"
                className="flex items-center justify-center bg-white text-black hover:bg-white/90 rounded-full px-5 py-2 h-10 text-sm font-medium"
              >
                <Users className="w-4 h-4 mr-2" />
                Join Today
              </Link>
            </div>
          </nav>

          {/* Main Content Area */}
          <div className="flex-1 flex items-center px-6  pb-8">
            <div className="w-full max-w-[1400px] mx-auto grid lg:grid-cols-[3fr_2fr] gap-8 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-6 lg:space-y-8 max-w-2xl">
                <button className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/30 text-white text-sm hover:bg-white/10 transition-colors backdrop-blur-sm">
                  <Search className="w-4 h-4" />
                  Join Our Community
                </button>

                <div className="space-y-4 lg:space-y-5">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight">
                    Refine Your
                    <br />
                    Finances
                  </h2>
                  <p className="text-white/90 text-base md:text-lg max-w-lg leading-relaxed">
                    Subscribe to our newsletter and achieve receive updates and
                    news directly to your inbox.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <input
                    type="email"
                    placeholder="Subscribe to newsletter"
                    className="px-5 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 w-full sm:w-64 text-sm"
                  />
                  <Button className="bg-white text-black hover:bg-white/90 rounded-full px-7 py-3 h-auto text-sm font-medium whitespace-nowrap">
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Right Cards */}
              <div className="space-y-3 max-w-sm lg:max-w-xs xl:max-w-sm">
                {/* Everyday Topspin Card */}
                <Card className="bg-white rounded-[1.75rem] p-5 shadow-xl">
                  <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                    Everyday Contribution
                  </p>
                  <div>
                    <h3 className="text-xl lg:text-3xl font-bold leading-tight tracking-tight">
                      {/* <span className="text-black">Highly </span> */}
                      <span className="text-black">trusted </span>
                      <span className="text-gray-400">Online </span>
                      <br />
                      <span className="text-gray-400">Platform </span>
                      <span className="text-black">For</span>
                      {/* <br /> */}
                      <br />
                      <span className="text-black">Ikimina </span>
                      <span className="text-gray-400">Contribution</span>
                      <br />
                      <span className="text-black">24/7</span>
                    </h3>
                  </div>
                  <Link
                    href="/signup"
                    className="text-sm text-gray-600 hover:text-black transition-colors font-medium block mx-auto"
                  >
                    Join Today →
                  </Link>
                </Card>

                {/* Trust Badge */}
                <div className="flex items-center gap-3 text-white px-2">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white shadow-md" />
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white shadow-md" />
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-white shadow-md" />
                  </div>
                  <div className="text-sm">
                    <p className="font-bold">Trusted by over +20K</p>
                    <p className="text-white/90">Individuals</p>
                  </div>
                </div>

                {/* Subscription Card */}
                <Card className="bg-white/95 backdrop-blur-sm rounded-[1.75rem] p-5 space-y-4 shadow-xl">
                  <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                    Subscription
                  </p>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs text-gray-600 mb-1 font-medium">
                        Monthly
                      </p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-black">
                          $9.99
                        </span>
                        <span className="text-sm text-gray-500">/Month</span>
                      </div>
                    </div>
                    <div className="space-y-2.5 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                        <span className="text-gray-700">24/7 Support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                        <span className="text-gray-700">24/7 Money Access</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                        <span className="text-gray-700">Tracking Tools</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

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
