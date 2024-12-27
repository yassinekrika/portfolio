import Footer from '@/components/Footer'
import NavbarToggle from '@/components/navbar-toggle'
import React from 'react'

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <div className="relative z-10 bg-background">
        {children}
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-0">
        <Footer/>
      </div>
      <NavbarToggle />
    </>
  )
}

export default layout