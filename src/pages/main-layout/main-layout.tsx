import React from 'react';
import AppRoutes from '../../routes/routes';

const Layout = () => {
  return (
    <div>
      {/* Здесь могут быть шапка, боковое меню и т.д. */}
      <main>
        <AppRoutes />
      </main>
      {/* Здесь может быть подвал */}
    </div>
  );
};

export default Layout;
