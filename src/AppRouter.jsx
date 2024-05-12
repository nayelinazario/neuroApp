import React from "react";
import { Route, Routes } from "react-router-dom";
import { CategoryPage } from "./pages/CategoryPage";
import { HomePage } from "./pages/HomePage";
import { Navbar } from "./components/Navbar";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
    </>
  );
};
