import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Target, Users, Award, TrendingUp } from "lucide-react"

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Background Image */}
      <img
        src="https://images.pexels.com/photos/128867/coins-currency-investment-insurance-128867.jpeg"
        alt="Background"
        // className="absolute inset-0 bg-fill bg-center"
        className="fixed inset-0 w-full h-full object-cover bg-fill bg-center -z-20"
      />

      {/* Dark overlay */}
      <div className="fixed inset-0 w-full h-full bg-black/40 -z-20" />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            About E-Kimina
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Empowering tennis players worldwide to reach their full potential
            through expert coaching and innovative training methods.
          </p>
        </div>

        {/* Mission Card */}
        <Card className="bg-white rounded-3xl p-8 md:p-12 mb-8 shadow-2xl">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                At E-Kimina, we believe that every player has the potential to
                become a champion. Our mission is to provide world-class tennis
                coaching and training facilities that help athletes of all
                levels refine their skills, build confidence, and achieve their
                goals on the court.
              </p>
            </div>
          </div>
        </Card>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white rounded-3xl p-8 shadow-xl text-center">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <Users className="w-7 h-7 text-blue-600" />
            </div>
            <div className="text-4xl font-bold text-black mb-2">20K+</div>
            <div className="text-gray-600 font-medium">Active Athletes</div>
          </Card>

          <Card className="bg-white rounded-3xl p-8 shadow-xl text-center">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <Award className="w-7 h-7 text-blue-600" />
            </div>
            <div className="text-4xl font-bold text-black mb-2">30+</div>
            <div className="text-gray-600 font-medium">Quality Courts</div>
          </Card>

          <Card className="bg-white rounded-3xl p-8 shadow-xl text-center">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-7 h-7 text-blue-600" />
            </div>
            <div className="text-4xl font-bold text-black mb-2">95%</div>
            <div className="text-gray-600 font-medium">Success Rate</div>
          </Card>
        </div>

        {/* Story Section */}
        <Card className="bg-white rounded-3xl p-8 md:p-12 mb-8 shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
            Our Story
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed text-base md:text-lg">
            <p>
              Founded in 2015, TOPSPIN began with a simple vision: to create a
              tennis training platform that combines expert coaching with
              cutting-edge technology. What started as a single court facility
              has grown into a network of premium training centers serving
              thousands of athletes worldwide.
            </p>
            <p>
              Our team of certified coaches brings decades of professional
              experience, having trained players at every level from beginners
              to ATP/WTA professionals. We've developed a unique training
              methodology that focuses on technical excellence, mental strength,
              and physical conditioning.
            </p>
            <p>
              Today, TOPSPIN is proud to be the training ground for over 20,000
              athletes, offering 24/7 access to world-class facilities,
              personalized coaching programs, and a supportive community of
              tennis enthusiasts.
            </p>
          </div>
        </Card>

        {/* Values */}
        <Card className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-black">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We strive for excellence in everything we do, from our coaching
                methods to our facility maintenance.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-black">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                We continuously evolve our training programs using the latest
                sports science and technology.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-black">Community</h3>
              <p className="text-gray-600 leading-relaxed">
                We foster a supportive environment where players motivate and
                inspire each other.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-black">Integrity</h3>
              <p className="text-gray-600 leading-relaxed">
                We maintain the highest standards of professionalism and ethical
                conduct in all our operations.
              </p>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/">
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 h-auto text-base font-medium">
              Join Our Community
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
