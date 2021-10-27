
import './style/App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Projects from "./components/Projects";
import Technologies from './components/Technologies';

function App() {


  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Technologies />
      <Contact />
    </div>
  );
}

export default App;