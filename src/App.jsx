import React from "react";
import { Route, Routes } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";
import DarkModeButton from "./components/DarkModeBtn";
import NotFound from "./pages/NotFound";
import ProductPage from "./pages/ProductsPage";
import LogIn from "./pages/LogIn";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route element={<MainLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
        </Route>
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <DarkModeButton />
    </>
  );
}
