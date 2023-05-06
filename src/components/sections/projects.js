import React from "react";




export class OtherProjects extends React.Component {
    render(){
        const projects = [
            {id: 1, title: 'Portfolio V1', desc: "This is the first version of my portfolio website that I made", src: "https://github.com/ericapayne/v1-Portfolio", langList: ['HTML', 'CSS','SCSS']},
            {id: 2, title: 'Magic: the Gathering Card Search', desc: "A JavaScript command line interface (CLI) program for searching Magic The Gathering Card Game card information", src: "https://github.com/ericapayne/Javascript-MTG-card-search", langList: ['JavaScript', 'Express', 'CORS']},
            {id: 3, title: 'Pomodoro Timer Mobile Application', desc: "My expo pomodoro break timer mobile application made using React Native and Expo", src: "https://github.com/ericapayne/Pomodoro-Timer", langList: ['React Native', ' JavaScript']},
            {id: 4, title: 'Saute : Recipe Mobile Application', desc: "A cooking and recipe mobile aplication", src: "https://github.com/ericapayne/saute-app", langList: ['React Native', 'JavaScript']},
            {id: 5, title: 'Quiz Mobile Application', desc: "This quiz app project was made using expo and React Native. It has 3 categories to choose from. There are 10 questions and a results page.", src: "https://github.com/ericapayne/Quiz-app", langList: ['React Native', 'JavaScript']}, 
            {id: 6, title: 'Build Your Own Adventure Game', desc: "A text-based Choose Your Own Adventure Game built in C#", src: "https://github.com/ericapayne/build-your-own-adventure-game", langList: ['C#']}
        ];

        const results = [];

        projects.forEach(project => {
            results.push(
                <li key={project.id} className="other-list-items">
                    <div className="project-inner">
                        <header>
                            <div className="project-top">
                                <div className="folder"><i className="fa-regular fa-folder-closed fa-2xl" style={{color: "#6474e5"}}></i></div>
                                <div className="project-links"><a href="{project.src}" rel="noopener noreferrer" target="_blank"><i className="fa-brands fa-github fa-lg"></i></a></div>
                            </div>
                            <h3 className="project-title"><a href={project.src} rel="noopener noreferrer" target="_blank">{project.title}</a></h3>
                            <div className="project-desc">
                                <p>{project.desc}</p>
                            </div>
                        </header>
                        <footer>
                            <ul className="project-tech-list">   
                                {project.langList.map((tech, i) => (
                                    <li key={i}>{tech}</li>  
                                ))}
                            </ul>
                        </footer>
                    </div>
                </li>
            )
        });

        return(           
            <section className="other-projects">             
                <h2>Other Projects of Mine</h2>
                    <a className="github-link" href="https://www.github.com/ericapayne" rel="noopener noreferrer" target="_blank">view my full github</a>
                    <ul className="project-grid" id="myprojects">
                        {results}                     
                    </ul>
            </section>
        );
    }
}

