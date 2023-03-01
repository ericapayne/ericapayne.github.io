import React, { useState } from "react";
import brandpic from '../assets/imgs/brand.png';
import { CSSTransition } from "react-transition-group";
import { useScrollDirection } from "react-use-scroll-direction";
import { Menu } from "./Menu";


export class NavBar extends React.Component {
    
    render() {
        
        const sections = ['about', 'experience', 'projects', 'contact'];

        const navLinks = sections.map(section => {
            return (               
                
                    <li key={section.toString()}><a href={'#' + section}>{section}</a></li>
                                         
            )
        });
        

        return (
            
            
            <header className="nav-header">
        <nav className="nav">
            <div className="logo">
        <a className="" href="index.html"><img className="branding" src={brandpic} alt="branding" width="109.5px" height="36px"/>
      </a></div>
      <div className="nav-side">
        <ol>
        {navLinks}
        </ol>
        <div>
            <a className="resume-button" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1qybuxkkUHVvNWuqk202c3kINMb9hOidl/view?usp=sharing" role="button"> Resume</a>
          </div>
      </div>
      <Menu />
      </nav>
      </header>
      
        
        );
    }
}