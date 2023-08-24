import { useState } from "react";
import Home from "./Home/Home";
import About from "./About/About";
import Feature from "./Feature/Feature";
import Roadmap from "./Roadmap/Roadmap";
import Economics from "./Economics/Economics";
import Partner from "./Partners/Partner";
import Comminities from "./Communities/Comminities";
import Footer from "./Footer/Footer";
import ProtectedUserRoute from "./routes/ProtectedRoutes.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Marketplace from "./Marketplace/Marketplace";
import MainHome from "./MainHome";
import BuyCoin from "./buyCoin/BuyCoin";
import MyAssets from "./myAssets/MyAssets";
import SellAssets from "./myAssets/SellAssets";
import Withdraw from "./withdraw/Withdraw";
import MySellAssets from "./myAssets/MySellAssets";
import { useSelector } from "react-redux";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainHome />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/economics" element={<Economics />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/comminities" element={<Comminities />} /> */}
        <Route path="/marketplace" element={<Marketplace />} />

        <Route
          path="/buy-coin"
          element={
            <ProtectedUserRoute>
              <BuyCoin />
            </ProtectedUserRoute>
          }
        />

        <Route
          path="/my-assests"
          element={
            <ProtectedUserRoute>
              <MyAssets />
            </ProtectedUserRoute>
          }
        />
        <Route path="/my-sell-assets" element={<MySellAssets />} />
        <Route path="/sell_assets" element={<SellAssets />} />
        <Route path="/withdraw" element={<Withdraw />} />
      </Routes>

      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
