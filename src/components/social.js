import React from "react";

export const Social = () => {
  return (
    <div className="social-side">
      <ul className="social-list">
        <li>
          <a href="https://github.com/ericapayne" aria-label="GitHub Link">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/erica-payne-d/"
            aria-label="LinkedIn Link"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a href="mailto:ericapyn@gmail.com" aria-label="Email Link">
            <i className="fa-regular fa-envelope"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};
