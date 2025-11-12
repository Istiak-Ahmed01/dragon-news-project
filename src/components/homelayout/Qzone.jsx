import React from 'react';
import swimmingImage from '../../assets/swimming.png'
import classImg from '../../assets/class.png'
import playImage from '../../assets/playground.png'
const Qzone = () => {
    return (
      <div className="bg-base-200">
        <h2 className="font-bold mb-5">Q-Zone</h2>
        <div className="space-y-5">
          <img src={swimmingImage} alt="" />
          <img src={classImg} alt="" />
          <img src={playImage} alt="" />
        </div>
      </div>
    );
};

export default Qzone;