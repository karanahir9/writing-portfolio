import React from 'react';
import {Link} from "react-router-dom";
import "./home.styles.css";

const Home = () => {
    return(
        <div className="home">
          <div className="introduction">
              <h1>Hi! I'm Gauri Kumbhar! </h1>
              <h3>Content Creator</h3>
          </div>
          <div className="about-me">
           <p>An engineer with a pen who loves writing, creating, visualizing. Hit the button and checkout my work.</p>
          </div>
          <div className="about-link">
          <Link style={{textDecoration:"none",fontSize:"20px" , color:"rgb(250, 171, 44)"}} to="/portfolio">View My Work</Link>
          </div>
        </div>
    );
}

export default Home;