import React, { useEffect, useState } from "react";
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
import Forbidden from "./Pages/Forbidden";
import Ads from "./Pages/Ads";
import Privacy from "./Pages/Privacy";
import Report from "./Pages/Report";
import ViewMoreCampain from "./Pages/ViewMoreCampain";
import { Box, Button, IconButton, Image, Text, VStack } from "@chakra-ui/react";
import { Kakao } from "./Marketing/Footers/FooterWithFourColumnsOnAccent/Logo";

function App() {
  const [userInfo, setUserInfo] = React.useState(null);
  const [tab, setTab] = useState("0");
  const [keyword, setKeyword] = useState("");
  const [item, setItem] = useState("");
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

    if (localStorage.getItem("naver_id")) {
      getUserInfo(localStorage.getItem("naver_id")).then(async (response) => {
        setUserInfo(response.data);
      });

      onSnapshot(doc(db, "User", localStorage.getItem("naver_id")), (doc) => {
        setUserInfo(doc.data());
      });
    }

    if (window.location.pathname.includes("/admin/dashboard")) {
      if (
        !window.location.pathname.replace("/admin/dashboard", "") &&
        !localStorage.getItem("dang_admin_id")
      ) {
        window.location.href = "/admin/login";
      }
    }
  }, []);

  useEffect(() => {
    if (tab) {
      setTab(localStorage.getItem("top_menu") || tab);
    }
  }, [tab]);

  return (
    <>
      {window.location.pathname.includes("/admin") ? (
        <BrowserRouter>
          <Routes>
            <Route
              path="/admin"
              element={
                localStorage.getItem("dang_admin_id") ? (
                  <AdminDashboard />
                ) : (
                  <AdminLogin />
                )
              }
            />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard/*" element={<AdminDashboard />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <>
          {/* <BannerWithSignUp /> */}
          {!window.location.pathname.includes("report") &&
            !window.location.pathname.includes("login") &&
            !window.location.pathname.includes("signup") && (
              <Box
                position={"fixed"}
                bottom={{ base: "4", md: "10" }}
                right={{ base: "4", md: "10" }}
                justifyContent={"center"}
                alignItems={"center"}
                display={"flex"}
                zIndex={9999}
                bgColor={"yellow.400"}
                aspectRatio={1 / 1}
                boxSize={{ base: "16", md: "20" }}
                boxShadow={"md"}
                borderRadius={"full"}
                as="a"
                target="_blank" // 이건 새 페이지로 열기 기능
                href="https://pf.kakao.com/_xbxnxnyxj"
                _hover={{ transform: "scale(1.1)", transition: "all 0.2s" }}
                p={2}
              >
                <VStack spacing={0}>
                  <Kakao />
                  <Text fontSize={"xs"} fontWeight={"bold"}>
                    1:1 문의
                  </Text>
                </VStack>
              </Box>
            )}

          {!window.location.pathname.includes("report") &&
            !window.location.pathname.includes("login") &&
            !window.location.pathname.includes("signup") && (
              <NavbarWithCenteredSearch
                handleSearch={(e) => setKeyword(e.target.value)}
                userInfo={userInfo}
                setTab={setTab}
                tab={localStorage.getItem("top_menu") || tab}
                setItem={setItem}
              />
            )}
          <BrowserRouter>
            <Routes>
              {/* <Route path="/banner" element={<Banner />} /> */}
              <Route path="/*" element={<Forbidden />} />
              <Route path="/card" element={<Cards />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/form" element={<Form />} />
              <Route path="/list" element={<List />} />
              <Route path="/page" element={<Page />} />
              <Route path="/showcase" element={<ShowCase />} />
              <Route path="/checkout" element={<CheckOutPages />} />
              <Route path="/filter" element={<Filter />} />
              <Route path="/cart" element={<Cart />} />

              <Route path="/" element={<Home tab={tab} keyword={keyword} />} />
              <Route path="/campain/*" element={<Detail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUpForm />} />
              <Route path="/mypage/*" element={<Profile item={item} />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/ads" element={<Ads />} />
              <Route
                path="/view"
                element={<ViewMoreCampain tab={tab} keyword={keyword} />}
              />

              <Route path="/report/*" element={<Report />} />
              <Route path="/report/detail/*" element={<AdminDashboard />} />
            </Routes>
          </BrowserRouter>
          {!window.location.pathname.includes("/report/detail") &&
            !window.location.pathname.includes("login") &&
            !window.location.pathname.includes("signup") && (
              <FooterWithFourColumnsOnAccent />
            )}
        </>
      )}
    </>
  );
}

export default App;
