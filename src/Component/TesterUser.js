import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Select,
  HStack,
  Stack,
  Text,
  Divider,
  Avatar,
} from "@chakra-ui/react";
import { getCollection, getDocument, searchDoc } from "../Firebase/Database";
import { where } from "firebase/firestore";
import { PageHeader2 } from "../Application/PageHeader/PageHeader2";
import { RegisterTable } from "../Application/Tables/TesterTable/App";

export function SelectModal(props) {
  const [campains, setCampains] = useState([]);
  const [selectedCampain, setSelectedCampain] = useState("");

  useEffect(() => {
    getCollection("Campain").then((data) => {
      setCampains(data);
    });
  }, []);

  return (
    <Stack>
      <FormControl>
        {/* <FormLabel>리포트 할 체험단을 선택하세요.</FormLabel> */}
        <Select
          value={selectedCampain}
          onChange={(e) => setSelectedCampain(e.target.value)}
        >
          <option value="">리포트 할 체험단를 선택하세요.</option>
          {campains.map((campain) => {
            return (
              <option value={campain.doc_id} key={campain.id}>
                {campain.name}
              </option>
            );
          })}
        </Select>
      </FormControl>

      <Button
        colorScheme="blue"
        onClick={() => {
          if (selectedCampain)
            window.location.href = `/admin/dashboard/${selectedCampain}`;
          else alert("리포트 할 체험단를 선택하세요.");
        }}
      >
        분석하기
      </Button>
    </Stack>
  );
}

function TesterUser(props) {
  const [campain, setCampain] = useState({});
  const [userList, setUserList] = useState([]);
  const [cid, setCid] = useState("");
  useEffect(() => {
    if (window.location.pathname.replaceAll("/admin/dashboard", "")) {
      let cid = window.location.pathname.replaceAll("/admin/dashboard/", "");
      setCid(cid);
      // getDocument("Campain", cid).then(async (data) => {
      //   setCampain(data);
      // });
      fetch(process.env.REACT_APP_SERVER_URL + "/campain/get/" + cid)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCampain(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  useEffect(() => {
    console.log(cid);
    fetch(process.env.REACT_APP_SERVER_URL + "/tester/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        conditions: [
          { field: "cid", operator: "==", value: cid },
          // { field: "step", operator: "==", value: 1 },
        ],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let tempUser = [];
        data.forEach((doc) => {
          fetch(process.env.REACT_APP_SERVER_URL + "/auth/get/" + doc.uid)
            .then(async (res) => {
              return await res.json();
            })
            .then(async (user) => {
              console.log(user);
              tempUser.push({ ...user, ...doc });
              if (tempUser.length === data.length) {
                console.log("업데이트!!!");
                setUserList(tempUser);
              }
              // setUserList(tempUser);
              // setUserList(data);
            })
            .catch(async (err) => {
              console.log(err);
            });
        });
        // setUserList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cid]);
  return (
    <Stack alignItems={"start"}>
      <PageHeader2 title="신청자 목록" discription={campain?.name} />
      <RegisterTable
        members={userList}
        title={`총 ${userList?.length}명 / ${
          campain?.targetCnt ? campain?.targetCnt : 0
        }명`}
      />
    </Stack>
  );
}

export default TesterUser;
