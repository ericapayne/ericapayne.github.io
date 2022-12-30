import React, { useState } from "react";
import brandpic from '../assets/imgs/brand.png';
import { CSSTransition } from "react-transition-group";
import { useScrollDirection } from "react-use-scroll-direction";


export class NavBar extends React.Component {
    
    render() {
        const sections = ['about', 'experience', 'projects', 'contact'];

        const navLinks = sections.map(section => {
            return (               
                
                    <li key={section.toString()}><a href={'#' + section}>{section}</a></li>
                                         
            )
        });
        

        return (
            
            <div id="header">
            <header className="nav-header">
        <nav className="nav">
        <a className="" href="index.html"><img className="branding" src={brandpic} alt="branding" width="146.4px" height="48px"/>
      </a>
      <div className="nav-side">
        <ol>
        {navLinks}
        </ol>
        <div>
            <a className="resume-button" href="https://drive.google.com/file/d/1omzyn6Gc-KIsQJ2znEMA9FUpwlvwZnzL/view?usp=sharing" role="button"> Resume</a>
          </div>
      </div>
      
      </nav>
      </header>
        </div>
        );
    }
}