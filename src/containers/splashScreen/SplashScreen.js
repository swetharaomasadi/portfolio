import React, { useContext } from "react";
import "./SplashScreen.css";
import { splashScreen, greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function SplashScreen() {
  const { isDark } = useContext(StyleContext);

  // Check if splash screen is enabled
  if (!splashScreen.displaySplash) {
    return null; // If displaySplash is false, don't render the component
  }

  return (
    <div
      className={isDark ? "dark-mode splash-container" : "splash-container"}
      style={{ backgroundColor: splashScreen.background }}
    >
      <div className="splash-image-container">
        {/* Display the image */}
        <img
          src={splashScreen.image} // Image path from the splashScreen configuration
          alt={splashScreen.alt}   // Alt text for the image
          className="splash-image" // Class for styling the image
        />
      </div>
      <div className="splash-title-container">
        <span className="grey-color">&lt;</span>
        <span className="splash-title">{greeting.title}</span>
        <span className="grey-color">/&gt;</span>
      </div>
    </div>
  );
}
