import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Banner from "./Pages/Banner";
import Cards from "./Pages/Card";
import Chat from "./Pages/Chat";
import Form from "./Pages/Form";
import List from "./Pages/List";
import Page from "./Pages/Page";
import ShowCase from "./Pages/ShowCase";
import { CheckOutPages } from "./E-Commerce/CheckOutPages/App";
import Filter from "./Pages/Filter";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/card" element={<Cards />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/form" element={<Form />} />
        <Route path="/list" element={<List />} />
        <Route path="/page" element={<Page />} />
        <Route path="/showcase" element={<ShowCase />} />
        <Route path="/checkout" element={<CheckOutPages />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
