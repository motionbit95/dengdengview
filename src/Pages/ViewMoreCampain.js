import { Container, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GridQuiteMinimalistic } from "../E-Commerce/ProductGrid/GridQuiteMinimalistic/App";

const ViewMoreCampain = ({ keyword, ...props }) => {
  const [page, setPage] = useState("");
  const [campains, setCampains] = useState();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const order = params.get("order");
    setPage(order);

    fetch(process.env.REACT_APP_SERVER_URL + "/campain/list/totalviews")
      .then((res) => res.json())
      .then((data) => {
        setCampains(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container py={{ base: "12", md: "24" }}>
      <Stack spacing={4}>
        <Text fontSize={"xl"} fontWeight={"bold"}>
          {page}
        </Text>
        {campains && <GridQuiteMinimalistic campains={campains} />}
      </Stack>
    </Container>
  );
};

export default ViewMoreCampain;
