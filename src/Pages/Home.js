import React, { useState } from "react";
import Campain from "./Campain";
import {
  Box,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Tabs1 } from "../Application/Tabs/Tabs1";
import BlogCrawler from "../Component/BlogCrawler";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Home(props) {
  const [tab, setTab] = useState("0");
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Stack>
      <Tabs1
        onChange={(value) => {
          console.log(value);
          setTab(value);
        }}
      />
      <Box py={{ base: "4", md: "8" }}>
        <Carousel
          duration={2000}
          showArrows={true}
          centerMode={true}
          centerSlidePercentage={isMobile ? 100 : 40}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          showIndicators={false}
          infiniteLoop={true}
        >
          <Image
            px={{ base: "8", md: "4" }}
            src={require("../Assets/img/banner_mokup.png")}
          />
          <Image
            px={{ base: "8", md: "4" }}
            src={require("../Assets/img/banner_mokup.png")}
          />
          <Image
            px={{ base: "8", md: "4" }}
            src={require("../Assets/img/banner_mokup.png")}
          />
        </Carousel>
        {/* <Center p={{ base: "8", md: "4" }}>
          <SimpleGrid
            columns={{ base: 5, md: 10 }}
            spacing={{ base: "4", md: "8" }}
          >
            <VStack>
              <Image src={require("../Assets/img/icon_mokup.png")} />
              <Text>카테고리1</Text>
            </VStack>
            <VStack>
              <Image src={require("../Assets/img/icon_mokup.png")} />
              <Text>카테고리2</Text>
            </VStack>
            <VStack>
              <Image src={require("../Assets/img/icon_mokup.png")} />
              <Text>카테고리3</Text>
            </VStack>
            <VStack>
              <Image src={require("../Assets/img/icon_mokup.png")} />
              <Text>카테고리4</Text>
            </VStack>
            <VStack>
              <Image src={require("../Assets/img/icon_mokup.png")} />
              <Text>카테고리5</Text>
            </VStack>
            <VStack>
              <Image src={require("../Assets/img/icon_mokup.png")} />
              <Text>카테고리6</Text>
            </VStack>
            <VStack>
              <Image src={require("../Assets/img/icon_mokup.png")} />
              <Text>카테고리7</Text>
            </VStack>
            <VStack>
              <Image src={require("../Assets/img/icon_mokup.png")} />
              <Text>카테고리8</Text>
            </VStack>
            <VStack>
              <Image src={require("../Assets/img/icon_mokup.png")} />
              <Text>카테고리9</Text>
            </VStack>
            <VStack>
              <Image src={require("../Assets/img/icon_mokup.png")} />
              <Text>카테고리10</Text>
            </VStack>
          </SimpleGrid>
        </Center> */}
      </Box>
      <Campain tab={tab} />
    </Stack>
  );
}

export default Home;
