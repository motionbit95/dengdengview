import React from "react";
import { ListWithAvatar } from "../Application/List/ListWithAvatar/App";
import { ListWithDraggableElements } from "../Application/List/ListWithDraggableElements/App";
import { ListWithTruncatedPreview } from "../Application/List/ListWithTruncatedPreview/App";

function List(props) {
  return (
    <>
      <ListWithAvatar />
      <ListWithDraggableElements />
      <ListWithTruncatedPreview />
    </>
  );
}

export default List;
