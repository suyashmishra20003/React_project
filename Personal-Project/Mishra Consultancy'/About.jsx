import React from "react";
import process_image from "./image/process_image.jpg";
import { NavLink } from "react-router-dom";
import process_video from "./image/process_video.mp4";
import "./App.css";
const About = () => {
  return (
    <div className="main_div">
      <section className="about_header_section">
        <div className="about_header_content">
          <h1>Power your Dreams</h1>
          <h3>Helping candidates to start or transition their career</h3>
          <br />

          <NavLink className=" about_header_link" to="/service">
            Let's talk
          </NavLink>
        </div>
        <img
          className="about_header_image"
          src={process_image}
          alt="process_image"
        />
      </section>
      <section className="intro_section">
        <h1>Who We Are</h1>
        <p>
          We are a leading job consultancy, having a wide range of career
          experts under the same roof. You would be surprised to meet our
          enthusiastic team of Software, Finance and Core Experts.
          <br />
          <br />
          Our mission is to help you to start your career with premium
          Corporates.
          <br />
          <br />
          We are designers, engineers, Consultants, analysts, entrepreneurs,
          testers, Core experts, Finance specialists, automation freaks & smart
          workers who have helped thousands of candidates to start their career.
          <br />
          <br />
          We know how to build successful career decisions and welcome startup
          minds to discuss their career stability & scalability.
        </p>
      </section>
      <section className="expertise_section">
        <h1>
          Area of <br />
          <strong>Expertise</strong>
        </h1>
        <ul>
          <li>💻 Software</li>
          <li>🎰 Finance</li>
          <li>💺 Core</li>
          <li>🔎 Marketing </li>
          <li>💵Business Growth</li>
        </ul>
        <div className="expertise_section_buttons ">
          <NavLink className=" expertise_button" to="/">
            Know More
          </NavLink>
          <NavLink className=" expertise_button" to="/contact">
            Contact Us
          </NavLink>
        </div>
      </section>
      <section className="process_section">
        <div className="process_section_div">
          <h1>
            Process <strong>We Follow</strong>
          </h1>
          <p>
            To understand your requirements and to deliver you your dream job we
            follow a process that is not only transparent but most efficient
            too!
          </p>

          <p>
            Our updated experts allow us to evolve aand improve products at a
            faster pace.{" "}
          </p>

          <p>
            We utilize this speed and efficency to increase growth in your
            career
          </p>
        </div>
        <video type="video/mp4" muted autoPlay>
          <source src={process_video} />
        </video>
      </section>
    </div>
  );
};

export default About;
