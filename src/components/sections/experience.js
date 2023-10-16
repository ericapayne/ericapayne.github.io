import React, { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { srConfig } from "../../config";
import sr from "../../utils/sr";
import experienceData from "../../data/experienceData";

const HighLight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: 42px;
  border-radius: 4px;
  background: #6474e5;
  transform: translateY(calc(${({ activeTabId }) => activeTabId} * 42px));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;
  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: 120px;
    height: 2px;
    margin-left: 50px;
    transform: translateX(calc(${({ activeTabId }) => activeTabId} * 120px));
  }
  @media (max-width: 480px) {
    margin-left: 25px;
  }
`;

const ButtonStyle = styled.button`
  text-decoration: none;
  position: relative;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  display: flex;
  align-items: center;
  width: 80%;
  height: 42px;
  padding: 0 20px 2px;
  border-left: 2px solid #233554;
  background-color: transparent;
  color: ${({ isActive }) => (isActive ? "#7D7FFF" : "#8892b0")};
  font-family: "SF Mono", "Fira Code", monospace;
  font-size: 13px;
  text-align: left;
  white-space: nowrap;
  @media (max-width: 768px) {
    padding: 0 15px 2px;
  }
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 120px;
    padding: 0 15px;
    border-left: 0;
    border-bottom: 2px solid #233554;
    text-align: center;
  }
  &:hover,
  &:focus {
    background-color: #112240;
    color: #7d7fff;
  }

  &:active {
    color: #7d7fff;
    outline: 0;
  }
`;

const TabListStyles = styled.div`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;
  @media (max-width: 600px) {
    display: flex;
    overflow-x: auto;
    width: calc(100% + 100px);
    padding-left: 50px;
    margin-left: -50px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    width: calc(100% + 50px);
    padding-left: 25px;
    margin-left: -25px;
  }
  li {
    &:first-of-type {
      @media (max-width: 600px) {
        margin-left: 50px;
      }
      @media (max-width: 480px) {
        margin-left: 25px;
      }
    }
    &:last-of-type {
      @media (max-width: 600px) {
        padding-right: 50px;
      }
      @media (max-width: 480px) {
        padding-right: 25px;
      }
    }
  }
`;

export const Experience = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const focusTab = () => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus();
      return;
    }
    // If we are at the end, go to the start
    if (tabFocus >= tabs.current.length) {
      setTabFocus(0);
    }
    // If we're at the start, move to the end
    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1);
    }
  };

  // Only re-run the effect if tabFocus changes
  useEffect(() => focusTab(), [tabFocus]);

  // Focus on tabs when using up & down arrow keys
  const onKeyDown = (e) => {
    switch (e.key) {
      case "ArrowUp": {
        e.preventDefault();
        setTabFocus(tabFocus - 1);
        break;
      }

      case "ArrowDown": {
        e.preventDefault();
        setTabFocus(tabFocus + 1);
        break;
      }

      default: {
        break;
      }
    }
  };

  return (
    <section
      className="work"
      id="experience"
      // data-sr-id="2"
      ref={revealContainer}
    >
      <h2 className="num-header">Work Experience</h2>

      <div className="inner">
        <TabListStyles
          role="tabList"
          aria-label="Job tabs"
          onKeyDown={(e) => onKeyDown(e)}
        >
          {experienceData &&
            experienceData.map((jobs, i) => (
              <ButtonStyle
                key={i}
                isActive={activeTabId === i}
                onClick={() => setActiveTabId(i)}
                ref={(el) => (tabs.current[i] = el)}
                id={`tab-${i}`}
                role="tab"
                tabIndex={activeTabId === i ? "0" : "-1"}
                aria-selected={activeTabId === i ? true : false}
                aria-controls={`panel-${i}`}
              >
                <span>{jobs.company}</span>
              </ButtonStyle>
            ))}
          <HighLight activeTabId={activeTabId}></HighLight>
        </TabListStyles>

        <div className="panels">
          {experienceData.map((jobs, i) => (
            <CSSTransition
              key={i}
              in={activeTabId === i}
              timeout={250}
              classNames="fade"
            >
              <div
                className="all-panels"
                key={i}
                id={`panel-${i}`}
                role="tabpanel"
                tabIndex={activeTabId === i ? "0" : "-1"}
                aria-labelledby={`tab-${i}`}
                aria-hidden={activeTabId !== i}
                hidden={activeTabId !== i}
              >
                <h3>
                  <span>{jobs.title}</span>
                  <span className="company"> @ {jobs.company}</span>
                </h3>
                <p className="range">{jobs.range}</p>
                <div>
                  <ul>
                    {jobs.duties.map((duty, i) => (
                      <li key={i}>{duty}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CSSTransition>
          ))}
        </div>
      </div>
    </section>
  );
};
