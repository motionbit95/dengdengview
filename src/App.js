import React, { useEffect } from "react";
import "./App.css";
import "./Component/Calendar.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Cards from "./Pages/Card";
import Chat from "./Pages/Chat";
import Form from "./Pages/Form";
import List from "./Pages/List";
import Page from "./Pages/Page";
import ShowCase from "./Pages/ShowCase";
import { CheckOutPages } from "./E-Commerce/CheckOutPages/App";
import Filter from "./Pages/Filter";
import Cart from "./Pages/Cart";
import { SignUpForm } from "./Application/Authentication/Login9/App";
import { NavbarWithCenteredSearch } from "./Application/Navbars/NavbarWithCenteredSearch/App";
import Profile from "./Pages/Profile";
import { BannerWithSignUp } from "./Application/Banners/Banner3";
import { auth, db } from "./Firebase/Config";
import { getUserInfo } from "./Firebase/Auth";
import { doc, onSnapshot } from "firebase/firestore";
import { FooterWithFourColumnsOnAccent } from "./Marketing/Footers/FooterWithFourColumnsOnAccent/App";
import Terms from "./Pages/Terms";
import AdminLogin from "./Pages/AdminLogin";
import AdminDashboard from "./Pages/AdminDashboard";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";

function App() {
  const [userInfo, setUserInfo] = React.useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
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
      {window.location.pathname.includes("/admin") ? (
        <BrowserRouter>
          <Routes>
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <>
          <BannerWithSignUp />
          <NavbarWithCenteredSearch userInfo={userInfo} />
          <BrowserRouter>
            <Routes>
              {/* <Route path="/banner" element={<Banner />} /> */}
              <Route path="/card" element={<Cards />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/form" element={<Form />} />
              <Route path="/list" element={<List />} />
              <Route path="/page" element={<Page />} />
              <Route path="/showcase" element={<ShowCase />} />
              <Route path="/checkout" element={<CheckOutPages />} />
              <Route path="/filter" element={<Filter />} />
              <Route path="/cart" element={<Cart />} />

              <Route path="/" element={<Home />} />
              <Route path="/campain/*" element={<Detail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUpForm />} />
              <Route path="/mypage/*" element={<Profile />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </BrowserRouter>
          <FooterWithFourColumnsOnAccent />
        </>
      )}
    </>
  );
}

export default App;