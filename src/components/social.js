import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";

export class Social extends React.Component {
    render () {
        return (
            <div className="social-side" >
 
    <ul className="social-list">
      <li><a href="https://github.com/erizilla"><i className="fa-brands fa-github" ></i></a></li>
      <li><a href="https://www.linkedin.com/in/erica-payne-553b331b5/"><i className="fa-brands fa-linkedin-in"></i></a></li>
      <li><a href="mailto:ericapyn@gmail.com"><i className="fa-regular fa-envelope"></i></a></li>
    </ul>
  </div>
        );
    }
}