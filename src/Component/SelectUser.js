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

function SelectUser(props) {
  const [campain, setCampain] = useState({});
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    if (window.location.pathname.replaceAll("/admin/dashboard", "")) {
      let cid = window.location.pathname.replaceAll("/admin/dashboard/", "");
      console.log(cid);
      getDocument("Campain", cid).then(async (data) => {
        setCampain(data);
      });
    }
  }, []);

  useEffect(() => {
    if (campain?.doc_id) {
      let userList = [];
      console.log(campain?.doc_id);
      searchDoc("Tester", where("cid", "==", campain?.doc_id)).then((data) => {
        data.forEach((doc) => {
          if (doc.step > 0) {
            getDocument("User", doc.uid).then((user) => {
              userList.push({ ...user, ...doc });
              setUserList(userList);
            });
          }
        });
      });
    }
  }, [campain]);
  return (
    <Stack alignItems={"start"}>
      <PageHeader2 title="선정자 목록" discription={campain?.name} />
      <RegisterTable
        members={userList}
        title={`총 ${userList.length}명 / ${
          campain?.targetCnt ? campain?.targetCnt : 0
        }명`}
      />
    </Stack>
  );
}

export default SelectUser;
