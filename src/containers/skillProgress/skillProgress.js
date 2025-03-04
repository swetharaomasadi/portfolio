import React from "react";
import "./Progress.scss";
import {illustration} from "../../portfolio"; // Removed techStack import
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  // Define proficiency categories
  const categories = [
    {name: "Programming", proficiency: 85},
    {name: "Artificial Intelligence and Machine Learning", proficiency: 80},
    {name: "Frontend", proficiency: 90},
    {name: "Backend", proficiency: 70}
  ];

  // Check if illustration is available for showing skill image or animation
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="skills-container">
        <div className="skills-bar">
          <h1 className="skills-heading">Proficiency</h1>
          {/* Map through the categories */}
          {categories.map((category, index) => (
            <div className="skill" key={index}>
              <p>{category.name}</p>
              <div className="meter">
                <span style={{width: `${category.proficiency}%`}}></span>{" "}
                {/* Dynamic progress */}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-image">
          {illustration.animated ? (
            <DisplayLottie animationData={Build} />
          ) : (
            <img alt="Skills" src={require("../../assets/images/skill.svg")} />
          )}
        </div>
      </div>
    </Fade>
  );
}
