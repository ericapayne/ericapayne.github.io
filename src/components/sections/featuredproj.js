import React from "react";
import bookex from '../../assets/imgs/home.JPG';
import movieapp from '../../assets/imgs/movieapp.jpg';
import game from '../../assets/imgs/gameproject.jpg';

export class FeaturedProjects extends React.Component {
    render() {
        return (
            <section id="projects"> 
        <h2 className="num-header">Some Of My Projects</h2>

        <ul className="featured">
          <li className="featured-list">
            <div className="project-content">
              <div>
                <p className="project-overline">Featured Project</p>
                <h3 className="project-title"><a href="https://github.com/erizilla/Book-exchange">Book Exchange Website</a></h3>
                <div className="project-description"><p>A web application for a book exchange system. You have to be logged in to view books, post a book, create a wishlist and also add books to your cart.</p></div>
                <ul className="project-language-list">
                  <li>Django</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
                <div className="project-links"><i className="fa-brands fa-github"><a href="https://github.com/erizilla/Book-exchange"></a></i></div>
              </div>
            </div>
            <div className="project-image"><img src={bookex} style={{width: "600px"}}/></div>
          </li>
          <li className="featured-list">
            <div className="project-content">
              <div>
                <p className="project-overline">Featured Project</p>
                <h3 className="project-title"><a href="https://github.com/erizilla/Movie-Search-App">Movie Search Mobile App</a></h3>
                <div className="project-description"><p>A mobile application where you can search a keyword in a movie title, see the search results and then see more details about the selected movie.</p></div>
                <ul className="project-language-list">
                  <li>React Native</li>
                  <li>Expo</li>
                  <li>npm</li>
                  <li>Movie database API</li>
                </ul>
                <div className="project-links"><a href="https://github.com/erizilla/Movie-Search-App"><i className="fa-brands fa-github"></i></a></div>
              </div>
            </div>
            <div className="project-image"><img src={movieapp} style={{width: "600px"}}/></div>
          </li>
          <li className="featured-list">
            <div className="project-content">
              <div>
                <p className="project-overline">Featured Project</p>
                <h3 className="project-title"><a href="https://github.com/erizilla/Alpaca-My-Bags-Unity-Game">Unity Engine Game</a></h3>
                <div className="project-description"><p>A 3D open adventure game about an alpaca lost from home and trying to make it back through various levels and collection of items.</p></div>
                <ul className="project-language-list">
                  <li>C#</li>
                  <li>Unity</li>
                </ul>
                <div className="project-links"><i className="fa-brands fa-github"><a href="https://github.com/erizilla/Alpaca-My-Bags-Unity-Game"></a></i></div>
              </div>
            </div>
            <div className="project-image"><img src={game} style={{width: "600px"}}/></div>
          </li>
          
        </ul>
        
      </section>
        );
    }
}