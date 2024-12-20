import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio"; // Import skillsSection from portfolio.js

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {/* Check if SoftwareSkills exists before mapping */}
          {skillsSection.SoftwareSkills && skillsSection.SoftwareSkills.map((skills, i) => {
            return (
              <li key={i} className="software-skill-inline" name={skills.skillName}>
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
