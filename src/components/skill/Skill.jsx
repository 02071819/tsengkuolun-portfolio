import React from "react";
import "./skill.css";
import HTML from "../../assets/html_icon.png";
import CSS from "../../assets/css_icon.png";
import JS from "../../assets/js_icon.png";
import REACT from "../../assets/react_icon.png";
import FIGMA from "../../assets/figma_icon.png";
import NODEJS from "../../assets/nodejs_icon.png";

const Skill = () => {
  return (
    <section id="skill">
      <h5>Get To Know</h5>
      <h2>My Skills</h2>

      <div className="container graphbox-container">
        <div className="graphbox">
          <img src={HTML} alt="" />
          <h3>HTML 5</h3>
        </div>

        <div className="graphbox">
          <img src={CSS} alt="" />
          <h3>CSS 3</h3>
        </div>

        <div className="graphbox">
          <img src={JS} alt="" />
          <h3>Javascript</h3>
        </div>

        <div className="graphbox">
          <img src={FIGMA} alt="" />
          <h3>Figma</h3>
        </div>

        <div className="graphbox">
          <img src={REACT} alt="" />
          <h3>React</h3>
        </div>

        <div className="graphbox">
          <img src={NODEJS} alt="" />
          <h3>NodeJS</h3>
        </div>
      </div>

      <div className="container box-container">
        <div className="box">
          <div className="progress">
            <h3>
              Web Design<span>90%</span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
              App Design<span>90%</span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
              photoshop<span>80%</span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
              php<span>75%</span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
        </div>
        
        <div className="box">
          <div className="progress">
            <h3>
              nodeJS<span>60%</span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
              python<span>65%</span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
              MySQL<span>80%</span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
              MongoDB<span>60%</span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
