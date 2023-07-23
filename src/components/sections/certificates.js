import React from "react";
import certificates from "../../data/certificateData";

export class Certificates extends React.Component {
    render() {
        const certData = [];
        return (
            <section className="certificates" id="certif">
                <h2 >Certifications</h2>
                <ul className="cert-grid">
                    {certificates.forEach(cert => {
                        certData.push(
                            <li key={cert.id} className="cert-list-items">
                                <div className="cert-inner">
                                    <header>
                                        <div className="cert-top">
                                            <div style={{marginRight: '5px', verticalAlign: 'middle'}}><i className="fa-solid fa-code"></i></div>
                                        
                                            <h4 className="cert-title">{cert.src.map((urls,i) => (
                                                <a key={i} className="cert-links" href={urls.url} aria-label={urls.label} rel="noopener noreferrer" target="_blank">{cert.title}</a>
                                            ))}</h4>
                                        </div>
                                        
                                        
                                    </header>
                                    <div className="cert-desc">
                                            <p>{cert.org}</p>
                                            <p>{cert.date}</p>

                                        </div>
                                    <footer>
                                        <ul className="cert-skill-list">
                                            {cert.skills.map((skill, i) => (
                                                <li key={i}>{skill}</li>
                                            ))}
                                        </ul>
                                    </footer>
                                </div>
                            </li>
                        )
                    })}
                {/* {certificates.map((data, i) => {
                    <li key={i}>{data.title}</li>
                })} */}
                {certData}
                </ul>
                
            </section>
        )
    }
}