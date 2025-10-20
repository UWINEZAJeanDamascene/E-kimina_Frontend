import React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Search } from "lucide-react"
import Link from "next/link"

const Hero = () => {
  return (
    <section className="flex-1 flex items-center px-6  pb-8">
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
              Subscribe to our newsletter and achieve receive updates and news
              directly to your inbox.
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
                  <span className="text-4xl font-bold text-black">$9.99</span>
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
    </section>
  )
}

export default Hero
