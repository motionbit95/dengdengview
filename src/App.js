import React, { useEffect } from "react";
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
import { SignUpForm } from "./Application/Authentication/Login9/App";
import { NavbarWithCenteredSearch } from "./Application/Navbars/NavbarWithCenteredSearch/App";
import Profile from "./Pages/Profile";
import { BannerWithLink } from "./Application/Banners/Banner2";
import { BannerWithSignUp } from "./Application/Banners/Banner3";
import { auth, db } from "./Firebase/Config";
import { getUserInfo } from "./Firebase/Auth";
import { doc, onSnapshot } from "firebase/firestore";

function App() {
  const [userInfo, setUserInfo] = React.useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log("============> ", user);
        getUserInfo(user.uid).then(async (response) => {
          setUserInfo(response.data);
        });

        onSnapshot(doc(db, "User", user.uid), (doc) => {
          setUserInfo(doc.data());
        });
      }
    });
  }, []);
  return (
    <>
      <BannerWithSignUp />
      <NavbarWithCenteredSearch userInfo={userInfo} />
      <BrowserRouter>
        <Routes>
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

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/mypage/*" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
