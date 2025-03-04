import React, {useState, useEffect, lazy, Suspense} from "react";
import {openSource} from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";

// Lazy load the GithubProfileCard component
const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);

export default function Profile() {
  const [prof, setrepo] = useState(null); // Start with null to track if profile data is fetched

  function setProfileFunction(array) {
    setrepo(array);
  }

  useEffect(() => {
    let isMounted = true; // Track if component is mounted
    if (openSource.showGithubProfile === "true") {
      const getProfileData = () => {
        fetch("/profile.json")
          .then(result => {
            if (result.ok) {
              return result.json();
            }
            throw new Error("Failed to fetch profile data");
          })
          .then(response => {
            if (isMounted) {
              setProfileFunction(response.data.user); // Set profile data if component is still mounted
            }
          })
          .catch(function (error) {
            console.error(
              `${error} (GitHub contact section could not be displayed. Default contact section is shown)`
            );
            setProfileFunction("Error"); // Set to Error state in case of failure
            openSource.showGithubProfile = "false"; // Disable profile section
          });
      };
      getProfileData();
    }

    return () => {
      isMounted = false; // Cleanup on unmount
    };
  }, []);

  // Conditionally render profile or fallback to contact if error or no profile
  if (
    openSource.display &&
    openSource.showGithubProfile === "true" &&
    prof !== null && // Ensure data is available
    !(typeof prof === "string" || prof instanceof String)
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={prof} key={prof.id} />
      </Suspense>
    );
  } else {
    return <Contact />;
  }
}
