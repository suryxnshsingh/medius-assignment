'use client'

import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import Navbar from '@/components/Navbar'

interface ClientLayoutProps {
  children: ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname()
  const hideNavbarPaths = ['/start']
  const shouldShowNavbar = !hideNavbarPaths.includes(pathname)

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      {children}
    </>
  )
}