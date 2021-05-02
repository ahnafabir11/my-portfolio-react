import './TopNavBar.css';
import React, { useContext } from 'react';
import { TopNavActive } from '../../App';

const TopNavBar = () => {
  const [isNavActive, setIsNavActive] = useContext(TopNavActive);
  
  return (
    <div className="TopNavBar">
      <div className="line_container" onClick={()=> setIsNavActive(!isNavActive)}>
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
      </div>
    </div>
  );
};

export default TopNavBar;