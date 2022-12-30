// import logo from './logo.svg';
// import './App.css';
import '../src/styles/style.css';
import { NavBar } from './components/NavBar';
import { Social } from './components/social';
import { RightSide } from './components/rightside';
import { About } from './components/sections/about';
import { Opening } from './components/sections/opening';
import { Experience } from './components/sections/experience';
import { FeaturedProjects } from './components/sections/featuredproj';
import { OtherProjects } from './components/sections/projects';
import { Contact } from './components/sections/contact';



function App() {
  return (   
    
      <div className="main">
        
      <NavBar />
      <Social />
      <RightSide />
      <Opening />
      <About />
      <Experience />
      <FeaturedProjects />
      <OtherProjects />
      <Contact />
      
    </div>
    
    
    
    
  );
}

export default App;
