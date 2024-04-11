import React from "react";
import { ShellWithGroupedMenu } from "../Application/PageShell/ShellWithGroupedMenu/App";
import { ShellWithScrollableColumns } from "../Application/PageShell/ShellWithScrollableColumns/App";

function Page(props) {
  return (
    <>
      <ShellWithGroupedMenu />
      <ShellWithScrollableColumns />
    </>
  );
}

export default Page;
