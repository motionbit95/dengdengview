import { chakra, type HTMLChakraProps } from "@chakra-ui/react";

export const Naver = (props: HTMLChakraProps<"svg">) => (
  <chakra.svg
    color="accent"
    width="16px"
    height="16px"
    viewBox={"0 0 16px 16px"}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.78779 3V8.08475L6.21221 3H2.375V13H6.21221V8L9.78779 13H13.625V3H9.78779Z"
      fill="#4FC671"
    />
  </chakra.svg>
);
