import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Layout from "./layouts/main-layout";
import AuthProvider from "./utils/authprovider";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  );
}

export default App;
