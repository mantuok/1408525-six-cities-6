import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

const PageNotFoundScreen = () => {
  return (
    <div className="page">
      <Header />
      <h1 style={{marginLeft: `25px`}}>Unfortunately page not found</h1>
      <Footer />
    </div>
  );
};

export default PageNotFoundScreen;
