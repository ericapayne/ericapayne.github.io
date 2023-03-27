import React from "react";
import { useState } from "react";

export const RightSide = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if(scrolled > 300) {
        setVisible(true);
      }
      else if(scrolled <= 300) {
        setVisible(false);
      }
    };

    
    window.addEventListener('scroll', toggleVisible);

    const toTop = () => window.scrollTo(
        {        
            top: 0, behavior: 'smooth'
        }
    );

    return (
      <div className="right-side">
        <button type="button" className="back-to-top" onClick={toTop} style={{display: visible ? 'inline' : 'none'}}>
          <i className="fas fa-hand-point-up fa-xl" ></i>
        </button>
      </div>
    );      
}
