import React from "react";
import { Route, Routes } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";
import DarkModeButton from "./components/DarkModeBtn";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<MainLayout />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <DarkModeButton />
    </>
  );
}
