import React, {useState, useEffect, useContext} from "react";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Blogs() {
  const {isDark} = useContext(StyleContext);
  const [mediumBlogs, setMediumBlogs] = useState([]);

  function setMediumBlogsFunction(array) {
    setMediumBlogs(array);
  }

  // Medium API returns blogs' content in HTML format. Below function extracts blogs' text content within paragraph tags
  function extractTextContent(html) {
    return typeof html === "string"
      ? html
          .split(/<\/p>/i)
          .map(part => part.split(/<p[^>]*>/i).pop())
          .filter(el => el.trim().length > 0)
          .map(el => el.replace(/<\/?[^>]+(>|$)/g, "").trim())
          .join(" ")
      : NaN;
  }

  useEffect(() => {
    // Fetch blogs from an API or use local data
    const getProfileData = () => {
      fetch("/blogs.json")
        .then(result => {
          if (result.ok) {
            return result.json();
          }
        })
        .then(response => {
          setMediumBlogsFunction(response.items);
        })
        .catch(function (error) {
          console.error(`${error} (Blogs section could not be displayed)`);
          setMediumBlogsFunction("Error");
        });
    };
    getProfileData();
  }, []);

  if (!mediumBlogs.length) {
    return null; // If no blogs or error, return null.
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="blogs">
        <div className="blog-header">
          <h1 className="blog-header-text">Blogs</h1>
          <p
            className={
              isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"
            }
          >
            Explore my latest blogs.
          </p>
        </div>
        <div className="blog-main-div">
          <div className="blog-text-div">
            {mediumBlogs.map((blog, i) => {
              return (
                <div key={i} className="blog-card">
                  <h2>{blog.title}</h2>
                  <p>{extractTextContent(blog.content)}</p>
                  <a href={blog.link} target="_blank" rel="noopener noreferrer">
                    Read more
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
