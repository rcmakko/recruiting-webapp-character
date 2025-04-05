import { useState } from "react";
import "./App.css";
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from "./consts";
import * as React from "react";
import AttributeRow from "./AttributeRow";
import type { Attributes, Class } from "./types";
import ClassSection from "./ClassSection";
import SkillSection from "./SkillSection";
import { getModifier } from "./Api";

function App() {
  const attributeDefaults = {
    Strength: 10,
    Dexterity: 10,
    Constitution: 10,
    Intelligence: 10,
    Wisdom: 10,
    Charisma: 10,
  };

  const [attributes, setAttributeNum] = useState<Attributes>(attributeDefaults);
  const [eligibleClasses, setEligibleClasses] = useState<Set<Class>>(new Set());
  function isEligible(potentialClass: Class): boolean {
    return Object.entries(CLASS_LIST[potentialClass]).every(function ([
      key,
      value,
    ]) {
      if (attributes[key as keyof Attributes] <= value) {
        return false;
      }
      return true;
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <div className="Stats-section">
          {ATTRIBUTE_LIST.map((attributeName, value) => {
            return (
              <AttributeRow
                label={attributeName}
                default={attributes[attributeName as keyof Attributes]}
                changeVal={(value) => {
                  const newAttribute = attributes;
                  const newEligibleClasses = new Set<Class>();
                  newAttribute[attributeName as keyof Attributes] = value;
                  setAttributeNum(newAttribute);

                  if (isEligible("Barbarian")) {
                    newEligibleClasses.add("Barbarian");
                  }
                  if (isEligible("Wizard")) {
                    newEligibleClasses.add("Wizard");
                  }
                  if (isEligible("Bard")) {
                    newEligibleClasses.add("Bard");
                  }
                  setEligibleClasses(newEligibleClasses);
                }}
              />
            );
          })}
        </div>
        <div className="Class-section">
          <ClassSection eligibleClasses={eligibleClasses} />
        </div>
        <div className="Skill-section">
          <SkillSection
            numPoints={10 + 4 * getModifier(attributes.Intelligence)}
            attributes={attributes}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
