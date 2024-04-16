import React from "react";
import { SidebarWithCollapsable } from "../Application/Sidebars/SidebarWithCollapsable/App";
import { HStack, Container } from "@chakra-ui/react";
import Campain from "./Campain";
import Mypage from "./Mypage";
function Profile(props) {
  const [breadcrumb, setBreadcrumb] = React.useState({
    title: "나의 체험단",
    description: "신청한 체험단",
  });

  const handleMenu = (item) => {
    if (item.includes("체험단")) {
      setBreadcrumb({ title: "나의 체험단", description: item });
      console.log(breadcrumb);
    } else setBreadcrumb({ title: "내정보 수정", description: item });
  };

  return (
    <Container>
      <HStack alignItems={"flex-start"}>
        <SidebarWithCollapsable
          display={{ base: "none", md: "block" }}
          setItem={handleMenu}
        />
        {breadcrumb?.title?.includes("체험단") && (
          <Campain
            title={breadcrumb?.title}
            description={breadcrumb?.description}
          />
        )}

        {breadcrumb?.title?.includes("내정보") && (
          <Mypage
            title={breadcrumb?.title}
            description={breadcrumb?.description}
          />
        )}
      </HStack>
    </Container>
  );
}

export default Profile;
