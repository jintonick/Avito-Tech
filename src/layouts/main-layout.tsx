import React from "react";
import AppRoutes from "../routes/routes";
import Header from "../pages/header";
import Footer from "../pages/footer";
import { SearchProvider } from "../components/search/search-context";

const Layout = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-black text-white font-graphik">
      <SearchProvider>
        <Header />
        <div className="flex-grow">
          <AppRoutes />
        </div>
        <Footer />
      </SearchProvider>
    </div>
  );
};

export default Layout;
