import React, { useState, useEffect, useRef } from "react";
import { srConfig } from "../../config";
import sr from "../../utils/sr";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export const OtherProjects = () => {
  const projects = [
    {
      id: 1,
      title: "TCP Chat Program",
      desc: "A tcp socket chat made using node.js and node.js modules including net, os, readline, and process", 
      src: "https://github.com/ericapayne/tcpchat-program",
      langList: ["JavaScript", "Node.js"]

    },
    {
      id: 2,
      title: "Portfolio V1",
      desc: "This is the first version of my portfolio website that I made",
      src: "https://github.com/ericapayne/v1-Portfolio",
      langList: ["HTML", "CSS", "SCSS"],
    },
    {
      id: 3,
      title: "Magic: the Gathering Card Search",
      desc: "A JavaScript command line interface (CLI) program for searching Magic The Gathering Card Game card information",
      src: "https://github.com/ericapayne/Javascript-MTG-card-search",
      langList: ["JavaScript", "Express", "CORS"],
    },
    {
      id: 4,
      title: "Pomodoro Timer Mobile Application",
      desc: "My expo pomodoro break timer mobile application made using React Native and Expo",
      src: "https://github.com/ericapayne/Pomodoro-Timer",
      langList: ["React Native", " JavaScript"],
    },
    {
      id: 5,
      title: "Saute : Recipe Mobile Application",
      desc: "A cooking and recipe mobile aplication",
      src: "https://github.com/ericapayne/saute-app",
      langList: ["React Native", "JavaScript"],
    },
    {
      id: 6,
      title: "Quiz Mobile Application",
      desc: "This quiz app project was made using expo and React Native. It has 3 categories to choose from. There are 10 questions and a results page.",
      src: "https://github.com/ericapayne/Quiz-app",
      langList: ["React Native", "JavaScript"],
    },
    {
      id: 7,
      title: "Build Your Own Adventure Game",
      desc: "A text-based Choose Your Own Adventure Game built in C#",
      src: "https://github.com/ericapayne/build-your-own-adventure-game",
      langList: ["C#"],
    },
    {
      id: 8,
      title: "Ticket Box",
      desc: "A form web application for getting tickets using Vue.js",
      src: "https://github.com/ericapayne/ticket-box-vue",
      langList: ["JavaScript", "CSS", "HTML", "Vue.js"],
    },
    {
      id: 9,
      title: "Gatsby Blog Site",
      desc: "A web application made using Gatsby CLI deployed to Gatsby Cloud",
      src: "https://github.com/ericapayne/my-first-gatsby-site",
      langList: ["JavaScript", "CSS", "HTML", "Gatsby"],
    },
  ];

  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealGithubLink = useRef(null);
  const revealProjects = useRef([]);

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealGithubLink.current, srConfig());
    revealProjects.current.forEach((ref, i) =>
      sr.reveal(ref, srConfig(i * 100))
    );
  }, []);

  const GRID_LIMIT = 6;

  const firstSix = projects.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? projects : firstSix;

  return (
    <section className="other-projects">
      <h2 ref={revealTitle}>Other Projects of Mine</h2>
      <a
        className="github-link inline-link"
        href="https://www.github.com/ericapayne"
        rel="noopener noreferrer"
        target="_blank "
        aria-label="Github Link"
        style={{
          visibility: "visible",
          opacity: 1,
          transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
          transition:
            "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s",
        }}
        ref={revealGithubLink}
      >
        view my full github
      </a>
      <ul className="project-grid" id="myprojects">
        {/* {results} */}
        <TransitionGroup component={null}>
          {projectsToShow &&
            projectsToShow.map((project, i) => (
              <CSSTransition
                key={i}
                classNames="fadeup"
                timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                exit={false}
              >
                <li
                  key={i}
                  className="other-list-items"
                  ref={(el) => (revealProjects.current[i] = el)}
                  style={{
                    transitionDelay: `${
                      i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0
                    }ms`,
                  }}
                >
                  <div className="project-inner">
                    <header>
                      <div className="project-top">
                        <div className="folder">
                          <i
                            className="fa-regular fa-folder-closed fa-2xl"
                            style={{ color: "#6474e5" }}
                          ></i>
                        </div>
                        <div className="project-links">
                          <a
                            href="{project.src}"
                            rel="noopener noreferrer"
                            target="_blank"
                            aria-label="GitHub Link"
                          >
                            <i className="fa-brands fa-github fa-lg"></i>
                          </a>
                        </div>
                      </div>
                      <h3 className="project-title">
                        <a
                          href={project.src}
                          aria-label={project.name + "project link"}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {project.title}
                        </a>
                      </h3>
                      <div className="project-desc">
                        <p>{project.desc}</p>
                      </div>
                    </header>
                    <footer>
                      <ul className="project-tech-list">
                        {project.langList.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    </footer>
                  </div>
                </li>
              </CSSTransition>
            ))}
        </TransitionGroup>
      </ul>
      <button className="more-button" onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "Show More"}
      </button>
    </section>
  );
};
