import React from "react";
import logo1 from "../images/Submit_for_Approval.png";
import logo2 from "../images/Selective_Highlighting.png";
import logo3 from "../images/Send_Job_List.png";
import logo4 from "../images/Pass.png";
import logo5 from "../images/Profile.png";
import { NavLink } from "react-router-dom";

const Resourcehirecucle = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "none",
      color: isActive ? "#27b357" : "black",
    };
  };

  return (
    <div className="resourcehirecycle">
      <div className="flow">
        <div className="circle">1</div>
        <div className="horizontal"></div>
        <div className="circle">2</div>
        <div className="horizontal"></div>
        <div className="circle">3</div>
        <div className="horizontal"></div>
        <div className="circle">4</div>
        <div className="horizontal"></div>
        <div className="circle">5</div>
      </div>
      <div className="container">
        <div className="steps">
          <img src={logo1} alt="logo"></img>
          <p>Requirement Submitted</p>
        </div>

        <div className="steps">
          <img src={logo2} alt="logo"></img>
          <p>Requirement Review By Zestire</p>
        </div>

        <div className="steps">
          <img src={logo3} alt="logo"></img>
          <p>Hiring Process & Interview Started</p>
        </div>

        <div className="steps">
          <img src={logo4} alt="logo"></img>
          <p>Interview Process Completed</p>
        </div>
        <NavLink style={navLinkStyle} to="/candidate-shortlisted">
          <div className="steps">
            <img src={logo5} alt="logo"></img>
            <p>Candidate Shortlisted</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Resourcehirecucle;
