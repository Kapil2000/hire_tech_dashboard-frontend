import React from "react";
import logo from "../images/notifications_active.png";

const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <h1>Dashboard</h1>
        <img src={logo} alt="logo"></img>
        <div className="btn">Create +</div>
      </div>
    </div>
  );
};

export default Home;
