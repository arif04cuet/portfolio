import React from 'react'
import Header from './header'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    )
}

export default Layout