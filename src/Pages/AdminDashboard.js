import React, { useEffect } from "react";
import { ShellWithGroupedMenu } from "../Application/PageShell/ShellWithGroupedMenu/App";
import { Center, useBreakpointValue, Text } from "@chakra-ui/react";

function AdminDashboard(props) {
  useEffect(() => {
    document.title = "댕댕뷰 | 관리자 대시보드";
  });

  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <>
      <ShellWithGroupedMenu />
    </>
  );
}

export default AdminDashboard;
