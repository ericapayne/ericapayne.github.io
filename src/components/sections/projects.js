import React from "react";



export class OtherProjects extends React.Component {
    render(){
        const projects = [
            {id: 1, title: 'Portfolio V1', desc: "This is the first version of my portfolio website that I made", src: "https://github.com/erizilla/v1-Portfolio", langList: ['HTML', '  CSS','  SCSS']},
            {id: 2, title: 'Magic: the Gathering Card Search', desc: "A JavaScript command line interface (CLI) program for searching Magic The Gathering Card Game card information", src: "https://github.com/erizilla/Javascript-MTG-card-search", langList: ['JavaScript']},
            {id: 3, title: 'Pomodoro Timer Mobile Application', desc: "My expo pomodoro break timer mobile application made using React Native and Expo", src: "https://github.com/erizilla/Pomodoro-Timer", langList: ['React Native', ' JavaScript']},
            {id: 4, title: 'Saute : Recipe Mobile Application', desc: "A cooking and recipe mobile aplication", src: "https://github.com/erizilla/saute-app", langList: ['React Native', '  JavaScript']}
        ];
        const results = [];
        const languages = [];
        projects.forEach(project => {
            results.push(
                <li key={project.id} className="other-list-items" style={{transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s",
                    visibility: "visible",
                    opacity: "1",
                    transform:" matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}}>
                    <div className="project-inner">
                        <header>
                            <div className="project-top">
                                <div className="folder"><i className="fa-regular fa-folder fa-2xl" style={{color: "#6474e5"}}></i></div>
                                <div className="project-links"><a href="{project.src}"><i className="fa-brands fa-github fa-xl"></i></a></div>
                            </div>
                            <h3 className="project-title"><a href={project.src}>{project.title}</a></h3>
                            <div className="project-desc">
                                <p>{project.desc}</p>
                            </div>
                        </header>
                        <footer>
                            <ul className="project-tech-list">
                                {/* {project.langList.forEach((language, i) => {
                                    languages.push(
                                        <li key={i}>{language.name}</li>
                                    )
                                })} */}
                                <li>{project.langList}</li>
                            </ul>
                        </footer>
                    </div>
                </li>
            )
        });
        return(           
            <section className="other-projects">
                
                <h2>Other Projects of Mine</h2>
                
                    <ul className="project-grid" id="myprojects">
                        {results}
                       
                    </ul>
            </section>
        );
    }
}


// ReactDOM.render(<OtherProjects />, document.getElementById('myprojects'));
