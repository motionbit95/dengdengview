import React, { useEffect, useState } from "react";
import {
  Center,
  Heading,
  VStack,
  Text,
  Stack,
  Wrap,
  Tag,
  HStack,
  Box,
} from "@chakra-ui/react";
import { PageHeader2 } from "../Application/PageHeader/PageHeader2";
import { getDocument } from "../Firebase/Database";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2"; // 원하는 차트 종류를 가져오세요.

ChartJS.register(ArcElement, Tooltip, Legend);

function Keyword(props) {
  const [keywords, setKeywords] = useState([]);
  const [result, setResult] = useState([]);
  const [rank, setRank] = useState([]);
  useEffect(() => {
    console.log(window.location.pathname.split("/").pop());
    let cid = window.location.pathname.split("/").pop();

    getDocument("Campain", cid).then((data) => {
      let keywordList = [];
      data.keywords.forEach((keyword) => {
        keywordList.push(keyword);
        setKeywords(keywordList);
      });
    });

    // fetch("http://localhost:3001/keywordstool?hintKeywords=" + "프로바이오틱스")
    //   .then(async (response) => {
    //     console.log(response);
    //   })
    //   .then(async (data) => {
    //     console.log(data);
    //   })
    //   .catch(async (error) => {
    //     console.log(error);
    //   });
  }, []);

  useEffect(() => {
    // keywords.forEach((keyword) => {
    // console.log("keywords", keywords, keywords.join(","));
    fetch(
      "http://localhost:3001/keywordstool?hintKeywords=" + keywords.join(",")
    )
      .then(async (response) => {
        return response.json();
      })
      .then(async (data) => {
        let originArray = JSON.parse(data.data).keywordList;

        let newArray = originArray.filter((keyword) => {
          return keywords.includes(keyword.relKeyword);
        });
        // let newArray = originArray.slice(0, 20);
        // console.log(newArray);
        newArray.sort((a, b) => b.monthlyMobileQcCnt - a.monthlyMobileQcCnt);
        setRank(newArray);
        setResult(originArray);
      });
    // });
  }, [keywords]);

  const option = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        // position: "right",
      },
      // title: {
      //   display: true,
      //   text: "Chart.js Pie Chart",
      // },
    },
  };

  const data = {
    labels: result.map((keyword) => {
      if (keywords.includes(keyword.relKeyword)) {
        return keyword.relKeyword;
      }
    }),
    datasets: [
      {
        label: "# of Votes",
        data: result.map((keyword) => {
          if (keywords.includes(keyword.relKeyword)) {
            return keyword.monthlyMobileQcCnt;
          }
        }),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Stack>
      <PageHeader2 title="유입키워드" />
      <Stack mx={{ base: "4", md: "8" }}>
        {/* <Wrap>
          {keywords.map(
            (keyword, index) =>
              index < 20 && (
                <Tag
                  key={keyword}
                  rounded="full"
                  size="lg"
                  variant="solid"
                  colorScheme="cyan"
                >
                  {keyword}
                </Tag>
              )
          )}
        </Wrap> */}
        <HStack w={"full"} alignItems={"flex-start"} spacing={10}>
          <Stack
            w={"50%"}
            h={"400px"}
            borderTop={"3px solid"}
            borderColor={"gray.800"}
            p={4}
            spacing={4}
          >
            <Text fontWeight={"bold"} fontSize={"xl"}>
              키워드 그래프
            </Text>
            <Wrap>
              {keywords.map((keyword, index) => (
                <Tag
                  key={keyword}
                  rounded="full"
                  size="lg"
                  variant="solid"
                  colorScheme="cyan"
                >
                  {keyword}
                </Tag>
              ))}
            </Wrap>
            <Pie data={data} options={option} />
          </Stack>
          <Stack w={"50%"}>
            <Stack borderTop={"3px solid"} borderColor={"gray.800"} p={4}>
              <Text fontWeight={"bold"} fontSize={"xl"}>
                키워드 순위
              </Text>
              <Stack>
                {rank.map((keyword, index) => (
                  <Text>
                    {index + 1}. {keyword.relKeyword}
                  </Text>
                ))}
              </Stack>
            </Stack>
            <Stack borderTop={"3px solid"} borderColor={"gray.800"} p={4}>
              <Text fontWeight={"bold"} fontSize={"xl"}>
                기타 유입키워드
              </Text>
              <Wrap>
                {result.map(
                  (keyword, index) =>
                    index < 30 && (
                      <Tag
                        key={keyword.relKeyword}
                        rounded="full"
                        size="lg"
                        variant="outline"
                      >
                        {keyword.relKeyword}
                      </Tag>
                    )
                )}
              </Wrap>
            </Stack>
          </Stack>
        </HStack>
      </Stack>
    </Stack>
  );
}

export default Keyword;
