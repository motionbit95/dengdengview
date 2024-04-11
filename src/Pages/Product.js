import React from "react";
import { GridQuiteMinimalistic } from "../E-Commerce/ProductGrid/GridQuiteMinimalistic/App";
import { GridWithAddToCartButton } from "../E-Commerce/ProductGrid/GridWithAddToCartButton/App";
import { GridWithButtonGroup } from "../E-Commerce/ProductGrid/GridWithButtonGroup/App";
import { GridWithFavouriteButton } from "../E-Commerce/ProductGrid/GridWithFavouriteButton/App";
import { ProductWithCarousel } from "../E-Commerce/ProductDetails/ProductWithCarousel/App";
import { ProductWithLargeImages } from "../E-Commerce/ProductDetails/ProductWithLargeImages/App";

function Product(props) {
  return (
    <>
      <GridQuiteMinimalistic />
      <GridWithAddToCartButton />
      <GridWithButtonGroup />
      <GridWithFavouriteButton />
      <ProductWithLargeImages />
    </>
  );
}

export default Product;
