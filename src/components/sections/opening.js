import React, { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";



export const Opening = () => {
    // const [isMounted, setIsMounted] = useState(false);

    // useEffect(() => {
    //   const timeout = setTimeout(() => setIsMounted(true), 1000);
    //   return () => clearTimeout(timeout);
    // }, []);
  

    const one = <h2 style={{color: "#6474e5"}}><span className="wave">👋</span>Hi, my name is</h2>;

    const two = <h2 className="big-heading"> Erica Payne</h2>;

    const three = (<p className="lead">Welcome, I am a Software Engineer born and raised in Los Angeles. I have my Bachelors in Computer Science from California State University Los Angeles. I am passionate about <b> Web Development</b>, <b>App Development</b>, and <b>Full Stack Development.</b></p>);

    const four = (<div className="social-media">
    <a className="email-link" href="mailto:ericapyn@gmail.com">Contact Me</a></div>);

    const items = [one, two, three, four];
        
    return (
      <section className= "opening" >   
        <TransitionGroup>
          {items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={2000}>
              <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>

            </CSSTransition>
          ))}
        </TransitionGroup>
      </section>    
    );
    
}