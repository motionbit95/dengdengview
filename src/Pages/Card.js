import React from "react";
import { CardWithAddButton } from "../Application/Cards/CardWithAddButton/App";
import { CardWithDownloadItem } from "../Application/Cards/CardWithDownloadItem";
import { CardWithForm } from "../Application/Cards/CardWithForm/App";
import { CardWithRightButton } from "../Application/Cards/CardWithRightButton";
import { CardWithSwitch } from "../Application/Cards/CardWithSwitch/App";
import { CardWithTwoButtons } from "../Application/Cards/CardWithTwoButtons";

function Cards(props) {
  return (
    <>
      <CardWithAddButton />
      <CardWithDownloadItem />
      <CardWithForm />
      <CardWithRightButton />
      <CardWithSwitch />
      <CardWithTwoButtons />
    </>
  );
}

export default Cards;
