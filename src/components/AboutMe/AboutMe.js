import './AboutMe.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { BsCloudDownload } from 'react-icons/bs';

const AboutMe = () => {
  return (
    <div className="AboutMe">
      <div className="about_info_container">
        <div className="personal_info">
          <h3 className="mb-4">PERSONAL <span style={{color: 'orange'}}>INFOS</span></h3>
          <div className="info_details">
            <div className="mr-3">
              <p><span className="text-secondary">Full Name:</span> Md. Ahnaf Abir</p>
              <p><span className="text-secondary">Address:</span> Chattogram</p>
              <p><span className="text-secondary">Nationality:</span> Bangladeshi</p>
              <p><span className="text-secondary">Intern:</span> Not Yet</p>
              <p><span className="text-secondary">Remote Work:</span> Open To Work</p>
            </div>
            <div>
              <p><span className="text-secondary">Full Time Work:</span> Open To Work</p>
              <p><span className="text-secondary">Language:</span> Bangla, English, Hindi</p>
              <p><span className="text-secondary">Mobile:</span> +8801775390977</p>
              <p><span className="text-secondary">Mobile:</span> +8801533788303</p>
              <p><span className="text-secondary">Email:</span> ahnafabir313@gmail.com</p>
            </div>
          </div>
          <div>
            <Link to="/projects" className="cus_btn">Recent Projects</Link>
            <a href="/files/Ahnaf-Abir-Resume.pdf" className="cus_btn" download>Resume <BsCloudDownload /></a>
          </div>
        </div>
        <div className="work_experience">
          <h3 className="mb-4"><span style={{ color: 'orange' }}>WORK</span> EXPERIENCE</h3>
          <div className="experience_container">
            <div className="experience_box">
              <h1 className="exp_number">1<sup>+</sup></h1>
              <p className="pl-4 mb-0">Work <br/> Experience</p>
            </div>

            <div className="experience_box">
              <h1 className="exp_number">13<sup>+</sup></h1>
              <p className="pl-4 mb-0">Projects <br/> Completed</p>
            </div>

            <div className="experience_box">
              <h1 className="exp_number">2<sup>+</sup></h1>
              <p className="pl-4 mb-0">Projects <br/> On Going</p>
            </div>

            <div className="experience_box">
              <h1 className="exp_number">2<sup>+</sup></h1>
              <p className="pl-4 mb-0">Won <br/> Rewards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;