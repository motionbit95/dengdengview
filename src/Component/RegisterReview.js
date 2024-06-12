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
  Textarea,
  Heading,
  VStack,
  Container,
  Card,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { SelectModal } from "./TesterUser";
import { createDoc, getCollection } from "../Firebase/Database";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { formattedDate } from "../Firebase/Util";
import { Dropzone } from "../Application/FormLayout/FormLayoutWithCards/Dropzone";
import { ListCampainImages } from "../Application/List/ListCampainImages/App";

function RegisterReview(props) {
  const [campains, setCampains] = useState([]);
  const [cid, setSelectedCampain] = useState("");
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");
  const [date, setDate] = useState(new Date());
  const [count, setCount] = useState(0);
  const [url, setUrl] = useState("");
  const [imageList, setImageList] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    getCollection("Campain").then((data) => {
      setCampains(data);
    });
  }, []);

  const handleSubmit = () => {
    if (!cid) {
      alert("체험단를 선택하세요");
      return;
    }
    if (!writer) {
      alert("리뷰 작성자를 입력하세요");
      return;
    }
    if (!date) {
      alert("리뷰 작성 날짜를 입력하세요");
      return;
    }
    if (!title) {
      alert("리뷰 제목을 입력하세요");
      return;
    }
    if (!count) {
      alert("리뷰 내용을 입력하세요");
      return;
    }
    if (!url) {
      alert("리뷰 링크를 입력하세요");
      return;
    }
    if (!imageList.length) {
      alert("이미지를 등록하세요.");
      return;
    }

    createDoc("Review", {
      cid: cid,
      name: writer,
      writerList: [writer],
      date: formattedDate(date),
      commentCnt: count,
      contentList: [content],
      url: url,
      imageList: imageList,
      uid: localStorage.getItem("uid"),
      titleList: [title],
      reviewType: "instagram",
    });

    alert("리뷰를 등록하였습니다.");
  };
  return (
    <Container>
      <Center>
        <Stack spacing={{ base: "6", md: "8" }} minW={"lg"}>
          <Heading size={"sm"}>[수동] 리뷰 등록</Heading>
          <Card p={{ base: "4", md: "6" }}>
            <Stack>
              <FormControl isRequired>
                <FormLabel fontSize={"md"}>체험단 선택</FormLabel>
                <Select
                  value={cid}
                  onChange={(e) => setSelectedCampain(e.target.value)}
                >
                  <option value="">리뷰 등록할 체험단을 선택하세요.</option>
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
                <FormLabel fontSize={"md"}>리뷰 작성자 입력</FormLabel>
                <Input
                  value={writer}
                  placeholder="리뷰 작성자를 입력하세요."
                  onChange={(e) => setWriter(e.target.value)}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel fontSize={"md"}>리뷰 작성 날짜</FormLabel>
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
                <FormLabel fontSize={"md"}>댓글 건수</FormLabel>
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
                <FormLabel fontSize={"md"}>리뷰 제목 입력</FormLabel>
                <Textarea
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel fontSize={"md"}>리뷰 내용 입력</FormLabel>
                <Textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontSize={"md"}>링크 입력</FormLabel>
                <Input value={url} onChange={(e) => setUrl(e.target.value)} />
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontSize={"md"}>리뷰 이미지 등록</FormLabel>
                <ListCampainImages
                  onChange={(images) => setImageList(images)}
                />
              </FormControl>
              <Button w={"full"} onClick={handleSubmit}>
                등록
              </Button>
            </Stack>
          </Card>
        </Stack>
      </Center>
    </Container>
  );
}

export default RegisterReview;

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
