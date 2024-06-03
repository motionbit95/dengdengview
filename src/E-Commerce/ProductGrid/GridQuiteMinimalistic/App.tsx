import { Box, Container, SimpleGrid, Text } from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";
// import { campains } from "./_data";
import { useEffect, useState } from "react";
import Campain from "../../../Component/MCampain";

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

    if (!ordertype || ordertype === 0) {
      setCampainList(tempList);
    } else if (ordertype === 1) {
      tempList.sort((a: any, b: any) => b.createdAt - a.createdAt);
    } else if (ordertype === 2) {
      tempList.sort((a: any, b: any) => b.views - a.views);
    } else if (ordertype === 3) {
      tempList.sort((a: any, b: any) => b.endDate - a.endDate);
    }

    setCampainList(tempList);

    // setCampainList(
    //   campains.sort((a: any, b: any) => b.createdAt - a.createdAt)
    // );
    // setCampainList(campains.sort((a: any, b: any) => b.views - a.views));
    // setCampainList(campains.sort((a: any, b: any) => b.endDate - a.endDate));
  }, []);
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
            {campainList?.slice(0, 8).map((campain: any) => (
              <ProductCard key={campain.doc_id} campain={campain} />
            ))}
          </SimpleGrid>
        ) : (
          <SimpleGrid
            columns={{ base: 2, sm: 3, lg: 4 }}
            gap={{ base: "8", lg: "12" }}
          >
            {campainList?.map((campain: any) => (
              <ProductCard key={campain.doc_id} campain={campain} />
            ))}
          </SimpleGrid>
        )}
      </Box>
    </Container>
  );
};
