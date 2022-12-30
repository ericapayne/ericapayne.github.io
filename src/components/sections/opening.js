import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";



export class Opening extends React.Component {
  //  constructor(props) {
  //   super(props);
  //   this.state = {
  //     isMounted: 'false'
  //   };
  //  }
  render() {
      
      
      

      const one = <h2 style={{color: "#6474e5"}}><span className="wave">👋</span>Hi, my name is</h2>;
      const two = <h2 className="big-heading"> Erica Payne</h2>;
      const three = (<p className="lead">Welcome, I am a Software Engineer born and raised in Los Angeles. I have my Bachelors in Computer Science from California State University Los Angeles. I am passionate about 
      <b> Web Development</b>, <b>App Development</b>, and <b>Full Stack Development.</b></p>);
      const four = (<div className="social-media">
      <a href="https://github.com/erizilla"><i className="fa-brands fa-github" ></i></a>
      <a href="https://www.linkedin.com/in/erica-payne-553b331b5/"><i className="fa-brands fa-linkedin-in"></i></a>
      <a href="mailto:ericapyn@gmail.com"><i className="fa-regular fa-envelope"></i></a>
    </div>);
    const items = [one, two, three, four];
        
        return (
            <section className= "opening" >
      
          
              <TransitionGroup >
                { items.map((item, i) => (
                  <CSSTransition key={i} classNames="fade" timeout={2000}>
                    <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>

                  </CSSTransition>
                ))}
              </TransitionGroup>
            
        {/* <h2><span className="wave">👋</span>Hi, my name is</h2> <h2 className="big-heading"> Erica Payne</h2>
        <p className="lead">Welcome, I am a Software Engineer born and raised in Los Angeles. I have my Bachelors in Computer Science from California State University Los Angeles. I am passionate about 
          <b> Web Development</b>, <b>App Development</b>, and <b>Full Stack Development.</b></p>
        <div className="social-media">
          <a href="https://github.com/erizilla"><i className="fa-brands fa-github" ></i></a>
          <a href="https://www.linkedin.com/in/erica-payne-553b331b5/"><i className="fa-brands fa-linkedin-in"></i></a>
          <a href="mailto:ericapyn@gmail.com"><i className="fa-regular fa-envelope"></i></a>
        </div> */}

      </section>
    
        );
    }
}