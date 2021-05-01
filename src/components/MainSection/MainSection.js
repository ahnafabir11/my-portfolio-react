import './MainSection.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import AboutMe from '../AboutMe/AboutMe';

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
          <h1>Skills</h1>
        </Route>
        <Route exact path="/projects">
          <h1>Projects</h1>
        </Route>
        <Route exact path="/blogs">
          <h1>Blogs</h1>
        </Route>
        <Route exact path="/contact">
          <h1>Contact Me</h1>
        </Route>
      </Switch>
    </div>
  );
};

export default MainSection;