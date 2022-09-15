import React from 'react';
import userImg from '../../../Assets/aghil.jpg';
const Profile = () => {
  return (
    <>
      <div className="rounded-3xl bg-white overflow-hidden custom-shadow hidden xl:block">
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

      <div className="flex xl:hidden">
        <img
          src={userImg}
          className="w-10 h-10 sm:w-16 sm:h-16 rounded-full ml-2"
        />
        <div>
          <p className="text-gray-700">میکائیل</p>
          <p className="text-sm text-gray-400">
            <bdi>@Michael</bdi>
          </p>
        </div>
      </div>
    </>
  );
};

export default Profile;
