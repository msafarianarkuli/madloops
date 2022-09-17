import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import DashCourses from '../../../Core/services/Fake Service/DashCourses';
import PanelTable from './PanelTable';
import PanelHeader from './PanelHeader';
const MyCourses = () => {
  return (
    <div className="px-3 md:px-5">
      <PanelHeader />
      <PanelTable
        data={DashCourses}
        icon={<FaTrashAlt className="mx-auto" />}
      />
    </div>
  );
};

export default MyCourses;
