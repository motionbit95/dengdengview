import React from "react";
import { SidebarWithCollapsable } from "../Application/Sidebars/SidebarWithCollapsable/App";
import { HStack } from "@chakra-ui/react";
import Campain from "./Campain";
function Profile(props) {
  const [breadcrumb, setBreadcrumb] = React.useState({});

  const handleMenu = (item) => {
    if (item.includes("체험단")) {
      setBreadcrumb({ title: "나의 체험단", description: item });
      console.log(breadcrumb);
    } else setBreadcrumb({ title: "내정보 수정", description: item });
  };

  return (
    <HStack>
      <SidebarWithCollapsable
        display={{ base: "none", md: "block" }}
        setItem={handleMenu}
      />
      <Campain
        title={breadcrumb?.title}
        description={breadcrumb?.description}
      />
    </HStack>
  );
}

export default Profile;
