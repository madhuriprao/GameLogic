import React, { useState } from "react";
import "./Home.css";
import exampleImage from "../assets/image.png"



const Home = () => {
  const [box1Color, setBox1Color] = useState("black");
  const [box3Color, setBox3Color] = useState("black");
  const [box4Color, setBox4Color] = useState("black");
  const [showImage, setShowImage] = useState(false);

 
  const handleBox1Click =()=> {
    setBox1Color("green");
  }
  const handleBox2Click = () => {
    setShowImage(true);
    
  };
  const handleBox3Click =()=> {
    setBox3Color("green");
  }
  const handleBox4Click =()=> {
    setBox4Color("green");
  }

  return (
    <div className="container">
       <div className="box" style={{ backgroundColor: box1Color }} onClick={handleBox1Click}>
        Box 1
      </div>
       <div className="box" onClick={handleBox2Click}>
        Box 2
      </div>
          {showImage && (
        <img src={exampleImage} alt="Example" />
      )}
      <div className="box" style={{ backgroundColor: box3Color }} onClick={handleBox3Click}>
        Box 3
      </div>
      <div className="box" style={{ backgroundColor: box4Color }} onClick={handleBox4Click}>
        Box 4
      </div>
       </div>
  );
};

export default Home;