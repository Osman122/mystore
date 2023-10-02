import React from "react";
import { Route, Routes } from "react-router-dom";
import Store from "../pages/store";
import NotFound from "../pages/NotFound";
import ProductDetails from "../pages/productDetails";
import Cart from "../pages/cart";
import LogIN from "../pages/logIn";
import SignUp from "../pages/signUp";
export default function Router() {
  return (
    <Routes>
    < Route path="/" element={<Store />} />
    < Route path="/productDetails/:id" element={<ProductDetails />} />
    < Route path="/cart" element={<Cart />} />
    < Route path="/LogIn" element={<LogIN />} />
    < Route path="/Signup" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}