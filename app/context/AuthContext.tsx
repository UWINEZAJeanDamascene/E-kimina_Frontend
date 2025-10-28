"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

type User = {
  id: string
  name: string
  email: string
  phone?: string
  nationalId?: string
  password?: string
  role: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  const baseURL = process.env.NEXT_PUBLIC_BASE_URL

  useEffect(() => {
    const storedToken = localStorage.getItem("token")
    const storedUser = localStorage.getItem("user")

    if (storedToken) {
      setToken(storedToken)
    }

    if (storedUser && storedUser !== "undefined" && storedUser !== "null") {
      try {
        setUser(JSON.parse(storedUser))
      } catch (error) {
        console.error("Invalid user JSON:", storedUser)
        localStorage.removeItem("user")
      }
    } else {
      localStorage.removeItem("user")
    }

    setLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    const res = await fetch(`${baseURL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })

    if (!res.ok) {
      const errorData = await res.json()
      throw new Error(errorData.message || "Login failed")
    }

    const data = await res.json()

    if (!res.ok) {
      throw new Error(data.message || "Login failed")
    }

    const userData = {
      id: data.id,
      name: data.name,
      email: data.email,
      role: data.role,
    }

    setUser(userData)
    setToken(data.token)

    localStorage.setItem("user", JSON.stringify(userData))
    localStorage.setItem("token", data.token)
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    localStorage.removeItem("user")
    localStorage.removeItem("token")
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
