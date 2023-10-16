import React, { useEffect, useRef } from "react";
import sr from "../../utils/sr";
import { srConfig } from "../../config";

export const Contact = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);
    
      
        return(
        <section id="contact" className="contact" ref={revealContainer} >
          <h3 className="num-header contact-head">Want to contact me?</h3>
        <h2 className="headers">Get In Touch</h2>
        <p>I am currently looking for a new opportunity to start my career and if you have any good opportunities, contact me and I'll get back to you!</p>
        <a className="email-link" href="mailto:ericapyn@gmail.com" aria-label="Email Link">Get in touch!</a>
      </section>
    )
    
}
