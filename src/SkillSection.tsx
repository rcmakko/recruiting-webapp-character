import * as React from "react";
import { useState } from "react";
import { Attributes } from "./types";
import SkillRow from "./SkillRow";
import { SKILL_LIST } from "./consts";

type Props = {
  numPoints: number;
  attributes: Attributes;
};

function SkillSection(props: Props) {
  const [numPoints, setNumPoints] = useState<number>(props.numPoints);

  return (
    <>
      <div>Total Skill Points: {numPoints} </div>
      {SKILL_LIST.map((skill) => {
        return (
          <SkillRow
            increaseSkillLevel={() => {
              setNumPoints(numPoints + 1);
            }}
            decreaseSkillLevel={() => {
              if (numPoints - 1 >= 0) {
                setNumPoints(numPoints - 1);
                return true;
              }
              return false;
            }}
            canSetSkills={numPoints == 0}
            attributes={props.attributes}
            name={skill.name}
            attributeModifier={skill.attributeModifier}
          />
        );
      })}
    </>
  );
}

export default SkillSection;
