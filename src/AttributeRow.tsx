import * as React from "react";
import { useState } from "react";
import "./App.css";
import { getModifier } from "./Api";

type Props = {
  label: string;
  default: number;
  changeVal: (value: number) => void;
};

function AttributeRow(props: Props) {
  const [value, setValue] = useState<number>(props.default);
  const [modifier, setModifier] = useState<number>(0);

  function calculateModifiedValue(newVal: number): number {
    const mod = getModifier(newVal);
    setModifier(mod);
    return newVal + mod;
  }

  return (
    <div className="row">
      {props.label} : {value} (Modifier: {modifier})
      <div className="buttons">
        <button
          onClick={(_) => {
            const modifiedValue = calculateModifiedValue(value + 1);
            setValue(value + 1);
            props.changeVal(modifiedValue);
          }}
        >
          +
        </button>
        <button
          disabled={value <= 1}
          onClick={(_) => {
            if (value - 1 > 0) {
              const modifiedValue = calculateModifiedValue(value - 1);
              setValue(value - 1);
              props.changeVal(modifiedValue);
            }
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default AttributeRow;
