import {useState, useEffect, useCallback} from "react";
import './style/App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Projects from "./components/Projects";
import Technologies from './components/Technologies';


function App() {

  const [nightMode, setNightMode] = useState(false);


 //Function that get night mode from locale storage
 const getNightMode = useCallback( () => {
  if(localStorage.getItem("portfolioNightMode") === null) {
    localStorage.setItem("portfolioNightMode", JSON.stringify({nightMode: false}));
  } else {
    const getNight = JSON.parse(localStorage.getItem("portfolioNightMode"));
    setNightMode(getNight.nightMode);
  }
}, [])
useEffect(() => {
  getNightMode();
}, [getNightMode])

//Function that save night mode to locale storage
const saveNightMode = useCallback( () => {
  localStorage.setItem("portfolioNightMode", JSON.stringify({nightMode: nightMode}));
}, [nightMode])

useEffect(() => {
  saveNightMode();
}, [saveNightMode])


  return (
    <div className={!nightMode ? "App" : "App night"}>
      <Header nightMode={nightMode} setNightMode={setNightMode}/>
      <About nightMode={nightMode}/>
      <Projects nightMode={nightMode}/>
      <Technologies nightMode={nightMode}/>
      <Contact nightMode={nightMode}/>
    </div>
  );
}

export default App;