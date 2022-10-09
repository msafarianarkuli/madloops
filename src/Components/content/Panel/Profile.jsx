import React from 'react';
import userImg from '../../../Assets/img/mic.jpg';
const Profile = () => {
  return (
    <>
      <div className="rounded-xl overflow-hidden hidden xl:block bg-white dark:bg-dark-secondary">
        <img
          src={userImg}
          className="w-full h-36 object-cover object-top"
        />
        <div className="flex my-1">
          <div className="w-1/2 text-center text-dark-purple font-bold py-4 border-l dark:text-dark-secondary-title">
            <p>میکائیل</p>
          </div>
          <div className="w-1/2 text-center text-gray-400 py-4">
            <p>
              <bdi dir="ltr">@Michael</bdi>
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center xl:hidden">
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
