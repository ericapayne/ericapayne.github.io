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
import { Certificates } from './components/sections/certificates';



function App() {
  return (   
    
      <div className="main">
        
      <NavBar />
      <Social />
      <RightSide />
      <div id='content'>
      <main className='fillHeight'>
      <Opening />
      <About />
      
      <Experience />
      <Certificates />
      <FeaturedProjects />
      <OtherProjects />
      <Contact />
      </main>
      </div>
    </div>
    
    
    
    
  );
}

export default App;
