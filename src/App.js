import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import MainSection from './components/MainSection/MainSection';
import SideNavBar from './components/SideNavBar/SideNavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <SideNavBar/>
        <MainSection/>
      </Router>
    </div>
  );
}

export default App;