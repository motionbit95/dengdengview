import React, { useEffect, useState } from "react";
import {
  Box,
  HStack,
  Heading,
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

function Campain({ ...props }) {
  const [page, setPage] = useState(1);
  const [campains, setCampains] = useState([]);
  const [campains1, setCampains1] = useState([]);
  const [campains2, setCampains2] = useState([]);
  const [lastVisible, setLastVisible] = useState();
  const [uid, setUid] = useState(null);

  useEffect(() => {
    console.log("최종적으로 여기서 바뀜", props.keyword);
  }, [props.keyword]);

  useEffect(() => {
    console.log("최종적으로 여기서 바뀜", props.tab);
    if (props.tab) {
      // let property = "createdAt";
      // if (props.tab === 1) {
      //   property = "views";
      // } else if (props.tab === 2) {
      //   property = "endDate";
      // }

      searchDoc("Campain", orderBy("openDate", "desc")).then((data) => {
        let list = [];
        data.forEach((doc) => {
          if (!doc.name.includes(props.keyword)) {
            return;
          }
          console.log(doc);
          // doc.data() is never undefined for query doc snapshots
          if (props.tab === "0") {
            list.push(doc);

            setCampains(list);
          } else if (props.tab === "1") {
            if (doc.mozip.includes("3")) {
              list.push(doc);

              setCampains(list);
            }
          } else if (props.tab === "2") {
            if (doc.mozip.includes("2")) {
              list.push(doc);

              setCampains(list);
            }
          }
        });
      });
    }
  }, [props.tab, props.keyword]);

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

  useEffect(() => {
    if (window.location.pathname === "/") {
      console.log("tab", props.tab);
      searchDoc("Campain", orderBy("openDate", "desc")).then((data) => {
        setCampains(data);
      });
    } else if (window.location.pathname === "/mypage") {
      let step = [];
      let step1 = [];
      let step2 = [];
      searchDoc("Tester", where("uid", "==", uid)).then(async (data) => {
        data.forEach((doc) => {
          getDocument("Campain", doc.cid).then(async (data) => {
            if (doc.step === 0) {
              step.push({
                ...data,
                uid: doc.uid,
                cid: doc.cid,
                testerId: doc.doc_id,
                step: doc.step,
              });
              setCampains(step);
            } else if (doc.step === 1 || doc.step === 2) {
              step1.push({
                ...data,
                uid: doc.uid,
                cid: doc.cid,
                testerId: doc.doc_id,
                step: doc.step,
              });
              setCampains1(step1);
            } else if (doc.step === 3) {
              step2.push({
                ...data,
                uid: doc.uid,
                cid: doc.cid,
                testerId: doc.doc_id,
                step: doc.step,
              });
              setCampains2(step2);
            }
          });
        });
      });

      console.log("uid", step, step1, step2);
    }
  }, [uid]);
  return (
    <Stack
      // flex={"1"}
      w={"100%"}
      minH={"100vh"}
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
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight={"bold"}
                color={
                  props.description === "신청한 체험단" ? "red.400" : "black"
                }
                onClick={() => props.setItem("신청한 체험단")}
                cursor={"pointer"}
              >
                신청한 체험단
              </Text>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight={"bold"}
                color={
                  props.description === "선정된 체험단" ? "red.400" : "black"
                }
                onClick={() => props.setItem("선정된 체험단")}
                cursor={"pointer"}
              >
                선정된 체험단
              </Text>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight={"bold"}
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
                fontSize={"5xl"}
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
                fontSize={"5xl"}
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
                fontSize={"5xl"}
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
        <Stack divider={<StackDivider />}>
          {props.description === "신청한 체험단" &&
            campains.map((campain) => (
              <Product key={campain.doc_id} campain={campain} />
            ))}
          {props.description === "선정된 체험단" &&
            campains1.map((campain) => (
              <Product key={campain.doc_id} campain={campain} />
            ))}
          {props.description === "리뷰한 체험단" &&
            campains2.map((campain) => (
              <Product key={campain.doc_id} campain={campain} />
            ))}
        </Stack>
      ) : (
        <GridQuiteMinimalistic campains={campains} />
      )}
    </Stack>
  );
}

export default Campain;
