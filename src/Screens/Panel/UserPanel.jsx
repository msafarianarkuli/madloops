import React from 'react';
import { Outlet } from 'react-router-dom';
import DashMenuItem from '../../Components/content/Panel/DashMenuItem';
import DashMenuData from '../../Core/services/Fake Service/DashMenuItems';
import Profile from '../../Components/content/Panel/Profile';
const UserPanel = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-6 gap-4 py-4">
        <div className="col-span-1 pr-4">
          <Profile />
          {DashMenuData.map((menu) => (
            <DashMenuItem key={menu.id} items={menu} />
          ))}
        </div>
        <div className="col-span-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
