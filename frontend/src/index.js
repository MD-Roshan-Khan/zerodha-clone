import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom'
import HomePage from './landing_page/Home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import PricingPage from './landing_page/pricing/PricingPage';
import Product from './landing_page/product/Products';
import SignUp from './landing_page/signup/SignUp';
import SupportPage from './landing_page/support/SupportPage';
import NavBar from './landing_page/NavBar';
import Footer from './landing_page/Footer';
import NotFound from "./landing_page/NotFound";

const root = ReactDOM.createRoot(document.getElementById('root'));
function MainLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

root.render(
  <BrowserRouter>
    <Routes>

      {/* Routes WITH Navbar + Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Route>

      {/* Route WITHOUT Navbar + Footer */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  </BrowserRouter>
);

