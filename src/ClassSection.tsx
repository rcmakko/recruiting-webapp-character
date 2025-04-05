import * as React from "react";
import { useState } from "react";
import "./App.css";
import { Attributes, Class } from "./types";
import { CLASS_LIST } from "./consts";
import ClassRow from "./ClassRow";

type Props = {
  eligibleClasses: Set<Class>;
};

function ClassSection(props: Props) {
  const classes = ["Barbarian", "Wizard", "Bard"];
  return (
    <>
      {classes.map((job) => {
        return (
          <ClassRow
            name={job}
            isEligible={props.eligibleClasses.has(job as Class)}
          />
        );
      })}
    </>
  );
}

export default ClassSection;
