import * as React from "react";
import { useState } from "react";
import { Attributes } from "./types";
import { getModifier } from "./Api";
import "./App.css";
import { isDisabled } from "@testing-library/user-event/dist/utils";

type Props = {
  increaseSkillLevel: () => void;
  decreaseSkillLevel: () => boolean;
  canSetSkills: boolean;
  attributes: Attributes;
  name: string;
  attributeModifier: string;
};

function SkillRow(props: Props) {
  const [level, setLevel] = useState<number>(0);
  const modifier = getModifier(
    props.attributes[props.attributeModifier as keyof Attributes]
  );
  return (
    <div className="row">
      <div className="info">
        {props.name} : {level} (Modifier: {props.attributeModifier}): {modifier}
      </div>
      <div className="buttons">
        <button
          disabled={props.canSetSkills}
          onClick={() => {
            if (props.decreaseSkillLevel()) {
              setLevel(level + 1);
            }
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setLevel(level - 1);
            props.increaseSkillLevel();
          }}
        >
          -
        </button>
      </div>
      <div className="total">Total: {level + modifier}</div>
    </div>
  );
}

export default SkillRow;
