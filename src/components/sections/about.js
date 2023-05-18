import React from "react";
import headshot from '../../assets/imgs/headshot.jpg'; 

export const About = () => {

  const skills = ['HTML/CSS', 'Sass/SCSS', 'Java', 'JavaScript', 'React','Python', 'React Native', 'SQL', 'Adobe CC', 'C#', 'Figma', 'Databases'];
    
    return (
            
      <section className="about-me" id="about">
        <h2 className="num-header">A Little About Me</h2>
          <div className="inner">
            <div>
              <p>Hi! My name is Erica and I fell in love with coding back in 2004. I started my web development journey by learning <abbr title="Hypertext Markup Language">HTML</abbr> & <abbr title="Cascading Style Sheets">CSS</abbr> using just the application Notepad and ever since then, I have strived to learn more.</p>
              <p>I am also an artist that draws and crafts and that plays into my love of frontend and designing web pages.  I also run a small clothing business called <a className="inline-link" href="https://www.nerdybit.co" rel="noopener noreferrer" target="_blank" aria-label="Nerdy Bit Shop">Nerdy Bit</a> with my partner where we put our designs on lots of different things.</p>
      
      
              <p>Some of my skills:</p>
              <ul className="skills-list">
                {skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            <div>
              <p className="skills-text"><i className="fa-solid fa-terminal fa-lrg" ></i>&nbsp; Develop front end / User Interfaces for web and mobile applications</p>
              <p className="skills-text"><i className="fa-solid fa-terminal fa-lrg" ></i>&nbsp; Front end languages such as HTML, CSS, & JavaScript</p>
              <p className="skills-text"><i className="fa-solid fa-terminal fa-lrg" ></i>&nbsp; Back end programming languages like Java, Python, & SQL</p>
            </div>
    
            </div>
            <div className="mypic">
              <img className="mypic" width="350" height="385.2"  src={headshot} alt="Headshot of me"/>
            </div>
          </div>
      </section>
    
        );
    
}