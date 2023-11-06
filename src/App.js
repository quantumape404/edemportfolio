
import './App.css';
import Navbar from './Components/Navbar';
import BorderDesignLeft from './Components/BorderDesignLeft';
import WelcomeMessage from './Components/WelcomeMessage';
import Projects from './Components/Projects';
import Skills from './Components/Skills'
import BorderDesignRight from './Components/BorderDesignRight';

function App() {
  return (
    <div className="App">
      <BorderDesignLeft />
      <div>
         <Navbar />
      </div>

      <WelcomeMessage/>
      
      <Skills/>

      <Projects/>
      
      <BorderDesignRight />

    </div>
  );
}

export default App;
