import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import MainSection from './components/MainSection/MainSection';
import SideNavBar from './components/SideNavBar/SideNavBar';
import TopNavBar from './components/TopNavBar/TopNavBar';
import { createContext, useState } from 'react';

export const TopNavActive = createContext();

function App() {
  const [isNavActive, setIsNavActive] = useState(false);
  
  return (
    <div className="App">
      <TopNavActive.Provider value={[isNavActive, setIsNavActive]}>
        <Router>
          <TopNavBar />
          <SideNavBar/>
          <MainSection/>
        </Router>
      </TopNavActive.Provider>
    </div>
  );
}

export default App;