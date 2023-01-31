import React from "react";
import mypic from '../../assets/imgs/me.png' 

export class About extends React.Component {
    render() {
        return (
            
            <section className="about-me" id="about" style={{visibility: "visible",
              opacity: 1,
              transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", transition: "opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s"
             }}>
      <h2 className="num-header">A little about Me</h2>
      <div className="inner">
        <div>
      <p style={{fontSize: 18}}>Hi! My name is Erica and I fell in love with coding back in 2004. I started my web development journey by learning HTML & CSS using just the application Notepad and ever since then, I have strived to learn more.</p>
      <p style={{fontSize: 18}}>I am also an artist that draws and crafts and that plays into my love of frontend and designing web pages.  I also run a small clothing business called <em>Nerdy Bit</em> with my partner where we put our designs on lots of different things.</p>
      
      
        <p>Some of what I can do:</p>
        <ul className="skills-list">
          <li className="skills-inline"><i className="fa-brands fa-html5 fa-xl"></i><p className="icon-text">HTML-5</p></li>
          <li className="skills-inline"><i className="fa-brands fa-css3-alt fa-xl"></i><p className="icon-text">CSS3</p></li>
          <li className="skills-inline"><i className="fa-brands fa-java fa-xl"></i><p className="icon-text">Java</p></li>
          <li className="skills-inline"><i className="fa-brands fa-js-square fa-xl"></i><p className="icon-text">JavaScript</p></li>
          <li className="skills-inline"><i className="fa-brands fa-react fa-xl"></i><p className="icon-text">React</p></li>
          <li className="skills-inline"><i className="fa-brands fa-python fa-xl"></i><p className="icon-text">python</p></li>
          <li className="skills-inline"><i className="fa-solid fa-database fa-xl"></i><p className="icon-text">SQL</p></li>
          <li className="skills-inline"><i className="fa-brands fa-sass fa-xl"></i><p className="icon-text">sass</p></li>
          <li className="skills-inline"><i className="fa-brands fa-node fa-xl"></i><p className="icon-text">node.js</p></li>
          <li className="skills-inline"><i className="fa-brands fa-npm fa-xl"></i><p className="icon-text">npm</p></li>
          <li className="skills-inline"><i className="fa-solid fa-mobile fa-xl"></i><p className="icon-text">React Native</p></li>
          <li className="skills-inline"><i className="fa-solid fa-palette fa-xl"></i><p className="icon-text">Adobe CC</p></li>
        </ul>
        <div>
        <p className="skills-text"><i className="fa-solid fa-terminal fa-lrg" ></i> Develop front end / User Interfaces for web and mobile applications</p>
        <p className="skills-text"><i className="fa-solid fa-terminal fa-lrg" ></i> Front end languages such as HTML, CSS, & JavaScript</p>
        <p className="skills-text"><i className="fa-solid fa-terminal fa-lrg" ></i> Back end programming languages like Java, Python, & SQL</p>
      </div>
    
      </div>
      <div className="mypic">
      <img width="440" height="475.2"  src={mypic}/>
      </div>
      </div>
    </section>
    
        );
    }
}