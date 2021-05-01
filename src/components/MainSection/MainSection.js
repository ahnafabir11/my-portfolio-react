import './MainSection.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';

const MainSection = () => {
  return (
    <div className="MainSection">
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/about">
          <AboutMe/>
        </Route>
        <Route exact path="/skills">
          <Skills/>
        </Route>
        <Route exact path="/projects">
          <Projects/>
        </Route>
        <Route exact path="/blogs">
          <Blogs/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
      </Switch>
    </div>
  );
};

export default MainSection;