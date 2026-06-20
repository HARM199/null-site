import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Door from "./pages/Door";
import Dashboard from "./pages/Dashboard";
import Category from "./pages/Category";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Door />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/category/:name" element={<Category />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
