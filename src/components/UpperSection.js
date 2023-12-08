import React, { useState } from 'react';
import Button from './Button';
import BgVideo from '../videos/backgroundVideo.mp4';

const Card = () => (
  <div className="card-overlay">
    <div className="card" style={{ backgroundColor: '#1e2a38', color: 'white' }}>
      <p>Be the difference you want to see in the world!</p>
    </div>
  </div>
);

const UpperSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverStart = () => {
    setIsHovered(true);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  return (
    <div className="upperSection-container">
      <video src={BgVideo} autoPlay loop muted />
      <div
        id="message-container"
        className="over-video"
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
        style={{ fontFamily: 'Arial, sans-serif', color: 'blue' }}
      >
      .
      </div>
      {isHovered && <Card />} {/* Render the Card component when isHovered is true */}
      <div className="upperSection-btns over-video">
        <Button
          className="frontPage_btns"
          buttonStyle="frontPage_btn--outline"
          buttonSize="frontPage_btn--large"
          path="register"
        >
          GET STARTED
        </Button>
        <Button
          className="frontPage_btns"
          buttonStyle="frontPage_btn--primary"
          buttonSize="frontPage_btn--large"
          path="login"
        >
          LOGIN
        </Button>
      </div>
    </div>
  );
};

export default UpperSection;
