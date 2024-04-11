import React from "react";
import { ShowCase1 } from "../E-Commerce/Category/ShowCase1";
import { ShowCase2 } from "../E-Commerce/Category/ShowCase2";
import { ShowCase3 } from "../E-Commerce/Category/ShowCase3";
import { ShowcaseGrid } from "../E-Commerce/Category/ShowcaseGrid/App";
import { ShowcaseOnSpanningColumns } from "../E-Commerce/Category/ShowcaseOnSpanningColumns/App";
import { ShowcaseThreeColumnGrid } from "../E-Commerce/Category/ShowcaseThreeColumnGrid/App";

function ShowCase(props) {
  return (
    <>
      <ShowCase1 />
      <ShowCase2 />
      <ShowCase3 />
      <ShowcaseGrid />
      <ShowcaseOnSpanningColumns />
      <ShowcaseThreeColumnGrid />
    </>
  );
}

export default ShowCase;
