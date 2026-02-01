import React, { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

interface AuthContextType {
  isAuthenticated: boolean
  login: (email: string, password: string) => boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const ADMIN_CREDENTIALS = [
  { email: 'francis_poloni@yahoo.com.br', password: 'Nerac47600@' },
  { email: 'gab.feelix@gmail.com', password: 'gafe3622' },
]

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('admin-auth') === 'true'
  })

  const login = (email: string, password: string): boolean => {
    const isValid = ADMIN_CREDENTIALS.some(
      (cred) => cred.email.toLowerCase() === email.toLowerCase() && cred.password === password
    )

    if (isValid) {
      setIsAuthenticated(true)
      localStorage.setItem('admin-auth', 'true')
      return true
    }
    return false
  }

  const logout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('admin-auth')
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
