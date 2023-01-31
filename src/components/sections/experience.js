import React from "react";

export class Experience extends React.Component {
    render() {
        window.addEventListener("DOMContentLoaded", () => {
            console.log("DOM loaded");
            const tabs = document.querySelectorAll('[role="tab"]');
            const tabList = document.querySelector('[role="tablist"]');
          
            // Add a click event handler to each tab
            tabs.forEach((tab) => {
              tab.addEventListener("click", changeTabs);
            });
          });
          function changeTabs(e) {
            const target = e.target;
            const parent = target.parentNode; // button
            const grandparent = parent.parentNode; // tabs
            const ggrandparent = grandparent.parentNode;
            console.log(target);
            console.log(parent);
            console.log(grandparent);
            console.log(grandparent.parentNode);
            console.log(grandparent.parentNode
                .querySelector(`#${target.getAttribute("aria-controls")}`));
          
            // Remove all current selected tabs
            parent
              .querySelectorAll('[aria-selected="true"]')
              .forEach((t) => t.setAttribute("aria-selected", false));
          
            // Set this tab as selected
            target.setAttribute("aria-selected", true);
          
            // Hide all tab panels
            grandparent
              .querySelectorAll('[role="tabpanel"]')
              .forEach((p) => p.setAttribute("hidden", true));
          
            // Show the selected panel , this is grabbing inner
            grandparent.parentNode
              .querySelector(`#${target.getAttribute("aria-controls")}`)
              .removeAttribute("hidden");
          }
        
        return (
            <section className="work" id="experience" data-sr-id="2">
        <h2 className="num-header">Work Experience</h2>
        <div className="inner">
          <div role="tablist" aria-label="Job tabs" className="tabs">
            <button className="tabs-button" role="tab" aria-selected="true" aria-controls="panel-0" id="tab-0" tabIndex="0"><span>Cal State LA</span></button>
            <button className="tabs-button" role="tab" aria-selected="false" aria-controls="panel-1" id="tab-1" tabIndex="-1">Cal State LA</button>
            <button className="tabs-button" role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2" tabIndex="-1">Star Education</button>
            <div className="job-scroll"></div>
          </div>
          <div className="panels">
            <div className="all-panels" id="panel-0" role="tabpanel" tabIndex="0" aria-labelledby="tab-0">
              
              <h3>
                <span>Lead Lab Consultant </span>
                <span className="company">@ <a className="inline-link" href="#">Cal State LA</a></span>
              </h3>
              <p className="range">September 2021 - May 2022</p>
              <div>
                <ul>
                  <li>Ensure that all lab consultants follow university, ITS and Open Access Lab guidelines</li>
                  <li>Troubleshoot hardware, software, desktop and network issues</li>
                  <li>Help clear outstanding trouble tickets</li>
                </ul>
              </div>
            </div>
            <div className="all-panels" id="panel-1" role="tabpanel" tabIndex="0" aria-labelledby="tab-1" hidden>
              
              <h3>
                <span>Assistant Lab Consultant </span>
                <span className="company">@ <a className="inline-link" href="#">Cal State LA</a></span>
              </h3>
              <p className="range">September 2017 - April 2019</p>
              <div>
                <ul>
                  <li>Assist students in the Open Access Lab with things like wireless printing, help with programs and copying</li>
                  <li>Troubleshoot hardware, software, desktop and network issues</li>
                  <li>Regulate computer access when the labs are full using a waitlist</li>
                </ul>
              </div>
            </div>
            <div className="all-panels" id="panel-2" role="tabpanel" tabIndex="0" aria-labelledby="tab-2" hidden>
              
              <h3>
                <span>Technology & Games Teacher </span>
                <span className="company">@ Star Education</span>
              </h3>
              <p className="range">March 2015 - June 2016</p>
              <div>
                <ul>
                  <li>Taught elementary school children grades K-5th different ways to interact with technology and proper computer skills through the use of games, coding, and other methods</li>
                  <li>Taught them coding by using Kano Computer Raspberry Pi Kits</li>
                  <li>Kept track of and did troubleshooting on equipment including: laptops, routers and peripherals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
        );
    }
}