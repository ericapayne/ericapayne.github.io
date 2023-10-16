import React, { useEffect, useRef } from "react";
import sr from "../../utils/sr";
import { srConfig } from "../../config";
import featuredData from "../../data/featuredData";

export const FeaturedProjects = () => {
  const revealTitle = useRef(null);
  const revealProjects = useRef([]);

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    revealProjects.current.forEach((ref, i) =>
      sr.reveal(ref, srConfig(i * 100))
    );
  });
  return (
    <section id="projects">
      <h2 className="num-header" ref={revealTitle}>
        {" "}
        Some Projects I've Built
      </h2>

      <ul className="featured">
        {featuredData &&
          featuredData.map((project, i) => {
            return (
              <li
                className="featured-list"
                key={i}
                ref={(el) => (revealProjects.current[i] = el)}
              >
                <div className="project-content">
                  <div>
                    <p className="project-overline">Featured Project</p>
                    <h3 className="project-title">
                      <a href={project.url} aria-label={project.link_aria}>
                        {project.title}
                      </a>
                    </h3>
                    <div className="project-description">
                      <p>{project.description}</p>
                    </div>
                    <ul className="project-language-list">
                      {project.languages.map((language, i) => (
                        <li key={i}>{language}</li>
                      ))}
                    </ul>
                    <div className="project-links">
                      <a href={project.url} aria-label={project.link_aria}>
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-image">
                  <img
                    src={project.img_url}
                    alt={project.img_alt}
                    loading="lazy"
                  />
                </div>
              </li>
            );
          })}
      </ul>
    </section>
  );
};
