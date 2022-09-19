import React from 'react';

const LandingTitle = ({ title, children, className }) => {
  return (
    <div className={`text-center ${className}`}>
      <h5 className="text-3xl font-black">{title}</h5>
      <p className="text-gray-500">{children}</p>
    </div>
  );
};

export default LandingTitle;
