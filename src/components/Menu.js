import React, { useState } from "react";

export const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const sections = ["about", "experience", "projects", "contact"];
  const navLinks = sections.map((section) => {
    return (
      <li key={section.toString()}>
        <a
          onClick={toggleMenu}
          href={"#" + section}
          aria-label={section + "Link"}
        >
          {section}
        </a>
      </li>
    );
  });

  return (
    <div className="small-menu">
      <div>
        <button
          aria-label="hamburger menu button"
          className={`ham-button ${menuOpen ? "ham-button-clicked" : ""}`}
          onClick={toggleMenu}
        >
          <div className="nav-menu">
            <div
              className={`nav-menu-inner ${
                menuOpen ? "nav-menu-inner-clicked" : ""
              } `}
            />
          </div>
        </button>
        <aside
          className={`side-menu ${menuOpen ? "side-menu-opened" : ""}`}
          aria-hidden={!menuOpen}
          tabIndex={menuOpen ? 1 : -1}
        >
          <nav className="side-nav">
            <ol className="side-list">{navLinks}</ol>
            <a
              className="resume-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1kfnZLlbEIuH9C5oln-FY9k01Gc9YOYUO/view?usp=drive_link"
              aria-label="Resume Link"
            >
              {" "}
              Resume
            </a>
          </nav>
        </aside>
      </div>
    </div>
  );
};
