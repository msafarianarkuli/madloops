import React from 'react';
import userImg from '../../../Assets/aghil.jpg';
const Profile = () => {
  return (
    <div className="rounded-3xl bg-white overflow-hidden custom-shadow">
      <img src={userImg} className="w-full h-36" />
      <div className="flex">
        <div className="w-1/2 text-center py-4">
          <p>میکائیل</p>
        </div>
        <div className="w-1/2 text-center py-4">
          <p>
            <bdi dir="ltr">@Michael</bdi>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
