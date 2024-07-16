import React, { useEffect } from "react";
import { preLoaderAnim } from "./animations/anim";
import './pre-loader.css';


const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Data</span>
        <span>Visualization</span>
        <span>Dashboard</span>
      </div>
    </div>
  );
};

export default PreLoader;