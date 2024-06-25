import { Box, Container, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";
// import { campains } from "./_data";
import { useEffect, useState } from "react";
import Campain from "../../../Component/MCampain";
import { calculateDday } from "./_data";

export const GridQuiteMinimalistic = (props: any) => {
  const { campains, ordertype } = props;

  const [campainList, setCampainList] = useState([]);
  // const [totalList, setTotalList] = useState([]);
  // const [newList, setNewList] = useState([]);
  // const [bestList, setBestList] = useState([]);
  // const [lastList, setLastList] = useState([]);
  useEffect(() => {
    console.log("props", campains, ordertype);

    let tempList = campains;

    if (ordertype === 2 || ordertype === 3) {
      tempList = campains.filter((element: any) => {
        return element.type !== "이벤트";
      });
    }

    tempList = tempList.filter((element: any) => {
      return calculateDday(element.endDate) > 0;
    });

    if (!ordertype || ordertype === 0) {
      // setCampainList(tempList);
    } else if (ordertype === 1) {
      tempList.sort((a: any, b: any) => {
        return b.totalviews - a.totalviews;
      });
    } else if (ordertype === 2) {
      tempList.sort((a: any, b: any) => b.endDate - a.endDate);
    } else if (ordertype === 3) {
      tempList.sort((a: any, b: any) => b.createdAt - a.createdAt);
    }

    setCampainList(tempList);

    // setCampainList(
    //   campains.sort((a: any, b: any) => b.createdAt - a.createdAt)
    // );
    // setCampainList(campains.sort((a: any, b: any) => b.views - a.views));
    // setCampainList(campains.sort((a: any, b: any) => b.endDate - a.endDate));
  }, [props.campains, props.ordertype]);
  return (
    <Container>
      <Box
      // maxW="5xl"
      // mx="auto"
      // px={{ base: "6", md: "8", lg: "12" }}
      // py={{ base: "6", md: "8", lg: "12" }}
      >
        {window.location.pathname === "/" ? (
          <SimpleGrid
            columns={{ base: 2, sm: 3, lg: 4 }}
            gap={{ base: "8", lg: "12" }}
          >
            {campainList?.slice(0, 8).map((campain: any, i: number) => (
              <Stack>
                {/* <Text>{campain.id}</Text> */}
                <ProductCard key={i} campain={campain} />
              </Stack>
            ))}
          </SimpleGrid>
        ) : (
          <SimpleGrid
            columns={{ base: 2, sm: 3, lg: 4 }}
            gap={{ base: "8", lg: "12" }}
          >
            {campainList?.map(
              (campain: any, i: number) =>
                calculateDday(campain.endDate) > 0 && (
                  <ProductCard key={i} campain={campain} />
                )
            )}
          </SimpleGrid>
        )}
      </Box>
    </Container>
  );
};
