"use client"

import React, { useState } from "react"
import {
  Bell,
  ChevronDown,
  Home,
  Menu,
  Send,
  Store,
  Users,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ProfileAvatar from "./ProfileAvatar"
import { useAuth } from "@/app/context/AuthContext"

const Navbar = () => {
  const { user, logout } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="relative z-[1000] flex items-center justify-between px-6 md:px-10 lg:px-12 py-6">
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
            href="/about"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Users className="w-4 h-4" />
            About
            <ChevronDown className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Send className="w-4 h-4" />
            Contact
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Store className="w-4 h-4" />
            Dashboard
          </Link>
        </div>
      </div>

      <div className="flex items-center md:gap-5">
        {/* <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10 rounded-full h-10 w-10 relative"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full border border-white" />
        </Button> */}
        {user ? (
          <>
            <ProfileAvatar />
            <button
              onClick={logout}
              className="px-3 py-2 rounded-sm bg-white font-medium cursor-pointer hover:bg-white/90"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            href="/login"
            className="flex items-center justify-center bg-white text-black hover:bg-white/90 rounded-full px-5 py-2 h-10 text-sm font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            <Users className="w-4 h-4 mr-2" />
            Join Today
          </Link>
        )}
        <Menu
          className="w-7 h-7 text-white cursor-pointer lg:hidden"
          onClick={() => setIsMenuOpen(true)}
        />
      </div>

      <aside
        className={`${
          isMenuOpen ? "translate-x-0" : " translate-x-full"
        } flex flex-col gap-5 fixed top-0 right-0 h-screen w-full lg:w-[500px] bg-black text-black text-sm font-medium p-7 duration-700`}
      >
        <div
          className={`w-full flex items-center ${
            user ? "justify-between" : "justify-end"
          }`}
        >
          {user && <ProfileAvatar />}
          <X
            className="w-7 h-7 text-white cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
        <div className="flex flex-col items-start gap-6 text-white text-xl">
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <Home className="w-6 h-6" />
            Home
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-2 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <Users className="w-6 h-6" />
            About
            <ChevronDown className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <Send className="w-6 h-6" />
            Contact
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <Store className="w-6 h-6" />
            Dashboard
          </Link>
        </div>
        <div className="w-full mx-auto">
          {user ? (
            <button
              onClick={logout}
              className="px-3 py-2 rounded-sm bg-white font-medium cursor-pointer hover:bg-white/90"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="flex items-center justify-center bg-white text-black hover:bg-white/90 rounded-full px-5 py-2 h-10 text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <Users className="w-4 h-4 mr-2" />
              Join Today
            </Link>
          )}
        </div>
      </aside>
    </nav>
  )
}

export default Navbar
