import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import {
  Calendar,
  TrendingUp,
  Clock,
  Award,
  Target,
  User,
  Settings,
  LogOut,
  ChevronRight,
  Activity,
  ArrowLeft,
} from "lucide-react"

const DashboardPage = () => {
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

      {/* Header */}
      <header className="hidden bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-white">
              E-Kimina
            </Link>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                className="text-white hover:bg-white/20 rounded-full"
              >
                <Settings className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:bg-white/20 rounded-full"
              >
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Welcome back, Alex!
          </h1>
          <p className="text-white/80 text-lg">
            Ready to refine your tennis skills today?
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white rounded-3xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-black mb-1">12</div>
            <div className="text-gray-600 text-sm font-medium">
              Sessions This Month
            </div>
          </Card>

          <Card className="bg-white rounded-3xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-black mb-1">24h</div>
            <div className="text-gray-600 text-sm font-medium">
              Training Time
            </div>
          </Card>

          <Card className="bg-white rounded-3xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-black mb-1">8</div>
            <div className="text-gray-600 text-sm font-medium">
              Achievements
            </div>
          </Card>

          <Card className="bg-white rounded-3xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <Activity className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-black mb-1">85%</div>
            <div className="text-gray-600 text-sm font-medium">
              Goal Progress
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Sessions */}
            <Card className="bg-white rounded-3xl p-6 md:p-8 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-black">
                  Upcoming Sessions
                </h2>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
                  Book New
                </Button>
              </div>

              <div className="space-y-4">
                {/* Session 1 */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 flex flex-col items-center justify-center flex-shrink-0">
                    <div className="text-xs font-medium text-blue-600">JAN</div>
                    <div className="text-xl font-bold text-blue-600">24</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-black mb-1">
                      Advanced Serve Technique
                    </h3>
                    <p className="text-sm text-gray-600">
                      Coach: Maria Rodriguez
                    </p>
                    <p className="text-sm text-gray-600">
                      10:00 AM - 11:30 AM • Court 5
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>

                {/* Session 2 */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 flex flex-col items-center justify-center flex-shrink-0">
                    <div className="text-xs font-medium text-blue-600">JAN</div>
                    <div className="text-xl font-bold text-blue-600">26</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-black mb-1">
                      Footwork & Agility Training
                    </h3>
                    <p className="text-sm text-gray-600">Coach: James Chen</p>
                    <p className="text-sm text-gray-600">
                      2:00 PM - 3:30 PM • Court 2
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>

                {/* Session 3 */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="w-16 h-16 rounded-2xl bg-purple-100 flex flex-col items-center justify-center flex-shrink-0">
                    <div className="text-xs font-medium text-purple-600">
                      JAN
                    </div>
                    <div className="text-xl font-bold text-purple-600">28</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-black mb-1">
                      Match Strategy Session
                    </h3>
                    <p className="text-sm text-gray-600">
                      Coach: Sarah Williams
                    </p>
                    <p className="text-sm text-gray-600">
                      4:00 PM - 5:30 PM • Court 8
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </Card>

            {/* Progress Chart */}
            <Card className="bg-white rounded-3xl p-6 md:p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-black mb-6">
                Performance Progress
              </h2>
              <div className="space-y-6">
                {/* Serve Accuracy */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Serve Accuracy
                    </span>
                    <span className="text-sm font-bold text-black">78%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 rounded-full"
                      style={{ width: "78%" }}
                    ></div>
                  </div>
                </div>

                {/* Forehand Power */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Forehand Power
                    </span>
                    <span className="text-sm font-bold text-black">85%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>

                {/* Backhand Consistency */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Backhand Consistency
                    </span>
                    <span className="text-sm font-bold text-black">72%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-purple-600 rounded-full"
                      style={{ width: "72%" }}
                    ></div>
                  </div>
                </div>

                {/* Footwork Speed */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Footwork Speed
                    </span>
                    <span className="text-sm font-bold text-black">90%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-600 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <Card className="bg-white rounded-3xl p-6 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-black text-lg">Alex Johnson</h3>
                  <p className="text-sm text-gray-600">Premium Member</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Member Since</span>
                  <span className="text-sm font-medium text-black">
                    Jan 2024
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Skill Level</span>
                  <span className="text-sm font-medium text-black">
                    Advanced
                  </span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-gray-600">Sessions Left</span>
                  <span className="text-sm font-medium text-black">10</span>
                </div>
              </div>
              <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                View Profile
              </Button>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-white rounded-3xl p-6 shadow-xl">
              <h3 className="font-bold text-black text-lg mb-4">
                Quick Actions
              </h3>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start rounded-xl border-gray-200 hover:bg-gray-50 bg-transparent"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book a Session
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start rounded-xl border-gray-200 hover:bg-gray-50 bg-transparent"
                >
                  <User className="w-4 h-4 mr-2" />
                  Find a Coach
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start rounded-xl border-gray-200 hover:bg-gray-50 bg-transparent"
                >
                  <Target className="w-4 h-4 mr-2" />
                  Set New Goals
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start rounded-xl border-gray-200 hover:bg-gray-50 bg-transparent"
                >
                  <Activity className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
              </div>
            </Card>

            {/* Subscription Card */}
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-6 shadow-xl text-white">
              <h3 className="font-bold text-lg mb-2">Monthly Plan</h3>
              <div className="text-3xl font-bold mb-1">
                $99<span className="text-lg font-normal">/month</span>
              </div>
              <p className="text-white/90 text-sm mb-4">
                22 Sessions remaining
              </p>
              <Button className="w-full bg-white text-blue-600 hover:bg-white/90 rounded-full font-medium">
                Upgrade Plan
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
