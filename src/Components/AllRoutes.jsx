import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import PuppyPage from "./PuppyPage";
import SearchPage from "./SearchPage";

export const AllRoutes = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/puppy/:e" element={<PuppyPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    </>
  );
};
