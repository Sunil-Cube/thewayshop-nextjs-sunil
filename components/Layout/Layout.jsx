
//rsf - functional components


import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function Layout({ children }) {
    return (
        <>
        <Header/>
        {children}
        <Footer/>
        <a href="#" id="back-to-top" title="Back to top" style={{display: "none"}}>&uarr;</a>
        </>
        
    );
}

export default Layout;