import {
  Box,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Text,
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
import { formattedDate } from "../../../Firebase/Util";

export const PersonalInfoCard = ({ ...props }) => {
  const { campain } = props;
  const [date, setDate] = useState(
    campain?.openDate ? new Date(campain?.openDate) : new Date()
  );
  const [selectedDates, setSelectedDates] = useState<Date[]>([
    campain?.startDate ? new Date(campain?.startDate) : new Date(),
    campain?.endDate ? new Date(campain?.endDate) : new Date(),
  ]);

  const [reviewDates, setReviewDates] = useState<Date[]>([
    campain?.reviewStart ? new Date(campain?.reviewStart) : new Date(),
    campain?.reviewEnd ? new Date(campain?.reviewEnd) : new Date(),
  ]);

  return (
    <Box
      w={"full"}
      as="form"
      bg="bg.surface"
      boxShadow="sm"
      borderRadius="lg"
      // {...props}
    >
      <Stack
        spacing="5"
        px={{ base: "4", md: "6" }}
        py={{ base: "5", md: "6" }}
      >
        <FormControl id="name" isRequired>
          <FormLabel>업체명</FormLabel>
          <Input
            name="company"
            onChange={(e) => props.onChange({ company: e.target.value })}
            placeholder="업체명을 입력해주세요."
            defaultValue={campain?.company}
          />
        </FormControl>
        <FormControl id="name" isRequired>
          <FormLabel>모집차수</FormLabel>
          <Select>
            <option value="1">1차</option>
          </Select>
        </FormControl>
        <FormControl id="mozip" isRequired>
          <FormLabel>모집부분</FormLabel>
          <CheckboxGroup
            defaultValue={
              campain?.mozip ? campain?.mozip : ["0", "1", "2", "3"]
            }
            onChange={(e) => props.onChange({ mozip: e })}
          >
            <SimpleGrid columns={2} spacing={2}>
              <Checkbox value={"0"}>네이버블로그 체험단</Checkbox>
              <Checkbox value={"1"}>인스타그램 체험단</Checkbox>
              <Checkbox value={"2"}>구매평 체험단</Checkbox>
              <Checkbox value={"3"}>인플루언서 체험단</Checkbox>
            </SimpleGrid>
          </CheckboxGroup>
        </FormControl>
        <Stack spacing="6" direction={{ base: "column", md: "row" }}>
          <FormControl id="name" isRequired>
            <FormLabel>체험단명</FormLabel>
            <Input
              name="name"
              onChange={(e) => props.onChange({ name: e.target.value })}
              placeholder="체험단명을 입력해주세요."
              defaultValue={campain?.name}
            />
          </FormControl>
        </Stack>
        <Stack spacing="6">
          <FormControl id="street" isRequired>
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
              onDateChange={(dates) => {
                setSelectedDates(dates);
                props.onChange({
                  startDate: formattedDate(dates[0]),
                  endDate: formattedDate(dates[1]),
                });
              }}
            />
          </FormControl>
          <FormControl id="city" isRequired>
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
              onDateChange={(date) => {
                setDate(date);
                props.onChange({ openDate: formattedDate(date) });
              }}
            />
          </FormControl>
          {/* <FormControl id="street" isRequired>
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
              selectedDates={reviewDates}
              onDateChange={(dates) => {
                setReviewDates(dates);
                props.onChange({
                  reviewStart: formattedDate(dates[0]),
                  reviewEnd: formattedDate(dates[1]),
                });
              }}
            />
          </FormControl> */}
        </Stack>
        <FormControl id="city" isRequired>
          <FormLabel>모집인원</FormLabel>
          <NumberInput defaultValue={campain?.targetCnt}>
            <NumberInputField
              name="targetCnt"
              onChange={(e) => props.onChange({ targetCnt: e.target.value })}
              placeholder="모집인원를 입력해주세요."
            />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>

        <FormControl id="country" isRequired>
          <FormLabel>모집구분</FormLabel>
          <Select
            name="type"
            onChange={(e) => props.onChange({ type: e.target.value })}
            placeholder="선택"
            defaultValue={campain?.type}
          >
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
