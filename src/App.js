import {useState} from "react";
import './style/App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Projects from "./components/Projects";
import {projects} from "./data";

function App() {

  const [data, setData] = useState(projects);
  console.log(data)

  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Projects data={data}/>
      <Contact />
    </div>
  );
}

export default App;