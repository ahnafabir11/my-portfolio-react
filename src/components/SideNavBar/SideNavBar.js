import './SideNavBar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import ahnafAbirPhoto from '../../images/ahnaf-abir-photo.jpg';
import { useContext } from 'react';
import { TopNavActive } from '../../App';


const SideNavBar = () => {
  const [isNavActive, setIsNavActive] = useContext(TopNavActive);

  return (
    <section className="SideNavBar" style={isNavActive ? { left: '-100%' } : { left: '0%' }}>
      
      <div className="photo_name">
        <div className="photo_section">
          <img
            src={ahnafAbirPhoto}
            alt="ahnaf abir"
            className="sideNav_photo"
          />
        </div>
        <h4 className="text-white">Md. Ahnaf Abir</h4>
      </div>
      
      <div className="sideNav_links_container">
        <NavLink exact to="/" className="link_text" activeClassName="active_link_text" onClick={()=> setIsNavActive(!isNavActive)}>Home</NavLink>
        <NavLink exact to="/about" className="link_text" activeClassName="active_link_text" onClick={()=> setIsNavActive(!isNavActive)}>About Me</NavLink>
        <NavLink exact to="/skills" className="link_text" activeClassName="active_link_text" onClick={()=> setIsNavActive(!isNavActive)}>Skills</NavLink>
        <NavLink exact to="/projects" className="link_text" activeClassName="active_link_text" onClick={()=> setIsNavActive(!isNavActive)}>Projects</NavLink>
        <NavLink exact to="/blogs" className="link_text" activeClassName="active_link_text" onClick={()=> setIsNavActive(!isNavActive)}>Blogs</NavLink>
        <NavLink exact to="/contact" className="link_text" activeClassName="active_link_text" onClick={()=> setIsNavActive(!isNavActive)}>Contact Me</NavLink>
      </div>
      
      <div className="social_links">
        <a href="https://www.linkedin.com/in/ahnafabir11/" className="social_icons">
          <FaLinkedin />
        </a>
        <a href="https://github.com/ahnafabir11" className="social_icons">
          <FaGithubSquare />
        </a>
        <a href="https://twitter.com/ahnafabir11" className="social_icons">
          <FaTwitterSquare />
        </a>
        <a href="https://www.facebook.com/ahnafabir11" className="social_icons">
          <FaFacebookSquare />
        </a>
      </div>
    </section>
  );
};

export default SideNavBar;