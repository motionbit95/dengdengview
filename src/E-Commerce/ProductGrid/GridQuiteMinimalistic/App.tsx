import { Box, Container, SimpleGrid, Text } from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";
import { campains } from "./_data";
import { useEffect, useState } from "react";
import Campain from "../../../Component/MCampain";

export const GridQuiteMinimalistic = (props: any) => {
  const { campains, orderType } = props;

  const [campainList, setCampainList] = useState([]);
  // const [totalList, setTotalList] = useState([]);
  // const [newList, setNewList] = useState([]);
  // const [bestList, setBestList] = useState([]);
  // const [lastList, setLastList] = useState([]);
  useEffect(() => {
    console.log("props", campains, orderType);

    if (!orderType || orderType === 0) {
      setCampainList(campains);
    } else if (orderType === 1) {
      campains.sort((a: any, b: any) => b.createdAt - a.createdAt);
    } else if (orderType === 2) {
      campains.sort((a: any, b: any) => b.views - a.views);
    } else if (orderType === 3) {
      campains.sort((a: any, b: any) => b.endDate - a.endDate);
    }

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
            {props?.campains?.slice(0, 8).map((campain: any) => (
              <ProductCard key={campain.doc_id} campain={campain} />
            ))}
          </SimpleGrid>
        ) : (
          <SimpleGrid
            columns={{ base: 2, sm: 3, lg: 4 }}
            gap={{ base: "8", lg: "12" }}
          >
            {props?.campains?.map((campain: any) => (
              <ProductCard key={campain.doc_id} campain={campain} />
            ))}
          </SimpleGrid>
        )}
      </Box>
    </Container>
  );
};
