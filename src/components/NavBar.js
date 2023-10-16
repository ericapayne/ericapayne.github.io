import React, { useEffect, useState } from "react";
import brandpic from "../assets/imgs/brand.png";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import useScrollDirection from "../hooks/useScrollDirection";
import { Menu } from "./Menu";
import { loaderDelay } from "../utils";
import styled, { css } from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  -moz-box-pack: justify;
  justify-content: space-between;
  -moz-box-align: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 93%;
  height: 100px;
  background-color: rgba(10, 25, 47, 0.85);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  @media (max-width: 1080px) {
    padding: 0px 40px;
  }
  @media (max-width: 768px) {
    padding: 0px 25px;
  }
  @media (max-width: 486px) {
    width: 83%;
  }

  @media (prefers-reduced-motion: no-preference) {
    ${(props) =>
      props.scrollDirection === "up" &&
      !props.scrolledToTop &&
      css`
        height: 70px;
        transform: translateY(0px);
        background-color: rgba(10, 25, 47, 0.85);
        box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);
      `};

    ${(props) =>
      props.scrollDirection === "down" &&
      !props.scrolledToTop &&
      css`
        height: 70px;
        transform: translateY(calc(70px * -1));
        box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);
      `};
  }
`;

const NavBar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const scrolldirection = useScrollDirection("down");
  const [scrolledtotop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sections = ["about", "experience", "projects", "contact"];
  const navSections = [
    {
      name: "About",
      url: "/#about",
    },
    {
      name: "Experience",
      url: "/#experience",
    },
    {
      name: "Projects",
      url: "/#projects",
    },
    {
      name: "Contact",
      url: "/#contact",
    },
  ];


  const Logo = (
    <div className="logo">
      
      <a className="" href="index.html" aria-label="Home Link">
        <img
          className="branding"
          src={brandpic}
          alt="my logo"
          width="109.5px"
          height="36px"
        />
      </a>
      
    </div>
  );

  return (
    <StyledHeader
      scrollDirection={scrolldirection}
      scrolledToTop={scrolledtotop}
    >
      <nav className="nav">
        <>
          <TransitionGroup>
            {isMounted && (
              <CSSTransition classNames="fadedown" timeout={loaderDelay}>
                {Logo}
              </CSSTransition>
            )}
          </TransitionGroup>
          <div className="nav-side">
            <ol>
              <TransitionGroup component={null}>
                {isMounted &&
                  navSections &&
                  navSections.map(({ name, url }, i) => (
                    <CSSTransition key={i} classNames="fadedown" timeout={0}>
                      <li key={i} style={{ transitionDelay: `${i * 100}ms` }}>
                        <a href={url}>{name}</a>
                      </li>
                    </CSSTransition>
                  ))}
              </TransitionGroup>
            </ol>
            <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition classNames="fadedown" timeout={loaderDelay}>
                  <div
                    style={{ transitionDelay: `${sections.length * 100}ms` }}
                  >
                    <a
                      className="resume-button"
                      aria-label="resume button"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://drive.google.com/file/d/1kfnZLlbEIuH9C5oln-FY9k01Gc9YOYUO/view?usp=drive_link"
                      role="button"
                    >
                      
                      Resume
                    </a>
                  </div>
                </CSSTransition>
              )}
            </TransitionGroup>
          </div>
          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames="fade" timeout={loaderDelay}>
                <Menu />
              </CSSTransition>
            )}
          </TransitionGroup>
        </>
      </nav>
    </StyledHeader>
  );
};

export default NavBar;
