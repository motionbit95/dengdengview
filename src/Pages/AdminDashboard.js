import React, { useEffect } from "react";
import { ShellWithGroupedMenu } from "../Application/PageShell/ShellWithGroupedMenu/App";

function AdminDashboard(props) {
  useEffect(() => {
    document.title = "댕댕뷰 | 관리자 대시보드";
  });
  return <ShellWithGroupedMenu />;
}

export default AdminDashboard;
