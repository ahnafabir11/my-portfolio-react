import './Home.css';
import React from 'react';
import Typical from 'react-typical'
import { Link } from 'react-router-dom';
import { BsCloudDownload } from 'react-icons/bs';

const steps = [
  ' AHNAF ABIR', 1000,
  ' WEB DEVELOPER', 1000,
  ' FRONTEND DEVELOPER', 1000,
  ' JAVASCRIPT DEVELOPER', 1000,
]

const Home = () => {
  return (
    <div className="Home">
      <h3 className="text-white">HI THERE !</h3>
      <h1 className="home_title_text">
        <span className="text-white">I'm </span>
        <Typical
          steps={steps}
          loop={Infinity}
          wrapper="span"
        />
      </h1>
      <p className="home_description">
        Hello, my name is Ahnaf Abir. I’m a web developer. I always use modern technology to develop websites. For the front-end I use React Js, Material UI, React-Bootstrap and for the back-end I use Node Js, Express Js, MongoDB. Currently, I’m leaning React Native to build Mobile Applications.
      </p>
      <div>
        <Link to="/about" className="cus_btn">MORE ABOUT ME</Link>
        <a href="/images/ahnaf-abir-photo.jpg" className="cus_btn" download>Resume <BsCloudDownload /></a>
      </div>
    </div>
  );
};

export default Home;