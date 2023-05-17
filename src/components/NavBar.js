import React, { useEffect, useState } from "react";
import brandpic from '../assets/imgs/brand.png';
import { CSSTransition } from "react-transition-group";
import { useScrollDirection } from "react-use-scroll-direction";
import { Menu } from "./Menu";


export const NavBar = ({ isHome }) => {
        // const [isMounted, setIsMounted] = useState(!isHome);

        // useEffect(() => {
        //     const timeout = setTimeout(() => {
        //         setIsMounted(true);
        //     }, 100);

        //     return () => {
        //         clearTimeout(timeout);
        //     }
        // }, []);

        // const timeout = isHome ? 2000 : 0;
        // const fadeClass = isHome ? 'fade' : '';
        // const fadeDownClass = isHome ? 'fadedown' : '';
        
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
          <a className="" href="index.html"><img className="branding" src={brandpic} alt="branding image" width="109.5px" height="36px"/>
          </a>
        </div>
        <div className="nav-side">
          <ol>
            {navLinks}
          </ol>
          <div>
              <a className="resume-button" aria-label="resume button" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/13vDipqMVL3lpMinsTDjtGTpQl2t4T9eR/view?usp=sharing" role="button"> Resume</a>
          </div>
        </div>
        <Menu />
      </nav>
    </header>        
  );    
}