import * as React from "react";
import { useState } from "react";
import "./App.css";
import { Attributes, Class } from "./types";
import { CLASS_LIST } from "./consts";

type Props = {
  isEligible: boolean;
  name: string;
};

function ClassRow(props: Props) {
  const classAttributes = CLASS_LIST[props.name as Class];
  const tooltip = Object.entries(classAttributes).map(([key, value]) => {
    return (
      <>
        {key}: {value} <br />
      </>
    );
  });
  return (
    <>
      <div className="row">
        <div className={props.isEligible ? "eligible" : "noneligible"}>
          {props.name}
        </div>
        <div className="tooltip">
          ⓘ<span className="tooltiptext">{tooltip}</span>
        </div>
      </div>
    </>
  );
}

export default ClassRow;
