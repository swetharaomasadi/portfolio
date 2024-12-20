import React, { useState, useEffect, useContext, Suspense, lazy } from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import { openSource, socialMediaLinks, workExperiences } from "../../portfolio"; // Ensure workExperiences is imported here
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";

export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);
  const { isDark } = useContext(StyleContext);

  // Extract projects from workExperiences
  const { projects } = workExperiences;

  useEffect(() => {
    const getRepoData = () => {
      fetch("/profile.json")
        .then((result) => {
          if (result.ok) {
            return result.json();
          }
          throw result;
        })
        .then((response) => {
          setrepoFunction(response.data.user.pinnedItems.edges);
        })
        .catch(function (error) {
          console.error(
            `${error} (because of this error, nothing is shown in place of Projects section. Also check if Projects section has been configured)`
          );
          setrepoFunction("Error");
        });
    };
    getRepoData();
  }, []);

  function setrepoFunction(array) {
    setrepo(array);
  }

  // Render Open Source Projects (Fetched Data)
  if (
    !(typeof repo === "string" || repo instanceof String) &&
    openSource.display
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">Open Source Projects</h1>
          <div className="repo-cards-div-main">
            {Array.isArray(repo) && repo.length > 0 ? (
              repo.map((v, i) => {
                if (!v) {
                  console.error(
                    `Github Object for repository number : ${i} is undefined`
                  );
                }
                return (
                  <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
                );
              })
            ) : (
              <p>No projects available.</p>
            )}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  }

  // Render Local Projects (Stored in portfolio.js)
  if (projects && projects.length > 0) {
    return (
      <div className="main" id="projects">
        <h1 className="project-title">Projects</h1>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return <FailedLoading />;
  }
}
