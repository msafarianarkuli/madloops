import React from 'react';

const Location = ({ locationApi }) => {
  return (
    <div>
      <iframe
        src={locationApi}
        width="100%"
        height="600"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-3xl"
      ></iframe>
    </div>
  );
};

export default Location;
