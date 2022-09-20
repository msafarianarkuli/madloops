import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
  DashMenuItemSm,
  DashMenuItemLg,
} from '../../Components/content/Panel/DashMenuItem';
import Profile from '../../Components/content/Panel/Profile';
import DashMenuData from '../../Core/services/Fake Service/DashMenuItems';

const UserPanel = () => {
  const [menuItems] = useState(DashMenuData);
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 bg-white w-full h-screen">
          <div className="bg-lite-violet">
            {/*start: this section will hide in medium size */}
            <div className="flex items-center mt-2 mx-2 lg:hidden">
              <Profile />
              <div className="mr-2">
                {menuItems.map((menu) => (
                  <DashMenuItemSm key={menu.id} items={menu} />
                ))}
              </div>
            </div>
            {/* end: */}
            <div className="grid grid-cols-6 gap-3 bg-lite-violet rounded-2xl h-full">
              {/* start: this section will show in medium size */}
              <div className="hidden lg:col-span-1 lg:flex flex-col m-3 ml-0">
                <Profile />
                {menuItems.map((menu) => (
                  <DashMenuItemLg key={menu.id} items={menu} />
                ))}
              </div>
              {/* end: */}
              <div className="col-span-6 lg:col-span-5 m-3 lg:mr-0 lg:mt-3 rounded-2xl bg-white overflow-hidden sm:overflow-visible">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPanel;
