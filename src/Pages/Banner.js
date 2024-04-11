import React from "react";
import { Box } from "@chakra-ui/react";
import { BannerWithLink } from "../Application/Banners/Banner2";
import { BannerWithText } from "../Application/Banners/Banner1/App";
import { BannerWithSignUp } from "../Application/Banners/Banner3";
import { BannerWithSlide } from "../Application/Banners/Banner4";
import { BannerWithTwoButtons } from "../Application/Banners/Banner5";

function Banner(props) {
  return (
    <Box marginTop={"36"}>
      <BannerWithText />
      <BannerWithLink />
      <BannerWithSignUp />
      <BannerWithSlide />
      <BannerWithTwoButtons />
    </Box>
  );
}

export default Banner;
