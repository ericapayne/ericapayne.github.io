import React, {useState, useRef, useEffect} from "react";
import styled from "styled-components";

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
  transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
  display: flex;
  align-items: center;
  width: 80%;
  height: 42px;
  padding: 0 20px 2px;
  border-left: 2px solid #233554;
  background-color: transparent;
  color: ${({ isActive }) => (isActive ? '#6474e5' : '#8892b0')};
  font-family: 'SF Mono', 'Fira Code', monospace;
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
    color: #6474e5;
  }
   
    &:active{
      color: #6474e5;
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
  const onKeyDown = e => {
    switch (e.key) {
      case 'ArrowUp': {
        e.preventDefault();
        setTabFocus(tabFocus - 1);
        break;
      }

      case 'ArrowDown': {
        e.preventDefault();
        setTabFocus(tabFocus + 1);
        break;
      }

      default: {
        break;
      }
    }
  };

  //job data object
  const jobData = [{
    title: 'Lead Lab Consultant',
    company: 'Cal State LA',
    range: 'September 2021 - May 2022',
    duties: ['Supervised assistant lab consultants to make sure that all lab consultants follow university, ITS and Open Access Lab guidelines.', 'Resolved desktop issues on both Windows and Mac operating systems.', 'Routed service tickets to the appropriate departments and resolved them when completed using ServiceNow.']
  },
  {
    title: 'Assistant Lab Consultant',
    company: 'Cal State LA',
    range: 'September 2017 - April 2019',
    duties: ['Assisted students in the Open Access Lab with things like wireless printing, help with programs and copying.', 'Maintained labs in a neat and orderly manner for effective usage of equipment.', 'Regulated computer access when the labs are full using a waitlist.']
  },
  {
    title: 'Technology & Games Teacher',
    company: 'Star Education',
    range: 'March 2015 - June 2016',
    duties: ['Educated elementary school children grades K-5th different ways to interact with technology and proper computer skills through the use of games, coding, and other methods', 'Educated them coding by using Kano Computer Raspberry Pi Kits', 'Observed over and resolved issues on equipment including: laptops, routers and peripherals']
  },
  
]
        
        return (
            <section className="work" id="experience" data-sr-id="2">
        <h2 className="num-header">Work Experience</h2>
        <div className="inner">
          <TabListStyles role="tabList" aria-label="Job tabs" onKeyDown={e => onKeyDown(e)}>
          {jobData && jobData.map((jobs, i) => (           
            <ButtonStyle           
            key={i}
            isActive={activeTabId === i}
            onClick={() => setActiveTabId(i)}
            ref={el => (tabs.current[i] = el)}
            id={`tab-${i}`}
            role="tab"
            tabIndex={activeTabId === i ? '0' : '-1'}
            aria-selected={activeTabId === i ? true : false}
            aria-controls={`panel-${i}`}>
              <span>{jobs.company}</span>
            </ButtonStyle>
          ))}
          <HighLight activeTabId={activeTabId}></HighLight>
          </TabListStyles>
          
          <div className="panels">
              {jobData.map((jobs, i) => (
                <div className="all-panels"
                key={i}
                id={`panel-${i}`}
                role="tabpanel"
                tabIndex={activeTabId === i ? '0' : '-1'}
                aria-labelledby={`tab-${i}`}
                aria-hidden={activeTabId !== i}
                hidden={activeTabId !== i}>
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
              ))}
          </div>
        </div>        
      </section>
        );
    
}
