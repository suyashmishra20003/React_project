import React from "react";
import home_image from "./image/career_launch.jpg";
import { NavLink } from "react-router-dom";
import "./App.css";
const Home = () => {
  return (
    <div className="home_div">
      <div className="home_haeding">
        <h1>
          Build Your <strong>Career</strong>
        </h1>
        <p>Start your career with the best Educators in India</p>
        <NavLink to="/service" className="home_btn">
          Get Started
        </NavLink>
      </div>
      <img className="home_image" src={home_image} alt="home_image" />
    </div>
  );
};

export default Home;
