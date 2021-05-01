import './Skills.css';
import React from 'react';
import ProgressBar from 'react-animated-progress-bar';

const Skills = () => {
  return (
    <div className="Skills">
      <div className="skills_container">
        <div className="single_skill">
          <ProgressBar
            trackWidth="13"
            percentage="90"
            fontColor="white"
            width="300px"
            height="100px"
            trackPathColor="black"
            hollowBackgroundColor="transparent"
            trackBorderColor="black"
            defColor={{
              fair: 'orange',
              good: 'orange',
              excellent: 'orange',
              poor: 'orange',
            }}
          />
          <h3 className="text-center">REACT JS</h3>
        </div>
        <div className="single_skill">
          <ProgressBar
            trackWidth="13"
            percentage="70"
            fontColor="white"
            width="300px"
            height="100px"
            trackPathColor="black"
            hollowBackgroundColor="transparent"
            trackBorderColor="black"
            defColor={{
              fair: 'orange',
              good: 'orange',
              excellent: 'orange',
              poor: 'orange',
            }}
          />
          <h3 className="text-center">NODE JS</h3>
        </div>
        <div className="single_skill">
          <ProgressBar
            trackWidth="13"
            percentage="60"
            fontColor="white"
            width="300px"
            height="100px"
            trackPathColor="black"
            hollowBackgroundColor="transparent"
            trackBorderColor="black"
            defColor={{
              fair: 'orange',
              good: 'orange',
              excellent: 'orange',
              poor: 'orange',
            }}
          />
          <h3 className="text-center">MONGO DB</h3>
        </div>
      </div>

      <div className="skills_container">
        <div className="single_skill">
          <ProgressBar
            trackWidth="13"
            percentage="55"
            fontColor="white"
            width="300px"
            height="100px"
            trackPathColor="black"
            hollowBackgroundColor="transparent"
            trackBorderColor="black"
            defColor={{
              fair: 'orange',
              good: 'orange',
              excellent: 'orange',
              poor: 'orange',
            }}
          />
          <h3 className="text-center">MONGOOSE</h3>
        </div>
        <div className="single_skill">
          <ProgressBar
            trackWidth="13"
            percentage="80"
            fontColor="white"
            width="300px"
            height="100px"
            trackPathColor="black"
            hollowBackgroundColor="transparent"
            trackBorderColor="black"
            defColor={{
              fair: 'orange',
              good: 'orange',
              excellent: 'orange',
              poor: 'orange',
            }}
          />
          <h3 className="text-center">GIT GITHUB</h3>
        </div>
        <div className="single_skill">
          <ProgressBar
            trackWidth="13"
            percentage="70"
            fontColor="white"
            width="300px"
            height="100px"
            trackPathColor="black"
            hollowBackgroundColor="transparent"
            trackBorderColor="black"
            defColor={{
              fair: 'orange',
              good: 'orange',
              excellent: 'orange',
              poor: 'orange',
            }}
          />
          <h3 className="text-center">EXPRESS JS</h3>
        </div>
      </div>


      <div className="skills_container">
        <div className="single_skill">
          <ProgressBar
            trackWidth="13"
            percentage="90"
            fontColor="white"
            width="300px"
            height="100px"
            trackPathColor="black"
            hollowBackgroundColor="transparent"
            trackBorderColor="black"
            defColor={{
              fair: 'orange',
              good: 'orange',
              excellent: 'orange',
              poor: 'orange',
            }}
          />
          <h3 className="text-center">HTML</h3>
        </div>
        <div className="single_skill">
          <ProgressBar
            trackWidth="13"
            percentage="90"
            fontColor="white"
            width="300px"
            height="100px"
            trackPathColor="black"
            hollowBackgroundColor="transparent"
            trackBorderColor="black"
            defColor={{
              fair: 'orange',
              good: 'orange',
              excellent: 'orange',
              poor: 'orange',
            }}
          />
          <h3 className="text-center">CSS</h3>
        </div>
        <div className="single_skill">
          <ProgressBar
            trackWidth="13"
            percentage="85"
            fontColor="white"
            width="300px"
            height="100px"
            trackPathColor="black"
            hollowBackgroundColor="transparent"
            trackBorderColor="black"
            defColor={{
              fair: 'orange',
              good: 'orange',
              excellent: 'orange',
              poor: 'orange',
            }}
          />
          <h3 className="text-center">JAVASCRIPT</h3>
        </div>
      </div>
    </div>
  );
};

export default Skills;