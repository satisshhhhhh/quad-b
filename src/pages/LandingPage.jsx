import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="center-text">
        <h1>Welcome to QUAD-B Job Portal</h1>
        <div className="details">
          <p>
            QuadB Technologies, India's leading technology and marketing service
            provider, specializes in blockchain development, app development,
            financial investment, social media engagement, brand building, and
            film production.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
