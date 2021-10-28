
import './style/App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Projects from "./components/Projects";
import Technologies from './components/Technologies';


function App() {


  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Technologies />
      <Contact />
    </div>
  );
}

export default App;