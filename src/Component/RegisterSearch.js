import {
  FormControl,
  FormLabel,
  Select,
  Stack,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  HStack,
  Image,
  Center,
  Input,
  Button,
  Heading,
  Card,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { SelectModal } from "./TesterUser";
import { createDoc } from "../Firebase/Database";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { formattedDate } from "../Firebase/Util";
import { Dropzone } from "../Application/FormLayout/FormLayoutWithCards/Dropzone";

function RegisterSearch(props) {
  const [campains, setCampains] = useState([]);
  const [selectedCampain, setSelectedCampain] = useState("");
  const [date, setDate] = useState(new Date());
  const [count, setCount] = useState(0);
  const [url, setUrl] = useState("");
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    fetch(process.env.REACT_APP_SERVER_URL + "/campain/list")
      .then((res) => res.json())
      .then((data) => {
        setCampains(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = () => {
    if (!selectedCampain) {
      alert("체험단를 선택하세요");
      return;
    }
    if (!keyword) {
      alert("키워드를 입력하세요");
      return;
    }
    if (!date) {
      alert("노출 날짜를 입력하세요");
      return;
    }
    if (!count) {
      alert("노출 건수를 입력하세요");
      return;
    }
    if (!url) {
      alert("이미지를 등록하세요.");
      return;
    }

    console.log(selectedCampain, keyword, date, count, url);

    createDoc("Search", {
      campain: selectedCampain,
      keyword: keyword,
      date: formattedDate(date),
      count: count,
      url: url,
    });

    alert("검색점유율을 등록하였습니다.");
  };
  return (
    <Center minH={"100%"}>
      <Stack>
        <Heading size={"sm"}>[수동] 검색점유율 등록</Heading>
        <Card p={{ base: "6", md: "8" }}>
          <Stack>
            <FormControl isRequired>
              <FormLabel fontSize={"md"}>체험단 선택</FormLabel>
              <Select
                value={selectedCampain}
                onChange={(e) => setSelectedCampain(e.target.value)}
              >
                <option value="">
                  검색점유율을 등록할 체험단을 선택하세요.
                </option>
                {campains.map((campain) => {
                  return (
                    <option value={campain.doc_id} key={campain.id}>
                      {campain.name}
                    </option>
                  );
                })}
              </Select>{" "}
            </FormControl>
            <FormControl isRequired>
              <FormLabel fontSize={"md"}>키워드 입력</FormLabel>
              <Input
                value={keyword}
                placeholder="키워드를 입력하세요."
                onChange={(e) => setKeyword(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel fontSize={"md"}>노출 날짜</FormLabel>
              <SingleDatepicker
                name="date-input"
                configs={{
                  dateFormat: "yyyy/MM/dd",
                  dayNames: ["일", "월", "화", "수", "목", "금", "토"], // length of 7
                  monthNames:
                    "1월,2월,3월,4월,5월,6월,7월,8월,9월,10월,11월,12월".split(
                      ","
                    ), // length of 12
                  firstDayOfWeek: 0, // default is 0, the dayNames[0], which is Sunday if you don't specify your own dayNames,
                }}
                propsConfigs={propsConfigs}
                date={date}
                onDateChange={(date) => {
                  setDate(date);
                }}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel fontSize={"md"}>노출 건수</FormLabel>
              <NumberInput
                defaultValue={count}
                onChange={(value) => setCount(value)}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontSize={"md"}>캡쳐 이미지 등록</FormLabel>
              <HStack>
                <Image
                  src={url}
                  maxW={"200px"}
                  maxH={"300px"}
                  objectFit={"contain"}
                />
                <Dropzone
                  width="full"
                  setUrl={(data) => {
                    setUrl(data);
                  }}
                />
              </HStack>
            </FormControl>
            <Button onClick={handleSubmit}>등록</Button>
          </Stack>
        </Card>
      </Stack>
    </Center>
  );
}

export default RegisterSearch;

const propsConfigs = {
  dateNavBtnProps: {
    colorScheme: "black",
    variant: "ghost",
  },
  dayOfMonthBtnProps: {
    defaultBtnProps: {
      color: "black",
      _hover: { bg: "gray.300" },
    },
    isInRangeBtnProps: {
      bgColor: "gray.400",
      color: "white",
    },
    selectedBtnProps: {
      background: "gray.500",
      color: "white",
    },
  },
  inputProps: {
    size: "sm",
  },
  calendarPanelProps: {},
  weekdayLabelProps: {
    fontWeight: "normal",
  },
  dateHeadingProps: {
    fontWeight: "semibold",
    fontSize: "md",
    width: "100%",
  },
};
