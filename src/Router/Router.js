import React from "react";
import { Route, Routes } from "react-router-dom";
import Store from "../pages/store";
import NotFound from "../pages/NotFound";
import ProductDetails from "../pages/productDetails";

export default function Router() {
  return (
    <Routes>
    < Route path="/" element={<Store />} />
    < Route path="/productDetails/:id" element={<ProductDetails />} />
    
     
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}