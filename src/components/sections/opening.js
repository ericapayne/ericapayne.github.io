import React, {useState, useEffect} from "react";
import { navDelay, loaderDelay } from "../../utils";
import { CSSTransition, TransitionGroup } from "react-transition-group";



export const Opening = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      const timeout = setTimeout(() => setIsMounted(true), navDelay);
      return () => clearTimeout(timeout);
    }, []);
  

    const one = <h1 className="one" >Hi, my name is</h1>;

    const two = <h2 className="big-heading"> Erica Payne.</h2>;
    const sub = <h3 className="big-heading">I build apps for the web.</h3>

    const three = (<p>Welcome, I am a Software Engineer born and raised in Los Angeles. I have my Bachelors in Computer Science from California State University Los Angeles. I am passionate about <b> Web Development</b> and <b>Full Stack Development. </b>I am currently looking for my next opportunity in a company.</p>);

    const four = (
    <a className="linkedin-link" href="https://www.linkedin.com/in/erica-payne-d/" target="_blank" rel="noreferrer" aria-label="LinkedIn Link">Check out my LinkedIn!</a>);

    const items = [one, two, sub, three, four];
        
    return (
      <section className= "opening" >   
        <TransitionGroup>
          {isMounted && items.map((item, i) => (
            
            <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
              <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>

            </CSSTransition>
          ))}
        </TransitionGroup>
      </section>    
    );
    
}