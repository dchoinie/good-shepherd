import React, { ReactNode } from 'react'
import Footer from './footer'
import Header from './header'

const Layout = ({ children }: any): JSX.Element => {
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>
  )
}

export default Layout