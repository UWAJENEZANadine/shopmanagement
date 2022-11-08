import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeView from "../view/Home";
import ProductView from "../view/Product";
import PurchaseView from "../view/Purchase";
import SaleView from "../view/Sales";
import UserView from "../view/Users";
import Dashbord from "../view/Dashboard"
import DashRoutes from "./dashRoute";


const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/login" element={<HomeView />} />

      <Route element={<DashRoutes />}>
        <Route path="/product" element={<ProductView />} />
        <Route path="/purchase" element={<PurchaseView />} />
        <Route path="/sale" element={<SaleView />} />
        <Route path="/user" element={<UserView />} />
        <Route path="/dashboard" element={<Dashbord />} />

      </Route>
    </Routes>
  );
};

export default MainRoutes;
