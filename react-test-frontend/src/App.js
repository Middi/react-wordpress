import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

export default ({ children }) => (
    <React.Fragment>
        <Header />
        {children}
        <Footer />
    </React.Fragment>
);
