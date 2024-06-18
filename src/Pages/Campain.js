import React, { useEffect, useState } from "react";
import {
  Box,
  HStack,
  Heading,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { GridQuiteMinimalistic } from "../E-Commerce/ProductGrid/GridQuiteMinimalistic/App";
import { PageHeader1 } from "../Application/PageHeader/PageHeader1";
import {
  fetchDocuments,
  getCollection,
  getDoc,
  getDocument,
  multiQuery,
  searchDoc,
} from "../Firebase/Database";
import { orderBy, where } from "firebase/firestore";
import { auth } from "../Firebase/Config";
import { Product } from "../E-Commerce/ProductGrid/GridQuiteMinimalistic/Product";
import { fi } from "@faker-js/faker";

function Campain({ ...props }) {
  const [page, setPage] = useState(1);
  const [campains, setCampains] = useState([]);
  const [campains1, setCampains1] = useState([]);
  const [campains2, setCampains2] = useState([]);
  const [lastVisible, setLastVisible] = useState();
  const [uid, setUid] = useState(null);

  useEffect(() => {
    console.log(
      "최종적으로 여기서 바뀜",
      props.tab,
      props.keyword,
      props.ordertype
    );

    let order = "createdAt";
    if (props.ordertype && props.ordertype === 0) {
      order = "createdAt";
    } else if (props.ordertype && props.ordertype === 1) {
      order = "totalviews";
    } else if (props.ordertype && props.ordertype === 2) {
      order = "endDate";
    } else if (props.ordertype && props.ordertype === 3) {
      order = "createdAt";
    }

    if (window.location.pathname === "/") {
      fetch(process.env.REACT_APP_SERVER_URL + "/campain/list/" + order)
        .then((res) => {
          console.log("res", res);
          return res.json();
        })
        .then((data) => {
          let tempList = data;
          if (props.tab === "0") {
            tempList = data.filter((element) => element.mozip.includes("0"));
          } else if (props.tab === "1") {
            tempList = data.filter((element) => element.mozip.includes("1"));
          } else if (props.tab === "2") {
            tempList = data.filter((element) => element.mozip.includes("2"));
          } else if (props.tab === "3") {
            tempList = data.filter((element) => element.mozip.includes("3"));
          }
          console.log("tempList", tempList);
          setCampains(
            tempList.filter((element) => element.name.includes(props.keyword))
          );
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (window.location.pathname === "/mypage") {
      console.log("uid", uid);
      fetch(process.env.REACT_APP_SERVER_URL + "/tester/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          conditions: [{ field: "uid", operator: "==", value: uid }],
        }),
      })
        .then((res) => {
          console.log("res", res);
          return res.json();
        })
        .then((data) => {
          console.log("data", data);
          let step = [];
          let step1 = [];
          let step2 = [];
          data.forEach((element) => {
            fetch(
              process.env.REACT_APP_SERVER_URL + "/campain/get/" + element.cid
            )
              .then((res) => {
                return res.json();
              })
              .then((data) => {
                if (element.step === -1 || element.step === 0) {
                  step.push({
                    ...data,
                    step: element.step,
                    id: element.cid,
                    tid: element.id,
                  });
                  setCampains(step);
                }
                if (element.step === 1) {
                  step1.push({
                    ...data,
                    step: element.step,
                    id: element.cid,
                    tid: element.id,
                  });
                  setCampains1(step1);
                }
                if (element.step >= 2) {
                  step2.push({
                    ...data,
                    step: element.step,
                    id: element.cid,
                    tid: element.id,
                  });
                  setCampains2(step2);
                }
              })
              .catch((error) => {
                console.log(error);
              });
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [props.tab, props.keyword, props.ordertype, uid]);

  useEffect(() => {
    let uid;
    // 유저 정보를 가지고 옵니다.
    if (localStorage.getItem("naver_id")) {
      // 네이버 로그인인 경우
      setUid(localStorage.getItem("naver_id"));
    } else {
      // 간편 회원가입의 경우
      // uid = auth.currentUser?.uid;
      auth.onAuthStateChanged((user) => {
        if (user) {
          setUid(user.uid);
        }
      });
    }
  }, []);

  return (
    <Stack
      // flex={"1"}
      w={"100%"}
      // minH={"100vh"}
      spacing={"8"}
      pb={{ base: "12", md: "24" }}
      {...props}
    >
      {props.title && (
        <Stack p={{ base: "4", md: "6" }} spacing={{ base: "4", md: "6" }}>
          <Heading size={"md"}>{props.title}</Heading>
          {/* <PageHeader1 title={props.title} description={""} /> */}
          <Stack spacing={0}>
            <HStack w={"100%"} justifyContent={"space-between"}>
              <Text
                fontSize={{ base: "xs", sm: "lg", md: "xl" }}
                fontWeight={"bold"}
                whiteSpace={"nowrap"}
                color={
                  props.description === "신청한 체험단" ? "red.400" : "black"
                }
                onClick={() => props.setItem("신청한 체험단")}
                cursor={"pointer"}
              >
                신청한 체험단
              </Text>
              <Text
                fontSize={{ base: "xs", sm: "lg", md: "xl" }}
                fontWeight={"bold"}
                whiteSpace={"nowrap"}
                color={
                  props.description === "선정된 체험단" ? "red.400" : "black"
                }
                onClick={() => props.setItem("선정된 체험단")}
                cursor={"pointer"}
              >
                선정된 체험단
              </Text>
              <Text
                fontSize={{ base: "xs", sm: "lg", md: "xl" }}
                fontWeight={"bold"}
                whiteSpace={"nowrap"}
                color={
                  props.description === "리뷰한 체험단" ? "red.400" : "black"
                }
                onClick={() => props.setItem("리뷰한 체험단")}
                cursor={"pointer"}
              >
                리뷰한 체험단
              </Text>
            </HStack>
            <HStack spacing={"4"} w={"100%"} justifyContent={"space-between"}>
              <Text
                fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}
                fontWeight={"bold"}
                color={
                  props.description === "신청한 체험단" ? "red.400" : "black"
                }
                onClick={() => props.setItem("신청한 체험단")}
                cursor={"pointer"}
              >
                {String(campains.length).padStart(2, "0")}
              </Text>
              <Box h={"1px"} bg={"gray.300"} w={"full"}></Box>
              <Text
                fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}
                fontWeight={"bold"}
                color={
                  props.description === "선정된 체험단" ? "red.400" : "black"
                }
                onClick={() => props.setItem("선정된 체험단")}
                cursor={"pointer"}
              >
                {String(campains1.length).padStart(2, "0")}
              </Text>
              <Box h={"1px"} bg={"gray.300"} w={"full"}></Box>
              <Text
                fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}
                fontWeight={"bold"}
                color={
                  props.description === "리뷰한 체험단" ? "red.400" : "black"
                }
                onClick={() => props.setItem("리뷰한 체험단")}
                cursor={"pointer"}
              >
                {String(campains2.length).padStart(2, "0")}
              </Text>
            </HStack>
          </Stack>
        </Stack>
      )}
      {window.location.pathname === "/mypage" ? (
        <SimpleGrid
          columns={{ base: 2, md: 3 }}
          spacing={{ base: "4", md: "6" }}
        >
          {props.description === "신청한 체험단" &&
            campains.map((campain, index) => (
              <Product key={index} campain={campain} />
            ))}
          {props.description === "선정된 체험단" &&
            campains1.map((campain, index) => (
              <Product key={index} campain={campain} />
            ))}
          {props.description === "리뷰한 체험단" &&
            campains2.map((campain, index) => (
              <Product key={index} campain={campain} />
            ))}
        </SimpleGrid>
      ) : (
        <>
          {campains?.length > 0 && (
            <GridQuiteMinimalistic
              campains={campains}
              ordertype={props.ordertype}
            />
          )}
        </>
      )}
    </Stack>
  );
}

export default Campain;
