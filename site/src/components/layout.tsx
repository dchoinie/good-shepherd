import React, { ReactNode } from 'react'
import Footer from './footer'
import Header from './header'
import PageHeader from './pageHeader';

interface Props {
  children: JSX.Element | ReactNode;
  title?: string;
  subTitle?: string;
  heroLayout?: boolean;
}

const Layout = ({ children, title, subTitle, heroLayout }: Props): JSX.Element => {
  return (
    <>
        <Header heroHeader={heroLayout} />
        {title ? <PageHeader title={title} subTitle={subTitle} /> : null}
        {children}
        <Footer />
    </>
  )
}

export default Layout