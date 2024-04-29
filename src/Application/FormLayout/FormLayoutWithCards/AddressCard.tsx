import {
  Box,
  BoxProps,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";
import { RangeDatepicker, SingleDatepicker } from "chakra-dayzed-datepicker";
import { useState } from "react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

export const PersonalInfoCard = (props: BoxProps) => {
  const [date, setDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState<Date[]>([
    new Date(),
    new Date(),
  ]);
  return (
    <Box
      w={"full"}
      as="form"
      bg="bg.surface"
      boxShadow="sm"
      borderRadius="lg"
      {...props}
    >
      <Stack
        spacing="5"
        px={{ base: "4", md: "6" }}
        py={{ base: "5", md: "6" }}
      >
        <Stack spacing="6" direction={{ base: "column", md: "row" }}>
          <FormControl id="name">
            <FormLabel>체험단명</FormLabel>
            <Input placeholder="체험단명을 입력해주세요." />
          </FormControl>
        </Stack>
        <Stack spacing="6">
          <FormControl id="street">
            <FormLabel>모집일정</FormLabel>
            <RangeDatepicker
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
              selectedDates={selectedDates}
              onDateChange={setSelectedDates}
            />
          </FormControl>
          <FormControl id="city">
            <FormLabel>발표일</FormLabel>
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
              onDateChange={setDate}
            />
          </FormControl>
          <FormControl id="street">
            <FormLabel>리뷰일정</FormLabel>
            <RangeDatepicker
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
              selectedDates={selectedDates}
              onDateChange={setSelectedDates}
            />
          </FormControl>
        </Stack>
        <FormControl id="city">
          <FormLabel>모집인원</FormLabel>
          <NumberInput defaultValue={0}>
            <NumberInputField placeholder="모집인원를 입력해주세요." />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>

        <FormControl id="country">
          <FormLabel>모집구분</FormLabel>
          <Select placeholder="선택">
            <option value="배송">배송</option>
            <option value="방문">방문</option>
          </Select>
        </FormControl>
      </Stack>
    </Box>
  );
};

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
