import React, { useEffect } from "react";
import "./Home.css";
import graph from "../Assets/graph.jpg";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <img src={graph} className="back-graph" />

        <div className="Hero_info">
          <h1>Empowering Digital Transformations</h1>
          <p>
            Every business faces an urgent call to unlock the value of digital transformation.
            It’s now or never. But it’s also an opportunity to take your business forward.
            What will you do to make your organization fit for the digital future?
          </p>
          <button className="btn"><a href="" >Explore More..</a></button>
        </div>
      </div>
    </>
  );
};

export default Hero;
