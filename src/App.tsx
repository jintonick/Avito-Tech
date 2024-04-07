import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './pages/main-layout/main-layout';
import AuthProvider from './utils/authprovider';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
