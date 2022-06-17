import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Footer from "./Componant/Footer/Footer";
import Home from "./Componant/Homepage/Home";

import Navbar from "./Componant/Navbar/Navbar";
import Product from "./Componant/Product/Product";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:query" element={<Product />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
