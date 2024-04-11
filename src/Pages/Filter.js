import React from "react";
import { FiltersWithSidebar } from "../E-Commerce/ProductFilter/FiltersWithSidebar/App";
import { AppFiltersWithDropdown } from "../E-Commerce/ProductFilter/FiltersWithDropdown/App";

function Filter(props) {
  return (
    <>
      <AppFiltersWithDropdown />
      <FiltersWithSidebar />
    </>
  );
}

export default Filter;
