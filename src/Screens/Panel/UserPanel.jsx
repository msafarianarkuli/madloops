import React from 'react';
import { Outlet } from 'react-router-dom';
import DashMenuItem from '../../Components/content/Panel/DashMenuItem';
import DashMenuData from '../../Core/services/Fake Service/DashMenuItems';
import Profile from '../../Components/content/Panel/Profile';
const UserPanel = () => {
  return (
    <>
      <div className="grid grid-cols-1 bg-white p-2  h-screen">
        <div className="grid grid-cols-6 gap-3 bg-[#D1C1F6] rounded-3xl">
          <div className="col-span-1 flex flex-col m-3 ml-0">
            <Profile />
            {DashMenuData.map((menu) => (
              <DashMenuItem key={menu.id} items={menu} />
            ))}
          </div>
          <div className="col-span-5 m-3 mr-0 mt-16 lg:mt-3 rounded-[41px] bg-white overflow-hidden sm:overflow-visible">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPanel;
