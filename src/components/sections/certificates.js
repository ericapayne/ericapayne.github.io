import React, { useEffect, useRef, useState } from "react";
import { srConfig } from "../../config";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import sr from "../../utils/sr";
import certificates from "../../data/certificateData";

export const Certificates = () => {
  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealCerts = useRef([]);

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    revealCerts.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);
  const GRID_LIMIT = 6;
  const firstSix = certificates.slice(0, GRID_LIMIT);
  const certsToShow = showMore ? certificates : firstSix;

  return (
    <section className="certificates" id="certif">
      <h2 ref={revealTitle}>Certifications</h2>
      <ul className="cert-grid">
        <TransitionGroup component={null}>
          {certsToShow &&
            certsToShow.map((cert, i) => (
              <CSSTransition
                key={i}
                classNames="fadeup"
                timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                exit={false}
              >
                <li
                  key={i}
                  className="cert-list-items"
                  ref={(el) => (revealCerts.current[i] = el)}
                  style={{
                    transitionDelay: `${
                      i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0
                    }ms`,
                  }}
                >
                  <div className="cert-inner">
                    <header>
                      <div className="cert-top">
                        <div
                          style={{
                            marginRight: "5px",
                            verticalAlign: "middle",
                          }}
                        >
                          <i className="fa-solid fa-code"></i>
                        </div>

                        <h4 className="cert-title">
                          {cert.src.map((urls, i) => (
                            <a
                              key={i}
                              className="cert-links"
                              href={urls.url}
                              aria-label={urls.label}
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              {cert.title}
                            </a>
                          ))}
                        </h4>
                      </div>
                    </header>
                    <div className="cert-desc">
                      <p>{cert.org}</p>
                      <p>{cert.date}</p>
                    </div>
                    <footer>
                      <ul className="cert-skill-list">
                        {cert.skills.map((skill, i) => (
                          <li key={i}>{skill}</li>
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
