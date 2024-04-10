import React from 'react';
import AppRoutes from '../routes/routes';
import Header from '../pages/header';
import Footer from '../pages/footer';

const Layout = () => {
  return (
    <div className="h-full bg-black text-white">
      <Header />
      <div>
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
