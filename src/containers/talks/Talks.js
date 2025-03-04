import React, {useContext} from "react";
import "./Talks.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Talks() {
  const {isDark} = useContext(StyleContext);

  // Return null if there is no content to display
  return null;
}
