import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Provider } from "react-redux";

import HomePage from "./pages/HomePage";
import StorePage from "./pages/StorePage";
import AboutPage from "./pages/AboutPage";
import OrderPage from "./pages/OrderPage";
import ErrorPage from "./pages/ErrorPage";

import Navbar from "./components/Navbar";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Container>
    </Provider>
  );
}

export default App;
